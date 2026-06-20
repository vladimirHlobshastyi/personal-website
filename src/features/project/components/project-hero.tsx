import { Badge, ImageCarousel, Tag } from '@/components/ui';
import type { Project } from '../project.types';

type ProjectHeroProps = {
  project: Project;
};

function MetaField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-quiet mb-1.5 text-xs font-bold tracking-[.12em] uppercase">{label}</p>
      <p className="text-fg leading-7 font-medium">{value}</p>
    </div>
  );
}

export function ProjectHero({ project }: ProjectHeroProps) {
  const allImages = project.images.length > 0 ? project.images : [project.image];

  return (
    <>
      {/* Title leads at the top — strong first impression, no wasted space. */}
      <header className="mb-10 max-w-4xl">
        <div className="mb-6 flex flex-wrap items-center gap-4">
          <span className="text-accent before:bg-accent/50 inline-flex items-center gap-3 text-xs font-bold tracking-[.14em] uppercase before:block before:h-px before:w-10">
            Case Study
          </span>
          {project.badge ? <Badge>{project.badge}</Badge> : null}
        </div>
        <h1 className="tracking-tightest text-[clamp(3.125rem,7vw,5.625rem)] leading-[.9] font-semibold">
          {project.title}
        </h1>
        <p className="text-muted mt-6 max-w-2xl text-lg leading-8">{project.subtitle}</p>
      </header>

      {/* One consolidated meta panel: role + focus, then the full stack. */}
      <div className="border-line bg-surface mb-10 grid grid-cols-[minmax(0,auto)_1fr] gap-x-12 gap-y-6 border p-7 max-sm:grid-cols-1 max-sm:p-6">
        <MetaField label="Role" value={project.role} />
        <MetaField label="Focus" value={project.focus} />
        <div className="border-line col-span-2 border-t pt-6 max-sm:col-span-1">
          <p className="text-quiet mb-3 text-xs font-bold tracking-[.12em] uppercase">Stack</p>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>
        </div>
      </div>

      <ImageCarousel title={project.title} images={allImages} />
    </>
  );
}
