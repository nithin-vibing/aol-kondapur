'use client';

import confetti from 'canvas-confetti';
import { Calendar, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { WhatsAppCTA } from '@/components/whatsapp-cta';
import { CENTRE } from '@/config/centre';
import type { Batch } from '@/lib/types';

function celebrate(url: string) {
  confetti({
    particleCount: 120,
    spread: 80,
    origin: { x: 0.5, y: 0.65 },
    colors: ['#E8712A', '#F5A623', '#FFD700', '#FF8C00', '#FFC857', '#FFAA00'],
    gravity: 1.1,
    scalar: 0.95,
  });
  setTimeout(() => window.open(url, '_blank'), 1000);
}

interface BatchCardProps {
  batch: Batch;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function formatDateRange(startDate: string, endDate: string | null): string {
  if (!endDate) return formatDate(startDate);

  const start = new Date(startDate);
  const end = new Date(endDate);

  if (start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear()) {
    return `${start.getDate()} – ${end.getDate()} ${start.toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}`;
  }

  return `${formatDate(startDate)} – ${formatDate(endDate)}`;
}

export function BatchCard({ batch }: BatchCardProps) {
  const hasSchedule = batch.schedule && batch.schedule.length > 0;
  const hasWeekdayWeekend = batch.timing_weekday && batch.timing_weekend;

  const fallbackMessage = batch.age_group
    ? `Hi! I'd like to register my child (${batch.age_group}) for the Intuition Program at the ${CENTRE.neighbourhood} center. Can you share details?`
    : `Hi! I'd like to register for the Happiness Program at the ${CENTRE.neighbourhood} center. Can you share details?`;

  return (
    <Card className="flex flex-col border-border/50 bg-card/80 backdrop-blur-sm transition-shadow hover:shadow-md">
      <CardContent className="flex-1 space-y-3 pt-6">
        <div className="flex items-start justify-between gap-2">
          <h4 className="font-semibold text-foreground">{batch.title}</h4>
          {batch.age_group && (
            <Badge variant="secondary" className="shrink-0 text-xs">
              <Users className="mr-1 h-3 w-3" />
              {batch.age_group}
            </Badge>
          )}
        </div>

        <div className="space-y-2 text-sm text-muted-foreground">
          {/* Date range — only shown when no schedule (schedule labels carry dates) */}
          {!hasSchedule && (
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 shrink-0 text-primary" />
              <span>{formatDateRange(batch.start_date, batch.end_date)}</span>
            </div>
          )}

          {/* Schedule (module/day-by-day breakdown) */}
          {hasSchedule ? (
            <div className="flex items-start gap-2">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <div className="space-y-3">
                {batch.schedule!.map((item) => (
                  <div key={item.label} className="flex flex-col gap-0.5">
                    <span className="font-medium text-foreground text-xs">{item.label}</span>
                    <span>{item.timing}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : hasWeekdayWeekend ? (
            <div className="flex items-start gap-2">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <div className="space-y-0.5">
                <p><span className="font-medium text-foreground">Weekday:</span> {batch.timing_weekday}</p>
                <p><span className="font-medium text-foreground">Weekend:</span> {batch.timing_weekend}</p>
              </div>
            </div>
          ) : batch.timing ? (
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 shrink-0 text-primary" />
              <span>{batch.timing}</span>
            </div>
          ) : null}
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        {batch.registration_link ? (
          <Button className="w-full" onClick={() => celebrate(batch.registration_link!)}>
            Register Now
          </Button>
        ) : (
          <WhatsAppCTA
            label="Register via WhatsApp"
            message={fallbackMessage}
            className="w-full"
            onClick={() => celebrate(`https://wa.me/${CENTRE.whatsapp}?text=${encodeURIComponent(fallbackMessage)}`)}
          />
        )}
      </CardFooter>
    </Card>
  );
}
