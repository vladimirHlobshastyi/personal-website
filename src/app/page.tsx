import { HeroSection } from '@/components/home/hero-section';
import { MetricsSection } from '@/components/home/metrics-section';
import { SelectedWorkSection } from '@/components/home/selected-work-section';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <SelectedWorkSection />
      <MetricsSection />
    </main>
  );
}
