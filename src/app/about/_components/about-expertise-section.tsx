import { aboutExpertise } from '../_constants/about-expertise.constants';
import { AboutCapabilityCard } from './about-capability-card';
import { getAboutIcon } from './about-icons';

export function AboutExpertiseSection() {
  return (
    <section className="grid gap-4">
      <article className="border-line bg-surface border px-4 py-5 max-sm:px-4 max-sm:py-5">
        <div className="flex px-4">
          <p className="text-quiet mb-2 text-[0.72rem] font-semibold tracking-[.16em] uppercase">
            In practice
          </p>
        </div>
        <div className="text-muted p-4 text-left text-[1rem] leading-[1.8]">
          <p>
            I am usually most useful when requirements are incomplete, the happy path is not enough,
            and the product has to keep moving. I make decisions concrete in the interface and data
            flow, including the states users hit when things go wrong.
          </p>
        </div>
      </article>

      <div className="grid gap-4 lg:grid-cols-2">
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
