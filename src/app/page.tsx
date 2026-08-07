import type { Metadata } from 'next';
import PageContent from './components/PageContent';

const baseUrl = 'https://tata.sb';

export const metadata: Metadata = {
  title: '塔塔支付系统 - tata.sb | 海外支付系统搭建出租 | 海外四方系统',
  description:
    '塔塔支付系统官方联系方式更新页面。提供海外支付系统搭建出租（印度、孟加拉、巴基斯坦、缅甸，UPI唤醒系统）与海外四方系统出租。严禁国内业务，专注海外市场。避免TG账号封禁，确保联系方式长期有效。',
  robots: 'index, follow',
  authors: [{ name: '塔塔支付科技' }],
  creator: '塔塔支付科技',
  publisher: '塔塔支付科技',
  alternates: {
    canonical: `${baseUrl}/`,
    languages: {
      'zh-CN': `${baseUrl}/`,
      en: `${baseUrl}/en/`,
      'x-default': `${baseUrl}/`,
    },
  },
  openGraph: {
    title: '塔塔支付系统 - tata.sb | 海外支付系统搭建出租',
    description:
      '塔塔支付系统官方联系方式更新页面。提供海外支付系统搭建出租与海外四方系统出租。严禁国内业务，专注海外市场。',
    url: `${baseUrl}/`,
    siteName: '塔塔支付系统',
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '塔塔支付系统 - tata.sb | 海外支付系统搭建出租',
    description:
      '塔塔支付系统官方联系方式更新页面。提供海外支付系统搭建出租与海外四方系统出租。',
  },
};

export default function ZhPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '塔塔支付系统',
    url: baseUrl,
    description: '专业的海外第三方支付通道系统解决方案提供商',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      availableLanguage: ['Chinese', 'English'],
      url: 'https://t.me/zfxt5',
    },
  };

  const webSiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: '塔塔支付系统',
    url: `${baseUrl}/`,
    inLanguage: 'zh-CN',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
      />
      <PageContent locale="zh" />
    </>
  );
}
