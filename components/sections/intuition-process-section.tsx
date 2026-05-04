'use client';

import { useState } from 'react';
import { CENTRE } from '@/config/centre';
import { VideoCarousel } from '@/components/video-carousel';
import { BenefitsList } from '@/components/benefits-list';
import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { ProgramWithBatches } from '@/lib/types';

const AGE_GROUPS = ['5-8 years', '8-13 years', '13-18 years'] as const;
type AgeGroup = typeof AGE_GROUPS[number];

interface ScheduleRow {
  days: string;
  format: string;
  duration: string;
}

const SCHEDULES: Record<AgeGroup, { duration: string; rows: ScheduleRow[] }> = {
  '5-8 years': {
    duration: '10 days',
    rows: [
      { days: 'Week 1: Fri – Sun', format: 'In-person', duration: '2 hrs/day' },
      { days: 'Week 1: Mon – Sat', format: 'Online (Zoom)', duration: '15 mins/day' },
      { days: 'Week 2: Sun', format: 'In-person', duration: '2 hours' },
    ],
  },
  '8-13 years': {
    duration: '17 days',
    rows: [
      { days: 'Week 1: Fri – Sun', format: 'In-person', duration: '2 hrs/day' },
      { days: 'Week 1: Mon – Thu', format: 'Online (Zoom)', duration: '15 mins/day' },
      { days: 'Week 2: Fri – Sun', format: 'In-person', duration: '2 hrs/day' },
      { days: 'Week 2: Mon – Sat', format: 'Online (Zoom)', duration: '30 mins/day' },
      { days: 'Week 3: Sun', format: 'In-person', duration: '2 hrs/day' },
    ],
  },
  '13-18 years': {
    duration: '17 days',
    rows: [
      { days: 'Week 1: Fri – Sun', format: 'In-person', duration: '2 hrs/day' },
      { days: 'Week 1: Mon – Thu', format: 'Online (Zoom)', duration: '30 mins/day' },
      { days: 'Week 2: Fri – Sun', format: 'In-person', duration: '2 hrs/day' },
      { days: 'Week 2: Mon – Sat', format: 'Online (Zoom)', duration: '30 mins/day' },
      { days: 'Week 3: Sun', format: 'In-person', duration: '2 hrs/day' },
    ],
  },
};

const WA_MESSAGES: Record<AgeGroup, string> = {
  '5-8 years': `Hi! I'm interested in the Intuition Program (Juniors, ages 5–8) at the ${CENTRE.neighbourhood} center. Can you share the upcoming batch dates?`,
  '8-13 years': `Hi! I'm interested in the Intuition Program (Kids, ages 8–13) at the ${CENTRE.neighbourhood} center. Can you share the upcoming batch dates?`,
  '13-18 years': `Hi! I'm interested in the Intuition Program (Teens, ages 13–18) at the ${CENTRE.neighbourhood} center. Can you share the upcoming batch dates?`,
};

function ScheduleTable({ group }: { group: AgeGroup }) {
  const { duration, rows } = SCHEDULES[group];
  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        Duration: <span className="font-medium text-foreground">{duration}</span>
      </p>
      <div className="overflow-hidden rounded-xl border border-border">
        {/* Table header */}
        <div className="grid grid-cols-3 bg-primary/10 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-foreground">
          <span>Day(s)</span>
          <span>Format</span>
          <span>Duration</span>
        </div>
        {/* Table rows */}
        {rows.map((row, i) => {
          const [week, days] = row.days.split(': ');
          return (
            <div
              key={i}
              className={`grid grid-cols-3 px-4 py-3 text-sm ${i < rows.length - 1 ? 'border-b border-border' : ''} ${i % 2 === 1 ? 'bg-muted/30' : 'bg-background'}`}
            >
              <span className="text-foreground">
                <span className="block">{week}:</span>
                <span className="block">{days}</span>
              </span>
              <span className="text-muted-foreground">{row.format}</span>
              <span className="text-muted-foreground">{row.duration}</span>
            </div>
          );
        })}
      </div>
      <WhatsAppCTA
        label="Enquire about Next Batch"
        message={WA_MESSAGES[group]}
        className="w-full"
      />
    </div>
  );
}

interface IntuitionProcessSectionProps {
  program: ProgramWithBatches | null;
}

export function IntuitionProcessSection({ program }: IntuitionProcessSectionProps) {
  const [activeTab, setActiveTab] = useState<AgeGroup>('5-8 years');

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

        {/* Age group labels */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          <Badge variant="outline" className="text-sm">IP Junior: Ages 5 to 8 years</Badge>
          <Badge variant="outline" className="text-sm">IP Kids: Ages 8 to 13 years</Badge>
          <Badge variant="outline" className="text-sm">IP Teens: Ages 13 to 18 years</Badge>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Schedule — first on mobile */}
          <div className="order-first lg:order-last space-y-4">
            <h3 className="font-semibold text-foreground text-lg">Program Schedule</h3>
            <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as AgeGroup)} className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                {AGE_GROUPS.map((group) => (
                  <TabsTrigger key={group} value={group} className="text-xs sm:text-sm">
                    {group.replace(' years', '')}
                  </TabsTrigger>
                ))}
              </TabsList>
              {AGE_GROUPS.map((group) => (
                <TabsContent key={group} value={group} className="mt-4">
                  <ScheduleTable group={group} />
                </TabsContent>
              ))}
            </Tabs>
          </div>

          {/* Video + Benefits — second on mobile */}
          <div className="order-last lg:order-first space-y-8">
            {program.youtube_video_ids.length > 0 && (
              <VideoCarousel videoIds={program.youtube_video_ids} title={program.name} aspect="landscape" />
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
