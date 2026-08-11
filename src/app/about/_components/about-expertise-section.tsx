import { aboutExpertise } from '../_constants/about-expertise.constants';
import { AboutCapabilityCard } from './about-capability-card';
import { getAboutIcon } from './about-icons';

export function AboutExpertiseSection() {
  return (
    <section aria-labelledby="about-expertise-title">
      <div className="mb-10 grid items-end gap-6 lg:grid-cols-[1.15fr_.85fr]">
        <div>
          <p className="text-accent before:bg-accent/50 mb-5 inline-flex items-center gap-3 text-xs font-bold tracking-[.16em] uppercase before:block before:h-px before:w-10">
            What I can own
          </p>
          <h2
            id="about-expertise-title"
            className="tracking-tightest max-w-3xl text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.02] font-semibold"
          >
            The product flow, the interface, and the systems behind it.
          </h2>
        </div>
        <p className="text-muted max-w-2xl text-[1rem] leading-8 lg:justify-self-end">
          Frontend is my main area, but I do not stop at the component boundary. I follow the
          feature through API integration, error states, and release.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {aboutExpertise.map((item) => (
          <AboutCapabilityCard
            key={item.title}
            title={item.title}
            summary={item.summary}
            points={item.points}
            tags={item.tags}
            icon={getAboutIcon(item.icon, 'h-5 w-5')}
          />
        ))}
      </div>
    </section>
  );
}
