import type { Metadata } from 'next';
import PageContent from '../components/PageContent';

const baseUrl = 'https://tata.sb';

export const metadata: Metadata = {
  title:
    'Overseas Payment System Build & Rental | Fourth-Party Payment System - tata.sb',
  description:
    'Overseas payment system build & rental plus fourth-party (aggregation) payment system rental. Pre-integrated UPI intent (wake-up) collection, bKash, JazzCash across India, Bangladesh, Pakistan and Myanmar. 24/7 support.',
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
    title: 'Overseas Payment System Build & Rental | Fourth-Party Payment System',
    description:
      'Payment system build & rental and fourth-party aggregation system rental across India, Bangladesh, Pakistan and Myanmar.',
    url: `${baseUrl}/en/`,
    siteName: 'Payment Gateway System',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Overseas Payment System Build & Rental | Fourth-Party Payment System',
    description:
      'Payment system build & rental and fourth-party aggregation system rental across India, Bangladesh, Pakistan and Myanmar.',
  },
};

export default function EnPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Payment Gateway System',
    url: baseUrl,
    description:
      'Overseas payment system build & rental and fourth-party aggregation payment system rental',
    areaServed: ['India', 'Bangladesh', 'Pakistan', 'Myanmar'],
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
