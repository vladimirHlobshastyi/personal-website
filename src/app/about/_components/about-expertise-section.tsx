import { aboutExpertise, aboutWhoIAmSignals } from '../_constants/about.constants';
import { AboutCapabilityCard } from './about-capability-card';
import { getAboutIcon } from './about-icons';

export function AboutExpertiseSection() {
  return (
    <section className="grid gap-4">
      <article className="border-line bg-surface border px-4 py-5 text-center max-sm:px-4 max-sm:py-5">
        <div className="flex px-4">
          <p className="text-quiet mb-2 text-[0.72rem] font-semibold tracking-[.16em] uppercase">
            Who I am
          </p>
        </div>
        <div className="text-muted grid gap-2.5 p-4 text-left text-[1rem] leading-[1.8]">
          <p>
            Most of my work is in <strong className="text-fg font-semibold">real products</strong>{' '}
            with existing codebases, complex UI, and long-term delivery needs. I am strongest
            where teams need clear frontend architecture, reliable execution, and code that
            remains maintainable as the system grows.
          </p>
          <p>
            I have a <strong className="text-fg font-semibold">strong frontend core</strong> with{' '}
            <strong className="text-fg font-semibold">React</strong>,{' '}
            <strong className="text-fg font-semibold">Next.js</strong>,{' '}
            <strong className="text-fg font-semibold">TypeScript</strong> and modern{' '}
            <strong className="text-fg font-semibold">JavaScript</strong>, and I also work well
            with AI-heavy or AI-generated projects: assessing code quality, finding structural
            risks, supporting ongoing development, and refactoring unstable areas into
            production-ready systems.
          </p>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {aboutWhoIAmSignals.map((item) => (
            <div key={item.title} className="border-line bg-surface-2/35 border p-4">
              <div className="flex items-center gap-2">
                <span className="text-accent shrink-0">
                  {getAboutIcon(item.icon, 'h-4.5 w-4.5')}
                </span>
                <p className="text-fg text-sm font-semibold">{item.title}</p>
              </div>
              <p className="text-muted mt-1.5 text-sm leading-7">{item.text}</p>
            </div>
          ))}
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
