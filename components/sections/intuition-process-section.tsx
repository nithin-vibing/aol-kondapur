'use client';

import { useState } from 'react';
import { CENTRE } from '@/config/centre';
import { YouTubeEmbed } from '@/components/youtube-embed';
import { BenefitsList } from '@/components/benefits-list';
import { BatchCard } from '@/components/batch-card';
import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { ProgramWithBatches, Batch } from '@/lib/types';

// Age groups matching actual Art of Living program structure
const AGE_GROUPS = ['All', '5-8 years', '8-13 years', '13-18 years'] as const;
type AgeGroup = typeof AGE_GROUPS[number];

function groupBatchesByAgeGroup(batches: Batch[]): Record<AgeGroup, Batch[]> {
  const groups: Record<AgeGroup, Batch[]> = {
    'All': batches,
    '5-8 years': [],
    '8-13 years': [],
    '13-18 years': [],
  };

  for (const batch of batches) {
    if (batch.age_group && batch.age_group in groups) {
      groups[batch.age_group as AgeGroup].push(batch);
    }
  }

  return groups;
}

interface IntuitionProcessSectionProps {
  program: ProgramWithBatches | null;
}

export function IntuitionProcessSection({ program }: IntuitionProcessSectionProps) {
  const [activeTab, setActiveTab] = useState<AgeGroup>('All');

  if (!program) return (
    <section id="intuition-process" className="scroll-mt-20 bg-muted/30 py-16">
      <div className="mx-auto max-w-2xl px-4 text-center">
        <p className="mb-4 text-muted-foreground">
          Program details are being updated. Check back soon or reach out directly.
        </p>
        <WhatsAppCTA message={`Hi! I'm interested in the Intuition Program for kids at the ${CENTRE.neighbourhood} center. Can you share details?`} />
      </div>
    </section>
  );

  const batchesByAge = groupBatchesByAgeGroup(program.batches);

  return (
    <section id="intuition-process" className="scroll-mt-20 bg-muted/30 py-16 sm:py-24">
      <div className="mx-auto max-w-2xl px-4 lg:max-w-5xl">
        {/* Section header */}
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            For Kids &amp; Teens · Ages 5–18
          </p>
          <h2 className="mb-3 font-serif text-3xl font-bold text-foreground sm:text-4xl">
            {program.name}
          </h2>
          {program.tagline && (
            <p className="text-lg text-muted-foreground">{program.tagline}</p>
          )}
        </div>

        {/* Age group labels — helps parents identify instantly */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          <Badge variant="outline" className="text-sm">IP Junior — Ages 5–8</Badge>
          <Badge variant="outline" className="text-sm">IP Kids — Ages 8–13</Badge>
          <Badge variant="outline" className="text-sm">IP Teens — Ages 13–18</Badge>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Batches — first on mobile */}
          <div className="order-first lg:order-last space-y-4">
            <h3 className="font-semibold text-foreground text-lg">Upcoming Batches</h3>

            {program.batches.length > 0 ? (
              <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as AgeGroup)} className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  {AGE_GROUPS.map((group) => (
                    <TabsTrigger key={group} value={group} className="text-xs sm:text-sm">
                      {group === 'All' ? 'All' : group.replace(' years', '')}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {AGE_GROUPS.map((group) => (
                  <TabsContent key={group} value={group} className="mt-4">
                    {batchesByAge[group].length > 0 ? (
                      <div className="grid gap-4">
                        {batchesByAge[group].map((batch) => (
                          <BatchCard key={batch.id} batch={batch} />
                        ))}
                      </div>
                    ) : (
                      <div className="rounded-lg border border-dashed border-border bg-background p-8 text-center">
                        <p className="mb-4 text-muted-foreground">
                          No upcoming batches for this age group right now.
                        </p>
                        <WhatsAppCTA
                          message={`Hi! I'm interested in the Intuition Program for ${group === 'All' ? 'my child' : `children aged ${group}`} at the ${CENTRE.neighbourhood} center. When is the next batch?`}
                        />
                      </div>
                    )}
                  </TabsContent>
                ))}
              </Tabs>
            ) : (
              <div className="rounded-lg border border-dashed border-border p-8 text-center">
                <p className="mb-4 text-muted-foreground">
                  No upcoming batches right now. Join our WhatsApp group to be notified when the next batch opens.
                </p>
                <WhatsAppCTA message={`Hi! I'm interested in the Intuition Program for kids at the ${CENTRE.neighbourhood} center. When is the next batch?`} />
              </div>
            )}
          </div>

          {/* Video + Benefits — second on mobile */}
          <div className="order-last lg:order-first space-y-8">
            {program.youtube_video_id && (
              <YouTubeEmbed videoId={program.youtube_video_id} title={program.name} />
            )}
            {program.benefits && program.benefits.length > 0 && (
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">What your child will gain</h3>
                <BenefitsList benefits={program.benefits} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
