'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowIcon, Avatar, ThemeToggle } from '@/components/ui';
import { CONTACTS } from '@/config/contacts';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="border-line bg-bg/80 supports-[backdrop-filter]:bg-bg/65 sticky top-0 z-40 w-full border-b backdrop-blur-xl">
      <div className="mx-auto grid w-[min(73.75rem,calc(100%-3rem))] grid-cols-[1fr_auto_1fr] items-center gap-6 py-5 max-lg:grid-cols-[1fr_auto] max-sm:w-[min(100%-1.75rem,73.75rem)]">
        <Link
          href="/"
          aria-label="Vladimir Hlobchastyi — Home"
          className="group inline-flex items-center gap-3 justify-self-start"
        >
          <Avatar
            size={40}
            className="transition-transform duration-300 group-hover:-translate-y-0.5"
          />
          <span className="flex flex-col leading-none">
            <span className="text-[0.9375rem] font-bold tracking-[-0.02em]">
              Vladimir Hlobchastyi
            </span>
            <span className="text-quiet mt-1 text-[0.6875rem] font-semibold tracking-[.12em] uppercase">
              Software Engineer
            </span>
          </span>
        </Link>

        <nav className="flex items-center gap-8 max-lg:order-3 max-lg:col-span-2 max-lg:justify-center max-sm:gap-6">
          {navItems.map((item) => {
            const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);

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
            data-analytics-event="contact_click"
            data-analytics-label="header_email"
            className="group border-line bg-surface text-fg hover:border-accent hover:text-accent inline-flex items-center gap-2 border px-4 py-2 text-sm font-semibold transition-colors max-lg:hidden"
          >
            {"Let's talk"}
            <ArrowIcon className="h-3.5 w-3.5 -rotate-45 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
