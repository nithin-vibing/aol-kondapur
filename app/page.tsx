import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/sections/hero-section';
import { VisitUsSection } from '@/components/sections/visit-us-section';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

const programs = [
  {
    href: '/happiness-program#happiness-program',
    label: 'FOR ADULTS',
    title: 'Happiness Program',
    description:
      'Learn the world\'s most powerful breathing technique — Sudarshan Kriya™ — practiced by millions worldwide.',
    accent: 'bg-primary/10 border-primary/20',
    badge: 'Most Popular',
  },
  {
    href: '/intuition-program#intuition-process',
    label: 'FOR KIDS & TEENS',
    title: 'Intuition Program',
    description:
      'World\'s No.1 Intuition Program for Children & Teens — helping your child take charge of their mind.',
    accent: 'bg-accent/10 border-accent/20',
    badge: 'Ages 5–18',
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />

        {/* Program cards */}
        <section id="programs" className="bg-background py-16 sm:py-20">
          <div className="mx-auto max-w-2xl px-4 lg:max-w-5xl">
            <div className="mb-10 text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-primary">
                Yoga &amp; Meditation Programs
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:max-w-3xl lg:mx-auto">
              {programs.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className={`group relative flex flex-col rounded-xl border p-8 transition-shadow hover:shadow-lg ${p.accent}`}
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                      {p.label}
                    </span>
                    {p.badge && (
                      <Badge variant="secondary" className="text-xs">
                        {p.badge}
                      </Badge>
                    )}
                  </div>

                  <h3 className="mb-3 font-serif text-xl font-bold text-foreground">
                    {p.title}
                  </h3>

                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>

                  <div className="mt-6 flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                    See Upcoming Schedule <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <VisitUsSection />
      </main>
      <Footer />
    </div>
  );
}
