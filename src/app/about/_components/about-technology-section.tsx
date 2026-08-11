import { TechIcon } from '@/components/ui';
import { aboutTechnologyGroups } from '../_constants/about-technology.constants';

export function AboutTechnologySection() {
  return (
    <section aria-labelledby="about-technology-title">
      <div className="mb-10 grid items-end gap-6 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <p className="text-accent before:bg-accent/50 mb-5 inline-flex items-center gap-3 text-xs font-bold tracking-[.16em] uppercase before:block before:h-px before:w-10">
            Tools and platforms
          </p>
          <h2
            id="about-technology-title"
            className="tracking-tightest max-w-3xl text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.02] font-semibold"
          >
            Frontend is my core. I work across the stack when the product needs it.
          </h2>
        </div>
        <p className="text-muted max-w-2xl text-[1rem] leading-8 lg:justify-self-end">
          I use these technologies in commercial projects. Backend, data, mobile, and integration
          experience lets me finish features without unnecessary handoffs.
        </p>
      </div>

      <div className="border-line bg-line grid gap-px border lg:grid-cols-3">
        {aboutTechnologyGroups.map((group) => (
          <article key={group.title} className="bg-surface p-6 max-sm:p-5">
            <h3 className="text-lg font-semibold tracking-[-0.03em]">{group.title}</h3>
            <p className="text-muted mt-2 text-sm leading-7 lg:min-h-20 xl:min-h-14">
              {group.description}
            </p>
            <ul className="mt-5 grid gap-x-4 gap-y-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {group.items.map((item) => (
                <li key={item} className="flex min-w-0 items-center gap-2.5">
                  <TechIcon name={item} className="text-accent h-4 w-4 shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
