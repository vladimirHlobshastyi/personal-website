import type { Post } from '@/types';
import { formatBlogHeroDate, getPostReadMin } from '@/utils';
import { BlogCoverImage } from './blog-cover-image';

function getTitleClassName(title: string) {
  const isLongTitle = title.length > 60;

  if (isLongTitle) {
    return 'mx-auto mt-4 max-w-4xl text-[clamp(2.15rem,4.8vw,4rem)] leading-[1.02] font-semibold tracking-[-0.045em]';
  }

  return 'mx-auto mt-4 max-w-4xl text-[clamp(2.65rem,6vw,5rem)] leading-[.94] font-semibold tracking-[-0.065em]';
}

export function PostHero({ post }: { post: Post }) {
  const readMin = getPostReadMin(post);
  return (
    <header>
      <div className="mx-auto max-w-3xl text-center">
        <div className="text-muted flex flex-wrap items-center justify-center gap-2 text-[0.72rem] font-bold tracking-[.14em] uppercase">
          <time dateTime={post.publishedAt}>{formatBlogHeroDate(post.publishedAt)}</time>
          <span className="text-line-strong">·</span>
          <span>{readMin} min read</span>
        </div>

        <h1 className={getTitleClassName(post.title)} style={{ textWrap: 'balance' }}>
          {post.title}
        </h1>
        <p className="text-muted mx-auto mt-4 max-w-2xl text-[1.02rem] leading-8">
          {post.description}
        </p>
      </div>

      <figure className="mx-auto mt-10">
        <BlogCoverImage
          src={post.cover}
          alt={post.title}
          priority
          sizes="(max-width: 768px) 100vw, 720px"
          className="mx-auto aspect-square max-w-3xl"
        />
      </figure>
    </header>
  );
}
