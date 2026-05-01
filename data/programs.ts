/**
 * Static program and batch data.
 *
 * HOW TO UPDATE BATCHES:
 * - Edit the `batches` array under each program below.
 * - Change start_date / end_date (YYYY-MM-DD), timing, and registration_link.
 * - Set is_active: false to hide a batch without deleting it.
 * - Past batches are filtered out automatically (start_date < today).
 * - After editing, Vercel redeploys automatically within ~60 seconds.
 */

import type { ProgramWithBatches } from '@/lib/types';
import { CENTRE } from '@/config/centre';

const HP_WHATSAPP = (label: string) =>
  `https://wa.me/${CENTRE.whatsapp}?text=Hi!+I'd+like+to+register+for+the+Happiness+Program+(${encodeURIComponent(label)}).+Can+you+share+details?`;

const IP_WHATSAPP = (ageGroup: string) =>
  `https://wa.me/${CENTRE.whatsapp}?text=Hi!+I'd+like+to+register+my+child+(${encodeURIComponent(ageGroup)})+for+the+Intuition+Program.+Can+you+share+details?`;

export const PROGRAMS: ProgramWithBatches[] = [
  {
    id: 'happiness-program',
    slug: 'happiness-program',
    name: 'Happiness Program',
    tagline: 'Fix the root cause. Not just the symptoms.',
    description:
      'A 3-day program where you learn Sudarshan Kriya — a rhythmic breathing technique backed by science. Millions have used it to break free from chronic stress, poor sleep, and low energy. One weekend. A skill you\'ll use for life.',
    benefits: [
      'Eliminate stress and anxiety at the root — not just manage it',
      'Sleep deeper, wake up with more energy',
      'A lifelong breathing practice, validated by science',
    ],
    duration: '3 days',
    price: 2500,
    youtube_video_id: 'A27L9oknmic',
    created_at: '',
    updated_at: '',
    batches: [
      // ─── ADD / EDIT BATCHES HERE ──────────────────────────────
      {
        id: 'hp-may-2026-0810-630am',
        program_id: 'happiness-program',
        title: '8th May 6:30 AM Batch',
        age_group: null,
        start_date: '2026-05-08',
        end_date: '2026-05-10',
        timing: null,
        timing_weekday: '6:30 AM – 9:30 AM',
        timing_weekend: '6:30 AM – 10:30 AM',
        schedule: null,
        language: 'English',
        mode: 'Offline',
        venue: null,
        registration_link: 'https://aolt.in/960752',
        is_active: true,
        created_at: '',
        updated_at: '',
      },
      {
        id: 'hp-may-2026-0810-6pm',
        program_id: 'happiness-program',
        title: '8th May 6:00 PM Batch',
        age_group: null,
        start_date: '2026-05-08',
        end_date: '2026-05-10',
        timing: null,
        timing_weekday: '6:00 PM – 9:00 PM',
        timing_weekend: '7:00 AM – 11:00 AM',
        schedule: null,
        language: 'English',
        mode: 'Offline',
        venue: null,
        registration_link: 'https://aolt.in/960760',
        is_active: true,
        created_at: '',
        updated_at: '',
      },
      // ─────────────────────────────────────────────────────────
    ],
  },

  {
    id: 'intuition-program',
    slug: 'intuition-program',
    name: 'Intuition Program',
    tagline: 'The life skills no tuition can teach.',
    description:
      'A weekend program for children aged 5–18 that builds the inner foundation for everything else — focus, confidence, and the ability to handle pressure. Taught through yoga and breathing techniques designed for young minds in Kondapur.',
    benefits: [
      'Build emotional resilience, grit and inner confidence for life',
      'Sharper focus and concentration in academics and extra-curriculars',
      'Effective breathing techniques to manage setbacks and stress',
    ],
    duration: '2 days',
    price: 10000,
    youtube_video_id: 'h_bq8gqWxyE', // ← just the ID from the YouTube URL, not the full link
    created_at: '',
    updated_at: '',
    batches: [
      // ─── ADD / EDIT BATCHES HERE ──────────────────────────────
      {
        id: 'ip-may-2026-5-8',
        program_id: 'intuition-program',
        title: 'IP Junior',
        age_group: '5-8 years',
        start_date: '2026-05-15',
        end_date: '2026-05-25',
        timing: null,
        timing_weekday: null,
        timing_weekend: null,
        schedule: [
          { label: 'Fri 15 May · In Person', timing: '5:00 PM – 8:30 PM' },
          { label: 'Sat & Sun, 16–17 May · In Person', timing: '10:00 AM – 1:00 PM' },
          { label: 'Mon 18 May · In Person', timing: '5:00 PM – 8:00 PM' },
          { label: '19–25 May · Online Practice', timing: '30 min, evening' },
        ],
        language: 'English',
        mode: 'Offline',
        venue: null,
        registration_link: IP_WHATSAPP('5-8 years'),
        is_active: true,
        created_at: '',
        updated_at: '',
      },
      {
        id: 'ip-may-2026-8-13',
        program_id: 'intuition-program',
        title: 'IP Kids',
        age_group: '8-13 years',
        start_date: '2026-05-06',
        end_date: '2026-05-06',
        timing: null,
        timing_weekday: null,
        timing_weekend: null,
        schedule: [
          { label: 'Module 1 · 20–23 Apr · In Person', timing: '4:30 PM – 6:30 PM' },
          { label: 'Module 2 · 27–29 Apr · In Person', timing: '5:30 PM – 7:30 PM' },
          { label: 'Module 3 · 06 May · In Person', timing: '5:30 PM – 7:30 PM' },
        ],
        language: 'English',
        mode: 'Offline',
        venue: null,
        registration_link: 'https://www.artofliving.online/registration.php?event_id=955295&ct_id=881&pkg_id=10598',
        is_active: true,
        created_at: '',
        updated_at: '',
      },
      {
        id: 'ip-may-2026-13-18',
        program_id: 'intuition-program',
        title: 'IP Teens',
        age_group: '13-18 years',
        start_date: '2026-05-06',
        end_date: '2026-05-06',
        timing: null,
        timing_weekday: null,
        timing_weekend: null,
        schedule: [
          { label: 'Module 1 · 20–23 Apr · In Person', timing: '6:30 PM – 8:30 PM' },
          { label: 'Module 2 · 27–29 Apr · In Person', timing: '5:30 PM – 7:30 PM' },
          { label: 'Module 3 · 06 May · In Person', timing: '5:30 PM – 7:30 PM' },
        ],
        language: 'English',
        mode: 'Offline',
        venue: null,
        registration_link: 'https://www.artofliving.online/registration.php?event_id=962599&ct_id=882&pkg_id=11611',
        is_active: true,
        created_at: '',
        updated_at: '',
      },
      // ─────────────────────────────────────────────────────────
    ],
  },
];
