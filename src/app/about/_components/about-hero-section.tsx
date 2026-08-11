import Link from 'next/link';
import { ArrowIcon } from '@/components/ui';
import { ROUTES } from '@/constants';
import { aboutClientSignals } from '../_constants/about-hero.constants';
import { getAboutIcon } from './about-icons';

export function AboutHeroSection() {
  return (
    <section className="border-line bg-surface shadow-card relative grid overflow-hidden border lg:grid-cols-[minmax(0,1.18fr)_minmax(20rem,.82fr)]">
      <span className="bg-accent absolute top-0 left-0 h-1 w-28" aria-hidden="true" />

      <div className="p-10 max-sm:p-6 lg:p-12">
        <p className="text-accent before:bg-accent/50 mb-6 inline-flex items-center gap-3 text-xs font-bold tracking-[.18em] uppercase before:block before:h-px before:w-10">
          Senior Software Engineer · Web and Mobile
        </p>
        <h1 className="tracking-tightest max-w-4xl text-[clamp(2.65rem,5vw,4.25rem)] leading-[.98] font-semibold">
          I help teams build and improve complex web and mobile products.
        </h1>
        <div className="text-muted mt-7 max-w-3xl space-y-4 text-[1.025rem] leading-[1.85]">
          <p>
            I&apos;m Vladimir, a Senior Software Engineer with{' '}
            <strong className="text-fg font-semibold">5+ years</strong> of commercial experience. My
            core expertise is frontend engineering with React, Next.js, TypeScript, and React
            Native.
          </p>
          <p>
            I can take a feature from an unclear requirement to a production release: define the
            flow, build the interface, connect APIs and integrations, and handle the states that
            appear in real use.
          </p>
        </div>

        <div className="mt-9 flex flex-wrap gap-3">
          <Link
            href={ROUTES.work}
            className="bg-fg text-bg inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5"
          >
            View relevant work
            <ArrowIcon className="h-4 w-4" />
          </Link>
          <Link
            href={ROUTES.contact}
            data-analytics-event="contact_click"
            data-analytics-label="about_hero_contact"
            className="border-line hover:border-line-strong border px-5 py-3 text-sm font-semibold transition-colors"
          >
            Discuss your product
          </Link>
        </div>
      </div>

      <aside className="border-line bg-surface-2/45 border-t p-8 max-sm:p-6 lg:border-t-0 lg:border-l lg:p-10">
        <p className="text-accent text-xs font-bold tracking-[.16em] uppercase">Typical projects</p>
        <h2 className="tracking-tightest mt-4 max-w-md text-[clamp(1.75rem,3vw,2.35rem)] leading-[1.08] font-semibold">
          Projects where I am a strong fit.
        </h2>

        <div className="border-line mt-7 border-t">
          {aboutClientSignals.map((item) => (
            <article
              key={item.title}
              className="border-line grid grid-cols-[2.5rem_1fr] gap-3 border-b py-5"
            >
              <span className="text-accent mt-0.5" aria-hidden="true">
                {getAboutIcon(item.icon, 'h-5 w-5')}
              </span>
              <div>
                <h3 className="text-sm font-semibold">{item.title}</h3>
                <p className="text-muted mt-1.5 text-sm leading-6">{item.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="pt-5">
          <p className="text-quiet text-[0.7rem] font-bold tracking-[.14em] uppercase">
            Typical ownership
          </p>
          <p className="text-muted mt-2 text-sm leading-7">
            Product flow, interface architecture, API integration, and release readiness.
          </p>
        </div>
      </aside>
    </section>
  );
}
