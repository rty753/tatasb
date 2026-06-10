import type { Metadata } from 'next';
import { getDictionary } from '@/i18n/dictionaries';
import LanguageSwitcher from '../components/LanguageSwitcher';

export async function generateStaticParams() {
  return [{ locale: 'zh' }, { locale: 'en' }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const baseUrl = 'https://tata.sb';

  return {
    title: dict.metaTitle,
    description: dict.metaDesc,
    robots: 'index, follow',
    alternates: {
      canonical: `${baseUrl}/${locale}/`,
      languages: {
        'zh-CN': `${baseUrl}/zh/`,
        en: `${baseUrl}/en/`,
        'x-default': `${baseUrl}/zh/`,
      },
    },
    openGraph: {
      title: dict.metaTitle,
      description: dict.metaDesc,
      url: `${baseUrl}/${locale}/`,
      siteName: dict.metaSiteName,
      locale: dict.metaLocale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.metaTitle,
      description: dict.metaDesc,
    },
    ...(locale === 'zh'
      ? {
          authors: [{ name: '塔塔支付科技' }],
          creator: '塔塔支付科技',
          publisher: '塔塔支付科技',
        }
      : {}),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: dict.jsonLdName,
    url: 'https://tata.sb',
    description: dict.jsonLdDesc,
    ...(locale === 'en'
      ? {
          areaServed: [
            'India',
            'Pakistan',
            'Bangladesh',
            'Vietnam',
            'Philippines',
            'Myanmar',
          ],
        }
      : {}),
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
    name: dict.metaSiteName,
    url: `https://tata.sb/${locale}/`,
    inLanguage: locale === 'en' ? 'en' : 'zh-CN',
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
      <LanguageSwitcher locale={locale} />
      {children}
    </>
  );
}
