import { Suspense } from 'react';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { SiteFooter, SiteHeader } from '@/components/layout';
import { ROUTES, SITE } from '@/constants';
import { getThemeInitScript } from '@/utils';
import { AnalyticsProvider, AnalyticsScriptTags } from './_providers/analytics-provider';
import { createRootJsonLd, rootMetadata } from './_utils/root-layout';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
});

export const metadata = rootMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = createRootJsonLd();

  return (
    <html lang="en" className={jakarta.variable} suppressHydrationWarning>
      <head>
        <link rel="alternate" type="application/llms.txt" href={ROUTES.llms} />
        <link
          rel="alternate"
          type="application/rss+xml"
          title={`${SITE.name} Blog Feed`}
          href={ROUTES.feed}
        />
        <script dangerouslySetInnerHTML={{ __html: getThemeInitScript() }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans" suppressHydrationWarning>
        <AnalyticsScriptTags />
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
