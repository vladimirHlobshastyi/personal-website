import type { MetadataRoute } from 'next';
import { SITE } from '@/constants';

// Keep the public portfolio crawlable. Host and CDN rules must allow crawlers too.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
