import type { Metadata } from 'next';
import { SITE } from '@/constants';
import { RetroLinesPage } from './_components/retro-lines-page';

export const metadata: Metadata = {
  title: 'Retro Lines | Android Puzzle Game',
  description:
    'Retro Lines is a single-player Android puzzle game with offline play, score progression, rewarded ads, and local progress saving.',
  alternates: { canonical: '/apps/retro-lines' },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: `${SITE.url}/apps/retro-lines`,
    title: 'Retro Lines | Android Puzzle Game',
    description:
      'Retro Lines is a single-player Android puzzle game with offline play, score progression, rewarded ads, and local progress saving.',
    images: [{ url: '/og.webp', width: 1200, height: 630, alt: 'Retro Lines' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Retro Lines | Android Puzzle Game',
    description:
      'Retro Lines is a single-player Android puzzle game with offline play, score progression, rewarded ads, and local progress saving.',
    images: ['/og.webp'],
  },
};

export default function RetroLinesRoute() {
  return <RetroLinesPage />;
}
