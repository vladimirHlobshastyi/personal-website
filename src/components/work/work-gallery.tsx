import Link from 'next/link';
import { projects } from '@/data/projects';

export function WorkGallery() {
  return (
    <div className="grid grid-cols-12 gap-5">
      {projects.map((project, index) => (
        <Link
          key={project.slug}
          href={`/work/${project.slug}`}
          className="group relative col-span-6 flex min-h-[420px] flex-col justify-between overflow-hidden bg-cover bg-center p-7 text-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated max-lg:col-span-12 [&:nth-child(3n)]:col-span-7 [&:nth-child(4n)]:col-span-5 max-lg:[&:nth-child(3n)]:col-span-12 max-lg:[&:nth-child(4n)]:col-span-12"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(17,16,15,.08), rgba(17,16,15,.70)), url(${project.image})`,
          }}
        >
          <div className="flex items-start justify-between">
            <span className="text-sm font-bold text-white/60">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="grid h-10 w-10 rotate-[-45deg] place-items-center bg-white/15 text-lg backdrop-blur">
              →
            </span>
          </div>

          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[.1em] text-white/65">
              {project.eyebrow}
            </p>
            <h3 className="mb-4 text-[clamp(34px,5vw,62px)] font-semibold leading-[.9] tracking-[-0.07em]">
              {project.title}
            </h3>
            <p className="mb-5 max-w-xl leading-7 text-white/75">
              {project.shortDescription}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.stack.slice(0, 3).map((tag) => (
                <span key={tag} className="bg-white/15 px-3 py-2 text-xs font-semibold text-white/85 backdrop-blur">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
