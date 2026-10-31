import Link from 'next/link';
import { ROUTES } from '@/constants';
import { ArrowIcon } from '@/components/ui';

export function AboutPreviewSection() {
  return (
    <section className="border-line mt-[clamp(3.5rem,7vw,6rem)] grid grid-cols-[1fr_.8fr] items-center gap-10 border-y py-10 max-lg:grid-cols-1">
      <div>
        <p className="text-accent before:bg-accent/50 mb-6 inline-flex items-center gap-3 text-xs font-bold tracking-[.16em] uppercase before:block before:h-px before:w-10">
          About
        </p>
        <h2 className="tracking-tightest max-w-3xl text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.02] font-semibold">
          Understand the product. Build with purpose.
        </h2>
      </div>
      <div>
        <p className="text-muted text-lg leading-8">
          I start by understanding the business rules and the people using the product. That context
          helps me make practical engineering decisions with product, design, and development teams.
        </p>
        <Link
          href={ROUTES.about}
          className="text-fg group mt-6 inline-flex items-center gap-2 text-sm font-bold"
        >
          About me and how I work
          <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
