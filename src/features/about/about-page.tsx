import Link from 'next/link';
import { ArrowIcon, Tag, TechIcon } from '@/components/ui';
import { SITE } from '@/config/site';
import {
  aboutDomainFocus,
  aboutExpertise,
  aboutHighlights,
  aboutOwnershipAreas,
  aboutPrinciples,
  aboutSnapshot,
  aboutTechnologyGroups,
} from './about-content';

const roleTags = [
  'Software Engineer',
  'Frontend Engineer',
  'React Developer',
  'Next.js Developer',
  'TypeScript Developer',
  'React Native Developer',
];

export function AboutPage() {
  const aboutUrl = `${SITE.url}/about`;

  const aboutPageLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        '@id': `${aboutUrl}#about`,
        url: aboutUrl,
        name: 'About Vladimir Hlobchastyi',
        description:
          'About Vladimir Hlobchastyi, a Software Engineer focused on frontend architecture, product development, mobile delivery and backend integration.',
        isPartOf: { '@id': `${SITE.url}/#website` },
        about: { '@id': `${SITE.url}/#person` },
        mainEntity: { '@id': `${SITE.url}/#person` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
          { '@type': 'ListItem', position: 2, name: 'About', item: aboutUrl },
        ],
      },
    ],
  };

  return (
    <main className="grid gap-5">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageLd) }}
      />

      <section className="grid grid-cols-[1.08fr_.92fr] gap-5 max-lg:grid-cols-1">
        <div className="bg-inverse text-inverse-fg p-10 max-sm:p-7">
          <p className="text-accent before:bg-accent/50 mb-6 inline-flex items-center gap-3 text-xs font-bold tracking-[.18em] uppercase before:block before:h-px before:w-10">
            About
          </p>
          <h1 className="tracking-tightest max-w-4xl text-[clamp(2.8rem,6.2vw,5rem)] leading-[.92] font-semibold">
            Software Engineer focused on maintainable frontend systems and product delivery.
          </h1>
          <div className="mt-6 max-w-3xl space-y-4 text-lg leading-8 text-white/74">
            <p>
              I am Vladimir Hlobchastyi, a Software Engineer with more than five years of commercial
              experience across web development, mobile development, backend integration and product
              delivery. Most of my work sits at the intersection of product engineering and UI
              engineering: building interfaces that are fast, clear, reliable and realistic for a
              team to maintain after launch.
            </p>
            <p>
              My main specialization is frontend engineering with React, Next.js, TypeScript and
              modern JavaScript, but I am not limited to the frontend layer. I regularly work across
              API contracts, authentication, payments, realtime features, monitoring, deployment and
              release processes when that is what the product needs.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {roleTags.map((item) => (
              <Tag key={item} variant="onMedia" icon={false}>
                {item}
              </Tag>
            ))}
          </div>
        </div>

        <div className="grid gap-5">
          <article className="border-line bg-surface border p-8 max-sm:p-6">
            <p className="text-quiet mb-5 text-xs font-bold tracking-[.16em] uppercase">
              At a glance
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {aboutSnapshot.map(([label, value]) => (
                <div key={label} className="border-line bg-surface-2/35 border p-4">
                  <p className="text-quiet text-[0.72rem] font-bold tracking-[.14em] uppercase">
                    {label}
                  </p>
                  <p className="mt-2 text-sm leading-7 font-medium">{value}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="border-line bg-surface border p-8 max-sm:p-6">
            <p className="text-quiet mb-5 text-xs font-bold tracking-[.16em] uppercase">Snapshot</p>
            <div className="grid gap-4 sm:grid-cols-3">
              {aboutHighlights.map(([value, label]) => (
                <div key={value} className="border-line bg-surface-2/35 border p-4">
                  <p className="text-[1.5rem] leading-none font-semibold tracking-[-0.04em]">
                    {value}
                  </p>
                  <p className="text-muted mt-2 text-sm leading-7">{label}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="border-line bg-surface border p-8 max-sm:p-6">
            <p className="text-quiet mb-5 text-xs font-bold tracking-[.16em] uppercase">
              Principles
            </p>
            <ul className="grid gap-3">
              {aboutPrinciples.map((item) => (
                <li
                  key={item}
                  className="text-muted border-line border-b pb-3 text-sm leading-7 last:border-b-0 last:pb-0"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-[1.1fr_.9fr]">
        <article className="border-line bg-surface border p-8 max-sm:p-6">
          <p className="text-quiet mb-4 text-xs font-bold tracking-[.16em] uppercase">Who I am</p>
          <div className="text-muted grid gap-4 text-[1.03rem] leading-8">
            <p>
              I work as a Software Engineer with a strong frontend core. In practice that means I
              spend most of my time on product-facing systems built with React, Next.js, TypeScript
              and modern JavaScript, but I also move comfortably into mobile delivery, backend
              integration and release work when the product requires it. I am not limited to
              assembling interfaces. I care about the engineering shape of the product: how the code
              is structured, how reliable the flows are, and whether the system will still be easy
              for a team to extend later.
            </p>
            <p>
              My commercial experience comes from real product environments rather than isolated
              demo work. I have worked inside existing codebases, shipped into live products,
              handled refactoring alongside feature delivery, and collaborated with product teams
              where design constraints, backend contracts, release pressure and maintenance all
              matter at the same time. That is the environment where I work best.
            </p>
          </div>
        </article>

        <div className="grid gap-5">
          {aboutExpertise.map((item) => (
            <article key={item.title} className="border-line bg-surface border p-8 max-sm:p-6">
              <h2 className="text-lg font-semibold tracking-[-0.03em]">{item.title}</h2>
              <p className="text-muted mt-3 text-sm leading-7">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-[1.02fr_.98fr]">
        <article className="border-line bg-surface border p-8 max-sm:p-6">
          <p className="text-quiet mb-5 text-xs font-bold tracking-[.16em] uppercase">
            What I can own
          </p>
          <ul className="grid gap-3">
            {aboutOwnershipAreas.map((item) => (
              <li
                key={item}
                className="border-line text-muted bg-surface-2/35 border px-4 py-3 text-sm leading-7"
              >
                {item}
              </li>
            ))}
          </ul>
        </article>

        <article className="border-line bg-surface border p-8 max-sm:p-6">
          <p className="text-quiet mb-5 text-xs font-bold tracking-[.16em] uppercase">
            Domain experience
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {aboutDomainFocus.map((item) => (
              <div
                key={item}
                className="border-line bg-surface-2/35 px-4 py-3 text-sm leading-7 font-medium"
              >
                {item}
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="border-line bg-surface border p-8 max-sm:p-6">
        <div className="grid gap-8 lg:grid-cols-[.98fr_1.02fr]">
          <div>
            <p className="text-quiet mb-4 text-xs font-bold tracking-[.16em] uppercase">
              How I work
            </p>
            <div className="text-muted grid gap-4 text-[1.03rem] leading-8">
              <p>
                As a Frontend Engineer and Frontend Developer, I care a lot about structure. I do
                not see clean architecture as a ceremony or a folder exercise. For me, it means
                clear ownership, small enough responsibilities, stable interfaces between modules,
                and code that still makes sense six months later when the team needs to change it.
                That matters in product development because speed without structure only moves
                problems forward.
              </p>
              <p>
                I usually work on products with non-trivial UI: dashboards, onboarding flows,
                internal platforms, multi-step forms, realtime surfaces, subscription products and
                mobile applications with a lot of state. In those systems, frontend architecture
                matters because weak boundaries quickly turn into regressions, duplicated logic and
                expensive rework. I prefer derived state over duplicated state, early returns over
                nesting, and straightforward components over abstractions that look reusable but
                hide business rules.
              </p>
              <p>
                Performance optimization is part of implementation, not a final cleanup pass. I
                think about rendering cost, network behavior, bundle weight, image handling, data
                fetching and perceived speed while building the feature. The same applies to
                accessibility. Keyboard behavior, semantics, focus management, color contrast and
                readable content are basic product quality requirements. Good UX is not only a
                design outcome; it depends on engineering decisions that keep the interface
                responsive, understandable and predictable for real users.
              </p>
              <p>
                I also spend a lot of time collaborating rather than coding in isolation. Working
                well inside product teams means communicating tradeoffs clearly, translating design
                intent into implementation details, and resolving backend constraints without drama.
                With designers, I try to preserve the product idea while making states, edge cases
                and responsiveness concrete. With backend developers, I care about API contracts,
                failure states, pagination, authorization boundaries and realistic data shapes so
                the frontend is not forced into brittle assumptions later.
              </p>
              <p>
                AI-assisted development is part of modern engineering now, and I use it
                pragmatically. It helps with iteration speed, code exploration, pattern discovery
                and repetitive tasks. But AI does not remove the need for reasoning about product
                behavior, performance, naming, boundaries, accessibility or long-term
                maintainability. I am comfortable both using AI productively and cleaning up
                AI-generated code when the output is not ready for production.
              </p>
            </div>
          </div>

          <div className="grid gap-5">
            {aboutTechnologyGroups.map((group) => (
              <article key={group.title} className="border-line bg-surface-2/35 border p-6">
                <p className="text-quiet mb-4 text-xs font-bold tracking-[.16em] uppercase">
                  {group.title}
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {group.items.map((item) => (
                    <div
                      key={item}
                      className="border-line bg-bg/55 flex items-center gap-3 border px-4 py-3"
                    >
                      <TechIcon name={item} className="text-accent h-5 w-5" />
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}

            <article className="border-line bg-surface border p-6">
              <p className="text-quiet mb-4 text-xs font-bold tracking-[.16em] uppercase">
                Why React and Next.js
              </p>
              <p className="text-muted text-sm leading-7">
                I chose React because it scales well from small interfaces to large product surfaces
                when the component model is used with discipline. I chose Next.js because it gives a
                strong production foundation for routing, rendering strategy, metadata, performance
                work and deployment without fighting the React model.
              </p>
            </article>

            <article className="bg-inverse text-inverse-fg p-6">
              <p className="text-accent mb-3 text-xs font-bold tracking-[.16em] uppercase">
                Next step
              </p>
              <p className="text-inverse-fg/74 text-sm leading-7">
                I am looking for strong teams, useful products and ambitious frontend or
                cross-functional product work. I am a good fit for companies that need a React
                Developer, Next.js Developer, TypeScript Developer, React Native Developer or more
                broadly a Software Engineer who can ship across boundaries without overcomplicating
                the codebase.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/work"
                  className="bg-bg text-fg inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5"
                >
                  View work
                  <ArrowIcon className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  data-analytics-event="contact_click"
                  data-analytics-label="about_contact"
                  className="border border-white/12 px-5 py-3 text-sm font-semibold text-white/90 transition-colors hover:border-white/30"
                >
                  Contact
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
