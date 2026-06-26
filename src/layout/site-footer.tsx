import Link from 'next/link';
import { CONTACTS } from '@/config/contacts';

const links = [
  { label: CONTACTS.email.label, href: CONTACTS.email.href, external: true },
  { label: CONTACTS.linkedin.label, href: CONTACTS.linkedin.href, external: true },
  { label: CONTACTS.telegram.label, href: CONTACTS.telegram.href, external: true },
  { label: CONTACTS.x.label, href: CONTACTS.x.href, external: true },
];

export function SiteFooter() {
  return (
    <footer className="bg-inverse text-inverse-fg mt-32 w-full">
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
              Available for the right collaborations — web platforms, mobile apps, dashboards and
              complex product interfaces.
            </p>
          </div>

          <div className="flex flex-wrap justify-end gap-2 max-lg:justify-start">
            {links.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  className="text-inverse-fg/90 hover:border-accent hover:text-accent border border-white/12 px-5 py-3 text-sm font-bold transition-colors"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-analytics-event="contact_click"
                  data-analytics-label={`footer_${link.label.toLowerCase()}`}
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
          <span>Software Engineer · React · Next.js · Node.js · React Native</span>
        </div>
      </div>
    </footer>
  );
}
