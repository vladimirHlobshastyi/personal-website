import type { Metadata } from 'next';
import { SITE } from '@/constants';

export const aboutMetadata: Metadata = {
  title: 'About Vladimir Hlobchastyi',
  description:
    'About Vladimir Hlobchastyi, a Senior Software Engineer (Product-Minded) helping turn business rules into working web and mobile products.',
  keywords: [
    'Software Engineer',
    'Product-Minded Software Engineer',
    'Full-Stack Product Development',
    'React Developer',
    'Next.js Developer',
    'TypeScript Developer',
    'React Native Developer',
    'JavaScript Engineer',
    'Web Development',
    'Mobile Development',
    'Product Development',
    'Frontend Architecture',
  ],
  alternates: { canonical: '/about' },
  openGraph: {
    type: 'profile',
    url: `${SITE.url}/about`,
    title: 'About Vladimir Hlobchastyi',
    description:
      'Senior Software Engineer (Product-Minded) focused on business logic, product flows, web and mobile delivery, and frontend architecture.',
    images: [{ url: '/og.webp', width: 1200, height: 630, alt: 'Vladimir Hlobchastyi — About' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Vladimir Hlobchastyi',
    description:
      'Senior Software Engineer (Product-Minded) focused on React, Next.js, TypeScript, React Native, and working product systems.',
    images: ['/og.webp'],
  },
};

export function createAboutPageJsonLd() {
  const aboutUrl = `${SITE.url}/about`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        '@id': `${aboutUrl}#about`,
        url: aboutUrl,
        name: 'About Vladimir Hlobchastyi',
        description:
          'About Vladimir Hlobchastyi, a Senior Software Engineer (Product-Minded) helping turn business rules into working web and mobile products.',
        isPartOf: { '@id': `${SITE.url}/#website` },
        about: { '@id': `${SITE.url}/#person` },
        mainEntity: { '@id': `${SITE.url}/#person` },
      },
      {
        '@type': 'ProfilePage',
        '@id': `${aboutUrl}#profile`,
        url: aboutUrl,
        name: 'Vladimir Hlobchastyi',
        mainEntity: { '@id': `${SITE.url}/#person` },
        isPartOf: { '@id': `${SITE.url}/#website` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
          { '@type': 'ListItem', position: 2, name: 'About', item: aboutUrl },
        ],
      },
    ],
  };
}
