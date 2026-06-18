import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="mt-32 grid grid-cols-[1fr_auto] items-end gap-8 bg-[#141210] p-14 text-white shadow-elevated max-lg:grid-cols-1 max-sm:p-8">
      <div>
        <h2 className="max-w-3xl text-[clamp(42px,6.6vw,82px)] font-semibold leading-[.92] tracking-[-0.075em]">
          Let’s build something clean and useful.
        </h2>
        <p className="mt-5 max-w-xl text-lg leading-8 text-white/65">
          Available for software engineering work: web platforms, mobile applications,
          dashboards, maps, complex forms and reusable product interfaces.
        </p>
      </div>

      <div className="flex flex-wrap justify-end gap-2 max-lg:justify-start">
        <a className="bg-white/10 px-4 py-3 text-sm font-bold text-white/90" href="mailto:vladimirp300@gmail.com">
          Email
        </a>
        <Link className="bg-white/10 px-4 py-3 text-sm font-bold text-white/90" href="#">
          LinkedIn
        </Link>
        <Link className="bg-white/10 px-4 py-3 text-sm font-bold text-white/90" href="#">
          GitHub
        </Link>
      </div>
    </footer>
  );
}
