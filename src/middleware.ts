import { NextRequest, NextResponse } from 'next/server';

function isBot(ua: string): boolean {
  return /bot|crawl|spider|slurp|googlebot|bingbot|yandex|baidu|duckduck|facebookexternalhit|twitterbot/i.test(ua);
}

function prefersEnglish(request: NextRequest): boolean {
  // Cookie takes priority (manual user preference)
  const cookie = request.cookies.get('locale')?.value;
  if (cookie === 'zh') return false;
  if (cookie === 'en') return true;

  // Fall back to Accept-Language header
  const acceptLang = request.headers.get('Accept-Language');
  if (!acceptLang) return false;

  const langs = acceptLang
    .split(',')
    .map((part) => {
      const [code, q] = part.trim().split(';q=');
      return { code: code.trim().toLowerCase(), q: q ? parseFloat(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { code } of langs) {
    if (code.startsWith('zh')) return false;
    if (code.startsWith('en')) return true;
  }
  return false;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const ua = request.headers.get('user-agent') || '';

  // /zh or /zh/... → redirect to root (strip /zh prefix)
  if (pathname === '/zh' || pathname.startsWith('/zh/')) {
    const newPath = pathname.replace(/^\/zh\/?/, '/') || '/';
    return NextResponse.redirect(new URL(newPath, request.url));
  }

  // /en or /en/... → English page, pass through
  if (pathname === '/en' || pathname.startsWith('/en/')) {
    const headers = new Headers(request.headers);
    headers.set('x-locale', 'en');
    return NextResponse.next({ request: { headers } });
  }

  // Root and other paths → Chinese by default
  // But redirect English-preferring users (not bots) to /en/
  if (!isBot(ua) && prefersEnglish(request)) {
    const url = request.nextUrl.clone();
    url.pathname = `/en${pathname}`;
    return NextResponse.redirect(url);
  }

  const headers = new Headers(request.headers);
  headers.set('x-locale', 'zh');
  return NextResponse.next({ request: { headers } });
}

export const config = {
  matcher: ['/((?!_next|api|favicon\\.ico|.*\\..*).*)'],
};
