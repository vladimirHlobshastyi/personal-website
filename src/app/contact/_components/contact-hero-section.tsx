import { Tag } from '@/components/ui';
import { CONTACT_QUICK_FACTS, CONTACT_WORK_FOCUS } from '../_constants/contact.constants';

export function ContactHeroSection() {
  return (
    <div className="bg-inverse text-inverse-fg p-10 max-sm:p-7">
      <p className="text-accent before:bg-accent/50 mb-6 inline-flex items-center gap-3 text-xs font-bold tracking-[.18em] uppercase before:block before:h-px before:w-10">
        Contact
      </p>
      <h1 className="tracking-tightest max-w-3xl text-[clamp(2.5rem,6vw,4.75rem)] leading-[.92] font-semibold">
        Contact for senior web, mobile, and AI codebase work.
      </h1>
      <p className="text-inverse-fg/70 mt-5 max-w-2xl text-lg leading-8">
        I help teams build, stabilize, and refactor production products with React, Next.js,
        React Native, TypeScript, and Node.js.
      </p>
      <p className="text-inverse-fg/70 mt-4 max-w-2xl text-lg leading-8">
        I also analyze AI-generated codebases, identify structural risks, support ongoing
        delivery, and refactor unstable systems into production-ready software. The fastest
        response is by email or Telegram.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {CONTACT_WORK_FOCUS.map((item) => (
          <Tag key={item} variant="onMedia" icon={false}>
            {item}
          </Tag>
        ))}
      </div>

      <div className="mt-10 grid gap-3 sm:grid-cols-3">
        {CONTACT_QUICK_FACTS.map((item) => (
          <div key={item.label} className="border border-white/12 bg-white/4 p-4">
            <p className="text-inverse-fg/50 text-[0.72rem] font-bold tracking-[.14em] uppercase">
              {item.label}
            </p>
            <p className="mt-2 text-sm leading-6 font-medium">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
