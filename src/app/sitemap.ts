import type { MetadataRoute } from 'next';
import { SITE } from '@/config/site';
import { projects } from '@/features/project';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE.url, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE.url}/about`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE.url}/work`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE.url}/contact`, lastModified, changeFrequency: 'yearly', priority: 0.6 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${SITE.url}/work/${project.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes];
}
