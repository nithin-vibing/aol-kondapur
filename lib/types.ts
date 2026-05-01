export interface Program {
  id: string;
  slug: string;
  name: string;
  tagline: string | null;
  description: string | null;
  benefits: string[] | null;
  duration: string | null;
  price: number | null;
  youtube_video_id: string | null;
  created_at: string;
  updated_at: string;
}

export interface Batch {
  id: string;
  program_id: string;
  title: string;
  age_group: string | null;
  start_date: string;
  end_date: string | null;
  timing: string | null;
  timing_weekday: string | null;
  timing_weekend: string | null;
  schedule: Array<{ label: string; timing: string }> | null;
  language: string;
  mode: string;
  venue: string | null;
  registration_link: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface ProgramWithBatches extends Program {
  batches: Batch[];
}
