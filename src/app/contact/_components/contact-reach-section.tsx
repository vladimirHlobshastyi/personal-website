import { CONTACTS } from '@/constants';
import { ArrowIcon, SocialIcon } from '@/components/ui';
import { CONTACT_SOCIALS } from '../_constants/contact.constants';

export function ContactReachSection() {
  return (
    <aside className="border-line bg-surface-2/45 border-t p-8 max-sm:p-6 lg:border-t-0 lg:border-l lg:p-10">
      <p className="text-accent text-xs font-bold tracking-[.16em] uppercase">Contact channels</p>
      <h2 className="tracking-tightest mt-4 max-w-md text-[clamp(1.75rem,3vw,2.35rem)] leading-[1.08] font-semibold">
        Email and Telegram are the fastest.
      </h2>
      <p className="text-muted mt-3 text-sm leading-7">
        I usually reply within 24 hours on working days.
      </p>

      <div className="border-line mt-7 border-t">
        {CONTACT_SOCIALS.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            data-analytics-event="contact_click"
            data-analytics-label={`contact_${social.name}`}
            className="group border-line hover:bg-surface/65 flex min-w-0 items-center gap-4 border-b py-4 transition-colors"
          >
            <span className="text-accent grid h-9 w-9 shrink-0 place-items-center">
              <SocialIcon name={social.name} className="h-5 w-5" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-bold">{social.label}</span>
              <span className="text-muted block text-[0.875rem] break-words">{social.value}</span>
            </span>
            <ArrowIcon className="text-quiet group-hover:text-accent h-4 w-4 shrink-0 -rotate-45 transition-all group-hover:translate-x-0.5" />
          </a>
        ))}
      </div>
      <a
        href={CONTACTS.resume.href}
        download
        className="border-line bg-surface hover:border-line-strong mt-6 inline-flex items-center gap-2 border px-5 py-3 text-sm font-semibold transition-colors"
      >
        {CONTACTS.resume.label}
        <ArrowIcon className="h-4 w-4 -rotate-45" />
      </a>
    </aside>
  );
}
