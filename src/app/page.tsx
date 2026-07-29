import { ROUTES, SITE } from '@/constants';
import { AboutPreviewSection } from './_components/home/about-preview-section';
import { HeroSection } from './_components/home/hero-section';
import { MetricsSection } from './_components/home/metrics-section';
import { SelectedWorkSection } from './_components/home/selected-work-section';
import { ServicesSection } from './_components/home/services-section';

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
        significantLink: [
          `${SITE.url}${ROUTES.about}`,
          `${SITE.url}${ROUTES.work}`,
          `${SITE.url}${ROUTES.contact}`,
        ],
      },
      {
        '@type': 'ProfilePage',
        '@id': `${SITE.url}/#profile`,
        url: SITE.url,
        name: `${SITE.name} — Senior Software Engineer`,
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
