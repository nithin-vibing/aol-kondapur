import { Calendar, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Batch } from '@/lib/types';

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
  const hasWeekdayWeekend = batch.timing_weekday && batch.timing_weekend;

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
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 shrink-0 text-primary" />
            <span>{formatDateRange(batch.start_date, batch.end_date)}</span>
          </div>

          {hasWeekdayWeekend ? (
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
          <Button asChild className="w-full">
            <a href={batch.registration_link} target="_blank" rel="noopener noreferrer">
              Register Now
            </a>
          </Button>
        ) : (
          <Button variant="secondary" className="w-full" disabled>
            Coming Soon
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
