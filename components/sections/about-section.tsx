import Image from 'next/image';
import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { CENTRE } from '@/config/centre';

const stats = [
  { value: '1981', label: 'Year founded' },
  { value: '182', label: 'Countries' },
  { value: '80 Cr+', label: 'Lives touched' },
  { value: '10,000+', label: 'Centres worldwide' },
  { value: '40,000+', label: 'Trained teachers' },
  { value: '45', label: 'Years of service' },
];

export function AboutSection() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-5xl">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Text — second on mobile, first on desktop */}
            <div className="order-last text-center lg:order-first lg:text-left">
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
                About Us
              </p>
              <h1 className="mb-4 font-serif text-4xl font-bold text-foreground sm:text-5xl">
                The Art of Living
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                "Unless we have a stress-free mind and a violence-free society, we cannot achieve world peace."
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                — <a href="https://gurudev.artofliving.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline underline-offset-4">Gurudev Sri Sri Ravi Shankar</a>
              </p>
            </div>
            {/* Photo — first on mobile */}
            <div className="order-first flex justify-center lg:order-last">
              <Image
                src="/gurudev.jpg"
                alt="Gurudev Sri Sri Ravi Shankar"
                width={420}
                height={420}
                className="rounded-2xl object-cover shadow-lg w-full max-w-[320px] sm:max-w-[400px] lg:max-w-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-background py-12">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-5xl">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-serif text-3xl font-bold text-primary">{s.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Art of Living */}
      <section className="bg-muted/30 py-16">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-3xl">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">Who We Are</p>
          <h2 className="mb-6 font-serif text-3xl font-bold text-foreground">
            A Global Movement for Peace
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              <a href="https://www.artofliving.org/in-en/about-us" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline underline-offset-4 font-medium">The Art of Living Foundation</a> is a non-profit, educational, and humanitarian organisation founded in 1981 by{' '}
              <a href="https://gurudev.artofliving.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline underline-offset-4">Gurudev Sri Sri Ravi Shankar</a>.
              It strengthens individuals through integrated approaches combining yoga, meditation, and ancient wisdom adapted for contemporary life.
            </p>
            <p>
              As Gurudev describes it: <em>"The Art of Living is more of a principle, a philosophy of living life to its fullest."</em> At its core is a commitment to helping individuals find inner peace while uniting diverse communities across the globe.
            </p>
            <p>
              Today, the Foundation is active in <strong className="text-foreground">182 countries</strong>, with over <strong className="text-foreground">10,000 centres</strong> and <strong className="text-foreground">40,000 trained teachers</strong> bringing its programs to people of all ages, cultures, and backgrounds.
            </p>
          </div>
        </div>
      </section>

      {/* About Gurudev */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-3xl">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">The Founder</p>
          <h2 className="mb-6 font-serif text-3xl font-bold text-foreground">
            <a href="https://gurudev.artofliving.org/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Gurudev Sri Sri Ravi Shankar
            </a>
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Born in 1956 in Southern India, Gurudev was a prodigy — reciting portions of the{' '}
              <a href="https://www.artofliving.org/in-en/wisdom/bhagavad-gita" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline underline-offset-4">Bhagavad Gita</a>{' '}
              by age four and frequently in deep meditation. By 17, he had graduated with degrees in both Vedic literature and modern physics.
            </p>
            <p>
              In 1982, he developed the{' '}
              <a href="https://www.artofliving.org/in-en/sudarshan-kriya" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline underline-offset-4">Sudarshan Kriya</a>
              {' '}— a powerful rhythmic breathing technique that has since been validated by over 60 published scientific studies and is now practiced by millions worldwide every day.
            </p>
            <p>
              In 1997, he co-founded the{' '}
              <a href="https://www.iahv.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline underline-offset-4">International Association for Human Values (IAHV)</a>
              {' '}to foster global human values and support large-scale relief and development projects.
            </p>
            <p>
              Recognised as a neutral peace figure, Gurudev has facilitated conflict resolution in Colombia, Iraq, Ivory Coast, Kashmir, and Bihar. He has spoken at the UN, the World Economic Forum, and numerous global peace summits, consistently advocating for non-violence, interfaith harmony, and the idea of one world family.
            </p>
          </div>
        </div>
      </section>

      {/* Service */}
      <section className="bg-muted/30 py-16">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-3xl">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">Beyond the Classroom</p>
          <h2 className="mb-6 font-serif text-3xl font-bold text-foreground">Service at Scale</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The Art of Living's volunteer network runs some of India's most impactful grassroots programmes — sending <strong className="text-foreground">1,20,000+ tribal children to school</strong>, reviving <strong className="text-foreground">75 rivers</strong>, empowering <strong className="text-foreground">4,75,000+ rural youth</strong> with livelihood skills, and lighting <strong className="text-foreground">800+ villages</strong> with solar lamps.
            </p>
            <p>
              Every program fee contributes directly to these initiatives. When you join a course at our{' '}
              <a href={CENTRE.directionsUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline underline-offset-4">{CENTRE.neighbourhood} centre</a>, you're part of something much larger.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-lg px-4 text-center">
          <h2 className="mb-3 font-serif text-3xl font-bold text-foreground">Come Experience It</h2>
          <p className="mb-8 text-muted-foreground">
            The best way to understand Art of Living is to experience it. Start with a free session — no fees, no commitment.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <WhatsAppCTA
              label="Chat with Us"
              message={`Hi! I'd like to know more about Art of Living and the programs at the ${CENTRE.neighbourhood} center.`}
              className="px-8"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
