import type { Project } from '@/types/project';

type ProjectHeroProps = {
  project: Project;
};

export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <>
      <div className="mb-14 grid grid-cols-[.98fr_1.02fr] items-end gap-14 max-lg:grid-cols-1">
        <div>
          <div className="mb-7 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[.12em] text-accent before:block before:h-px before:w-10 before:bg-accent before:opacity-50">
            Case Study
          </div>
          <h1 className="text-[clamp(50px,7vw,90px)] font-semibold leading-[.9] tracking-[-0.08em]">
            {project.title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted">
            {project.subtitle}
          </p>
        </div>

        <div className="grid gap-3">
          <ProjectMeta label="Role" value={project.role} />
          <ProjectMeta label="Stack" value={project.stack.join(', ')} />
          <ProjectMeta label="Focus" value={project.focus} />
        </div>
      </div>

      <div
        className="relative min-h-[555px] overflow-hidden bg-cover bg-center shadow-elevated max-sm:min-h-[385px]"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(17,16,15,.06), rgba(17,16,15,.48)), url(${project.image})`,
        }}
      >
        <div className="absolute bottom-[9%] left-[9%] right-[9%] h-24 bg-white/15 shadow-[0_20px_70px_rgba(0,0,0,.13)] backdrop-blur" />
      </div>
    </>
  );
}

function ProjectMeta({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white/55 p-5 shadow-[0_14px_38px_rgba(40,28,20,.035)]">
      <strong className="mb-1.5 block text-xs font-extrabold uppercase tracking-[.08em]">
        {label}
      </strong>
      <span className="leading-7 text-muted">{value}</span>
    </div>
  );
}
