import Link from 'next/link';
import { ArrowIcon, Tag, TechIcon } from '@/components/ui';
import { SITE } from '@/config/site';
import {
  aboutExpertise,
  aboutSnapshot,
  aboutTechnologyGroups,
  aboutWhoIAmSignals,
  aboutWorkStyle,
} from './about-content';
import { AboutCapabilityCard } from './components/about-capability-card';
import {
  BriefcaseIcon,
  CheckShieldIcon,
  ClockStrokeIcon,
  CompassStrokeIcon,
  ConnectedNodesIcon,
  ConversationIcon,
  GlobeStrokeIcon,
  LayeredBlocksIcon,
  MobileStackIcon,
  SparkFrameIcon,
  SpeedLinesIcon,
} from './components/about-icons';
import { AboutWorkStyleCard } from './components/about-work-style-card';

const roleTags = [
  'Software Engineer',
  'Frontend Engineer',
  'React Developer',
  'Next.js Developer',
  'TypeScript Developer',
  'React Native Developer',
];

function getAboutIcon(name: string) {
  const className = 'h-5 w-5';

  switch (name) {
    case 'architecture':
      return <LayeredBlocksIcon className={className} />;
    case 'mobile':
      return <MobileStackIcon className={className} />;
    case 'integration':
      return <ConnectedNodesIcon className={className} />;
    case 'ai':
      return <SparkFrameIcon className={className} />;
    case 'compass':
      return <CompassStrokeIcon className={className} />;
    case 'speed':
      return <SpeedLinesIcon className={className} />;
    case 'collaboration':
      return <ConversationIcon className={className} />;
    default:
      return <LayeredBlocksIcon className={className} />;
  }
}

function getSnapshotIcon(label: string) {
  const className = 'h-4.5 w-4.5';

  switch (label) {
    case 'Role':
      return <BriefcaseIcon className={className} />;
    case 'Primary stack':
      return <LayeredBlocksIcon className={className} />;
    case 'Commercial experience':
      return <CheckShieldIcon className={className} />;
    case 'Platforms':
      return <MobileStackIcon className={className} />;
    case 'Domains':
      return <GlobeStrokeIcon className={className} />;
    case 'Collaboration':
      return <ConversationIcon className={className} />;
    case 'Location':
      return <GlobeStrokeIcon className={className} />;
    case 'Availability':
      return <ClockStrokeIcon className={className} />;
    default:
      return <LayeredBlocksIcon className={className} />;
  }
}

function getSignalIcon(title: string) {
  const className = 'h-4.5 w-4.5';

  switch (title) {
    case 'Strong frontend core':
      return <LayeredBlocksIcon className={className} />;
    case 'Commercial product experience':
      return <BriefcaseIcon className={className} />;
    case 'Cross-boundary delivery':
      return <ConnectedNodesIcon className={className} />;
    case 'Maintainability matters':
      return <CheckShieldIcon className={className} />;
    default:
      return <LayeredBlocksIcon className={className} />;
  }
}

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
    <main className="grid gap-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageLd) }}
      />

      <section className="grid grid-cols-[1.08fr_.92fr] items-start gap-4 max-lg:grid-cols-1">
        <div className="bg-inverse text-inverse-fg p-8 max-sm:p-6">
          <p className="text-accent before:bg-accent/50 mb-6 inline-flex items-center gap-3 text-xs font-bold tracking-[.18em] uppercase before:block before:h-px before:w-10">
            About
          </p>
          <h1 className="tracking-tightest max-w-4xl text-[clamp(2.35rem,5.1vw,4.2rem)] leading-[.95] font-semibold">
            Frontend-focused Software Engineer for web, mobile and product delivery.
          </h1>
          <div className="mt-5 max-w-3xl space-y-3.5 text-[1rem] leading-[1.9] text-white/74">
            <p>
              I am Vladimir Hlobchastyi, a Software Engineer with 5+ years of commercial experience
              across web development, mobile development, backend integration and product delivery.
            </p>
            <p>
              My core is frontend engineering with React, Next.js, TypeScript and modern JavaScript,
              but I also work across mobile, backend integration, deployment and release when the
              product needs end-to-end execution.
            </p>
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {roleTags.map((item) => (
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
              {aboutSnapshot.map(([label, value]) => (
                <div key={label} className="border-line bg-surface-2/35 border p-4">
                  <div className="flex items-center gap-2">
                    <span className="text-accent shrink-0">{getSnapshotIcon(label)}</span>
                    <p className="text-quiet text-[0.72rem] font-bold tracking-[.14em] uppercase">
                      {label}
                    </p>
                  </div>
                  <p className="mt-2 text-sm leading-7 font-medium">{value}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="grid gap-4">
        <article className="border-line bg-surface border px-4 py-5 text-center max-sm:px-4 max-sm:py-5">
          <div className="flex px-4">
            <p className="text-quiet mb-2 text-[0.72rem] font-semibold tracking-[.16em] uppercase">
              Who I am
            </p>
          </div>
          <div className="text-muted grid gap-2.5 p-4 text-left text-[1rem] leading-[1.8]">
            <p>
              I work as a <strong className="text-fg font-semibold">Software Engineer</strong> with
              a <strong className="text-fg font-semibold">strong frontend core</strong>. Most of my
              day-to-day work is product-facing engineering with{' '}
              <strong className="text-fg font-semibold">React</strong>,{' '}
              <strong className="text-fg font-semibold">Next.js</strong>,{' '}
              <strong className="text-fg font-semibold">TypeScript</strong> and modern{' '}
              <strong className="text-fg font-semibold">JavaScript</strong>, but I also move
              comfortably into <strong className="text-fg font-semibold">mobile delivery</strong>,{' '}
              <strong className="text-fg font-semibold">backend integration</strong> and release
              work when the product requires it.
            </p>
            <p>
              My experience comes from{' '}
              <strong className="text-fg font-semibold">live products</strong>, existing codebases
              and teams that need software to keep evolving, not just look good once. I care about
              the engineering shape of the product: how the code is structured, how reliable the
              flows are and whether the system will still be easy for a team to extend later.
            </p>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {aboutWhoIAmSignals.map((item) => (
              <div key={item.title} className="border-line bg-surface-2/35 border p-4">
                <div className="flex items-center gap-2">
                  <span className="text-accent shrink-0">{getSignalIcon(item.title)}</span>
                  <p className="text-fg text-sm font-semibold">{item.title}</p>
                </div>
                <p className="text-muted mt-1.5 text-sm leading-7">{item.text}</p>
              </div>
            ))}
          </div>
        </article>

        <div className="grid gap-4 lg:grid-cols-2">
          {aboutExpertise.map((item) => (
            <AboutCapabilityCard
              key={item.title}
              title={item.title}
              summary={item.summary}
              points={item.points}
              tags={item.tags}
              icon={getAboutIcon(item.icon)}
            />
          ))}
        </div>
      </section>

      <section className="border-line bg-surface border p-6 max-sm:p-5">
        <div className="grid items-start gap-6 lg:grid-cols-[.98fr_1.02fr]">
          <div>
            <p className="text-quiet mb-4 text-xs font-bold tracking-[.16em] uppercase">
              How I work
            </p>
            <div className="text-muted grid max-w-3xl gap-3.5 text-[1rem] leading-[1.9]">
              <p>
                The main idea is simple:{' '}
                <strong className="text-fg font-semibold">
                  make the code easier to change, not just faster to ship
                </strong>
                . The best products I have worked on were not the ones with the most abstractions,
                but the ones where the team could understand the system, extend it safely and keep
                quality high under pressure.
              </p>
            </div>

            <div className="mt-5 grid gap-3.5">
              {aboutWorkStyle.map((item) => (
                <AboutWorkStyleCard
                  key={item.title}
                  title={item.title}
                  summary={item.summary}
                  points={item.points}
                  icon={getAboutIcon(item.icon)}
                />
              ))}
            </div>
          </div>

          <div className="grid gap-4 self-start">
            {aboutTechnologyGroups.map((group) => (
              <article key={group.title} className="border-line bg-surface-2/35 border p-5">
                <p className="text-quiet mb-4 text-xs font-bold tracking-[.16em] uppercase">
                  {group.title}
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {group.items.map((item) => (
                    <div
                      key={item}
                      className="border-line bg-bg/55 flex items-center gap-3 border px-4 py-3"
                    >
                      <TechIcon name={item} className="text-accent h-4.5 w-4.5" />
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}

            <article className="border-line bg-surface border p-5">
              <p className="text-quiet mb-4 text-xs font-bold tracking-[.16em] uppercase">
                Why React and Next.js
              </p>
              <p className="text-muted text-sm leading-7">
                I chose React because it scales well from small interfaces to large product surfaces
                when the component model is used with discipline. I chose Next.js because it gives a
                strong production foundation for routing, rendering, metadata, performance and
                deployment without fighting the React model.
              </p>
            </article>

            <article className="bg-inverse text-inverse-fg p-5">
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
