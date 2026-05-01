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
    youtube_video_id: null, // ← Paste your YouTube video ID here, e.g. 'dQw4w9WgXcQ'
    created_at: '',
    updated_at: '',
    batches: [
      // ─── ADD / EDIT BATCHES HERE ──────────────────────────────
      {
        id: 'hp-may-2026',
        program_id: 'happiness-program',
        title: 'May Batch',
        age_group: null,
        start_date: '2026-05-16',
        end_date: '2026-05-18',
        timing: '6:00 PM – 9:00 PM',
        language: 'English',
        mode: 'Offline',
        venue: 'Art of Living Kondapur Centre, 4th Floor, Seshadri Marg, Raghavendra Colony',
        registration_link: HP_WHATSAPP('May batch'),
        is_active: true,
        created_at: '',
        updated_at: '',
      },
      {
        id: 'hp-jun-2026',
        program_id: 'happiness-program',
        title: 'June Batch',
        age_group: null,
        start_date: '2026-06-13',
        end_date: '2026-06-15',
        timing: '6:00 PM – 9:00 PM',
        language: 'English',
        mode: 'Offline',
        venue: 'Art of Living Kondapur Centre, 4th Floor, Seshadri Marg, Raghavendra Colony',
        registration_link: HP_WHATSAPP('June batch'),
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
    youtube_video_id: 'https://youtu.be/h_bq8gqWxyE?si=9vJXmcfKjVYHu0rW', // ← Paste your YouTube video ID here
    created_at: '',
    updated_at: '',
    batches: [
      // ─── ADD / EDIT BATCHES HERE ──────────────────────────────
      {
        id: 'ip-may-2026-5-8',
        program_id: 'intuition-program',
        title: 'Ages 5–8',
        age_group: '5-8 years',
        start_date: '2026-05-24',
        end_date: '2026-05-25',
        timing: '10:00 AM – 1:00 PM',
        language: 'English',
        mode: 'Offline',
        venue: 'Art of Living Kondapur Centre, 4th Floor, Seshadri Marg, Raghavendra Colony',
        registration_link: IP_WHATSAPP('5-8 years'),
        is_active: true,
        created_at: '',
        updated_at: '',
      },
      {
        id: 'ip-may-2026-8-13',
        program_id: 'intuition-program',
        title: 'Ages 8–13',
        age_group: '8-13 years',
        start_date: '2026-05-24',
        end_date: '2026-05-25',
        timing: '2:00 PM – 5:00 PM',
        language: 'English',
        mode: 'Offline',
        venue: 'Art of Living Kondapur Centre, 4th Floor, Seshadri Marg, Raghavendra Colony',
        registration_link: IP_WHATSAPP('8-13 years'),
        is_active: true,
        created_at: '',
        updated_at: '',
      },
      {
        id: 'ip-may-2026-13-18',
        program_id: 'intuition-program',
        title: 'Ages 13–18',
        age_group: '13-18 years',
        start_date: '2026-05-24',
        end_date: '2026-05-25',
        timing: '10:00 AM – 1:00 PM',
        language: 'English',
        mode: 'Offline',
        venue: 'Art of Living Kondapur Centre, 4th Floor, Seshadri Marg, Raghavendra Colony',
        registration_link: IP_WHATSAPP('13-18 years, online'),
        is_active: true,
        created_at: '',
        updated_at: '',
      },
      // ─────────────────────────────────────────────────────────
    ],
  },
];
