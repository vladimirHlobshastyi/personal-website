import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowIcon } from '@/components/ui';
import { posts, ROUTES } from '@/constants';
import { getPostBySlug, getPostReadMin } from '@/utils';
import { PostBody } from '../_components/post-body';
import { PostCard } from '../_components/post-card';
import { PostHero } from '../_components/post-hero';
import { ShareRow } from '../_components/share-row';
import { BLOG_RELATED_POST_LIMIT } from '../_constants/blog.constants';
import {
  createPostJsonLd,
  createPostMetadata,
  getPostUrl,
  getRelatedPosts,
} from '../_utils/blog-page';

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PostPageProps) {
  const { slug } = await params;
  return createPostMetadata(getPostBySlug(slug));
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const url = getPostUrl(post.slug);
  const readMin = getPostReadMin(post);
  const jsonLd = createPostJsonLd(post, readMin);

  // Pick up to 2 "read next" posts that aren't the current one.
  const readNext = getRelatedPosts(posts, post.slug, BLOG_RELATED_POST_LIMIT);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Link
        href={ROUTES.blog}
        className="text-muted hover:text-fg group mb-10 inline-flex items-center gap-2 font-bold transition-colors"
      >
        <ArrowIcon className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" />
        Back to blog
      </Link>

      <PostHero post={post} />

      <div className="mx-auto mt-16 max-w-2xl">
        <PostBody content={post.content} />
        <ShareRow url={url} title={post.title} />
      </div>

      {readNext.length > 0 && (
        <section className="mx-auto mt-16 max-w-5xl">
          <div className="border-line mb-6 flex items-end justify-between gap-6 border-b pb-4">
            <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] leading-none font-semibold tracking-[-0.04em]">
              Read next
            </h2>
            <Link
              href={ROUTES.blog}
              className="text-accent inline-flex items-center gap-2 text-sm font-bold"
            >
              All posts
              <ArrowIcon className="h-3.5 w-3.5 -rotate-45" />
            </Link>
          </div>
          <div className="divide-line border-line divide-y border-y">
            {readNext.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
