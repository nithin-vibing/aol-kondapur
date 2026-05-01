import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { Card, CardContent } from '@/components/ui/card';
import { Wind, Brain, Flower2 } from 'lucide-react';
import { CENTRE } from '@/config/centre';

const pillars = [
  {
    icon: Wind,
    title: 'Experience it yourself',
    description: 'Not just the theory — you\'ll try the breathing practice with a trained teacher and feel the difference firsthand.',
  },
  {
    icon: Brain,
    title: 'Get direct answers',
    description: 'Ask anything about the programs, the technique, or what to expect — in person, from someone who\'s done it.',
  },
  {
    icon: Flower2,
    title: 'Decide for yourself',
    description: 'Before spending a rupee. No pressure, no follow-up obligation — just come and see if it\'s right for you.',
  },
];

const stats = [
  { value: '78%', label: 'reduction in stress hormone (cortisol)' },
  { value: '87%', label: 'reduction in blood lactate levels' },
  { value: '60+', label: 'published research studies' },
];

export function FreeIntroSection() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 sm:py-20 text-center">
        <div className="mx-auto max-w-2xl px-4">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            Free · No commitment required
          </p>
          <h1 className="mb-4 font-serif text-4xl font-bold text-foreground sm:text-5xl">
            Power of Breath
          </h1>
          <p className="mb-2 text-xl font-medium text-foreground">
            An Introductory Talk
          </p>
          <p className="mb-8 text-lg text-muted-foreground">
            Your first step costs nothing.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <WhatsAppCTA
              label="Reserve Your Spot"
              message={`Hi! I'd like to attend the free introductory talk at the Art of Living ${CENTRE.neighbourhood} center. Can you share the next available date and time?`}
              className="px-8"
            />
            <WhatsAppCTA
              label="Join WhatsApp Community"
              message={`Hi! I'd like to join the Art of Living ${CENTRE.neighbourhood} WhatsApp group to stay updated.`}
              className="px-8"
            />
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            Breathe Your Way to Peace
          </p>
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground">
            Say Goodbye to Stress and Anxiety
          </h2>
          <p className="text-lg text-muted-foreground">
            A free 60 minute live session where you experience the Power of Breath — no fees,
            no commitment, no obligation. Come curious. Leave knowing whether this is right
            for you or your child.
          </p>
        </div>
      </section>

      {/* What you'll experience */}
      <section className="bg-muted/20 py-16">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-5xl">
          <div className="mb-10 text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
              What You'll Get
            </p>
            <h2 className="font-serif text-3xl font-bold text-foreground">
              In 60 Minutes, You'll Know
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {pillars.map((p) => (
              <Card key={p.title} className="border-primary/10 text-center">
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <p.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold text-foreground text-lg">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Science stats */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-5xl">
          <div className="mb-10 text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
              Backed by Science
            </p>
            <h2 className="font-serif text-3xl font-bold text-foreground">
              Research on Sudarshan Kriya
            </h2>
            <p className="mt-3 text-muted-foreground">
              Over 60 published studies confirm the measurable benefits of SKY breathing.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.value} className="rounded-xl border border-primary/20 bg-primary/5 p-6 text-center">
                <p className="mb-1 font-serif text-4xl font-bold text-primary">{s.value}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/20 py-16">
        <div className="mx-auto max-w-lg px-4 text-center">
          <h2 className="mb-3 font-serif text-3xl font-bold text-foreground">
            Ready to Experience It?
          </h2>
          <p className="mb-8 text-muted-foreground">
            The intro talk is completely free. No registration fee, no commitment.
            Just come and see for yourself.
          </p>
          <div className="flex flex-col gap-3">
            <WhatsAppCTA
              label="Register for Free Intro Talk"
              message={`Hi! I'd like to register for the free introductory talk at the Art of Living ${CENTRE.neighbourhood} center. Can you share the next available date?`}
              className="w-full"
            />
            <WhatsAppCTA
              label="Chat with a Teacher"
              message={`Hi! I have some questions about the Art of Living programs at the ${CENTRE.neighbourhood} center.`}
              className="w-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
