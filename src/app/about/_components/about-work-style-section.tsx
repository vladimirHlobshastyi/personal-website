import Link from 'next/link';
import { ArrowIcon, TechIcon } from '@/components/ui';
import { ROUTES } from '@/constants';
import { aboutTechnologyGroups, aboutWorkStyle } from '../_constants/about-work-style.constants';
import { getAboutIcon } from './about-icons';
import { AboutWorkStyleCard } from './about-work-style-card';

export function AboutWorkStyleSection() {
  return (
    <section className="border-line bg-surface border p-6 max-sm:p-5">
      <div className="grid items-start gap-6 lg:grid-cols-[.98fr_1.02fr]">
        <div>
          <p className="text-quiet mb-4 text-xs font-bold tracking-[.16em] uppercase">How I work</p>
          <h2 className="tracking-tightest max-w-3xl text-[clamp(2rem,4vw,3.25rem)] leading-[1.02] font-semibold">
            Clear decisions, useful code, fewer surprises.
          </h2>
          <div className="text-muted grid max-w-3xl gap-3.5 text-[1rem] leading-[1.9]">
            <p>
              My goal is to make the product easier to change, not just faster to ship. I prefer
              practical architecture, direct communication, and a clear answer to &quot;what happens
              when this goes wrong?&quot;
            </p>
          </div>

          <div className="mt-5 grid gap-3.5">
            {aboutWorkStyle.map((item) => (
              <AboutWorkStyleCard
                key={item.title}
                title={item.title}
                summary={item.summary}
                points={item.points}
                icon={getAboutIcon(item.icon, 'h-5 w-5')}
              />
            ))}
          </div>
        </div>

        <div className="grid gap-4 self-start">
          {aboutTechnologyGroups.map((group) => (
            <article key={group.title} className="border-line bg-surface-2/35 border p-5">
              <p className="text-quiet mb-4 text-xs font-bold tracking-[.16em] uppercase">
                {group.title}
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {group.items.map((item) => (
                  <div
                    key={item}
                    className="border-line bg-bg/55 flex items-center gap-3 border px-4 py-3"
                  >
                    <TechIcon name={item} className="text-accent h-4.5 w-4.5" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}

          <article className="bg-inverse text-inverse-fg p-5">
            <p className="text-accent mb-3 text-xs font-bold tracking-[.16em] uppercase">
              Next step
            </p>
            <p className="text-inverse-fg/74 text-sm leading-7">
              If you have a product that needs clearer logic, a stronger frontend, or a careful path
              from idea to release, let&apos;s talk.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href={ROUTES.work}
                className="bg-bg text-fg inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5"
              >
                View work
                <ArrowIcon className="h-4 w-4" />
              </Link>
              <Link
                href={ROUTES.contact}
                data-analytics-event="contact_click"
                data-analytics-label="about_contact"
                className="border border-white/12 px-5 py-3 text-sm font-semibold text-white/90 transition-colors hover:border-white/30"
              >
                Contact
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
