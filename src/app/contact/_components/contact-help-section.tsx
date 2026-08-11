import { CONTACT_HELP_AREAS } from '../_constants/contact.constants';

export function ContactHelpSection() {
  return (
    <article className="border-line bg-surface border p-8 max-sm:p-6">
      <p className="text-quiet mb-5 text-xs font-bold tracking-[.16em] uppercase">
        What I help build
      </p>
      <div className="grid gap-4 md:grid-cols-3">
        {CONTACT_HELP_AREAS.map((item) => (
          <div key={item.title} className="border-line bg-surface-2/35 border p-4">
            <h2 className="text-lg font-semibold tracking-[-0.03em]">{item.title}</h2>
            <p className="text-muted mt-2 text-sm leading-7">{item.description}</p>
          </div>
        ))}
      </div>
    </article>
  );
}
