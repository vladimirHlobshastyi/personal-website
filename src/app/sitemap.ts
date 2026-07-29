import type { MetadataRoute } from 'next';
import { buildSitemap } from './_utils/sitemap';

export default function sitemap(): MetadataRoute.Sitemap {
  return buildSitemap();
}
