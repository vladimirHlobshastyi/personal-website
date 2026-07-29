import { Tag } from '@/components/ui';
import { ABOUT_ROLE_TAGS, aboutSnapshot } from '../_constants/about-hero.constants';
import { getAboutIcon } from './about-icons';

export function AboutHeroSection() {
  return (
    <section className="grid grid-cols-[1.08fr_.92fr] items-start gap-4 max-lg:grid-cols-1">
      <div className="bg-inverse text-inverse-fg p-8 max-sm:p-6">
        <p className="text-accent before:bg-accent/50 mb-6 inline-flex items-center gap-3 text-xs font-bold tracking-[.18em] uppercase before:block before:h-px before:w-10">
          About
        </p>
        <h1 className="tracking-tightest max-w-4xl text-[clamp(2.35rem,5.1vw,4.2rem)] leading-[.95] font-semibold">
          Senior Software Engineer with a frontend core and strong product delivery experience.
        </h1>
        <div className="mt-5 max-w-3xl space-y-3.5 text-[1rem] leading-[1.9] text-white/74">
          <p>
            I am a Senior Software Engineer with 5+ years of commercial experience building and
            stabilizing production web and mobile products.
          </p>
          <p>
            My core is frontend engineering with React, Next.js, TypeScript, and modern JavaScript,
            but I also work across mobile delivery, backend integration, release flows, and
            AI-assisted product work when end-to-end execution is needed.
          </p>
        </div>

        <div className="mt-7 flex flex-wrap gap-2">
          {ABOUT_ROLE_TAGS.map((item) => (
            <Tag key={item} variant="onMedia">
              {item}
            </Tag>
          ))}
        </div>
      </div>

      <div className="grid gap-4">
        <article className="border-line bg-surface border p-6 max-sm:p-5">
          <p className="text-quiet mb-5 text-xs font-bold tracking-[.16em] uppercase">
            At a glance
          </p>
          <div className="grid gap-3.5 md:grid-cols-2">
            {aboutSnapshot.map((item) => (
              <div key={item.label} className="border-line bg-surface-2/35 border p-4">
                <div className="flex items-center gap-2">
                  <span className="text-accent shrink-0">
                    {getAboutIcon(item.icon, 'h-4.5 w-4.5')}
                  </span>
                  <p className="text-quiet text-[0.72rem] font-bold tracking-[.14em] uppercase">
                    {item.label}
                  </p>
                </div>
                <p className="mt-2 text-sm leading-7 font-medium">{item.value}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
