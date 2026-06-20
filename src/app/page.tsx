import {
  HeroSection,
  MetricsSection,
  SelectedWorkSection,
  ServicesSection,
} from '@/features/home';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <SelectedWorkSection />
      <MetricsSection />
    </main>
  );
}
