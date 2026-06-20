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

// Runs before paint to resolve theme. By default it follows the system scheme;
// once the user toggles manually, that explicit choice is persisted.
const themeScript = `(function(){try{var k='theme-preference';var legacy=localStorage.getItem('theme');var saved=localStorage.getItem(k)||((legacy==='light'||legacy==='dark')?legacy:null);if(saved==='light'||saved==='dark'){document.documentElement.setAttribute('data-theme',saved);return;}var dark=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.setAttribute('data-theme',dark?'dark':'light');}catch(e){var dark=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.setAttribute('data-theme',dark?'dark':'light');}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jakarta.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans" suppressHydrationWarning>
        <SiteHeader />
        <div className="mx-auto w-[min(73.75rem,calc(100%-3rem))] pt-10 pb-8 max-sm:w-[min(100%-1.75rem,73.75rem)]">
          {children}
        </div>
        <SiteFooter />
      </body>
    </html>
  );
}
