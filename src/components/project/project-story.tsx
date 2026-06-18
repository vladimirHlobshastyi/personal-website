import type { Project } from '@/types/project';

type ProjectStoryProps = {
  project: Project;
};

export function ProjectStory({ project }: ProjectStoryProps) {
  return (
    <section className="mt-lg grid grid-cols-2 gap-sm max-lg:grid-cols-1">
      <article className="col-span-2 grid grid-cols-[.82fr_1.18fr] gap-xl bg-white/55 p-lg shadow-soft max-lg:col-span-1 max-lg:grid-cols-1 max-sm:p-md">
        <h2 className="text-2xl font-semibold leading-none tracking-[-0.045em]">
          Project overview
        </h2>
        <p className="text-base leading-8 text-muted">{project.overview}</p>
      </article>

      <article className="bg-white/55 p-lg shadow-soft max-sm:p-md">
        <h2 className="mb-md text-2xl font-semibold leading-none tracking-[-0.045em]">Challenge</h2>
        <p className="text-base leading-8 text-muted">{project.challenge}</p>
      </article>

      <article className="bg-white/55 p-lg shadow-soft max-sm:p-md">
        <h2 className="mb-md text-2xl font-semibold leading-none tracking-[-0.045em]">Outcome</h2>
        <p className="text-base leading-8 text-muted">{project.outcome}</p>
      </article>

      <article className="col-span-2 grid grid-cols-[.82fr_1.18fr] gap-xl bg-white/55 p-lg shadow-soft max-lg:col-span-1 max-lg:grid-cols-1 max-sm:p-md">
        <h2 className="text-2xl font-semibold leading-none tracking-[-0.045em]">
          What I worked on
        </h2>
        <div className="grid gap-md">
          {project.responsibilities.map((item) => (
            <div key={item.title} className="bg-white/55 p-md shadow-subtle">
              <strong className="mb-sm block">{item.title}</strong>
              <span className="text-sm leading-7 text-muted">{item.description}</span>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
