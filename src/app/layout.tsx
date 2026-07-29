import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { AnalyticsProvider } from '@/components/analytics/analytics-provider';
import { AnalyticsScripts } from '@/components/analytics/analytics-scripts';
import { SiteHeader, SiteFooter } from '@/layout';
import { CONTACTS } from '@/config/contacts';
import { SERVICE_OFFERS } from '@/config/services';
import { SITE } from '@/config/site';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.title, template: '%s — Vladimir Hlobchastyi' },
  description: SITE.description,
  keywords: [...SITE.keywords],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  applicationName: `${SITE.name} — Portfolio`,
  alternates: { canonical: '/' },
  category: 'technology',
  openGraph: {
    type: 'profile',
    url: SITE.url,
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
    locale: SITE.locale,
    firstName: 'Vladimir',
    lastName: 'Hlobchastyi',
    username: 'Vladi_Dev_ua',
    images: [{ url: '/og.webp', width: 1200, height: 630, alt: `${SITE.name} — ${SITE.role}` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.title,
    description: SITE.description,
    images: ['/og.webp'],
    creator: '@Vladi_Dev_ua',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  verification: SITE.verification.google ? { google: SITE.verification.google } : undefined,
  other: SITE.verification.bing ? { 'msvalidate.01': SITE.verification.bing } : undefined,
};

// JSON-LD structured data helps search and AI engines understand who this is.
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE.url}/#person`,
      name: SITE.name,
      givenName: 'Vladimir',
      familyName: 'Hlobchastyi',
      jobTitle: 'Senior Software Engineer',
      description: SITE.description,
      url: SITE.url,
      image: `${SITE.url}/og.webp`,
      email: CONTACTS.email.value,
      sameAs: SITE.sameAs,
      knowsAbout: [...SITE.knowsAbout],
      knowsLanguage: ['en', 'uk', 'ru'],
      worksFor: { '@type': 'Organization', name: 'Independent / Freelance' },
      subjectOf: {
        '@type': 'CreativeWork',
        name: CONTACTS.resume.label,
        url: `${SITE.url}${CONTACTS.resume.href}`,
        encodingFormat: 'application/pdf',
      },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'business inquiries',
          email: CONTACTS.email.value,
          availableLanguage: ['en', 'uk', 'ru'],
        },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      description: SITE.description,
      inLanguage: 'en',
      publisher: { '@id': `${SITE.url}/#person` },
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE.url}/#professional-service`,
      name: `${SITE.name} — Software Engineering Services`,
      description: SITE.description,
      url: SITE.url,
      image: `${SITE.url}/og.webp`,
      provider: { '@id': `${SITE.url}/#person` },
      areaServed: [{ '@type': 'Place', name: 'Worldwide' }],
      availableLanguage: ['en', 'uk', 'ru'],
      serviceType: SERVICE_OFFERS.map((service) => service.title),
      sameAs: SITE.sameAs,
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Software engineering services',
        itemListElement: SERVICE_OFFERS.map((service) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service.title,
            description: service.text,
            areaServed: { '@type': 'Place', name: 'Worldwide' },
            provider: { '@id': `${SITE.url}/#person` },
          },
        })),
      },
    },
  ],
};

// Runs before paint to resolve theme. By default it follows the system scheme;
// once the user toggles manually, that explicit choice is persisted.
const themeScript = `(function(){try{var k='theme-preference';var legacy=localStorage.getItem('theme');var saved=localStorage.getItem(k)||((legacy==='light'||legacy==='dark')?legacy:null);if(saved==='light'||saved==='dark'){document.documentElement.setAttribute('data-theme',saved);return;}var dark=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.setAttribute('data-theme',dark?'dark':'light');}catch(e){var dark=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.setAttribute('data-theme',dark?'dark':'light');}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jakarta.variable} suppressHydrationWarning>
      <head>
        <link rel="alternate" type="application/llms.txt" href="/llms.txt" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title={`${SITE.name} Blog Feed`}
          href="/feed.xml"
        />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans" suppressHydrationWarning>
        <AnalyticsScripts />
        <Suspense fallback={null}>
          <AnalyticsProvider />
        </Suspense>
        <SiteHeader />
        <div className="mx-auto w-[min(73.75rem,calc(100%-3rem))] pt-10 pb-8 max-sm:w-[min(100%-1.75rem,73.75rem)]">
          {children}
        </div>
        <SiteFooter />
      </body>
    </html>
  );
}
