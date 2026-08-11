import { ContactHelpSection } from './contact-help-section';
import { ContactHeroSection } from './contact-hero-section';
import { ContactMetaSection } from './contact-meta-section';
import { ContactReachSection } from './contact-reach-section';

export function ContactPageContent() {
  return (
    <main className="grid gap-[clamp(3.75rem,6vw,5rem)]">
      <section className="border-line bg-surface shadow-card relative grid overflow-hidden border lg:grid-cols-[minmax(0,1.16fr)_minmax(20rem,.84fr)]">
        <span className="bg-accent absolute top-0 left-0 h-1 w-28" aria-hidden="true" />
        <ContactHeroSection />
        <ContactReachSection />
      </section>

      <section className="grid gap-5">
        <ContactHelpSection />
        <ContactMetaSection />
      </section>
    </main>
  );
}
