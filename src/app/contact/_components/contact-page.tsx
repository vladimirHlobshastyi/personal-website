import { ContactHelpSection } from './contact-help-section';
import { ContactHeroSection } from './contact-hero-section';
import { ContactMetaSection } from './contact-meta-section';
import { ContactReachSection } from './contact-reach-section';

export function ContactPageContent() {
  return (
    <main className="grid gap-5">
      <section className="grid grid-cols-[1.08fr_.92fr] gap-5 max-lg:grid-cols-1">
        <ContactHeroSection />
        <ContactReachSection />
      </section>

      <section className="grid gap-5 lg:grid-cols-[1.15fr_.85fr]">
        <ContactHelpSection />
        <ContactMetaSection />
      </section>
    </main>
  );
}
