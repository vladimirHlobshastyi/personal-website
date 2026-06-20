import Link from 'next/link';
import { ArrowIcon, Tag } from '@/components/ui';
import { projects } from '@/features/project';

export function SelectedWorkSection() {
  const [featured, ...rest] = projects;

  return (
    <section className="mt-32">
      <div className="mb-14 grid grid-cols-[1.08fr_.92fr] items-end gap-12 max-lg:grid-cols-1">
        <h2 className="tracking-tightest text-[clamp(2.625rem,6.6vw,5.125rem)] leading-[.92] font-semibold">
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
          className="group shadow-card hover:shadow-float relative flex min-h-[36.875rem] flex-col justify-between overflow-hidden bg-cover bg-center p-8 text-white transition-all duration-300 hover:-translate-y-1"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(17,16,15,.10), rgba(17,16,15,.74)), url(${featured.image})`,
          }}
        >
          <span className="w-max border border-white/15 px-3 py-2 text-[0.7rem] font-bold tracking-[.14em] text-white/85 uppercase">
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
              {featured.stack.slice(0, 5).map((tag) => (
                <Tag key={tag} variant="onMedia">
                  {tag}
                </Tag>
              ))}
            </div>
          </div>
        </Link>

        <div className="grid gap-5">
          {rest.slice(0, 3).map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group border-line bg-surface hover:border-line-strong hover:shadow-card flex min-h-[11.5rem] flex-col justify-between border p-7 transition-all duration-300"
            >
              <div>
                <h3 className="mb-3 text-[1.875rem] font-semibold tracking-[-0.045em]">
                  {project.title}
                </h3>
                <p className="text-muted max-w-md leading-7">{project.shortDescription}</p>
              </div>
              <span className="text-accent mt-6 inline-flex items-center gap-2 text-sm font-bold">
                Open case
                <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
