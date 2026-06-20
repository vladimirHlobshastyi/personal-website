'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '@/components/ui';
import { CONTACTS } from '@/config/contacts';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/contact', label: 'Contact' },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="border-line bg-bg/80 supports-[backdrop-filter]:bg-bg/65 sticky top-0 z-40 w-full border-b backdrop-blur-xl">
      <div className="mx-auto grid w-[min(73.75rem,calc(100%-3rem))] grid-cols-[1fr_auto_1fr] items-center gap-6 py-5 max-lg:grid-cols-[1fr_auto] max-sm:w-[min(100%-1.75rem,73.75rem)]">
        <Link href="/" className="group inline-flex items-center gap-2.5 justify-self-start">
          <span className="bg-accent inline-block h-1.5 w-1.5 rotate-45 transition-transform duration-300 group-hover:rotate-[135deg]" />
          <span className="text-[0.9375rem] font-bold tracking-[-0.02em]">
            Vladimir Hlobchastyi
          </span>
        </Link>

        <nav className="flex items-center gap-8 max-lg:order-3 max-lg:col-span-2 max-lg:justify-center max-sm:gap-6">
          {navItems.map((item) => {
            const isActive =
              item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`after:bg-accent relative py-1 text-sm font-medium transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-px after:transition-all after:duration-300 ${
                  isActive
                    ? 'text-fg after:w-full'
                    : 'text-fg/45 hover:text-fg after:w-0 hover:after:w-full'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center justify-end gap-5">
          <a
            href={CONTACTS.email.href}
            className="group hover:text-accent inline-flex items-center gap-2 text-sm font-semibold transition-colors max-lg:hidden"
          >
            <span className="bg-accent/60 group-hover:bg-accent h-1.5 w-1.5 rounded-full transition-colors" />
            {"Let's talk"}
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
