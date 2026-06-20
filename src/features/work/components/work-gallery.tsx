import Image from 'next/image';
import Link from 'next/link';
import { ArrowIcon, Tag } from '@/components/ui';
import { getProjectPlatform, getProjectPreviewPath, projects } from '@/features/project';

function getCardSummary(text: string) {
  return text.replace(/\.$/, '');
}

export function WorkGallery() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <Link
          key={project.slug}
          href={`/work/${project.slug}`}
          className="group border-line bg-surface hover:border-line-strong hover:shadow-card flex min-h-[25rem] flex-col overflow-hidden border transition-all duration-300 hover:-translate-y-1"
        >
          <div className="border-line bg-surface-2 relative aspect-[16/10] overflow-hidden border-b">
            <Image
              src={getProjectPreviewPath(project.slug)}
              alt={project.title}
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
            <p className="text-muted mt-3 text-xs font-bold tracking-[.16em] uppercase">
              {project.eyebrow}
            </p>
            <p className="text-fg/80 mt-4 text-sm leading-6 line-clamp-1">
              {getCardSummary(project.shortDescription)}
            </p>

            <div className="mt-5 mb-7 flex flex-wrap gap-2">
              {project.stack.slice(0, 4).map((tag) => (
                <Tag key={tag} className="text-[0.75rem]">
                  {tag}
                </Tag>
              ))}
            </div>

            <div className="border-line mt-auto flex items-center justify-between border-t pt-5">
              <span className="text-fg text-sm font-semibold">View case study</span>
              <span className="text-muted group-hover:text-accent inline-flex items-center gap-2 text-sm font-medium transition-colors">
                Details
                <ArrowIcon className="h-4 w-4 -rotate-45 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
