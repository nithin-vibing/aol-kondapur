import type { MetadataRoute } from 'next';
import { CENTRE } from '@/config/centre';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: CENTRE.siteUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${CENTRE.siteUrl}/happiness-program`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${CENTRE.siteUrl}/intuition-program`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${CENTRE.siteUrl}/free-intro`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
}
