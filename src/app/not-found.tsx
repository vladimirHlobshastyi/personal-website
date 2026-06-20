import Link from 'next/link';
import { ArrowIcon } from '@/components/ui';

export const metadata = {
  title: 'Page not found — Vladimir Hlobchastyi',
};

export default function NotFound() {
  return (
    <main className="flex min-h-[calc(100vh-20rem)] flex-col items-center justify-center py-16 text-center">
      <p className="text-accent before:bg-accent/50 after:bg-accent/50 mb-8 inline-flex items-center gap-3 text-[0.6875rem] font-bold tracking-[.18em] uppercase before:block before:h-px before:w-10 after:block after:h-px after:w-10">
        Error 404
      </p>

      <h1 className="tracking-tightest text-[clamp(6rem,26vw,18rem)] leading-[.82] font-semibold">
        404
      </h1>

      <p className="text-muted mt-8 max-w-md text-lg leading-8">
        This page doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="group bg-fg text-bg inline-flex items-center gap-2 px-6 py-[0.9375rem] text-[0.8125rem] font-bold tracking-[.02em] transition-transform hover:-translate-y-0.5"
        >
          <ArrowIcon className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" />
          Back to home
        </Link>
        <Link
          href="/work"
          className="text-fg border-line bg-surface hover:border-line-strong border px-6 py-[0.9375rem] text-[0.8125rem] font-bold tracking-[.02em] transition-colors"
        >
          View work
        </Link>
      </div>
    </main>
  );
}
