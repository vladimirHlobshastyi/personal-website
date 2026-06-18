export const metadata = {
  title: 'Contact — Vladimir Petrov',
  description: 'Contact Vladimir Petrov for software engineering work.',
};

export default function ContactPage() {
  return (
    <main className="bg-[#141210] p-14 text-white shadow-elevated max-sm:p-8">
      <h1 className="max-w-3xl text-[clamp(50px,7vw,90px)] font-semibold leading-[.9] tracking-[-0.08em]">
        Let’s build something clean and useful.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
        Available for software engineering work: React, Next.js, React Native,
        Ionic React, product interfaces, dashboards, map-based flows and Node.js
        when the project needs backend support.
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
        <a className="bg-white px-5 py-4 text-sm font-bold text-ink" href="mailto:vladimirp300@gmail.com">
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
