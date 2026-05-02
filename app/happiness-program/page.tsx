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
          heading="I Want To Join But..."
          faqs={[
            {
              question: 'Are there any side-effects to this technique?',
              answer: 'An undying smile is the only side-effect! 🙂 The Sudarshan Kriya™ is practiced globally by millions of people every day with documented health benefits. It is absolutely safe to practice our techniques. If you have a medical history of asthma, high blood pressure, heart problems, or back pain, we will guide you differently during the session.',
            },
            {
              question: 'Will this practice improve my health?',
              answer: 'Yes, of course! Regular practice of the Sudarshan Kriya™ is known to improve sleep, boost immunity, and lower stress and depression levels. Be sure to let your teacher know your ailments beforehand so they can give you the best and most customised experience.',
            },
            {
              question: 'Why do you charge fees?',
              answer: 'Two reasons. First, to ensure you commit your time to the workshop. Second, apart from teaching you essential life skills, your contribution funds many service projects in India — sending 1,20,000+ tribal children to school, reviving 75 rivers, empowering 4,75,000+ rural youth with livelihood skills, and lighting 800+ villages with solar lamps. If you think it\'s not justified, we won\'t object if you wish to pay more. 😉',
            },
            {
              question: 'I have no stress. Why should I still join this workshop?',
              answer: 'If you\'re not stressed, great — you\'re living the best life! But consider this: do you start saving money only when you\'re running out of it? Or start exercising only when you\'ve lost your health? Building inner reserves of resilience now means you\'re prepared for whatever comes. But hey, it\'s your call. You could wait till you are stressed — and this workshop will still be around to help.',
            },
          ]}
        />
      </main>
      <Footer />
    </div>
  );
}
