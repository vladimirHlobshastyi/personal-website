import type { Project } from '../project.types';

type ProjectStoryProps = {
  project: Project;
};

export function ProjectStory({ project }: ProjectStoryProps) {
  return (
    <section className="mt-9 grid grid-cols-2 gap-5 max-lg:grid-cols-1">
      <article className="shadow-soft col-span-2 grid grid-cols-[.82fr_1.18fr] gap-10 bg-white/55 p-8 max-lg:col-span-1 max-lg:grid-cols-1 max-sm:p-6">
        <h2 className="text-[1.875rem] leading-none font-semibold tracking-[-0.045em]">
          Project overview
        </h2>
        <p className="text-muted text-[1.0625rem] leading-8">{project.overview}</p>
      </article>

      <article className="shadow-soft bg-white/55 p-8 max-sm:p-6">
        <h2 className="mb-4 text-[1.875rem] leading-none font-semibold tracking-[-0.045em]">
          Challenge
        </h2>
        <p className="text-muted text-[1.0625rem] leading-8">{project.challenge}</p>
      </article>

      <article className="shadow-soft bg-white/55 p-8 max-sm:p-6">
        <h2 className="mb-4 text-[1.875rem] leading-none font-semibold tracking-[-0.045em]">
          Outcome
        </h2>
        <p className="text-muted text-[1.0625rem] leading-8">{project.outcome}</p>
      </article>

      {project.responsibilities.map((item) => (
        <article key={item.title} className="shadow-soft bg-white/55 p-8 max-sm:p-6">
          <h2 className="mb-4 text-[1.875rem] leading-none font-semibold tracking-[-0.045em]">
            {item.title}
          </h2>
          <p className="text-muted text-[1.0625rem] leading-8">{item.description}</p>
        </article>
      ))}
    </section>
  );
}
