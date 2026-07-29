import readingTime from 'reading-time';
import { posts } from '@/constants/posts.data';
import type { Post } from '@/types';

const BLOG_CARD_DATE_FORMAT = {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
  timeZone: 'UTC',
} as const;

const BLOG_HERO_DATE_FORMAT = {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
  timeZone: 'UTC',
} as const;

export function getPostReadMin(post: Post) {
  return Math.max(1, Math.round(readingTime(post.content).minutes));
}

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function getAllPostTags(): string[] {
  const tags = new Set<string>();

  for (const post of posts) {
    post.tags.forEach((tag) => tags.add(tag));
  }

  return [...tags].sort();
}

export function formatBlogCardDate(isoDate: string) {
  return new Date(`${isoDate}T00:00:00Z`).toLocaleDateString('en-US', BLOG_CARD_DATE_FORMAT);
}

export function formatBlogHeroDate(isoDate: string) {
  return new Date(`${isoDate}T00:00:00Z`).toLocaleDateString('en-US', BLOG_HERO_DATE_FORMAT);
}
