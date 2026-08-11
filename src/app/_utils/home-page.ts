import { ROUTES, SITE } from '@/constants';

export function createHomePageJsonLd() {
  return {
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
        name: `${SITE.name} — Senior Software Engineer (Product-Minded)`,
        inLanguage: 'en',
        isPartOf: { '@id': `${SITE.url}/#website` },
        mainEntity: { '@id': `${SITE.url}/#person` },
      },
    ],
  };
}
