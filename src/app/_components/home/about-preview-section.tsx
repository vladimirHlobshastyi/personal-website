import Link from 'next/link';
import { ROUTES } from '@/constants';
import { ArrowIcon } from '@/components/ui';
import { HOME_ABOUT_PILLARS } from '../../_constants/home.constants';

export function AboutPreviewSection() {
  return (
    <section className="mt-28">
      <div className="mb-12 grid grid-cols-[1.02fr_.98fr] items-end gap-10 max-lg:grid-cols-1">
        <div>
          <p className="text-accent before:bg-accent/50 mb-6 inline-flex items-center gap-3 text-xs font-bold tracking-[.16em] uppercase before:block before:h-px before:w-10">
            About
          </p>
          <h2 className="tracking-tightest max-w-3xl text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.02] font-semibold">
            Product-minded software engineering for complex product teams.
          </h2>
        </div>
        <div>
          <p className="text-muted text-lg leading-8">
            I build web and mobile products with a strong frontend core, while working across
            business logic, APIs, backend systems, integrations, and release flows.
          </p>
          <Link
            href={ROUTES.about}
            className="text-fg group mt-6 inline-flex items-center gap-2 text-sm font-bold"
          >
            Read more about how I work
            <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-1">
        {HOME_ABOUT_PILLARS.map((pillar) => (
          <article key={pillar.title} className="border-line bg-surface border p-6">
            <h3 className="text-lg font-semibold tracking-[-0.03em]">{pillar.title}</h3>
            <p className="text-muted mt-3 text-sm leading-7">{pillar.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
