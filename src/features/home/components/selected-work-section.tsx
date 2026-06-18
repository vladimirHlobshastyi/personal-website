import Link from 'next/link';
import { projects } from '@/features/project';

export function SelectedWorkSection() {
  const [featured, ...rest] = projects;

  return (
    <section className="mt-32">
      <div className="mb-14 grid grid-cols-[1.08fr_.92fr] items-end gap-12 max-lg:grid-cols-1">
        <h2 className="text-[clamp(2.625rem,6.6vw,5.125rem)] leading-[.92] font-semibold tracking-[-0.075em]">
          Selected work
        </h2>
        <p className="text-muted text-lg leading-8">
          A focused presentation of product work: one leading case and several supporting projects
          that show web, mobile and realtime product experience.
        </p>
      </div>

      <div className="grid grid-cols-[1.12fr_.88fr] gap-5 max-lg:grid-cols-1">
        <Link
          href={`/work/${featured.slug}`}
          className="group shadow-elevated relative flex min-h-[36.875rem] flex-col justify-between overflow-hidden bg-cover bg-center p-8 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_1.875rem_5.3125rem_rgba(40,28,20,.13)]"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(17,16,15,.08), rgba(17,16,15,.72)), url(${featured.image})`,
          }}
        >
          <span className="w-max bg-white/15 px-3 py-2 text-xs font-bold text-white/85 backdrop-blur">
            Featured project
          </span>

          <div>
            <h3 className="mb-4 text-[clamp(2.375rem,5.6vw,4.375rem)] leading-[.88] font-semibold tracking-[-0.07em]">
              {featured.title}
            </h3>
            <p className="mb-6 max-w-xl text-lg leading-8 text-white/75">
              {featured.shortDescription}
            </p>
            <div className="flex flex-wrap gap-2">
              {featured.stack.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="bg-white/15 px-3 py-2 text-xs font-semibold text-white/85 backdrop-blur"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Link>

        <div className="grid gap-5">
          {rest.slice(0, 3).map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="shadow-soft hover:shadow-elevated min-h-[11.5rem] bg-white/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white/80"
            >
              <h3 className="mb-3 text-[1.875rem] font-semibold tracking-[-0.045em]">
                {project.title}
              </h3>
              <p className="text-muted mb-7 max-w-md leading-7">{project.shortDescription}</p>
              <span className="text-accent text-sm font-bold">Open case →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
