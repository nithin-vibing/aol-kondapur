import { CENTRE } from '@/config/centre';

export function LocalBusinessJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: CENTRE.name,
    description:
      'Art of Living programs in Kondapur, Hyderabad — Happiness Program (SKY Breath Meditation) and Intuition Program for children.',
    url: CENTRE.siteUrl,
    telephone: `+${CENTRE.whatsapp}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: CENTRE.address.join(', '),
      addressLocality: 'Kondapur',
      addressRegion: 'Telangana',
      postalCode: '500084',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 17.4603,
      longitude: 78.3553,
    },
    sameAs: ['https://www.artofliving.org'],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface CourseJsonLdProps {
  name: string;
  description: string;
  url: string;
}

export function CourseJsonLd({ name, description, url }: CourseJsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: 'Art of Living Foundation',
      sameAs: 'https://www.artofliving.org',
    },
    url,
    inLanguage: 'en',
    educationalLevel: 'Beginner',
    courseMode: 'onsite',
    locationCreated: {
      '@type': 'Place',
      name: `${CENTRE.name}, ${CENTRE.neighbourhood}`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: CENTRE.address.join(', '),
        addressLocality: 'Kondapur',
        addressRegion: 'Telangana',
        addressCountry: 'IN',
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
