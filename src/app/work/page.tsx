import { WorkGallery } from '@/features/work';

export const metadata = {
  title: 'Work — Vladimir Petrov',
  description: 'Selected software engineering projects by Vladimir Petrov.',
};

export default function WorkPage() {
  return (
    <main>
      <section className="mb-14 grid grid-cols-[1.08fr_.92fr] items-end gap-12 max-lg:grid-cols-1">
        <h1 className="text-[clamp(3.125rem,7vw,5.625rem)] leading-[.9] font-semibold tracking-[-0.08em]">
          Work archive
        </h1>
        <p className="text-muted text-lg leading-8">
          A visual archive of projects: product context, engineering focus, stack and transition to
          detailed case studies.
        </p>
      </section>

      <WorkGallery />
    </main>
  );
}
