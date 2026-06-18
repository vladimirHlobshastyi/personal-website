import type { Project } from '../project.types';

type ProjectHeroProps = {
  project: Project;
};

export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <>
      <div className="mb-14 grid grid-cols-[.98fr_1.02fr] items-end gap-14 max-lg:grid-cols-1">
        <div>
          <div className="text-accent before:bg-accent mb-7 inline-flex items-center gap-3 text-xs font-extrabold tracking-[.12em] uppercase before:block before:h-px before:w-10 before:opacity-50">
            Case Study
          </div>
          <h1 className="text-[clamp(3.125rem,7vw,5.625rem)] leading-[.9] font-semibold tracking-[-0.08em]">
            {project.title}
          </h1>
          <p className="text-muted mt-7 max-w-2xl text-lg leading-8">{project.subtitle}</p>
        </div>

        <div className="grid gap-3">
          <ProjectMeta label="Role" value={project.role} />
          <div className="shadow-subtle bg-white/55 p-5">
            <strong className="mb-3 block text-xs font-extrabold tracking-[.08em] uppercase">
              Stack
            </strong>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="bg-page px-3 py-1.5 text-[0.8125rem] font-medium text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <ProjectMeta label="Focus" value={project.focus} />
        </div>
      </div>

      <div
        className="shadow-elevated relative min-h-[34.6875rem] overflow-hidden bg-cover bg-center max-sm:min-h-[24.0625rem]"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(17,16,15,.06), rgba(17,16,15,.48)), url(${project.image})`,
        }}
      >
        <div className="absolute right-[9%] bottom-[9%] left-[9%] h-24 bg-white/15 shadow-[0_1.25rem_4.375rem_rgba(0,0,0,.13)] backdrop-blur" />
      </div>
    </>
  );
}

function ProjectMeta({ label, value }: { label: string; value: string }) {
  return (
    <div className="shadow-subtle bg-white/55 p-5">
      <strong className="mb-1.5 block text-xs font-extrabold tracking-[.08em] uppercase">
        {label}
      </strong>
      <span className="text-muted leading-7">{value}</span>
    </div>
  );
}
