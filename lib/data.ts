import { PROGRAMS } from '@/data/programs';
import type { ProgramWithBatches } from '@/lib/types';

function filterAndSortBatches(program: ProgramWithBatches): ProgramWithBatches {
  const today = new Date().toISOString().split('T')[0];
  return {
    ...program,
    batches: program.batches
      .filter((b) => b.is_active && b.start_date >= today)
      .sort((a, b) => a.start_date.localeCompare(b.start_date)),
  };
}

export async function getProgramsWithBatches(): Promise<ProgramWithBatches[]> {
  return PROGRAMS.map(filterAndSortBatches);
}

export async function getProgramBySlug(slug: string): Promise<ProgramWithBatches | null> {
  const program = PROGRAMS.find((p) => p.slug === slug);
  return program ? filterAndSortBatches(program) : null;
}
