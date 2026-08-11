import { aboutWorkStyle } from '../_constants/about-work-style.constants';
import { getAboutIcon } from './about-icons';
import { AboutWorkStyleCard } from './about-work-style-card';

export function AboutWorkStyleSection() {
  return (
    <section
      aria-labelledby="about-work-style-title"
      className="border-line bg-surface-2/45 border p-10 max-sm:p-6"
    >
      <div className="grid items-end gap-6 lg:grid-cols-[1.08fr_.92fr]">
        <div>
          <p className="text-accent before:bg-accent/50 mb-5 inline-flex items-center gap-3 text-xs font-bold tracking-[.16em] uppercase before:block before:h-px before:w-10">
            How I work
          </p>
          <h2
            id="about-work-style-title"
            className="tracking-tightest max-w-3xl text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.02] font-semibold"
          >
            I keep the work clear from requirement to release.
          </h2>
        </div>
        <p className="text-muted max-w-2xl text-[1rem] leading-8 lg:justify-self-end">
          Before I code, I clarify the flow and edge cases. During implementation, I stay close to
          product, design, and backend so problems are solved once, not passed between people.
        </p>
      </div>

      <div className="border-line bg-line mt-10 grid gap-px border lg:grid-cols-3">
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
    </section>
  );
}
