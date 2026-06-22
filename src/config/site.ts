import { CONTACTS } from './contacts';

// Single source of truth for SEO / metadata. Set NEXT_PUBLIC_SITE_URL in the
// deploy environment to the real production domain.
export const SITE = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://vladimirh.dev',
  name: 'Vladimir Hlobchastyi',
  role: 'Software Engineer',
  title: 'Vladimir Hlobchastyi — Software Engineer (React, Next.js, React Native)',
  description:
    'Software engineer building production web and mobile apps with React, Next.js, React Native and Ionic. Turnkey product development, AI project rescue, refactoring and ongoing support.',
  locale: 'en_US',
  sameAs: [CONTACTS.linkedin.href, CONTACTS.x.href, CONTACTS.telegram.href],
  keywords: [
    'Vladimir Hlobchastyi',
    'software engineer',
    'frontend engineer',
    'React developer',
    'Next.js developer',
    'React Native developer',
    'Ionic developer',
    'TypeScript',
    'web and mobile development',
    'AI project rescue',
    'freelance React developer',
    'hire React Native developer',
  ],
  knowsAbout: [
    'React',
    'Next.js',
    'React Native',
    'Ionic',
    'TypeScript',
    'Node.js',
    'GraphQL',
    'WebRTC',
    'WebSockets',
    'AI integration',
    'Frontend architecture',
  ],
} as const;
