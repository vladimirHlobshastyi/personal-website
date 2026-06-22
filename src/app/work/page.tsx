import { WorkGallery } from '@/features/work';

export const metadata = {
  title: 'Work',
  description:
    'Selected web and mobile product work by Vladimir Hlobchastyi — EdTech, health, logistics, social and realtime apps built with React, Next.js, React Native and Ionic.',
  alternates: { canonical: '/work' },
};

export default function WorkPage() {
  return (
    <main>
      <section className="mb-14 grid grid-cols-[1.08fr_.92fr] items-end gap-12 max-lg:grid-cols-1">
        <h1 className="text-[clamp(3.125rem,7vw,5.625rem)] leading-[.9] font-semibold tracking-[-0.08em]">
          Work archive
        </h1>
        <p className="text-muted text-lg leading-8">
          Selected web and mobile product work, organized for fast scanning: what the product is,
          where it runs, what makes it useful and which technologies shaped delivery.
        </p>
      </section>

      <WorkGallery />
    </main>
  );
}
