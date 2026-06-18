import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="bg-dark shadow-elevated mt-32 grid grid-cols-[1fr_auto] items-end gap-8 p-14 text-white max-lg:grid-cols-1 max-sm:p-8">
      <div>
        <p className="mb-4 text-sm font-bold tracking-[.1em] text-white/40 uppercase">
          Vladimir Hlobchastyi
        </p>
        <h2 className="max-w-3xl text-[clamp(2.625rem,6.6vw,5.125rem)] leading-[.92] font-semibold tracking-[-0.075em]">
          {"Let's build something clean and useful."}
        </h2>
        <p className="mt-5 max-w-xl text-lg leading-8 text-white/65">
          Available for software engineering work: web platforms, mobile applications, dashboards,
          maps, complex forms and reusable product interfaces.
        </p>
      </div>

      <div className="flex flex-wrap justify-end gap-2 max-lg:justify-start">
        <a
          className="bg-white/10 px-4 py-3 text-sm font-bold text-white/90 transition-colors hover:bg-white/20"
          href="mailto:vladimirp300@gmail.com"
        >
          Email
        </a>
        <Link
          className="bg-white/10 px-4 py-3 text-sm font-bold text-white/90 transition-colors hover:bg-white/20"
          href="#"
        >
          LinkedIn
        </Link>
        <Link
          className="bg-white/10 px-4 py-3 text-sm font-bold text-white/90 transition-colors hover:bg-white/20"
          href="#"
        >
          GitHub
        </Link>
      </div>
    </footer>
  );
}
