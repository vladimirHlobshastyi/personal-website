import type { Metadata } from 'next';
import { SITE } from '@/config/site';
import { AboutPage } from '@/features/about';

export const metadata: Metadata = {
  title: 'About Vladimir Hlobchastyi',
  description:
    'About Vladimir Hlobchastyi, a Software Engineer specializing in frontend architecture, React, Next.js, TypeScript, React Native, product development and backend integration.',
  keywords: [
    'Software Engineer',
    'Frontend Engineer',
    'Frontend Developer',
    'React Developer',
    'Next.js Developer',
    'TypeScript Developer',
    'React Native Developer',
    'JavaScript Engineer',
    'Web Development',
    'Mobile Development',
    'Product Development',
    'UI Engineering',
    'Frontend Architecture',
  ],
  alternates: { canonical: '/about' },
  openGraph: {
    type: 'profile',
    url: `${SITE.url}/about`,
    title: 'About Vladimir Hlobchastyi',
    description:
      'Software Engineer focused on maintainable frontend systems, mobile delivery, backend integration and product engineering.',
    images: [{ url: '/og.webp', width: 1200, height: 630, alt: 'Vladimir Hlobchastyi — About' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Vladimir Hlobchastyi',
    description:
      'Software Engineer focused on React, Next.js, TypeScript, React Native and maintainable product systems.',
    images: ['/og.webp'],
  },
};

export default function AboutRoute() {
  return <AboutPage />;
}
