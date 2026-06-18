import Link from 'next/link';
import { projects } from '@/data/projects';

export function SelectedWorkSection() {
  const [featured, ...rest] = projects;

  return (
    <section className="mt-2xl">
      <div className="mb-lg grid grid-cols-[1.08fr_.92fr] items-end gap-xl max-lg:grid-cols-1">
        <h2 className="text-[clamp(2.625rem,6.6vw,5.125rem)] font-semibold leading-[.92] tracking-[-0.075em]">
          Selected work
        </h2>
        <p className="text-lg leading-8 text-muted">
          A focused presentation of product work: one leading case and several supporting projects
          that show web, mobile and realtime product experience.
        </p>
      </div>

      <div className="grid grid-cols-[1.12fr_.88fr] gap-sm max-lg:grid-cols-1">
        <Link
          href={`/work/${featured.slug}`}
          className="group relative flex min-h-[36.875rem] flex-col justify-between overflow-hidden bg-cover bg-center p-lg text-white shadow-elevated transition-all duration-300 hover:-translate-y-0.5 hover:shadow-elevated"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(17,16,15,.08), rgba(17,16,15,.72)), url(${featured.image})`,
          }}
        >
          <span className="w-max bg-white/15 px-md py-sm text-xs font-bold text-white/85 backdrop-blur">
            Featured project
          </span>

          <div>
            <h3 className="mb-md text-[clamp(2.375rem,5.6vw,4.375rem)] font-semibold leading-[.88] tracking-[-0.07em]">
              {featured.title}
            </h3>
            <p className="mb-lg max-w-xl text-lg leading-8 text-white/75">
              {featured.shortDescription}
            </p>
            <div className="flex flex-wrap gap-sm">
              {featured.stack.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="bg-white/15 px-md py-sm text-xs font-semibold text-white/85 backdrop-blur"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Link>

        <div className="grid gap-sm">
          {rest.slice(0, 3).map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="min-h-[11.5rem] bg-white/60 p-lg shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/80 hover:shadow-elevated"
            >
              <h3 className="mb-md text-2xl font-semibold tracking-[-0.045em]">{project.title}</h3>
              <p className="mb-lg max-w-md leading-7 text-muted">{project.shortDescription}</p>
              <span className="text-sm font-bold text-accent">Open case →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
