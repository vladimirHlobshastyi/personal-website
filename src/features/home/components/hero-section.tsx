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
            "linear-gradient(180deg,rgba(17,16,15,.02),rgba(17,16,15,.24)), url('/images/main_photo.png')",
        }}
      >
        <div className="absolute bottom-6 left-6 text-white">
          <strong className="block text-xl font-semibold tracking-[-0.035em]">
            Vladimir Petrov
          </strong>
          <span className="text-sm text-white/70">Full-stack Developer</span>
        </div>
      </div>

      <div>
        <div className="text-accent before:bg-accent mb-7 inline-flex items-center gap-3 text-xs font-extrabold tracking-[.12em] uppercase before:block before:h-px before:w-10 before:opacity-50">
          Software Engineer
        </div>

        <h1 className="tracking-tighter-x text-[clamp(3.625rem,8.2vw,6.75rem)] leading-[.88] font-semibold">
          Clean product interfaces for web and mobile.
        </h1>

        <p className="text-muted mt-8 max-w-2xl text-xl leading-8">
          I build React, Next.js, React Native and Ionic applications with focus on product logic,
          maintainable architecture, performance and polished user experience.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/work"
            className="bg-ink shadow-button px-5 py-4 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
          >
            View all work
          </Link>
          <Link
            href="/contact"
            className="text-ink shadow-soft bg-white/60 px-5 py-4 text-sm font-bold transition-transform hover:-translate-y-0.5"
          >
            Contact me
          </Link>
        </div>

        <div className="mt-9 flex flex-wrap gap-2.5">
          {stack.map((item) => (
            <span
              key={item}
              className="text-quiet shadow-subtle bg-white/60 px-3 py-2 text-sm font-semibold"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
