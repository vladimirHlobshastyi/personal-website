import Link from 'next/link';
import { ROUTES } from '@/constants';
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
          <span className="text-[0.8125rem] font-medium text-white/60">
            Senior Software Engineer · Product-Minded · Web · Mobile · Full-Stack
          </span>
        </div>
      </div>

      <div>
        <div className="text-accent before:bg-accent/50 mb-7 inline-flex items-center gap-3 text-[0.6875rem] font-bold tracking-[.14em] uppercase before:block before:h-px before:w-10">
          Senior Software Engineer (Product-Minded) · Web · Mobile · Full-Stack
        </div>

        <h1 className="tracking-tightest text-[clamp(3rem,7vw,5.75rem)] leading-[.9] font-semibold">
          Senior Software Engineer building web and mobile products across the stack.
        </h1>

        <div className="text-muted mt-7 grid max-w-[36rem] gap-4 text-[1.0625rem] leading-[1.7]">
          <p>
            I have <strong className="text-fg font-semibold">5+ years</strong> of commercial
            experience building and stabilizing production products with{' '}
            <strong className="text-fg font-semibold">React</strong>,{' '}
            <strong className="text-fg font-semibold">Next.js</strong>,{' '}
            <strong className="text-fg font-semibold">React Native</strong>,{' '}
            <strong className="text-fg font-semibold">TypeScript</strong>, and{' '}
            <strong className="text-fg font-semibold">Node.js</strong>.
          </p>
          <p>
            My strongest area is frontend architecture, but I work across business logic, APIs,
            backend services, auth, payments, realtime features, data flows, and release work. I
            also audit and refactor AI-generated codebases when they need structure. I use AI for
            product research, testing, debugging, and faster implementation, while validating the
            decisions and final code myself.
          </p>
        </div>

        <div className="mt-9 flex flex-wrap gap-3">
          <Link
            href={ROUTES.work}
            className="bg-fg text-bg px-6 py-[0.9375rem] text-[0.8125rem] font-bold tracking-[.02em] transition-transform hover:-translate-y-0.5"
          >
            View my work
          </Link>
          <Link
            href={ROUTES.about}
            className="text-fg border-line bg-surface hover:border-line-strong border px-6 py-[0.9375rem] text-[0.8125rem] font-bold tracking-[.02em] transition-colors"
          >
            How I work
          </Link>
          <Link
            href={ROUTES.contact}
            data-analytics-event="contact_click"
            data-analytics-label="home_hero_contact"
            className="text-fg border-line bg-surface hover:border-line-strong border px-6 py-[0.9375rem] text-[0.8125rem] font-bold tracking-[.02em] transition-colors"
          >
            Get in touch
          </Link>
        </div>

        <div className="border-line mt-9 border-t pt-8">
          <p className="text-quiet mb-4 text-xs font-bold tracking-[.14em] uppercase">Core stack</p>
          <SkillList />
        </div>
      </div>
    </section>
  );
}
