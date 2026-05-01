import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/sections/hero-section';
import { HappinessProgramSection } from '@/components/sections/happiness-program-section';
import { IntuitionProcessSection } from '@/components/sections/intuition-process-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { FreeIntroSection } from '@/components/sections/free-intro-section';
import { VisitUsSection } from '@/components/sections/visit-us-section';
import type { ProgramWithBatches } from '@/lib/types';

interface HomePageProps {
  programs: ProgramWithBatches[];
}

export function HomePage({ programs }: HomePageProps) {
  const happinessProgram = programs.find((p) => p.slug === 'happiness-program') ?? null;
  const intuitionProcess = programs.find((p) => p.slug === 'intuition-process') ?? null;

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <HappinessProgramSection program={happinessProgram} />
        <IntuitionProcessSection program={intuitionProcess} />
        <TestimonialsSection />
        <FreeIntroSection />
        <VisitUsSection />
      </main>
      <Footer />
    </div>
  );
}
