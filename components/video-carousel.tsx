'use client';

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { YouTubeEmbed } from '@/components/youtube-embed';

interface VideoCarouselProps {
  videoIds: string[];
  title?: string;
  aspect?: 'landscape' | 'vertical';
}

export function VideoCarousel({ videoIds, title, aspect = 'landscape' }: VideoCarouselProps) {
  if (videoIds.length === 0) return null;

  if (videoIds.length === 1) {
    return <YouTubeEmbed videoId={videoIds[0]} title={title} aspect={aspect} />;
  }

  return (
    <Carousel className="w-full" opts={{ loop: true }}>
      <CarouselContent>
        {videoIds.map((id, i) => (
          <CarouselItem key={id}>
            <YouTubeEmbed videoId={id} title={title ? `${title} ${i + 1}` : undefined} aspect={aspect} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="mt-3 flex items-center justify-center gap-3">
        <CarouselPrevious className="static translate-y-0" />
        <span className="text-xs text-muted-foreground tabular-nums">
          {videoIds.length} videos
        </span>
        <CarouselNext className="static translate-y-0" />
      </div>
    </Carousel>
  );
}
