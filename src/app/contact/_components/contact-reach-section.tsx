import { CONTACTS } from '@/constants';
import { ArrowIcon, SocialIcon } from '@/components/ui';
import { CONTACT_SOCIALS } from '../_constants/contact.constants';

export function ContactReachSection() {
  return (
    <div className="border-line bg-surface border p-8 max-sm:p-6">
      <p className="text-quiet mb-3 text-xs font-bold tracking-[.16em] uppercase">
        Best ways to reach me
      </p>
      <p className="text-muted mb-6 text-sm leading-7">Email or Telegram usually get the fastest reply.</p>
      <div className="grid gap-3">
        {CONTACT_SOCIALS.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            data-analytics-event="contact_click"
            data-analytics-label={`contact_${social.name}`}
            className="group border-line hover:border-line-strong hover:bg-surface-2/50 flex min-w-0 items-center gap-4 border p-4 transition-colors"
          >
            <span className="text-fg grid h-10 w-10 shrink-0 place-items-center">
              <SocialIcon name={social.name} className="h-5 w-5" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-bold">{social.label}</span>
              <span className="text-muted block break-words text-[0.875rem]">{social.value}</span>
            </span>
            <ArrowIcon className="text-quiet group-hover:text-accent h-4 w-4 shrink-0 -rotate-45 transition-all group-hover:translate-x-0.5" />
          </a>
        ))}
      </div>
      <a
        href={CONTACTS.resume.href}
        download
        className="bg-fg text-bg mt-6 inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5"
      >
        {CONTACTS.resume.label}
        <ArrowIcon className="h-4 w-4 -rotate-45" />
      </a>
    </div>
  );
}
