import { CONTACTS } from './contacts.constants';

// Single source of truth for SEO / metadata. Set NEXT_PUBLIC_SITE_URL in the
// deploy environment to the real production domain.
export const SITE = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://vladimirh.dev',
  name: 'Vladimir Hlobchastyi',
  role: 'Senior Software Engineer (Product-Minded) · React, Next.js, Node.js & React Native',
  title: 'Vladimir Hlobchastyi — Senior Software Engineer (Product-Minded)',
  description:
    'Senior Software Engineer (Product-Minded) helping turn business rules into working web and mobile products with React, Next.js, Node.js, React Native, and TypeScript. Strong in frontend architecture, product flows, integrations, and release work.',
  locale: 'en_US',
  sameAs: [CONTACTS.linkedin.href, CONTACTS.github.href, CONTACTS.x.href, CONTACTS.telegram.href],
  knowsAbout: [
    'Product engineering',
    'Frontend architecture',
    'React',
    'Next.js',
    'TypeScript',
    'React Native',
    'Ionic',
    'Node.js',
    'API integrations',
    'AI-assisted software development',
  ],
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    bing: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION,
  },
} as const;
