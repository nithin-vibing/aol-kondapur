import type { MetadataRoute } from 'next';
import { CENTRE } from '@/config/centre';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${CENTRE.siteUrl}/sitemap.xml`,
  };
}
