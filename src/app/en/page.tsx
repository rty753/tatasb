import type { Metadata } from 'next';
import PageContent from '../components/PageContent';

const baseUrl = 'https://tata.sb';

export const metadata: Metadata = {
  title:
    'Payment Gateway System for iGaming | White-Label Managed Solution - tata.sb',
  description:
    'Fully-managed, white-label payment gateway for iGaming operators and PSPs. Pre-integrated UPI, bKash, JazzCash, GCash across India, Pakistan, Bangladesh, Vietnam, Philippines. Your brand, your domain, 24/7 support.',
  robots: 'index, follow',
  alternates: {
    canonical: `${baseUrl}/en/`,
    languages: {
      'zh-CN': `${baseUrl}/`,
      en: `${baseUrl}/en/`,
      'x-default': `${baseUrl}/`,
    },
  },
  openGraph: {
    title: 'Payment Gateway System for iGaming | White-Label Managed Solution',
    description:
      'Fully-managed, white-label payment gateway for iGaming operators and PSPs across South & Southeast Asia.',
    url: `${baseUrl}/en/`,
    siteName: 'Payment Gateway System',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Payment Gateway System for iGaming | White-Label Managed Solution',
    description:
      'Fully-managed, white-label payment gateway for iGaming operators and PSPs across South & Southeast Asia.',
  },
};

export default function EnPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Payment Gateway System',
    url: baseUrl,
    description:
      'Fully-managed, white-label payment gateway for iGaming operators and payment service providers',
    areaServed: [
      'India',
      'Pakistan',
      'Bangladesh',
      'Vietnam',
      'Philippines',
      'Myanmar',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      availableLanguage: ['English', 'Chinese'],
      url: 'https://t.me/zfxt5',
    },
  };

  const webSiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Payment Gateway System',
    url: `${baseUrl}/en/`,
    inLanguage: 'en',
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
      <PageContent locale="en" />
    </>
  );
}
