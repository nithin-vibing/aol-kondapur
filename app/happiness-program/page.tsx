import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BackBreadcrumb } from '@/components/back-breadcrumb';
import { HappinessProgramSection } from '@/components/sections/happiness-program-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { FAQSection } from '@/components/sections/faq-section';
import { getProgramBySlug } from '@/lib/data';
import type { Metadata } from 'next';
import { CENTRE } from '@/config/centre';
import { CourseJsonLd } from '@/components/json-ld';

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
      <CourseJsonLd
        name="Happiness Program — SKY Breath Meditation"
        description="A 3-day program to learn Sudarshan Kriya, a rhythmic breathing technique. Reduces stress, improves sleep, and boosts energy. Art of Living Kondapur, Hyderabad."
        url={`${CENTRE.siteUrl}/happiness-program`}
      />
      <Header />
      <main className="flex-1">
        <BackBreadcrumb />
        <HappinessProgramSection program={program} />
        <TestimonialsSection defaultTab="adults" />
        <FAQSection
          heading="Questions About the Happiness Program"
          faqs={[
            {
              question: 'Do I need any prior experience in yoga or meditation?',
              answer: 'No prior experience is needed. The Happiness Program is designed for complete beginners. All you need to bring is an open mind and a willingness to try.',
            },
            {
              question: 'What is Sudarshan Kriya?',
              answer: 'Sudarshan Kriya (SKY) is a powerful rhythmic breathing technique developed by Gurudev Sri Sri Ravi Shankar. It uses specific natural rhythms of the breath to release stress and bring the mind and body into a relaxed, energised state. Over 60 published studies have validated its benefits.',
            },
            {
              question: 'What should I wear and bring to the program?',
              answer: 'Wear comfortable, loose-fitting clothes suitable for sitting and gentle movement. Bring a yoga mat if you have one — we have some available at the centre too. No special equipment needed.',
            },
            {
              question: 'Is the program in-person or online?',
              answer: 'The Happiness Program at our Kondapur centre is in-person. You attend 3 sessions over one weekend at our centre in Raghavendra Colony, Kondapur.',
            },
            {
              question: 'Will I have to continue with a paid subscription after the program?',
              answer: 'There is no ongoing subscription. You learn the Sudarshan Kriya technique during the program and receive guidance on continuing your daily practice independently at home.',
            },
            {
              question: 'What happens after the program ends?',
              answer: 'After the program, you are encouraged to practise Sudarshan Kriya daily at home — it takes about 20–30 minutes. You also get access to free follow-up sessions and can join our local community for ongoing support.',
            },
          ]}
        />
      </main>
      <Footer />
    </div>
  );
}
