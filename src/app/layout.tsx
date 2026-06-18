import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { SiteHeader, SiteFooter } from '@/layout';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
});

export const metadata: Metadata = {
  title: 'Vladimir Hlobchastyi — Software Engineer',
  description:
    'Software Engineer focused on React, Next.js, React Native, Ionic React and product-grade frontend architecture.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="font-sans">
        <div className="mx-auto w-[min(73.75rem,calc(100%-3rem))] py-8 max-sm:w-[min(100%-1.75rem,73.75rem)]">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
