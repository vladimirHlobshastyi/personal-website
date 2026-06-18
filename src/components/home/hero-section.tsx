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
        className="relative min-h-[41.25rem] overflow-hidden bg-cover bg-center shadow-elevated max-lg:min-h-[35rem] max-sm:min-h-[26.875rem]"
        style={{
          backgroundImage:
            "linear-gradient(180deg,rgba(17,16,15,.02),rgba(17,16,15,.24)), url('/images/main_photo.png')",
        }}
      >
        <div className="absolute bottom-lg left-lg text-white">
          <strong className="block text-xl font-semibold tracking-[-0.035em]">
            Vladimir Petrov
          </strong>
          <span className="text-sm text-white/70">Full-stack Developer</span>
        </div>
      </div>

      <div>
        <div className="mb-lg inline-flex items-center gap-lg text-xs font-extrabold uppercase tracking-[.12em] text-accent before:block before:h-px before:w-2.5 before:bg-accent before:opacity-50">
          Software Engineer
        </div>

        <h1 className="text-[clamp(3.625rem,8.2vw,6.75rem)] font-semibold leading-[.88] tracking-tighterX">
          Clean product interfaces for web and mobile.
        </h1>

        <p className="mt-lg max-w-2xl text-lg leading-8 text-muted">
          I build React, Next.js, React Native and Ionic applications with focus on product logic,
          maintainable architecture, performance and polished user experience.
        </p>

        <div className="mt-xl flex flex-wrap gap-lg">
          <Link
            href="/work"
            className="bg-ink px-lg py-md text-sm font-bold text-white shadow-button transition-transform hover:-translate-y-0.5"
          >
            View all work
          </Link>
          <Link
            href="/contact"
            className="bg-white/60 px-lg py-md text-sm font-bold text-ink shadow-soft transition-transform hover:-translate-y-0.5"
          >
            Contact me
          </Link>
        </div>

        <div className="mt-lg flex flex-wrap gap-sm">
          {stack.map((item) => (
            <span
              key={item}
              className="bg-white/60 px-md py-sm text-sm font-semibold text-quiet shadow-subtle"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
