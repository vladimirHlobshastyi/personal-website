import { ArrowIcon, SocialIcon, Tag } from '@/components/ui';
import { CONTACTS } from '@/config/contacts';

export const metadata = {
  title: 'Contact Vladimir Hlobchastyi',
  description:
    'Contact Vladimir Hlobchastyi for senior web, mobile, and AI codebase work. Fastest reply by email or Telegram.',
  alternates: { canonical: '/contact' },
};

const socials = [
  { name: 'email', ...CONTACTS.email },
  { name: 'linkedin', ...CONTACTS.linkedin },
  { name: 'github', ...CONTACTS.github },
  { name: 'telegram', ...CONTACTS.telegram },
  { name: 'x', ...CONTACTS.x },
];

const languages = [
  ['English', 'Upper-Intermediate · B2'],
  ['Ukrainian', 'Native'],
  ['Russian', 'Native'],
];

const quickFacts = [
  ['Availability', 'Available for the right collaborations'],
  ['Location', 'Remote · Europe-friendly hours'],
  ['Response time', 'Within 24 hours'],
];

const workFocus = ['Web and Mobile', 'Frontend Architecture', 'AI Codebase Audit', 'Refactoring and Recovery'];

export default function ContactPage() {
  return (
    <main className="grid gap-5">
      <section className="grid grid-cols-[1.08fr_.92fr] gap-5 max-lg:grid-cols-1">
        <div className="bg-inverse text-inverse-fg p-10 max-sm:p-7">
          <p className="text-accent before:bg-accent/50 mb-6 inline-flex items-center gap-3 text-xs font-bold tracking-[.18em] uppercase before:block before:h-px before:w-10">
            Contact
          </p>
          <h1 className="tracking-tightest max-w-3xl text-[clamp(2.5rem,6vw,4.75rem)] leading-[.92] font-semibold">
            Contact for senior web, mobile, and AI codebase work.
          </h1>
          <p className="text-inverse-fg/70 mt-5 max-w-2xl text-lg leading-8">
            I help teams build, stabilize, and refactor production products with React, Next.js,
            React Native, TypeScript, and Node.js.
          </p>
          <p className="text-inverse-fg/70 mt-4 max-w-2xl text-lg leading-8">
            I also analyze AI-generated codebases, identify structural risks, support ongoing
            delivery, and refactor unstable systems into production-ready software. The fastest
            response is by email or Telegram.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {workFocus.map((item) => (
              <Tag key={item} variant="onMedia" icon={false}>
                {item}
              </Tag>
            ))}
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {quickFacts.map(([label, value]) => (
              <div key={label} className="border border-white/12 bg-white/4 p-4">
                <p className="text-inverse-fg/50 text-[0.72rem] font-bold tracking-[.14em] uppercase">
                  {label}
                </p>
                <p className="mt-2 text-sm leading-6 font-medium">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="border-line bg-surface border p-8 max-sm:p-6">
          <p className="text-quiet mb-3 text-xs font-bold tracking-[.16em] uppercase">
            Best ways to reach me
          </p>
          <p className="text-muted mb-6 text-sm leading-7">
            Email or Telegram usually get the fastest reply.
          </p>
          <div className="grid gap-3">
            {socials.map((social) => (
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
                  <span className="text-muted block text-[0.875rem] break-words">
                    {social.value}
                  </span>
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
      </section>

      <section className="grid gap-5 lg:grid-cols-[1.15fr_.85fr]">
        <article className="border-line bg-surface border p-8 max-sm:p-6">
          <p className="text-quiet mb-5 text-xs font-bold tracking-[.16em] uppercase">
            What I help build
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="border-line bg-surface-2/35 border p-4">
              <h2 className="text-lg font-semibold tracking-[-0.03em]">
                Complex product interfaces
              </h2>
              <p className="text-muted mt-2 text-sm leading-7">
                SaaS dashboards, admin panels, complex forms, maps, onboarding and multi-step
                product flows.
              </p>
            </div>
            <div className="border-line bg-surface-2/35 border p-4">
              <h2 className="text-lg font-semibold tracking-[-0.03em]">
                AI project recovery
              </h2>
              <p className="text-muted mt-2 text-sm leading-7">
                Codebase audit, structural cleanup, focused support, refactoring, and production
                hardening for AI-generated or AI-assisted projects.
              </p>
            </div>
          </div>
        </article>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-1">
          <article className="border-line bg-surface border p-8 max-sm:p-6">
            <p className="text-quiet mb-5 text-xs font-bold tracking-[.16em] uppercase">
              Languages
            </p>
            <ul className="grid gap-3">
              {languages.map(([lang, level]) => (
                <li key={lang} className="flex items-baseline justify-between gap-4">
                  <span className="font-medium">{lang}</span>
                  <span className="text-muted text-[0.9375rem]">{level}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="border-line bg-surface border p-8 max-sm:p-6">
            <p className="text-quiet mb-5 text-xs font-bold tracking-[.16em] uppercase">
              Working style
            </p>
            <ul className="grid gap-3">
              <li className="flex items-baseline justify-between gap-4">
                <span className="text-muted text-[0.9375rem]">Engagement</span>
                <span className="font-medium">Long-term or project-based</span>
              </li>
              <li className="flex items-baseline justify-between gap-4">
                <span className="text-muted text-[0.9375rem]">Timezone fit</span>
                <span className="font-medium">Europe / async-friendly</span>
              </li>
              <li className="flex items-baseline justify-between gap-4">
                <span className="text-muted text-[0.9375rem]">Collaboration</span>
                <span className="font-medium">Open to the right fit</span>
              </li>
            </ul>
          </article>
        </div>
      </section>
    </main>
  );
}
