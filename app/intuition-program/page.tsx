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
              question: 'What is intuition?',
              answer: 'Intuition is the ability to understand or know something without relying on reasoning or logical analysis. Intuition is naturally present in all of us — however, little attention is given to nurturing and developing this aspect of the mind.',
            },
            {
              question: 'What are the benefits of developing intuition?',
              answer: (
                <div className="space-y-2">
                  <p>Stronger intuitive abilities pave the way for success in all areas of life.</p>
                  <ul className="ml-4 space-y-1 list-disc">
                    <li>Improved learning ability</li>
                    <li>Better decision making</li>
                    <li>Heightened creativity and innovation</li>
                    <li>Enhanced problem-solving skills</li>
                    <li>Better foresight</li>
                    <li>Stronger confidence</li>
                    <li>Better interpersonal skills</li>
                    <li>Less fear of the unknown</li>
                  </ul>
                </div>
              ),
            },
            {
              question: 'Why do you run this program only for children and teens?',
              answer: 'We are all born with a natural intuitive ability to perceive beyond our senses. This ability is especially visible in children — because their minds are still fresh, less obsessive, and more in tune with nature.',
            },
            {
              question: 'Is this program online or in-person?',
              answer: (
                <div className="space-y-2">
                  <p>The Intuition Process is a hybrid program that includes both online and in-person sessions.</p>
                  <ul className="ml-4 space-y-1 list-disc">
                    <li><span className="font-medium text-foreground">Juniors (5–8 yrs):</span> 4 days in-person (2 hrs/day) + 6 days online (15 min/day), supervised by instructors.</li>
                    <li><span className="font-medium text-foreground">Kids &amp; Teens (8–18 yrs):</span> 7 days in-person (2 hrs/day) + 10 days online, supervised by instructors.</li>
                  </ul>
                </div>
              ),
            },
            {
              question: 'Which techniques do you teach children to boost their intuition?',
              answer: (
                <ul className="ml-4 space-y-1 list-disc">
                  <li>Yogic techniques to help relax the mind and access intuition</li>
                  <li>Age-appropriate breathing techniques</li>
                  <li>Guided meditation and relaxation techniques</li>
                  <li>Fun-learning games and activities to improve intuition</li>
                  <li>Home practice instructions</li>
                </ul>
              ),
            },
            {
              question: 'How long does it take to develop a child\'s intuitive abilities?',
              answer: 'Each child is unique and takes their own time. With regular daily practice of 15–25 minutes at home, children and parents consistently report meaningful improvement in intuitive abilities. It is the basis of the breakthroughs children have experienced.',
            },
            {
              question: 'How long is the program, and which age group is it for?',
              answer: (
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-foreground">IP Juniors — Ages 5 to 8 years</p>
                    <p>10-day program: 4 days in-person (2 hrs each) + 6 days online (15 min each).</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">IP Kids — Ages 8 to 13 years</p>
                    <p>17-day program: 7 days in-person (2 hrs each) + 10 days online (15 min each).</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">IP Teens — Ages 13 to 18 years</p>
                    <p>17-day program: 7 days in-person (2 hrs each) + 10 days online (30 min each).</p>
                  </div>
                </div>
              ),
            },
          ]}
          footer={
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 text-center">
              <p className="font-medium text-foreground">Still have questions?</p>
              <p className="mt-1 text-sm text-muted-foreground">
                No problem! Call us at{' '}
                <a href="tel:+918056046967" className="text-primary hover:underline">
                  +91 80560 46967
                </a>{' '}
                — we&apos;re here to help.
              </p>
            </div>
          }
        />
      </main>
      <Footer />
    </div>
  );
}
