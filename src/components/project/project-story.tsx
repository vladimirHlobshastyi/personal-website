import type { Project } from '@/types/project';

type ProjectStoryProps = {
  project: Project;
};

export function ProjectStory({ project }: ProjectStoryProps) {
  return (
    <section className="mt-9 grid grid-cols-2 gap-5 max-lg:grid-cols-1">
      <article className="col-span-2 grid grid-cols-[.82fr_1.18fr] gap-10 bg-white/55 p-8 shadow-soft max-lg:col-span-1 max-lg:grid-cols-1 max-sm:p-6">
        <h2 className="text-3xl font-semibold leading-none tracking-[-0.045em]">
          Project overview
        </h2>
        <p className="text-[17px] leading-8 text-muted">{project.overview}</p>
      </article>

      <article className="bg-white/55 p-8 shadow-soft max-sm:p-6">
        <h2 className="mb-4 text-3xl font-semibold leading-none tracking-[-0.045em]">
          Challenge
        </h2>
        <p className="text-[17px] leading-8 text-muted">{project.challenge}</p>
      </article>

      <article className="bg-white/55 p-8 shadow-soft max-sm:p-6">
        <h2 className="mb-4 text-3xl font-semibold leading-none tracking-[-0.045em]">
          Outcome
        </h2>
        <p className="text-[17px] leading-8 text-muted">{project.outcome}</p>
      </article>

      <article className="col-span-2 grid grid-cols-[.82fr_1.18fr] gap-10 bg-white/55 p-8 shadow-soft max-lg:col-span-1 max-lg:grid-cols-1 max-sm:p-6">
        <h2 className="text-3xl font-semibold leading-none tracking-[-0.045em]">
          What I worked on
        </h2>
        <div className="grid gap-3">
          {project.responsibilities.map((item) => (
            <div key={item.title} className="bg-white/55 p-5 shadow-[0_10px_28px_rgba(40,28,20,.03)]">
              <strong className="mb-1.5 block">{item.title}</strong>
              <span className="text-[15px] leading-7 text-muted">{item.description}</span>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
