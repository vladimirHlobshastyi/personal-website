export const metadata = {
  title: 'Contact — Vladimir Petrov',
  description: 'Contact Vladimir Petrov for software engineering work.',
};

export default function ContactPage() {
  return (
    <main className="bg-dark p-lg text-white shadow-elevated max-sm:p-lg">
      <h1 className="max-w-3xl text-[clamp(3.125rem,7vw,5.625rem)] font-semibold leading-[.9] tracking-[-0.08em]">
        {"Let's build something clean and useful."}
      </h1>
      <p className="mt-md max-w-2xl text-lg leading-8 text-white/65">
        Available for software engineering work: React, Next.js, React Native, Ionic React, product
        interfaces, dashboards, map-based flows and Node.js when the project needs backend support.
      </p>

      <div className="mt-xl flex flex-wrap gap-lg">
        <a
          className="bg-white px-lg py-md text-sm font-bold text-ink"
          href="mailto:vladimirp300@gmail.com"
        >
          vladimirp300@gmail.com
        </a>
        <a className="bg-white/10 px-lg py-md text-sm font-bold text-white" href="#">
          LinkedIn
        </a>
        <a className="bg-white/10 px-lg py-md text-sm font-bold text-white" href="#">
          GitHub
        </a>
      </div>
    </main>
  );
}
