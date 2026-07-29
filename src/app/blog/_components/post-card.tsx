import Link from 'next/link';
import { ROUTES } from '@/constants';
import { ArrowIcon } from '@/components/ui';
import type { Post } from '@/types';
import { formatBlogCardDate, getPostReadMin } from '@/utils';
import { BlogCoverImage } from './blog-cover-image';

export function PostCard({ post }: { post: Post }) {
  const readMin = getPostReadMin(post);

  return (
    <Link
      href={`${ROUTES.blog}/${post.slug}`}
      className="group grid gap-6 py-8 transition-colors sm:grid-cols-[13rem_1fr] sm:gap-8"
    >
      <BlogCoverImage
        className="aspect-square"
        imageClassName="transition-transform duration-500 group-hover:scale-[1.01]"
        src={post.cover}
        alt={post.title}
        sizes="(max-width: 639px) 100vw, 208px"
      />

      <div className="flex min-w-0 flex-col py-0.5">
        <div className="text-quiet flex items-center gap-2 text-[0.7rem] font-bold tracking-[.14em] uppercase">
          <time dateTime={post.publishedAt}>{formatBlogCardDate(post.publishedAt)}</time>
          <span className="text-line-strong">·</span>
          <span>{readMin} min read</span>
        </div>

        <h2 className="text-fg group-hover:text-accent mt-3 max-w-3xl text-[clamp(1.35rem,2.5vw,1.65rem)] leading-tight font-semibold tracking-[-0.04em] transition-colors">
          {post.title}
        </h2>
        <p className="text-muted mt-3 max-w-3xl text-[0.95rem] leading-7">{post.description}</p>

        <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1.5">
          {post.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="text-muted text-[0.72rem] font-semibold tracking-[.03em]">
              #{tag}
            </span>
          ))}
        </div>

        <div className="border-line mt-6 flex items-center gap-2 border-t pt-4">
          <span className="text-muted group-hover:text-accent inline-flex items-center gap-2 text-sm font-semibold transition-colors">
            Read article
            <ArrowIcon className="h-4 w-4 -rotate-45 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
