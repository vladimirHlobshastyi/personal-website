import { CONTACTS } from '@/constants';

const links = [
  { label: 'LinkedIn', href: CONTACTS.linkedin.href, external: true },
  { label: 'GitHub', href: CONTACTS.github.href, external: true },
  { label: 'Telegram', href: CONTACTS.telegram.href, external: true },
  { label: CONTACTS.resume.label, href: CONTACTS.resume.href, external: false, download: true },
];

export function SiteFooter() {
  return (
    <footer className="bg-inverse text-inverse-fg mt-[clamp(4.5rem,7vw,6rem)] w-full">
      <div className="mx-auto w-[min(73.75rem,calc(100%-3rem))] py-16 max-sm:w-[min(100%-1.75rem,73.75rem)] max-sm:py-12">
        <div className="grid grid-cols-[1fr_auto] items-end gap-10 max-lg:grid-cols-1">
          <div>
            <p className="text-accent before:bg-accent/50 mb-5 inline-flex items-center gap-3 text-xs font-bold tracking-[.18em] uppercase before:block before:h-px before:w-10">
              Get in touch
            </p>
            <h2 className="tracking-tightest max-w-3xl text-[clamp(2.5rem,6vw,4.5rem)] leading-[.95] font-semibold">
              Have a product to build? Let&apos;s talk.
            </h2>
            <p className="text-inverse-fg/60 mt-6 max-w-xl text-lg leading-8">
              Product engineering for teams that need to turn business logic into working web and
              mobile software.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-end gap-x-6 gap-y-3 max-lg:justify-start">
            <a
              className="bg-bg text-fg hover:bg-inverse hover:text-inverse-fg inline-flex items-center border border-white/15 px-6 py-4 text-sm font-bold transition-colors hover:border-white/30"
              href={CONTACTS.email.href}
              data-analytics-event="contact_click"
              data-analytics-label="footer_email"
            >
              Email me
            </a>
            {links.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  className="text-inverse-fg/70 hover:text-accent text-sm font-semibold transition-colors"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-analytics-event="contact_click"
                  data-analytics-label={`footer_${link.label.toLowerCase()}`}
                >
                  {link.label}
                </a>
              ) : (
                <a
                  key={link.label}
                  className="text-inverse-fg/70 hover:text-accent text-sm font-semibold transition-colors"
                  href={link.href}
                  download
                >
                  {link.label}
                </a>
              ),
            )}
          </div>
        </div>

        <div className="text-inverse-fg/40 mt-16 flex items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs font-medium tracking-[.04em] max-sm:flex-col max-sm:items-start max-sm:gap-2">
          <span>© {new Date().getFullYear()} Vladimir Hlobchastyi</span>
          <span>Senior Software Engineer · Web · Mobile · Product Engineering</span>
        </div>
      </div>
    </footer>
  );
}
