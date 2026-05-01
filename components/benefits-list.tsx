import { Check } from 'lucide-react';

interface BenefitsListProps {
  benefits: string[];
}

export function BenefitsList({ benefits }: BenefitsListProps) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {benefits.map((benefit, index) => (
        <li key={index} className="flex items-start gap-3">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Check className="h-3 w-3" />
          </span>
          <span className="text-muted-foreground">{benefit}</span>
        </li>
      ))}
    </ul>
  );
}
