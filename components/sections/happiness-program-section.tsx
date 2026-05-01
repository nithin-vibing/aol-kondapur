import { YouTubeEmbed } from '@/components/youtube-embed';
import { CENTRE } from '@/config/centre';
import { BenefitsList } from '@/components/benefits-list';
import { BatchCard } from '@/components/batch-card';
import { WhatsAppCTA } from '@/components/whatsapp-cta';
import type { ProgramWithBatches } from '@/lib/types';

interface HappinessProgramSectionProps {
  program: ProgramWithBatches | null;
}

export function HappinessProgramSection({ program }: HappinessProgramSectionProps) {
  if (!program) return (
    <section id="happiness-program" className="scroll-mt-20 bg-background py-16">
      <div className="mx-auto max-w-2xl px-4 text-center">
        <p className="mb-4 text-muted-foreground">
          Program details are being updated. Check back soon or reach out directly.
        </p>
        <WhatsAppCTA message={`Hi! I'm interested in the Happiness Program at the ${CENTRE.neighbourhood} center. Can you share details?`} />
      </div>
    </section>
  );

  return (
    <section id="happiness-program" className="scroll-mt-20 bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-2xl px-4 lg:max-w-5xl">
        {/* Section header */}
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            For Adults · 18 years &amp; above
          </p>
          <h2 className="mb-3 font-serif text-3xl font-bold text-foreground sm:text-4xl">
            {program.name}
          </h2>
          {program.tagline && (
            <p className="text-lg text-muted-foreground">{program.tagline}</p>
          )}
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Batches — order-first so they appear at top on mobile */}
          <div className="order-first lg:order-last space-y-4">
            <h3 className="font-semibold text-foreground text-lg">Upcoming Batches</h3>
            {program.batches.length > 0 ? (
              <div className="grid gap-4">
                {program.batches.map((batch) => (
                  <BatchCard key={batch.id} batch={batch} />
                ))}
              </div>
            ) : (
              <div className="rounded-lg border border-dashed border-border p-8 text-center">
                <p className="mb-4 text-muted-foreground">
                  No upcoming batches right now. Join our WhatsApp group to be notified when the next batch opens.
                </p>
                <WhatsAppCTA message={`Hi! I'm interested in the Happiness Program at the ${CENTRE.neighbourhood} center. When is the next batch?`} />
              </div>
            )}
          </div>

          {/* Video + Benefits — order-last on mobile */}
          <div className="order-last lg:order-first space-y-8">
            {program.youtube_video_id && (
              <YouTubeEmbed videoId={program.youtube_video_id} title={program.name} />
            )}
            {program.benefits && program.benefits.length > 0 && (
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">What you'll learn</h3>
                <BenefitsList benefits={program.benefits} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
