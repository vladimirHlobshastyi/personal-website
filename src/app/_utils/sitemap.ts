import { statSync } from 'node:fs';
import path from 'node:path';
import type { MetadataRoute } from 'next';
import { posts, projects, ROUTES, SITE } from '@/constants';

function getLatestModified(files: string[]) {
  return files.reduce((latest, file) => {
    const fullPath = path.join(process.cwd(), file);
    const modified = statSync(fullPath).mtime;
    return modified > latest ? modified : latest;
  }, new Date(0));
}

export function buildSitemap(): MetadataRoute.Sitemap {
  const homeLastModified = getLatestModified([
    'src/app/page.tsx',
    'src/app/_components/home/hero-section.tsx',
    'src/app/_components/home/services-section.tsx',
    'src/app/_components/home/about-preview-section.tsx',
    'src/app/_components/home/selected-work-section.tsx',
    'src/app/_components/home/metrics-section.tsx',
  ]);

  const aboutLastModified = getLatestModified([
    'src/app/about/page.tsx',
    'src/app/about/_components/about-page.tsx',
    'src/app/about/_constants/about.constants.ts',
  ]);

  const workLastModified = getLatestModified([
    'src/app/work/page.tsx',
    'src/constants/projects.data.ts',
    'src/app/work/_components/work-gallery.tsx',
  ]);

  const contactLastModified = getLatestModified([
    'src/app/contact/page.tsx',
    'src/app/contact/_components/contact-page.tsx',
    'src/app/contact/_constants/contact.constants.ts',
  ]);

  const blogLastModified = getLatestModified([
    'src/app/blog/page.tsx',
    'src/app/blog/[slug]/page.tsx',
    'src/constants/posts.data.ts',
    'src/app/blog/_components/post-card.tsx',
    'src/app/blog/_components/post-hero.tsx',
    'src/app/blog/_components/post-body.tsx',
  ]);

  const projectsLastModified = getLatestModified([
    'src/app/work/[slug]/page.tsx',
    'src/constants/projects.data.ts',
    'src/app/work/_components/project-hero.tsx',
    'src/app/work/_components/project-story.tsx',
  ]);

  const resumeLastModified = getLatestModified([
    'public/Volodymyr_Hlobchastyi_Senior_Software_Engineer_CV.pdf',
  ]);

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE.url, lastModified: homeLastModified, changeFrequency: 'monthly', priority: 1 },
    {
      url: `${SITE.url}${ROUTES.about}`,
      lastModified: aboutLastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE.url}${ROUTES.work}`,
      lastModified: workLastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE.url}${ROUTES.contact}`,
      lastModified: contactLastModified,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${SITE.url}${ROUTES.blog}`,
      lastModified: blogLastModified,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
    {
      url: `${SITE.url}/Volodymyr_Hlobchastyi_Senior_Software_Engineer_CV.pdf`,
      lastModified: resumeLastModified,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${SITE.url}${ROUTES.work}/${project.slug}`,
    lastModified: projectsLastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE.url}${ROUTES.blog}/${post.slug}`,
    lastModified: new Date(`${post.publishedAt}T00:00:00Z`),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes, ...blogRoutes];
}
