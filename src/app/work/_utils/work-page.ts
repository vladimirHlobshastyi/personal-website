import type { Metadata } from 'next';
import type { Project } from '@/types';
import { ROUTES, SITE } from '@/constants';

export const workIndexMetadata: Metadata = {
  title: 'Selected Web & Mobile Projects',
  description:
    'Selected case studies across social media, e-commerce, mental health, logistics, real estate, enterprise operations and realtime products.',
  alternates: { canonical: ROUTES.work },
  openGraph: {
    type: 'website',
    url: `${SITE.url}${ROUTES.work}`,
    title: 'Selected Web & Mobile Projects',
    description:
      'Case studies across social media, e-commerce, mental health, logistics, real estate, enterprise operations and realtime products.',
    images: [{ url: '/og.webp', width: 1200, height: 630, alt: 'Vladimir Hlobchastyi — Work' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Selected Web & Mobile Projects',
    description:
      'Selected product case studies built with React, Next.js, React Native and TypeScript.',
    images: ['/og.webp'],
  },
};

export function createWorkCollectionJsonLd(projects: Project[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Selected projects',
    description: 'Selected web and mobile product case studies by Vladimir Hlobchastyi.',
    url: `${SITE.url}${ROUTES.work}`,
    hasPart: projects.map((project) => ({
      '@type': 'CreativeWork',
      name: `${project.title} Case Study`,
      headline: `${project.title} — ${project.category} Case Study`,
      url: `${SITE.url}${ROUTES.work}/${project.slug}`,
      keywords: [...(project.keywords ?? []), ...project.stack].join(', '),
      author: { '@type': 'Person', '@id': `${SITE.url}/#person` },
    })),
  };
}

export function createProjectMetadata(
  project: Project | undefined,
  cover: string | undefined,
): Metadata | Record<string, never> {
  if (!project || !cover) {
    return {};
  }

  const description = project.subtitle;

  return {
    title: `${project.title} Case Study`,
    description,
    alternates: { canonical: `${ROUTES.work}/${project.slug}` },
    openGraph: {
      type: 'article',
      url: `${SITE.url}${ROUTES.work}/${project.slug}`,
      title: `${project.title} — ${project.category} Case Study`,
      description,
      images: [{ url: cover, width: 1600, height: 1000, alt: project.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} — ${project.category} Case Study`,
      description,
      images: [cover],
    },
  };
}

export function createProjectJsonLd(project: Project, coverUrl: string) {
  const projectUrl = `${SITE.url}${ROUTES.work}/${project.slug}`;

  const breadcrumb = {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'Work', item: `${SITE.url}${ROUTES.work}` },
      { '@type': 'ListItem', position: 3, name: project.title, item: projectUrl },
    ],
  };

  const creativeWork = {
    '@type': 'CreativeWork',
    '@id': `${projectUrl}#case-study`,
    name: `${project.title} Case Study`,
    headline: `${project.title} — ${project.category} Case Study`,
    description: project.shortDescription,
    abstract: project.overview,
    url: projectUrl,
    image: coverUrl,
    keywords: [...(project.keywords ?? []), ...project.stack].join(', '),
    about: project.category,
    author: { '@type': 'Person', '@id': `${SITE.url}/#person`, name: SITE.name },
    creator: { '@id': `${SITE.url}/#person` },
    contributor: { '@id': `${SITE.url}/#person` },
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [breadcrumb, creativeWork],
  };
}
