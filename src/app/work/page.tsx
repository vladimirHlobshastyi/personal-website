import { ConfidentialityNotice } from '@/components/features';
import { projects } from '@/constants';
import { WorkGallery } from './_components/work-gallery';
import { createWorkCollectionJsonLd, workIndexMetadata } from './_utils/work-page';

export const metadata = workIndexMetadata;

export default function WorkPage() {
  const collectionLd = createWorkCollectionJsonLd(projects);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionLd) }}
      />
      <section className="mb-10 grid grid-cols-[1.08fr_.92fr] items-end gap-12 max-lg:grid-cols-1">
        <h1 className="text-[clamp(3.125rem,7vw,5.625rem)] leading-[.9] font-semibold tracking-[-0.08em]">
          Selected projects
        </h1>
        <p className="text-muted text-lg leading-8">
          Product case studies across logistics, marketplaces, social apps, healthcare,
          subscriptions, realtime communication, and operational systems.
        </p>
      </section>

      <section
        aria-labelledby="work-domains"
        className="border-line bg-surface mb-10 grid grid-cols-3 gap-0 border max-md:grid-cols-1"
      >
        <h2 id="work-domains" className="sr-only">
          Project categories
        </h2>
        <div className="border-line border-r p-6 max-md:border-r-0 max-md:border-b">
          <p className="text-quiet mb-2 text-[0.7rem] font-bold tracking-[.16em] uppercase">Web</p>
          <p className="text-fg text-sm leading-7">
            React, Next.js, TypeScript, Node.js, APIs, and data-connected workflows for SaaS
            dashboards, marketplaces, logistics, real estate, and conversion-driven web products.
          </p>
        </div>
        <div className="border-line border-r p-6 max-md:border-r-0 max-md:border-b">
          <p className="text-quiet mb-2 text-[0.7rem] font-bold tracking-[.16em] uppercase">
            Mobile
          </p>
          <p className="text-fg text-sm leading-7">
            React Native and Ionic for iOS and Android, connected to APIs, auth, push notifications,
            offline data, and release workflows.
          </p>
        </div>
        <div className="p-6">
          <p className="text-quiet mb-2 text-[0.7rem] font-bold tracking-[.16em] uppercase">
            Realtime &amp; integrations
          </p>
          <p className="text-fg text-sm leading-7">
            Node.js, Express.js, GraphQL, REST APIs, WebRTC, WebSockets, Stripe, Mapbox, and AI
            integrations wired into production user flows.
          </p>
        </div>
      </section>

      <ConfidentialityNotice className="mb-10" />

      <WorkGallery />
    </main>
  );
}
