import { AboutPreviewSection } from './_components/home/about-preview-section';
import { HeroSection } from './_components/home/hero-section';
import { SelectedWorkSection } from './_components/home/selected-work-section';
import { ServicesSection } from './_components/home/services-section';
import { createHomePageJsonLd } from './_utils/home-page';

export default function HomePage() {
  const homePageLd = createHomePageJsonLd();

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageLd) }}
      />
      <HeroSection />
      <ServicesSection />
      <AboutPreviewSection />
      <SelectedWorkSection />
    </main>
  );
}
