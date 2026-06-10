import { NextRequest, NextResponse } from 'next/server';

const locales = ['zh', 'en'];

function getPreferredLocale(request: NextRequest): string {
  // 1. Check cookie (user's manual preference)
  const cookieLocale = request.cookies.get('locale')?.value;
  if (cookieLocale && locales.includes(cookieLocale)) {
    return cookieLocale;
  }

  // 2. Check Accept-Language header (browser language)
  const acceptLang = request.headers.get('Accept-Language');
  if (acceptLang) {
    const langs = acceptLang
      .split(',')
      .map((part) => {
        const [code, q] = part.trim().split(';q=');
        return { code: code.trim().toLowerCase(), q: q ? parseFloat(q) : 1 };
      })
      .sort((a, b) => b.q - a.q);

    for (const { code } of langs) {
      if (code.startsWith('zh')) return 'zh';
      if (code.startsWith('en')) return 'en';
    }
  }

  return 'zh';
}

function getLocaleFromPath(pathname: string): string | null {
  for (const locale of locales) {
    if (pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)) {
      return locale;
    }
  }
  return null;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const localeInPath = getLocaleFromPath(pathname);

  if (localeInPath) {
    // Path already has locale — pass through with x-locale header
    const headers = new Headers(request.headers);
    headers.set('x-locale', localeInPath);
    return NextResponse.next({ request: { headers } });
  }

  // No locale in path — redirect based on browser language
  const locale = getPreferredLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!_next|api|favicon\\.ico|.*\\..*).*)'],
};
