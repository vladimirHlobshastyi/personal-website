import Link from 'next/link';
import { ArrowIcon } from '@/components/ui';
import { ROUTES, SERVICE_OFFERS } from '@/constants';

export function ServicesSection() {
  return (
    <section className="mt-28">
      <div className="mb-12 grid grid-cols-[1fr_auto] items-end gap-8 max-md:grid-cols-1 max-md:items-start">
        <div>
          <p className="text-accent before:bg-accent/50 mb-6 inline-flex items-center gap-3 text-xs font-bold tracking-[.16em] uppercase before:block before:h-px before:w-10">
            What I do
          </p>
          <h2 className="tracking-tightest max-w-2xl text-[clamp(2.25rem,5vw,3.625rem)] leading-[1.04] font-semibold">
            Senior product delivery without bloated architecture.
          </h2>
        </div>
        <Link
          href={ROUTES.work}
          className="group bg-fg text-bg inline-flex shrink-0 items-center gap-2 px-6 py-[0.9375rem] text-[0.8125rem] font-bold tracking-[.02em] transition-transform hover:-translate-y-0.5"
        >
          See my work
          <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {SERVICE_OFFERS.map((service, index) => (
          <div key={service.title} className="border-line bg-surface flex flex-col border p-6">
            <span className="text-accent text-sm font-bold tabular-nums">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-3 text-lg leading-snug font-semibold tracking-[-0.02em]">
              {service.title}
            </h3>
            <p className="text-muted mt-2 text-sm leading-6">{service.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
