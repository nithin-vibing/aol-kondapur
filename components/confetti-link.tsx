'use client';

import { celebrate } from '@/lib/celebrate';

interface ConfettiLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function ConfettiLink({ href, children, className }: ConfettiLinkProps) {
  return (
    <button onClick={() => celebrate(href)} className={className}>
      {children}
    </button>
  );
}
