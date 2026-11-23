import { headers } from 'next/headers';
import { Geist, Geist_Mono, Noto_Sans_SC } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// Geist has no CJK glyphs; without this, Chinese falls back to whatever the OS ships
// (Microsoft YaHei on Windows). Self-hosted by next/font and loaded per unicode-range slice.
const notoSansSC = Noto_Sans_SC({
  variable: '--font-noto-sc',
  weight: 'variable',
  display: 'swap',
  preload: false,
});

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#04070d',
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const h = await headers();
  const locale = h.get('x-locale') || 'zh';
  const lang = locale === 'en' ? 'en' : 'zh-CN';

  return (
    <html lang={lang} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSansSC.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
