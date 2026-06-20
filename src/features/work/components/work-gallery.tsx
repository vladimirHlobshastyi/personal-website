import Link from 'next/link';
import { ArrowIcon, Badge, Tag } from '@/components/ui';
import { projects } from '@/features/project';

export function WorkGallery() {
  return (
    <div className="grid grid-cols-12 gap-5">
      {projects.map((project, index) => (
        <Link
          key={project.slug}
          href={`/work/${project.slug}`}
          className="group shadow-card hover:shadow-float relative col-span-6 flex min-h-[26.25rem] flex-col justify-between overflow-hidden bg-cover bg-center p-7 text-white transition-all duration-300 hover:-translate-y-1 max-lg:col-span-12 [&:nth-child(3n)]:col-span-7 max-lg:[&:nth-child(3n)]:col-span-12 [&:nth-child(4n)]:col-span-5 max-lg:[&:nth-child(4n)]:col-span-12"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(17,16,15,.10), rgba(17,16,15,.72)), url(${project.image})`,
          }}
        >
          <div className="flex items-start justify-between">
            <span className="text-sm font-bold text-white/60">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="grid h-10 w-10 place-items-center border border-white/15 text-white/85 transition-colors group-hover:border-white/40">
              <ArrowIcon className="h-4 w-4 -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
            </span>
          </div>

          <div>
            <p className="mb-3 text-sm font-bold tracking-[.1em] text-white/65 uppercase">
              {project.eyebrow}
            </p>
            {project.badge ? (
              <Badge className="mb-4 border-white/25 text-white/90">{project.badge}</Badge>
            ) : null}
            <h3 className="mb-4 text-[clamp(2.125rem,5vw,3.875rem)] leading-[.9] font-semibold tracking-[-0.07em]">
              {project.title}
            </h3>
            <p className="mb-5 max-w-xl leading-7 text-white/75">{project.shortDescription}</p>
            <div className="flex flex-wrap gap-2">
              {project.stack.slice(0, 5).map((tag) => (
                <Tag key={tag} variant="onMedia">
                  {tag}
                </Tag>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
