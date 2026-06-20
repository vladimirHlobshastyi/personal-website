import { Badge, ImageCarousel, InfoCard, Tag } from '@/components/ui';
import type { Project } from '../project.types';

type ProjectHeroProps = {
  project: Project;
};

export function ProjectHero({ project }: ProjectHeroProps) {
  const allImages = project.images.length > 0 ? project.images : [project.image];

  return (
    <>
      <div className="mb-14 grid grid-cols-[.98fr_1.02fr] items-end gap-14 max-lg:grid-cols-1">
        <div>
          <div className="text-accent before:bg-accent/50 mb-7 inline-flex items-center gap-3 text-xs font-bold tracking-[.14em] uppercase before:block before:h-px before:w-10">
            Case Study
          </div>
          {project.badge ? <Badge className="mb-5">{project.badge}</Badge> : null}
          <h1 className="tracking-tightest text-[clamp(3.125rem,7vw,5.625rem)] leading-[.9] font-semibold">
            {project.title}
          </h1>
          <p className="text-muted mt-7 max-w-2xl text-lg leading-8">{project.subtitle}</p>
        </div>

        <div className="grid gap-3">
          <InfoCard label="Role" value={project.role} />
          <div className="border-line bg-surface border p-5">
            <strong className="text-quiet mb-3 block text-xs font-bold tracking-[.12em] uppercase">
              Stack
            </strong>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>
          </div>
          <InfoCard label="Focus" value={project.focus} />
        </div>
      </div>

      <ImageCarousel title={project.title} images={allImages} />
    </>
  );
}
