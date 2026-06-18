import Link from 'next/link';

const stack = [
  'React',
  'Next.js',
  'TypeScript',
  'React Native',
  'Ionic React',
  'GraphQL',
  'Node.js',
];

export function HeroSection() {
  return (
    <section className="grid min-h-[calc(100vh-10.625rem)] grid-cols-[minmax(20.625rem,.9fr)_minmax(27.5rem,1.1fr)] items-center gap-[clamp(2.75rem,7vw,6rem)] max-lg:grid-cols-1">
      <div
        className="shadow-elevated relative min-h-[41.25rem] overflow-hidden bg-cover bg-center max-lg:min-h-[35rem] max-sm:min-h-[26.875rem]"
        style={{
          backgroundImage:
            "linear-gradient(180deg,rgba(17,16,15,.02),rgba(17,16,15,.28)), url('/images/main_photo.png')",
        }}
      >
        <div className="absolute bottom-7 left-7">
          <strong className="block text-lg font-semibold tracking-[-0.02em] text-white">
            Vladimir Hlobchastyi
          </strong>
          <span className="text-[0.8125rem] font-medium text-white/60">Software Engineer</span>
        </div>
      </div>

      <div>
        <div className="mb-7 inline-flex items-center gap-3 text-[0.6875rem] font-bold tracking-[.14em] text-accent uppercase before:block before:h-px before:w-10 before:bg-accent/40">
          Available for work
        </div>

        <h1 className="tracking-tighter-x text-[clamp(3.25rem,8vw,6.5rem)] leading-[.88] font-semibold">
          Building polished product interfaces.
        </h1>

        <p className="mt-7 max-w-[34rem] text-[1.0625rem] leading-[1.7] text-muted">
          I design and build React, Next.js, React Native and Ionic applications with focus on
          product logic, scalable architecture and user experience that feels right.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/work"
            className="bg-ink shadow-button px-6 py-[0.9375rem] text-[0.8125rem] font-bold tracking-[.02em] text-white transition-transform hover:-translate-y-0.5"
          >
            View all work
          </Link>
          <Link
            href="/contact"
            className="text-ink shadow-soft bg-white/60 px-6 py-[0.9375rem] text-[0.8125rem] font-bold tracking-[.02em] transition-transform hover:-translate-y-0.5"
          >
            Contact me
          </Link>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {stack.map((item) => (
            <span
              key={item}
              className="shadow-subtle bg-white/55 px-3.5 py-[0.4375rem] text-[0.8125rem] font-medium text-quiet"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
