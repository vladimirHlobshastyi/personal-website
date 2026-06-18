import Link from 'next/link';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/contact', label: 'Contact' },
];

export function SiteHeader() {
  return (
    <header className="from-page/95 via-page/80 sticky top-0 z-40 mb-14 grid grid-cols-[1fr_auto_1fr] items-center gap-6 bg-gradient-to-b to-transparent pt-4 pb-8 backdrop-blur-xl max-lg:grid-cols-[1fr_auto] max-lg:pb-6">
      <Link href="/" className="text-base font-bold tracking-[-0.035em]">
        Vladimir Petrov
      </Link>

      <nav className="flex items-center gap-7 max-lg:order-3 max-lg:col-span-2 max-lg:justify-center max-sm:gap-5">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-ink/60 hover:text-ink text-sm font-semibold transition-colors"
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
