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
    '4th Floor, Lenskart / Tumbledry Building',
    'Seshadri Marg, Raghavendra Colony',
    'Kondapur, Hyderabad',
  ],

  /** Google Maps embed URL — paste from Google Maps → Share → Embed a map */
  mapEmbedUrl:
    'https://maps.google.com/maps?q=Art+Of+Living+Center+Kondapur+Hyderabad+Seshadri+Marg&output=embed',

  /** Link shown on the "Get Directions" button */
  directionsUrl: 'https://tinyurl.com/AOLCentre',

  // ── Site metadata ──────────────────────────────────────────
  /** Your deployed Vercel URL — used for OG / social preview links */
  siteUrl: 'https://aol-kondapur.vercel.app',
} as const;
