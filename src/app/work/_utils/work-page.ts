import type { Metadata } from 'next';
import type { Project } from '@/types';
import { ROUTES, SITE } from '@/constants';
import {
  MOBILE_CATEGORY_KEYWORDS,
  SOFTWARE_PLATFORM_BY_CATEGORY,
  WEB_CATEGORY_KEYWORDS,
} from '../_constants/work.constants';

export const workIndexMetadata: Metadata = {
  title: 'Selected Web & Mobile Projects',
  description:
    'Selected case studies across social media, e-commerce, mental health, logistics, real estate, enterprise operations and realtime products.',
  keywords: [
    'Software Engineer',
    'React Developer',
    'Next.js Developer',
    'Node.js Developer',
    'React Native Developer',
    'TypeScript Developer',
    'Web Application Development',
    'Backend Development',
    'Mobile App Development',
  ],
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
      name: project.title,
      headline: `${project.title} — ${project.category}`,
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
    keywords: [...(project.keywords ?? []), ...project.stack, project.category, project.title],
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
  const category = project.category.toLowerCase();
  const isMobile = MOBILE_CATEGORY_KEYWORDS.some((keyword) => category.includes(keyword));
  const isWeb = WEB_CATEGORY_KEYWORDS.some((keyword) => category.includes(keyword));
  const isSoftwareApplication = isMobile || isWeb;

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
    '@id': `${projectUrl}#creativework`,
    name: project.title,
    headline: `${project.title} — ${project.category}`,
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

  const softwareApplication = isSoftwareApplication
    ? {
        '@type': 'SoftwareApplication',
        '@id': `${projectUrl}#software`,
        name: project.title,
        applicationCategory: isMobile ? 'MobileApplication' : 'WebApplication',
        operatingSystem: isMobile
          ? SOFTWARE_PLATFORM_BY_CATEGORY.Mobile
          : SOFTWARE_PLATFORM_BY_CATEGORY.Web,
        description: project.shortDescription,
        url: projectUrl,
        image: coverUrl,
        keywords: [...(project.keywords ?? []), ...project.stack].join(', '),
        author: { '@type': 'Person', '@id': `${SITE.url}/#person`, name: SITE.name },
      }
    : null;

  return {
    '@context': 'https://schema.org',
    '@graph': [breadcrumb, creativeWork, ...(softwareApplication ? [softwareApplication] : [])],
  };
}
