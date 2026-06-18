export const metadata = {
  title: 'Contact — Vladimir Hlobchastyi',
  description: 'Contact Vladimir Hlobchastyi for software engineering work.',
};

export default function ContactPage() {
  return (
    <main className="bg-dark shadow-elevated p-14 text-white max-sm:p-8">
      <h1 className="max-w-3xl text-[clamp(3.125rem,7vw,5.625rem)] leading-[.9] font-semibold tracking-[-0.08em]">
        {"Let's build something clean and useful."}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
        Available for software engineering work: React, Next.js, React Native, Ionic React, product
        interfaces, dashboards, map-based flows and Node.js when the project needs backend support.
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
        <a
          className="text-ink bg-white px-5 py-4 text-sm font-bold"
          href="mailto:vladimirp300@gmail.com"
        >
          vladimirp300@gmail.com
        </a>
        <a className="bg-white/10 px-5 py-4 text-sm font-bold text-white" href="#">
          LinkedIn
        </a>
        <a className="bg-white/10 px-5 py-4 text-sm font-bold text-white" href="#">
          GitHub
        </a>
      </div>
    </main>
  );
}
