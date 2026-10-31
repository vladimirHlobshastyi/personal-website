import { ConfidentialityNotice } from '@/components/features';
import { ArrowIcon, Badge, ImageCarousel } from '@/components/ui';
import type { Project } from '@/types';
import { getProjectShowcaseImages, hasProjectRealScreenshots } from '@/utils';

type ProjectHeroProps = {
  project: Project;
};

function MetaRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-line grid grid-cols-[7.5rem_1fr] items-baseline gap-x-10 border-b px-7 py-5 last:border-b-0 max-sm:grid-cols-1 max-sm:gap-y-2 max-sm:px-6">
      <p className="text-quiet text-xs font-bold tracking-[.14em] uppercase">{label}</p>
      <div className="text-fg leading-7">{children}</div>
    </div>
  );
}

export function ProjectHero({ project }: ProjectHeroProps) {
  const allImages = getProjectShowcaseImages(project);

  return (
    <>
      <header className="mb-8 max-w-4xl">
        <div className="mb-6 flex flex-wrap items-center gap-4">
          <span className="text-accent before:bg-accent/50 inline-flex items-center gap-3 text-xs font-bold tracking-[.14em] uppercase before:block before:h-px before:w-10">
            Case Study
          </span>
          {project.badge ? <Badge>{project.badge}</Badge> : null}
        </div>
        <h1 className="tracking-tightest text-[clamp(2.75rem,5.2vw,4.5rem)] leading-[.98] font-semibold">
          {project.title}
        </h1>
        <p className="text-muted mt-6 max-w-2xl text-lg leading-8">{project.subtitle}</p>

        {project.links && project.links.length > 0 ? (
          <div className="mt-7 flex flex-wrap gap-3">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group border-line bg-surface text-fg hover:border-accent hover:text-accent inline-flex items-center gap-2 border px-5 py-3 text-sm font-bold transition-colors"
              >
                {link.label}
                <ArrowIcon className="h-3.5 w-3.5 -rotate-45 transition-transform group-hover:translate-x-0.5" />
              </a>
            ))}
          </div>
        ) : null}
      </header>

      <div className="border-line bg-surface mb-10 border">
        <MetaRow label="Role">
          <span className="font-medium">{project.role}</span>
        </MetaRow>
        <MetaRow label="My scope">{project.ownership}</MetaRow>
      </div>

      {project.showConfidentialityNotice !== false ? (
        <ConfidentialityNotice className="mb-6" />
      ) : null}

      <ImageCarousel
        title={project.title}
        images={allImages}
        label={hasProjectRealScreenshots(project) ? 'Preview & Screenshots' : 'Project Preview'}
      />
    </>
  );
}
