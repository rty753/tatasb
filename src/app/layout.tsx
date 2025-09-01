import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "塔塔支付系统 - tata.sb | 第三方支付通道系统 | 海外跑分系统",
  description: "塔塔支付系统官方联系方式更新页面。提供第三方支付通道系统、海外跑分系统解决方案。严禁国内业务，专注海外市场。避免TG账号封禁，确保联系方式长期有效。",
  authors: [{ name: "塔塔支付科技" }],
  creator: "塔塔支付科技",
  publisher: "塔塔支付科技",
  robots: "index, follow",
  openGraph: {
    title: "塔塔支付系统 - tata.sb | 第三方支付通道系统",
    description: "塔塔支付系统官方联系方式更新页面。提供第三方支付通道系统、海外跑分系统解决方案。严禁国内业务，专注海外市场。",
    url: "https://tata.sb",
    siteName: "塔塔支付系统",
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "塔塔支付系统 - tata.sb | 第三方支付通道系统",
    description: "塔塔支付系统官方联系方式更新页面。提供第三方支付通道系统、海外跑分系统解决方案。",
  },
};

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#0f172a',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
