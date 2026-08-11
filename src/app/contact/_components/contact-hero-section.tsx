import { CONTACT_QUICK_FACTS } from '../_constants/contact.constants';

export function ContactHeroSection() {
  return (
    <div className="p-10 max-sm:p-6 lg:p-12">
      <p className="text-accent before:bg-accent/50 mb-6 inline-flex items-center gap-3 text-xs font-bold tracking-[.18em] uppercase before:block before:h-px before:w-10">
        Contact · Start a conversation
      </p>
      <h1 className="tracking-tightest max-w-3xl text-[clamp(2.65rem,5vw,4.25rem)] leading-[.98] font-semibold">
        Tell me what you are building and where the work is stuck.
      </h1>
      <div className="text-muted mt-7 max-w-2xl space-y-4 text-[1.025rem] leading-[1.85]">
        <p>
          A useful first message can be short: what the product does, its current stage, the main
          technical or delivery problem, and the outcome you need.
        </p>
        <p>
          I work on complex frontend systems, web and mobile delivery, integrations, and careful
          recovery of existing codebases. Email and Telegram are the fastest ways to reach me.
        </p>
      </div>

      <dl className="border-line mt-10 grid border-y sm:grid-cols-3">
        {CONTACT_QUICK_FACTS.map((item) => (
          <div
            key={item.label}
            className="border-line border-b py-4 last:border-b-0 sm:border-r sm:border-b-0 sm:px-4 sm:first:pl-0 sm:last:border-r-0 sm:last:pr-0"
          >
            <dt className="text-quiet text-[0.7rem] font-bold tracking-[.14em] uppercase">
              {item.label}
            </dt>
            <dd className="mt-2 text-sm leading-6 font-medium">{item.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
