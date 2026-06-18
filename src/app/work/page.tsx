import { WorkGallery } from '@/components/work/work-gallery';

export const metadata = {
  title: 'Work — Vladimir Petrov',
  description: 'Selected software engineering projects by Vladimir Petrov.',
};

export default function WorkPage() {
  return (
    <main>
      <section className="mb-14 grid grid-cols-[1.08fr_.92fr] items-end gap-12 max-lg:grid-cols-1">
        <h1 className="text-[clamp(50px,7vw,90px)] font-semibold leading-[.9] tracking-[-0.08em]">
          Work archive
        </h1>
        <p className="text-lg leading-8 text-muted">
          A visual archive of projects: product context, engineering focus, stack and
          transition to detailed case studies.
        </p>
      </section>

      <WorkGallery />
    </main>
  );
}
