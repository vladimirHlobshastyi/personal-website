import { CONTACT_LANGUAGES, CONTACT_WORKING_STYLE } from '../_constants/contact.constants';

export function ContactMetaSection() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-1">
      <article className="border-line bg-surface border p-8 max-sm:p-6">
        <p className="text-quiet mb-5 text-xs font-bold tracking-[.16em] uppercase">Languages</p>
        <ul className="grid gap-3">
          {CONTACT_LANGUAGES.map((item) => (
            <li key={item.label} className="flex items-baseline justify-between gap-4">
              <span className="font-medium">{item.label}</span>
              <span className="text-muted text-[0.9375rem]">{item.value}</span>
            </li>
          ))}
        </ul>
      </article>

      <article className="border-line bg-surface border p-8 max-sm:p-6">
        <p className="text-quiet mb-5 text-xs font-bold tracking-[.16em] uppercase">
          Working style
        </p>
        <ul className="grid gap-3">
          {CONTACT_WORKING_STYLE.map((item) => (
            <li key={item.label} className="flex items-baseline justify-between gap-4">
              <span className="text-muted text-[0.9375rem]">{item.label}</span>
              <span className="font-medium">{item.value}</span>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}
