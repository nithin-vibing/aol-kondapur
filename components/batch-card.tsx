import { Calendar, Clock, MapPin, Globe, Users } from 'lucide-react';
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
    month: 'short',
    year: 'numeric',
  });
}

function formatDateRange(startDate: string, endDate: string | null): string {
  if (!endDate) return formatDate(startDate);
  
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  if (start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear()) {
    return `${start.getDate()} - ${end.getDate()} ${start.toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })}`;
  }
  
  return `${formatDate(startDate)} - ${formatDate(endDate)}`;
}

export function BatchCard({ batch }: BatchCardProps) {
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
            <Calendar className="h-4 w-4 text-primary" />
            <span>{formatDateRange(batch.start_date, batch.end_date)}</span>
          </div>
          
          {batch.timing && (
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              <span>{batch.timing}</span>
            </div>
          )}
          
          {batch.venue && (
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span>{batch.venue}</span>
            </div>
          )}
          
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4 text-primary" />
            <span>{batch.language} | {batch.mode}</span>
          </div>
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
