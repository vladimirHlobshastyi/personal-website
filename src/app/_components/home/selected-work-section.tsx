import Image from 'next/image';
import Link from 'next/link';
import { ConfidentialityNotice } from '@/components/features';
import { mediaOverlay, ROUTES } from '@/constants';
import { ArrowIcon } from '@/components/ui';
import { getProjectBySlug, getProjectPlatform, getProjectPreviewPath } from '@/utils';
import { FEATURED_PROJECT_SLUG, SUPPORTING_PROJECT_SLUGS } from '../../_constants/home.constants';

function requireProject(slug: string) {
  const project = getProjectBySlug(slug);

  if (!project) {
    throw new Error(`Selected work project not found: ${slug}`);
  }

  return project;
}

export function SelectedWorkSection() {
  const featured = requireProject(FEATURED_PROJECT_SLUG);
  const supporting = SUPPORTING_PROJECT_SLUGS.map(requireProject);

  return (
    <section className="mt-32">
      <div className="mb-14 grid grid-cols-[1.08fr_.92fr] items-end gap-12 max-lg:grid-cols-1">
        <h2 className="tracking-tightest text-[clamp(2.625rem,6.6vw,5.125rem)] leading-[.92] font-semibold">
          Selected work
        </h2>
        <p className="text-muted text-lg leading-8">
          Product work across logistics, marketplaces, social apps, realtime communication, and
          operational systems. Each case shows the product problem and my role in solving it.
        </p>
      </div>

      <ConfidentialityNotice className="mb-8" />

      <div className="grid grid-cols-[1.12fr_.88fr] gap-5 max-lg:grid-cols-1">
        <Link
          href={`${ROUTES.work}/${featured.slug}`}
          className="group shadow-card hover:shadow-float relative flex min-h-[36.875rem] flex-col justify-between overflow-hidden p-8 text-white transition-all duration-300 hover:-translate-y-1"
        >
          <Image
            src={getProjectPreviewPath(featured.slug)}
            alt={featured.title}
            fill
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            priority
          />
          <div className="absolute inset-0" style={{ background: mediaOverlay }} />

          <span className="relative w-max border border-white/15 px-3 py-2 text-[0.7rem] font-bold tracking-[.14em] text-white/85 uppercase">
            Featured project
          </span>

          <div className="relative">
            <h3 className="mb-4 text-[clamp(2.375rem,5.6vw,4.375rem)] leading-[.88] font-semibold tracking-[-0.07em]">
              {featured.title}
            </h3>
            <p className="mb-6 max-w-xl text-lg leading-8 text-white/75">
              {featured.shortDescription}
            </p>
            <p className="text-sm font-semibold text-white/70">{featured.category}</p>
          </div>
        </Link>

        <div className="grid gap-5">
          {supporting.map((project) => (
            <Link
              key={project.slug}
              href={`${ROUTES.work}/${project.slug}`}
              className="group border-line bg-surface hover:border-line-strong hover:shadow-card flex flex-1 overflow-hidden border transition-all duration-300 hover:-translate-y-1 max-sm:flex-col"
            >
              <div className="border-line bg-surface-2 relative aspect-[4/3] w-44 shrink-0 overflow-hidden border-r max-sm:aspect-[16/9] max-sm:w-full max-sm:border-r-0 max-sm:border-b">
                <Image
                  src={getProjectPreviewPath(project.slug)}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 176px"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <span className="bg-bg/85 text-fg border-line absolute top-2 left-2 border px-2 py-1 text-[0.625rem] font-bold tracking-[.1em] uppercase backdrop-blur-sm">
                  {getProjectPlatform(project.slug)}
                </span>
              </div>
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <h3 className="text-[1.5rem] leading-tight font-semibold tracking-[-0.04em]">
                    {project.title}
                  </h3>
                  <p className="text-quiet mt-2 text-[0.7rem] font-bold tracking-[.12em] uppercase">
                    {project.category}
                  </p>
                  <p className="text-muted mt-2 line-clamp-2 text-sm leading-6">
                    {project.shortDescription}
                  </p>
                </div>
                <span className="text-accent mt-4 inline-flex items-center gap-2 text-sm font-bold">
                  Open case
                  <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
