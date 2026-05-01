import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BackBreadcrumb } from '@/components/back-breadcrumb';
import { IntuitionProcessSection } from '@/components/sections/intuition-process-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { getProgramBySlug } from '@/lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Intuition Program for Kids & Teens — Art of Living Kondapur',
  description:
    'Unlock your child\'s potential with the Art of Living Intuition Program. Improves focus, memory, and confidence for ages 5–18. Kondapur, Hyderabad.',
  openGraph: {
    title: 'Intuition Program for Kids & Teens — Art of Living Kondapur',
    description: 'Improve your child\'s focus, memory, and confidence. Ages 5–18. Kondapur, Hyderabad.',
    url: 'https://aol-kondapur.lovable.app/intuition-program',
  },
};

export default async function IntuitionProgramPage() {
  const program = await getProgramBySlug('intuition-program');

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <BackBreadcrumb />
        <IntuitionProcessSection program={program} />
        <TestimonialsSection defaultTab="parents" />
      </main>
      <Footer />
    </div>
  );
}
