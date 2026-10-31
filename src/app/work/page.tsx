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
      <section className="mb-8 grid grid-cols-[1fr_.8fr] items-end gap-10 max-lg:grid-cols-1">
        <h1 className="tracking-tightest text-[clamp(2.75rem,5.2vw,4.5rem)] leading-[.98] font-semibold">
          Selected projects
        </h1>
        <p className="text-muted text-lg leading-8">
          A selection of web and mobile products I’ve helped build, ship, and improve.
        </p>
      </section>

      <p className="text-muted mb-8 max-w-3xl text-sm leading-6">
        Commercial work is shown with anonymized names and visuals where needed.
      </p>

      <WorkGallery />
    </main>
  );
}
