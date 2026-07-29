import type { Project } from '@/types';

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
      {/* Lead: the one-paragraph framing of the project. */}
      <article className="border-line bg-surface border p-8 max-sm:p-6">
        <Eyebrow>Overview</Eyebrow>
        <p className="text-fg max-w-4xl text-[clamp(1.1875rem,2.2vw,1.5rem)] leading-[1.55] font-medium tracking-[-0.01em]">
          {project.overview}
        </p>
      </article>

      {/* Tension and resolution, side by side. */}
      <div className="mt-5 grid grid-cols-2 gap-5 max-lg:grid-cols-1">
        <article className="border-line bg-surface border p-8 max-sm:p-6">
          <Eyebrow>Challenge</Eyebrow>
          <p className="text-muted text-[1.0625rem] leading-8">{project.challenge}</p>
        </article>
        <article className="border-line bg-surface border p-8 max-sm:p-6">
          <Eyebrow>Outcome</Eyebrow>
          <p className="text-muted text-[1.0625rem] leading-8">{project.outcome}</p>
        </article>
      </div>

      {/* What the work actually consisted of. */}
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
            <article key={item.title} className="border-line bg-surface border p-8 max-sm:p-6">
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
    </section>
  );
}
