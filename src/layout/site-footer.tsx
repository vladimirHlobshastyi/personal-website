import Link from 'next/link';

const links = [
  { label: 'Email', href: 'mailto:vladimirp300@gmail.com', external: true },
  { label: 'LinkedIn', href: '#', external: false },
  { label: 'GitHub', href: '#', external: false },
];

export function SiteFooter() {
  return (
    <footer className="bg-inverse text-inverse-fg shadow-float mt-32 overflow-hidden p-14 max-sm:p-8">
      <div className="grid grid-cols-[1fr_auto] items-end gap-8 max-lg:grid-cols-1">
        <div>
          <p className="text-accent mb-4 inline-flex items-center gap-3 text-xs font-bold tracking-[.18em] uppercase before:block before:h-px before:w-10 before:bg-accent/50">
            Vladimir Hlobchastyi
          </p>
          <h2 className="tracking-tightest max-w-3xl text-[clamp(2.625rem,6.6vw,5.125rem)] leading-[.92] font-semibold">
            {"Let's build something clean and useful."}
          </h2>
          <p className="text-inverse-fg/60 mt-6 max-w-xl text-lg leading-8">
            Available for software engineering work: web platforms, mobile applications, dashboards,
            maps, complex forms and reusable product interfaces.
          </p>
        </div>

        <div className="flex flex-wrap justify-end gap-2 max-lg:justify-start">
          {links.map((link) =>
            link.external ? (
              <a
                key={link.label}
                className="text-inverse-fg/90 hover:border-accent hover:text-accent border border-white/12 px-5 py-3 text-sm font-bold transition-colors"
                href={link.href}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                className="text-inverse-fg/90 hover:border-accent hover:text-accent border border-white/12 px-5 py-3 text-sm font-bold transition-colors"
                href={link.href}
              >
                {link.label}
              </Link>
            ),
          )}
        </div>
      </div>

      <div className="text-inverse-fg/40 mt-16 flex items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs font-medium tracking-[.04em] max-sm:flex-col max-sm:items-start max-sm:gap-2">
        <span>© {new Date().getFullYear()} Vladimir Hlobchastyi</span>
        <span>Software Engineer · React · Next.js · React Native</span>
      </div>
    </footer>
  );
}
