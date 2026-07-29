import { createAboutPageJsonLd } from '../_utils/about-page';
import { AboutExpertiseSection } from './about-expertise-section';
import { AboutHeroSection } from './about-hero-section';
import { AboutWorkStyleSection } from './about-work-style-section';

export function AboutPage() {
  const aboutPageLd = createAboutPageJsonLd();

  return (
    <main className="grid gap-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageLd) }}
      />

      <AboutHeroSection />
      <AboutExpertiseSection />
      <AboutWorkStyleSection />
    </main>
  );
}
