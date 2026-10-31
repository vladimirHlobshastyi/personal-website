import Image from 'next/image';
import Link from 'next/link';
import { projects, ROUTES } from '@/constants';
import { ArrowIcon } from '@/components/ui';
import { getProjectPlatform, getProjectPreviewPath } from '@/utils';

export function WorkGallery() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <Link
          key={project.slug}
          href={`${ROUTES.work}/${project.slug}`}
          className="group border-line bg-surface hover:border-line-strong hover:shadow-card flex flex-col overflow-hidden border transition-all duration-300 hover:-translate-y-1"
        >
          <div className="border-line bg-surface-2 relative aspect-[16/10] overflow-hidden border-b">
            <Image
              src={getProjectPreviewPath(project.slug)}
              alt={`${project.title} product interface`}
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <span className="bg-bg/85 text-fg border-line absolute top-3 right-3 border px-3 py-1.5 text-[0.6875rem] font-bold tracking-[.1em] uppercase backdrop-blur-sm">
              {getProjectPlatform(project.slug)}
            </span>
          </div>

          <div className="flex flex-1 flex-col p-6">
            <h3 className="text-fg text-[1.75rem] leading-[1] font-semibold tracking-[-0.05em]">
              {project.title}
            </h3>
            <div className="mt-3 flex items-center gap-2">
              <span className="text-muted text-xs font-semibold tracking-[.08em] uppercase">
                {project.category}
              </span>
            </div>
            <p className="text-muted mt-4 text-sm leading-6">{project.shortDescription}</p>

            <div className="border-line mt-auto flex items-center justify-between border-t pt-5">
              <span className="text-fg text-sm font-semibold">View case study</span>
              <span className="text-muted group-hover:text-accent inline-flex items-center transition-colors">
                <ArrowIcon className="h-4 w-4 -rotate-45 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
