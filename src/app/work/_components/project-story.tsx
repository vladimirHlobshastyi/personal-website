import type { Project } from '@/types';
import { Tag } from '@/components/ui';

type ProjectStoryProps = {
  project: Project;
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-accent before:bg-accent/50 mb-5 inline-flex items-center gap-3 text-[0.7rem] font-bold tracking-[.16em] uppercase before:block before:h-px before:w-7">
      {children}
    </h2>
  );
}

export function ProjectStory({ project }: ProjectStoryProps) {
  return (
    <section className="mt-12">
      <div className="grid gap-5 lg:grid-cols-[.9fr_1.1fr]">
        <article className="border-line bg-surface border p-8 max-sm:p-6">
          <Eyebrow>Product context</Eyebrow>
          <p className="text-fg text-[1.0625rem] leading-8">{project.overview}</p>
        </article>
        <article className="border-line bg-surface border p-8 max-sm:p-6">
          <Eyebrow>Challenge</Eyebrow>
          <p className="text-muted text-[1.0625rem] leading-8">{project.challenge}</p>
        </article>
      </div>

      <article className="border-line bg-surface mt-5 border p-8 max-sm:p-6">
        <Eyebrow>Outcome</Eyebrow>
        <p className="text-muted text-[1.0625rem] leading-8">{project.outcome}</p>
      </article>

      <div className="mt-16">
        <div className="border-line mb-8 flex items-end justify-between gap-6 border-b pb-5">
          <h2 className="text-[clamp(1.875rem,3.4vw,2.75rem)] leading-none font-semibold tracking-[-0.05em]">
            Responsibilities
          </h2>
          <span className="text-quiet shrink-0 text-sm font-bold tracking-[.04em] tabular-nums">
            {String(project.responsibilities.length).padStart(2, '0')} areas
          </span>
        </div>

        <div className="grid grid-cols-2 gap-5 max-lg:grid-cols-1">
          {project.responsibilities.map((item, index) => (
            <article
              key={item.title}
              className="border-line bg-surface border p-8 max-sm:p-6"
            >
              <span className="text-accent text-sm font-bold tabular-nums">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 text-[1.5rem] leading-tight font-semibold tracking-[-0.04em]">
                {item.title}
              </h3>
              <p className="text-muted mt-3 text-[1.0625rem] leading-8">{item.description}</p>
            </article>
          ))}
        </div>
      </div>

      <section className="border-line mt-12 border-t pt-7">
        <h2 className="text-quiet mb-4 text-xs font-bold tracking-[.14em] uppercase">
          Technologies used
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((technology) => (
            <Tag key={technology}>{technology}</Tag>
          ))}
        </div>
      </section>
    </section>
  );
}
