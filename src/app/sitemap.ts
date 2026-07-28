import { statSync } from 'node:fs';
import path from 'node:path';
import type { MetadataRoute } from 'next';
import { SITE } from '@/config/site';
import { projects } from '@/features/project';

function getLatestModified(files: string[]) {
  return files.reduce((latest, file) => {
    const fullPath = path.join(process.cwd(), file);
    const modified = statSync(fullPath).mtime;
    return modified > latest ? modified : latest;
  }, new Date(0));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const homeLastModified = getLatestModified([
    'src/app/page.tsx',
    'src/features/home/components/hero-section.tsx',
    'src/features/home/components/services-section.tsx',
    'src/features/home/components/about-preview-section.tsx',
    'src/features/home/components/selected-work-section.tsx',
    'src/features/home/components/metrics-section.tsx',
  ]);

  const aboutLastModified = getLatestModified([
    'src/app/about/page.tsx',
    'src/features/about/about-page.tsx',
    'src/features/about/about-content.ts',
  ]);

  const workLastModified = getLatestModified([
    'src/app/work/page.tsx',
    'src/features/project/projects.data.ts',
  ]);

  const contactLastModified = getLatestModified([
    'src/app/contact/page.tsx',
    'src/config/contacts.ts',
  ]);

  const projectsLastModified = getLatestModified([
    'src/app/work/[slug]/page.tsx',
    'src/features/project/projects.data.ts',
  ]);

  const resumeLastModified = getLatestModified([
    'public/Volodymyr_Hlobchastyi_Senior_Software_Engineer_CV.pdf',
  ]);

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE.url, lastModified: homeLastModified, changeFrequency: 'monthly', priority: 1 },
    {
      url: `${SITE.url}/about`,
      lastModified: aboutLastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE.url}/work`,
      lastModified: workLastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE.url}/contact`,
      lastModified: contactLastModified,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${SITE.url}/Volodymyr_Hlobchastyi_Senior_Software_Engineer_CV.pdf`,
      lastModified: resumeLastModified,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${SITE.url}/work/${project.slug}`,
    lastModified: projectsLastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes];
}
