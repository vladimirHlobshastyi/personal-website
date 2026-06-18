'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/contact', label: 'Contact' },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 -mx-6 mb-14 grid grid-cols-[1fr_auto_1fr] items-center gap-6 bg-page/90 px-6 pt-5 pb-5 backdrop-blur-2xl max-lg:grid-cols-[1fr_auto] max-sm:-mx-4 max-sm:px-4">
      <Link href="/" className="text-[0.9375rem] font-bold tracking-[-0.02em]">
        Vladimir Hlobchastyi
      </Link>

      <nav className="flex items-center gap-7 max-lg:order-3 max-lg:col-span-2 max-lg:justify-center max-sm:gap-5">
        {navItems.map((item) => {
          const isActive =
            item.href === '/'
              ? pathname === '/'
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                isActive
                  ? 'text-ink'
                  : 'text-ink/40 hover:text-ink/70'
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <a
        href="mailto:vladimirp300@gmail.com"
        className="justify-self-end text-sm font-semibold transition-colors hover:text-accent max-lg:hidden"
      >
        {"Let's talk"}
      </a>
    </header>
  );
}
