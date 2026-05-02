import type { ReactNode } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQItem {
  question: string;
  answer: ReactNode;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  heading?: string;
  footer?: ReactNode;
}

export function FAQSection({ faqs, heading = 'Frequently Asked Questions', footer }: FAQSectionProps) {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-2xl px-4">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">FAQ</p>
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">{heading}</h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-medium text-foreground">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        {footer && <div className="mt-8">{footer}</div>}
      </div>
    </section>
  );
}
