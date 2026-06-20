export const metadata = {
  title: 'Contact — Vladimir Hlobchastyi',
  description: 'Contact Vladimir Hlobchastyi for software engineering work.',
};

export default function ContactPage() {
  return (
    <main className="bg-inverse text-inverse-fg shadow-float p-14 max-sm:p-8">
      <h1 className="tracking-tightest max-w-3xl text-[clamp(3.125rem,7vw,5.625rem)] leading-[.9] font-semibold">
        {"Let's build something clean and useful."}
      </h1>
      <p className="text-inverse-fg/65 mt-6 max-w-2xl text-lg leading-8">
        Available for software engineering work: React, Next.js, React Native, Ionic React, product
        interfaces, dashboards, map-based flows and Node.js when the project needs backend support.
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
        <a
          className="bg-accent px-5 py-4 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
          href="mailto:vladimirp300@gmail.com"
        >
          vladimirp300@gmail.com
        </a>
        <a
          className="text-inverse-fg border border-white/12 px-5 py-4 text-sm font-bold transition-colors hover:border-white/25"
          href="#"
        >
          LinkedIn
        </a>
        <a
          className="text-inverse-fg border border-white/12 px-5 py-4 text-sm font-bold transition-colors hover:border-white/25"
          href="#"
        >
          GitHub
        </a>
      </div>
    </main>
  );
}
