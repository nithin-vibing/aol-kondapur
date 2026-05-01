import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export function BackBreadcrumb() {
  return (
    <div className="border-b border-border/50 bg-background px-4 py-3">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          All programs
        </Link>
      </div>
    </div>
  );
}
