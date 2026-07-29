import type { Metadata } from 'next';
import type { Post } from '@/types';
import { ROUTES, SITE } from '@/constants';

export const blogIndexMetadata: Metadata = {
  title: 'Blog — Practical software notes',
  description:
    'Practical notes from Vladimir Hlobchastyi on building, improving and shipping software products.',
  keywords: [
    'React blog',
    'Next.js blog',
    'React Native blog',
    'TypeScript',
    'AI engineering',
    'Software engineering',
    'Portfolio',
    'Web Application Development',
    'Mobile App Development',
  ],
  alternates: { canonical: ROUTES.blog },
  openGraph: {
    type: 'website',
    url: `${SITE.url}${ROUTES.blog}`,
    title: 'Blog — Vladimir Hlobchastyi',
    description: 'Practical notes on building, improving and shipping software products.',
    images: [{ url: '/og.webp', width: 1200, height: 630, alt: 'Vladimir Hlobchastyi — Blog' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog — Vladimir Hlobchastyi',
    description: 'Practical notes on building, improving and shipping software products.',
    images: ['/og.webp'],
  },
};

export function createBlogIndexJsonLd(posts: Post[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Vladimir Hlobchastyi — Blog',
    url: `${SITE.url}${ROUTES.blog}`,
    description: blogIndexMetadata.description,
    author: { '@type': 'Person', '@id': `${SITE.url}/#person`, name: SITE.name },
    blogPost: posts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      url: `${SITE.url}${ROUTES.blog}/${post.slug}`,
      datePublished: post.publishedAt,
      author: { '@type': 'Person', '@id': `${SITE.url}/#person` },
      image: `${SITE.url}${post.cover}`,
      keywords: post.tags.join(', '),
    })),
  };
}

export function createPostMetadata(post: Post | undefined): Metadata | Record<string, never> {
  if (!post) {
    return {};
  }

  const url = `${SITE.url}${ROUTES.blog}/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    keywords: [...post.tags, 'Vladimir Hlobchastyi', 'Software Engineer'],
    alternates: { canonical: `${ROUTES.blog}/${post.slug}` },
    openGraph: {
      type: 'article',
      url,
      title: post.title,
      description: post.description,
      publishedTime: post.publishedAt,
      authors: [SITE.name],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      creator: '@Vladi_Dev_ua',
    },
  };
}

export function createPostJsonLd(post: Post, readMin: number) {
  const url = `${SITE.url}${ROUTES.blog}/${post.slug}`;

  const breadcrumb = {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE.url}${ROUTES.blog}` },
      { '@type': 'ListItem', position: 3, name: post.title, item: url },
    ],
  };

  const blogPosting = {
    '@type': 'BlogPosting',
    '@id': `${url}#blogposting`,
    mainEntityOfPage: url,
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    timeRequired: `PT${readMin}M`,
    keywords: post.tags.join(', '),
    image: `${SITE.url}${post.cover}`,
    url,
    author: { '@type': 'Person', '@id': `${SITE.url}/#person`, name: SITE.name },
    publisher: { '@id': `${SITE.url}/#person` },
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [breadcrumb, blogPosting],
  };
}

export function getRelatedPosts(posts: Post[], currentSlug: string, limit: number) {
  return posts.filter((candidate) => candidate.slug !== currentSlug).slice(0, limit);
}

export function getPostUrl(slug: string) {
  return `${SITE.url}${ROUTES.blog}/${slug}`;
}
