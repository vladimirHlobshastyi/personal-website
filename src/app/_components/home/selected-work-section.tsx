import Image from 'next/image';
import Link from 'next/link';
import { ArrowIcon } from '@/components/ui';
import { ROUTES } from '@/constants';
import { getProjectBySlug, getProjectPreviewPath } from '@/utils';
import { FEATURED_PROJECT_SLUG, SUPPORTING_PROJECT_SLUGS } from '../../_constants/home.constants';

const PROJECT_SLUGS = [FEATURED_PROJECT_SLUG, ...SUPPORTING_PROJECT_SLUGS];

export function SelectedWorkSection() {
  const projects = PROJECT_SLUGS.map((slug) => {
    const project = getProjectBySlug(slug);

    if (!project) {
      throw new Error(`Selected work project not found: ${slug}`);
    }

    return project;
  });

  return (
    <section className="mt-[clamp(3.5rem,7vw,6rem)]">
      <div className="mb-8 flex items-end justify-between gap-8 max-md:flex-col max-md:items-start">
        <div>
          <p className="text-accent before:bg-accent/50 mb-5 inline-flex items-center gap-3 text-xs font-bold tracking-[.14em] uppercase before:block before:h-px before:w-10">
            Selected work
          </p>
          <h2 className="tracking-tightest text-[clamp(2.25rem,4.3vw,3.5rem)] leading-[1] font-semibold">
            Products I’ve helped ship
          </h2>
        </div>
        <Link
          href={ROUTES.work}
          className="text-fg group inline-flex shrink-0 items-center gap-2 text-sm font-bold"
        >
          All projects
          <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>

      <p className="text-muted mb-8 max-w-3xl text-sm leading-6">
        Commercial work is shown with anonymized names and visuals where needed.
      </p>

      <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {projects.map((project, index) => (
          <Link
            key={project.slug}
            href={`${ROUTES.work}/${project.slug}`}
            className="group border-line bg-surface hover:border-line-strong hover:shadow-card overflow-hidden border transition-all duration-300 hover:-translate-y-1"
          >
            <div className="bg-surface-2 relative aspect-[16/10] overflow-hidden">
              <Image
                src={getProjectPreviewPath(project.slug)}
                alt={`${project.title} product interface`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={index === 0}
                className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
              />
              {index === 0 && (
                <span className="bg-bg/90 text-fg border-line absolute top-3 left-3 border px-3 py-1.5 text-[0.65rem] font-bold tracking-[.1em] uppercase backdrop-blur-sm">
                  Featured
                </span>
              )}
            </div>

            <div className="p-5">
              <p className="text-quiet text-[0.65rem] font-bold tracking-[.12em] uppercase">
                {project.eyebrow}
              </p>
              <h3 className="mt-2 text-xl leading-tight font-semibold tracking-[-0.035em]">
                {project.title}
              </h3>
              <p className="text-muted mt-3 text-sm leading-6">{project.shortDescription}</p>
              <span className="text-accent mt-5 inline-flex items-center gap-2 text-sm font-bold">
                View case study
                <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
