import readingTime from 'reading-time';
import type { Post } from './post.types';

export function getPostReadMin(post: Post) {
  return Math.max(1, Math.round(readingTime(post.content).minutes));
}
