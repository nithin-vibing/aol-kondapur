import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 fill-primary text-primary" />
            <span>by Art of Living volunteers</span>
          </div>
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Art of Living Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
