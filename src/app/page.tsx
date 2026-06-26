import { SITE } from '@/config/site';
import {
  AboutPreviewSection,
  HeroSection,
  MetricsSection,
  SelectedWorkSection,
  ServicesSection,
} from '@/features/home';

export default function HomePage() {
  const homePageLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'HomePage',
        '@id': `${SITE.url}/#home`,
        url: SITE.url,
        name: SITE.title,
        description: SITE.description,
        isPartOf: { '@id': `${SITE.url}/#website` },
        about: { '@id': `${SITE.url}/#person` },
        mainEntity: { '@id': `${SITE.url}/#person` },
        significantLink: [`${SITE.url}/about`, `${SITE.url}/work`, `${SITE.url}/contact`],
      },
      {
        '@type': 'ProfilePage',
        '@id': `${SITE.url}/#profile`,
        url: SITE.url,
        name: `${SITE.name} — Software Engineer`,
        inLanguage: 'en',
        isPartOf: { '@id': `${SITE.url}/#website` },
        mainEntity: { '@id': `${SITE.url}/#person` },
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageLd) }}
      />
      <HeroSection />
      <ServicesSection />
      <AboutPreviewSection />
      <SelectedWorkSection />
      <MetricsSection />
    </main>
  );
}
