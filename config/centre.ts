/**
 * ============================================================
 * CENTRE CONFIGURATION — edit this file to customise the site
 * for your local Art of Living centre.
 * ============================================================
 *
 * After editing, Vercel redeploys automatically in ~60 seconds.
 * No other files need to change.
 */

export const CENTRE = {
  // ── Identity ───────────────────────────────────────────────
  name: 'Art of Living Happiness Center',
  neighbourhood: 'Kondapur',       // short location label shown in header & copy
  city: 'Hyderabad',

  // ── Contact ────────────────────────────────────────────────
  /** WhatsApp number in international format without +  (e.g. 919849377711) */
  whatsapp: '919849377711',

  /** Display phone numbers — shown on the contact card */
  phones: ['+91 98493 77711', '+91 98480 54746'],

  // ── Location ───────────────────────────────────────────────
  address: [
    '4th Floor, Lenskart Building',
    'Raghavendra Colony, Kondapur',
  ],

  /** Google Maps embed URL — paste from Google Maps → Share → Embed a map */
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3904.8894188901554!2d78.35324659999999!3d17.4702145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb935ca2c747a3%3A0xe0223cda020aeea!2sThe%20Art%20Of%20Living%20Happiness%20Center-%20Kondapur!5e1!3m2!1sen!2sin!4v1777702269720!5m2!1sen!2sin',

  /** Link shown on the "Get Directions" button */
  directionsUrl: 'https://tinyurl.com/AOLCentre',

  // ── Site metadata ──────────────────────────────────────────
  /** Your deployed Vercel URL — used for OG / social preview links */
  siteUrl: 'https://aol-kondapur.vercel.app', // ← update if you get a custom domain
} as const;
