import Image from 'next/image';
import Link from 'next/link';
import { ROUTES } from '@/constants';

export function HeroSection() {
  return (
    <section className="grid grid-cols-[minmax(20rem,.9fr)_minmax(0,1.1fr)] items-stretch gap-[clamp(2rem,6vw,5rem)] max-lg:grid-cols-1">
      <figure className="shadow-float relative min-h-[41.25rem] overflow-hidden max-lg:min-h-[35rem] max-sm:min-h-[26.875rem]">
        <Image
          src="/images/main_photo.webp"
          alt="Vladimir Hlobchastyi, Senior Software Engineer"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 42vw"
          className="object-cover object-[center_35%]"
        />
        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent px-6 pt-24 pb-6 text-white sm:px-8 sm:pb-8">
          <strong className="block text-lg font-semibold tracking-[-0.02em] sm:text-xl">
            Vladimir Hlobchastyi
          </strong>
          <span className="mt-1 block text-sm leading-6 text-white/80">
            Senior Software Engineer · Product-Minded · Web · Mobile · Full-Stack
          </span>
        </figcaption>
      </figure>

      <div className="flex max-w-[43rem] flex-col lg:min-h-[41.25rem]">
        <p className="text-accent before:bg-accent/50 mb-6 inline-flex items-center gap-3 text-xs font-bold tracking-[.14em] uppercase before:block before:h-px before:w-10">
          Senior Software Engineer · Web &amp; Mobile
        </p>

        <h1 className="tracking-tightest text-[clamp(2.75rem,5.2vw,4.75rem)] leading-[.98] font-semibold">
          I build reliable web and mobile products.
        </h1>

        <p className="text-muted mt-6 max-w-[38rem] text-lg leading-8">
          I’m Vladimir, a Senior Software Engineer with 5+ years of experience. I help product teams
          turn complex requirements into clear, production-ready features.
        </p>

        <p className="text-quiet mt-5 text-sm font-medium tracking-wide">
          React · React Native · TypeScript
        </p>

        <ol
          aria-label="How I approach product work"
          className="border-line mt-auto grid grid-cols-3 divide-x border-y py-5 max-sm:grid-cols-1 max-sm:divide-x-0 max-sm:divide-y"
        >
          <li className="border-line pr-4 max-sm:px-0 max-sm:py-3">
            <span className="text-accent block text-xs font-bold tabular-nums">01</span>
            <span className="text-fg mt-2 block text-sm font-semibold">Understand the product</span>
          </li>
          <li className="border-line px-4 max-sm:px-0 max-sm:py-3">
            <span className="text-accent block text-xs font-bold tabular-nums">02</span>
            <span className="text-fg mt-2 block text-sm font-semibold">Clarify rules and edge cases</span>
          </li>
          <li className="pl-4 max-sm:px-0 max-sm:py-3">
            <span className="text-accent block text-xs font-bold tabular-nums">03</span>
            <span className="text-fg mt-2 block text-sm font-semibold">Build through release</span>
          </li>
        </ol>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={ROUTES.work}
            className="bg-fg text-bg px-6 py-[0.9375rem] text-[0.8125rem] font-bold tracking-[.02em] transition-transform hover:-translate-y-0.5"
          >
            View selected work
          </Link>
          <Link
            href={ROUTES.contact}
            data-analytics-event="contact_click"
            data-analytics-label="home_hero_contact"
            className="text-fg border-line bg-surface hover:border-line-strong border px-6 py-[0.9375rem] text-[0.8125rem] font-bold tracking-[.02em] transition-colors"
          >
            Contact me
          </Link>
        </div>
      </div>
    </section>
  );
}
