import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="mt-2xl grid grid-cols-[1fr_auto] items-end gap-lg bg-dark p-lg text-white shadow-elevated max-lg:grid-cols-1 max-sm:p-lg">
      <div>
        <h2 className="max-w-3xl text-[clamp(2.625rem,6.6vw,5.125rem)] font-semibold leading-[.92] tracking-[-0.075em]">
          {"Let's build something clean and useful."}
        </h2>
        <p className="mt-md max-w-xl text-lg leading-8 text-white/65">
          Available for software engineering work: web platforms, mobile applications, dashboards,
          maps, complex forms and reusable product interfaces.
        </p>
      </div>

      <div className="flex flex-wrap justify-end gap-sm max-lg:justify-start">
        <a
          className="bg-white/10 px-md py-sm text-sm font-bold text-white/90"
          href="mailto:vladimirp300@gmail.com"
        >
          Email
        </a>
        <Link className="bg-white/10 px-md py-sm text-sm font-bold text-white/90" href="#">
          LinkedIn
        </Link>
        <Link className="bg-white/10 px-md py-sm text-sm font-bold text-white/90" href="#">
          GitHub
        </Link>
      </div>
    </footer>
  );
}
