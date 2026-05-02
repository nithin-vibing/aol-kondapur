import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BackBreadcrumb } from '@/components/back-breadcrumb';
import { IntuitionProcessSection } from '@/components/sections/intuition-process-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { FAQSection } from '@/components/sections/faq-section';
import { getProgramBySlug } from '@/lib/data';
import type { Metadata } from 'next';
import { CENTRE } from '@/config/centre';
import { CourseJsonLd } from '@/components/json-ld';

export const metadata: Metadata = {
  title: 'Intuition Program for Kids & Teens — Art of Living Kondapur',
  description:
    'Unlock your child\'s potential with the Art of Living Intuition Program. Improves focus, memory, and confidence for ages 5–18. Kondapur, Hyderabad.',
  openGraph: {
    title: 'Intuition Program for Kids & Teens — Art of Living Kondapur',
    description: 'Improve your child\'s focus, memory, and confidence. Ages 5–18. Kondapur, Hyderabad.',
    url: `${CENTRE.siteUrl}/intuition-program`,
  },
};

export default async function IntuitionProgramPage() {
  const program = await getProgramBySlug('intuition-program');

  return (
    <div className="flex min-h-screen flex-col">
      <CourseJsonLd
        name="Intuition Program for Kids & Teens — Art of Living"
        description="A weekend program for children aged 5–18 to build focus, confidence, and emotional resilience through yoga and breathing techniques. Art of Living Kondapur, Hyderabad."
        url={`${CENTRE.siteUrl}/intuition-program`}
      />
      <Header />
      <main className="flex-1">
        <BackBreadcrumb />
        <IntuitionProcessSection program={program} />
        <TestimonialsSection defaultTab="parents" />
        <FAQSection
          heading="Questions About the Intuition Program"
          faqs={[
            {
              question: 'What is the Intuition Program?',
              answer: 'The Intuition Program (IP) is Art of Living\'s flagship program for children aged 5–18. It uses yoga, breathing, and mindfulness techniques specifically designed for young minds to build focus, confidence, and emotional resilience.',
            },
            {
              question: 'Which age group is right for my child?',
              answer: 'IP Junior is for ages 5–8, IP Kids is for ages 8–13, and IP Teens is for ages 13–18. Each batch is tailored to the developmental stage of that age group, with age-appropriate activities and techniques.',
            },
            {
              question: 'What results can I expect for my child?',
              answer: 'Parents typically notice improved focus and concentration, better emotional regulation, reduced anxiety around exams or social situations, and increased confidence. Results are most visible within 4–6 weeks of regular practice after the program.',
            },
            {
              question: 'Does my child need prior experience in yoga?',
              answer: 'No. The Intuition Program is designed for children with zero prior experience. It is taught through games, activities, and interactive exercises — not traditional yoga class-style instruction.',
            },
            {
              question: 'What should my child wear and bring?',
              answer: 'Comfortable clothes suitable for movement and a small water bottle. The sessions involve light physical activity, so avoid formal or restrictive clothing. Everything else is provided at the centre.',
            },
            {
              question: 'Can parents attend the sessions?',
              answer: 'Parents are generally not present during the sessions, as children participate more freely in a peer environment. However, a brief orientation for parents is held at the start of the program so you understand what your child will experience.',
            },
          ]}
        />
      </main>
      <Footer />
    </div>
  );
}
