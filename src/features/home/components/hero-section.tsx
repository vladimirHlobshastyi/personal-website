import Link from 'next/link';
import { SkillList } from './skill-list';

export function HeroSection() {
  return (
    <section className="grid grid-cols-[minmax(20.625rem,.9fr)_minmax(27.5rem,1.1fr)] items-start gap-[clamp(2.75rem,7vw,6rem)] max-lg:grid-cols-1">
      <div
        className="shadow-float relative min-h-[41.25rem] overflow-hidden bg-cover bg-center max-lg:min-h-[35rem] max-sm:min-h-[26.875rem]"
        style={{
          backgroundImage:
            "linear-gradient(180deg,rgba(17,16,15,.02),rgba(17,16,15,.32)), url('/images/main_photo.webp')",
        }}
      >
        <div className="absolute bottom-7 left-7">
          <strong className="block text-lg font-semibold tracking-[-0.02em] text-white">
            Vladimir Hlobchastyi
          </strong>
          <span className="text-[0.8125rem] font-medium text-white/60">Software Engineer</span>
        </div>
      </div>

      <div>
        <div className="text-accent before:bg-accent/50 mb-7 inline-flex items-center gap-3 text-[0.6875rem] font-bold tracking-[.14em] uppercase before:block before:h-px before:w-10">
          Software Engineer · Available for work
        </div>

        <h1 className="tracking-tightest text-[clamp(3rem,7vw,5.75rem)] leading-[.9] font-semibold">
          I build web &amp; mobile products that ship.
        </h1>

        <p className="text-muted mt-7 max-w-[36rem] text-[1.0625rem] leading-[1.7]">
          I&apos;m Vladimir Hlobchastyi — a software engineer with 5+ years building fast,
          maintainable web and mobile apps. I take products from idea to launch, and rescue
          AI-built codebases that need to reach production.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <Link
            href="/work"
            className="bg-fg text-bg px-6 py-[0.9375rem] text-[0.8125rem] font-bold tracking-[.02em] transition-transform hover:-translate-y-0.5"
          >
            View my work
          </Link>
          <Link
            href="/contact"
            className="text-fg border-line bg-surface hover:border-line-strong border px-6 py-[0.9375rem] text-[0.8125rem] font-bold tracking-[.02em] transition-colors"
          >
            Get in touch
          </Link>
        </div>

        <div className="border-line mt-9 border-t pt-8">
          <p className="text-quiet mb-4 text-xs font-bold tracking-[.14em] uppercase">
            Core stack
          </p>
          <SkillList />
        </div>
      </div>
    </section>
  );
}
