import Link from 'next/link';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/contact', label: 'Contact' },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 mb-lg grid grid-cols-[1fr_auto_1fr] items-center gap-md bg-gradient-to-b from-page/95 via-page/80 to-transparent pb-lg pt-sm backdrop-blur-xl max-lg:grid-cols-[1fr_auto] max-lg:pb-md">
      <Link href="/" className="text-base font-bold tracking-[-0.035em]">
        Vladimir Petrov
      </Link>

      <nav className="flex items-center gap-lg max-lg:order-3 max-lg:col-span-2 max-lg:justify-center max-sm:gap-md">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-sm font-semibold text-ink/60 transition-colors hover:text-ink"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <a
        href="mailto:vladimirp300@gmail.com"
        className="justify-self-end text-sm font-bold max-lg:hidden"
      >
        {"Let's talk"}
      </a>
    </header>
  );
}
