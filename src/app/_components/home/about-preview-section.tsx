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
          Frontend depth, with ownership beyond the screen.
        </h2>
      </div>
      <div>
        <p className="text-muted text-lg leading-8">
          My strongest area is frontend engineering. I also take features through API integration,
          edge cases, and production release, working closely with product and engineering teams
          along the way.
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
