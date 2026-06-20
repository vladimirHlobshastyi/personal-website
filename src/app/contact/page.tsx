import Link from 'next/link';
import { ArrowIcon, SocialIcon } from '@/components/ui';

export const metadata = {
  title: 'Contact — Vladimir Hlobchastyi',
  description: 'Get in touch with Vladimir Hlobchastyi — software engineer for web and mobile.',
};

const socials = [
  { name: 'email', label: 'Email', value: 'vladimirp300@gmail.com', href: 'mailto:vladimirp300@gmail.com' },
  { name: 'linkedin', label: 'LinkedIn', value: 'Professional profile', href: '#' },
  { name: 'github', label: 'GitHub', value: 'Code and projects', href: '#' },
  { name: 'telegram', label: 'Telegram', value: 'Fastest way to reach me', href: '#' },
  { name: 'x', label: 'X', value: 'Updates and thoughts', href: '#' },
  { name: 'facebook', label: 'Facebook', value: 'Social profile', href: '#' },
];

const languages = [
  ['Russian', 'Native'],
  ['Ukrainian', 'Native'],
  ['English', 'Upper-Intermediate · B2'],
];

const facts = [
  ['Availability', 'Open to work'],
  ['Engagement', 'Full-time & freelance'],
  ['Format', 'Remote'],
  ['Response time', 'Within 24 hours'],
];

export default function ContactPage() {
  return (
    <main>
      {/* Statement band */}
      <section className="bg-inverse text-inverse-fg p-14 max-sm:p-8">
        <p className="text-accent before:bg-accent/50 mb-6 inline-flex items-center gap-3 text-xs font-bold tracking-[.18em] uppercase before:block before:h-px before:w-10">
          Contact
        </p>
        <h1 className="tracking-tightest max-w-3xl text-[clamp(2.75rem,7vw,5.25rem)] leading-[.92] font-semibold">
          Let&apos;s work together.
        </h1>
        <p className="text-inverse-fg/65 mt-6 max-w-2xl text-lg leading-8">
          Available for full-time roles and freelance projects — React, Next.js, React Native and
          Ionic. Dashboards, maps, complex forms, realtime and Node.js when the project needs a back
          end. The fastest reply is by email or Telegram.
        </p>
        <a
          className="bg-accent mt-9 inline-flex items-center gap-2 px-6 py-4 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
          href="mailto:vladimirp300@gmail.com"
        >
          <SocialIcon name="email" className="h-4 w-4" />
          vladimirp300@gmail.com
        </a>
      </section>

      {/* Detail grid — every block carries information */}
      <section className="mt-5 grid grid-cols-[1.4fr_1fr] gap-5 max-lg:grid-cols-1">
        <div className="border-line bg-surface border p-8 max-sm:p-6">
          <p className="text-quiet mb-6 text-xs font-bold tracking-[.16em] uppercase">
            Find me online
          </p>
          <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
            {socials.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                className="group border-line hover:border-line-strong hover:bg-surface-2/50 flex items-center gap-4 border p-4 transition-colors"
              >
                <span className="text-fg grid h-10 w-10 shrink-0 place-items-center">
                  <SocialIcon name={s.name} className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-bold">{s.label}</span>
                  <span className="text-muted block truncate text-[0.8125rem]">{s.value}</span>
                </span>
                <ArrowIcon className="text-quiet group-hover:text-accent ml-auto h-4 w-4 -rotate-45 transition-all group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
        </div>

        <div className="grid gap-5">
          <div className="border-line bg-surface border p-8 max-sm:p-6">
            <p className="text-quiet mb-5 text-xs font-bold tracking-[.16em] uppercase">Languages</p>
            <ul className="grid gap-3">
              {languages.map(([lang, level]) => (
                <li key={lang} className="flex items-baseline justify-between gap-4">
                  <span className="font-medium">{lang}</span>
                  <span className="text-muted text-[0.9375rem]">{level}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-line bg-surface border p-8 max-sm:p-6">
            <p className="text-quiet mb-5 text-xs font-bold tracking-[.16em] uppercase">
              Working together
            </p>
            <ul className="grid gap-3">
              {facts.map(([k, v]) => (
                <li key={k} className="flex items-baseline justify-between gap-4">
                  <span className="text-muted text-[0.9375rem]">{k}</span>
                  <span className="font-medium">{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
