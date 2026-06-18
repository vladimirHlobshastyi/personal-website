import Link from 'next/link';

const stack = ['React', 'Next.js', 'TypeScript', 'React Native', 'Ionic React', 'GraphQL', 'Node.js'];

export function HeroSection() {
  return (
    <section className="grid min-h-[calc(100vh-170px)] grid-cols-[minmax(330px,.9fr)_minmax(440px,1.1fr)] items-center gap-[clamp(44px,7vw,96px)] max-lg:grid-cols-1">
      <div className="relative min-h-[660px] overflow-hidden bg-[linear-gradient(180deg,rgba(17,16,15,.02),rgba(17,16,15,.24)),url('https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1500&auto=format&fit=crop')] bg-cover bg-center shadow-elevated max-lg:min-h-[560px] max-sm:min-h-[430px]">
        <div className="absolute bottom-6 left-6 text-white">
          <strong className="block text-xl font-semibold tracking-[-0.035em]">
            Vladimir Petrov
          </strong>
          <span className="text-sm text-white/70">Portrait placeholder</span>
        </div>
      </div>

      <div>
        <div className="mb-7 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[.12em] text-accent before:block before:h-px before:w-10 before:bg-accent before:opacity-50">
          Software Engineer
        </div>

        <h1 className="text-[clamp(58px,8.2vw,108px)] font-semibold leading-[.88] tracking-tighterX">
          Clean product interfaces for web and mobile.
        </h1>

        <p className="mt-8 max-w-2xl text-xl leading-8 text-muted">
          I build React, Next.js, React Native and Ionic applications with focus on
          product logic, maintainable architecture, performance and polished user experience.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/work" className="bg-ink px-5 py-4 text-sm font-bold text-white shadow-[0_16px_38px_rgba(17,16,15,.16)] transition-transform hover:-translate-y-0.5">
            View all work
          </Link>
          <Link href="/contact" className="bg-white/60 px-5 py-4 text-sm font-bold text-ink shadow-soft transition-transform hover:-translate-y-0.5">
            Contact me
          </Link>
        </div>

        <div className="mt-9 flex flex-wrap gap-2.5">
          {stack.map((item) => (
            <span key={item} className="bg-white/60 px-3 py-2 text-sm font-semibold text-[#665e57] shadow-[0_10px_28px_rgba(40,28,20,.035)]">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
