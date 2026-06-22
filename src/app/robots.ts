import type { MetadataRoute } from 'next';
import { SITE } from '@/config/site';

// Allow every crawler — including AI/answer engines (GPTBot, ClaudeBot,
// PerplexityBot, Google-Extended, etc.) — so the site can be indexed and cited.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
