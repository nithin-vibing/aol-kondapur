import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BackBreadcrumb } from '@/components/back-breadcrumb';
import { HappinessProgramSection } from '@/components/sections/happiness-program-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { getProgramBySlug } from '@/lib/data';
import type { Metadata } from 'next';
import { CENTRE } from '@/config/centre';

export const metadata: Metadata = {
  title: 'Happiness Program — Art of Living Kondapur',
  description:
    'Learn the Sudarshan Kriya breathing technique in a 3-day program. Reduce stress, sleep better, and reclaim your energy. Art of Living Kondapur, Hyderabad.',
  openGraph: {
    title: 'Happiness Program — Art of Living Kondapur',
    description: 'A 3-day program to reduce stress, sleep better, and reclaim your energy. Kondapur, Hyderabad.',
    url: `${CENTRE.siteUrl}/happiness-program`,
  },
};

export default async function HappinessProgramPage() {
  const program = await getProgramBySlug('happiness-program');

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <BackBreadcrumb />
        <HappinessProgramSection program={program} />
        <TestimonialsSection defaultTab="adults" />
      </main>
      <Footer />
    </div>
  );
}
