import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';

const adultTestimonials = [
  {
    quote: "I've slept better in the last month than I have in years. The Sudarshan Kriya is something I now do every single morning.",
    name: 'Pradeep R.',
    descriptor: 'IT Manager, 38 · Kondapur',
  },
  {
    quote: "I was sceptical going in — by day 2, I completely understood why everyone talks about this program. My anxiety has dropped significantly.",
    name: 'Ananya S.',
    descriptor: 'Marketing Professional, 29',
  },
  {
    quote: "Worth every rupee. I came in burnt out and left with tools I actually use every day. My team has noticed the difference.",
    name: 'Karthik M.',
    descriptor: 'Entrepreneur, 44 · Hyderabad',
  },
];

const parentTestimonials = [
  {
    quote: "My daughter's focus has improved noticeably since the program. Her class teacher commented on it without us saying anything.",
    name: 'Sunita V.',
    descriptor: 'Mother of Priya, 10 · Kondapur',
  },
  {
    quote: "My son used to panic before exams. After IP, he's calmer, more confident, and actually enjoys studying. Best decision we made.",
    name: 'Vikram A.',
    descriptor: 'Father of Arjun, 13 · Gachibowli',
  },
  {
    quote: "As a parent you want to give your child every advantage. This program does that. The lifetime app access means they keep practising.",
    name: 'Meera K.',
    descriptor: 'Mother of twins, 8 years · Hyderabad',
  },
];

function TestimonialCard({ quote, name, descriptor }: { quote: string; name: string; descriptor: string }) {
  return (
    <Card className="bg-card h-full">
      <CardContent className="p-6">
        <p className="mb-4 text-base italic leading-relaxed text-foreground">
          &ldquo;{quote}&rdquo;
        </p>
        <div>
          <p className="text-sm font-semibold text-foreground">{name}</p>
          <p className="text-xs text-muted-foreground">{descriptor}</p>
        </div>
      </CardContent>
    </Card>
  );
}

interface TestimonialsSectionProps {
  defaultTab?: 'adults' | 'parents';
}

export function TestimonialsSection({ defaultTab = 'adults' }: TestimonialsSectionProps) {
  return (
    <section id="testimonials" className="scroll-mt-20 bg-muted/20 py-16 sm:py-24">
      <div className="mx-auto max-w-2xl px-4 lg:max-w-5xl">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Real People, Real Results
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
            What Our Community Says
          </h2>
        </div>

        <Tabs defaultValue={defaultTab} className="w-full">
          <TabsList className="mx-auto mb-8 flex w-fit">
            <TabsTrigger value="adults">Adults</TabsTrigger>
            <TabsTrigger value="parents">Parents</TabsTrigger>
          </TabsList>

          <TabsContent value="adults">
            <div className="grid gap-4 sm:grid-cols-3">
              {adultTestimonials.map((t) => (
                <TestimonialCard key={t.name} {...t} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="parents">
            <div className="grid gap-4 sm:grid-cols-3">
              {parentTestimonials.map((t) => (
                <TestimonialCard key={t.name} {...t} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Results may vary based on participation and practice.
        </p>
      </div>
    </section>
  );
}
