'use client';

import { useState } from 'react';
import { Play } from 'lucide-react';

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
  aspect?: 'landscape' | 'vertical';
}

export function YouTubeEmbed({ videoId, title = 'Video', aspect = 'landscape' }: YouTubeEmbedProps) {
  const aspectClass = aspect === 'vertical' ? 'aspect-[9/16]' : 'aspect-video';
  const [isPlaying, setIsPlaying] = useState(false);

  const [thumbSrc, setThumbSrc] = useState(`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`);

  if (isPlaying) {
    return (
      <div className={`relative ${aspectClass} w-full overflow-hidden rounded-xl shadow-lg`}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
    );
  }

  return (
    <button
      onClick={() => setIsPlaying(true)}
      className={`group relative ${aspectClass} w-full overflow-hidden rounded-xl shadow-lg transition-transform hover:scale-[1.02]`}
      aria-label={`Play ${title}`}
    >
      <img
        src={thumbSrc}
        alt={`${title} thumbnail`}
        className="h-full w-full object-cover"
        onError={() => setThumbSrc(`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`)}
      />
      <div className="absolute inset-0 flex items-center justify-center bg-foreground/20 transition-colors group-hover:bg-foreground/30">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform group-hover:scale-110">
          <Play className="h-7 w-7 fill-current" />
        </div>
      </div>
    </button>
  );
}
