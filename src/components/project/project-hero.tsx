import type { Project } from '@/types/project';

type ProjectHeroProps = {
  project: Project;
};

export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <>
      <div className="mb-lg grid grid-cols-[.98fr_1.02fr] items-end gap-lg max-lg:grid-cols-1">
        <div>
          <div className="mb-lg inline-flex items-center gap-lg text-xs font-extrabold uppercase tracking-[.12em] text-accent before:block before:h-px before:w-2.5 before:bg-accent before:opacity-50">
            Case Study
          </div>
          <h1 className="text-[clamp(3.125rem,7vw,5.625rem)] font-semibold leading-[.9] tracking-[-0.08em]">
            {project.title}
          </h1>
          <p className="mt-lg max-w-2xl text-lg leading-8 text-muted">{project.subtitle}</p>
        </div>

        <div className="grid gap-md">
          <ProjectMeta label="Role" value={project.role} />
          <ProjectMeta label="Stack" value={project.stack.join(', ')} />
          <ProjectMeta label="Focus" value={project.focus} />
        </div>
      </div>

      <div
        className="relative min-h-[34.6875rem] overflow-hidden bg-cover bg-center shadow-elevated max-sm:min-h-[24.0625rem]"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(17,16,15,.06), rgba(17,16,15,.48)), url(${project.image})`,
        }}
      >
        <div className="absolute bottom-[9%] left-[9%] right-[9%] h-1.5 bg-white/15 backdrop-blur" />
      </div>
    </>
  );
}

function ProjectMeta({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white/55 p-md shadow-subtle">
      <strong className="mb-sm block text-xs font-extrabold uppercase tracking-[.08em]">
        {label}
      </strong>
      <span className="leading-7 text-muted">{value}</span>
    </div>
  );
}
