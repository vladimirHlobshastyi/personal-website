import { posts } from '@/constants';
import { PostCard } from './_components/post-card';
import { blogIndexMetadata, createBlogIndexJsonLd } from './_utils/blog-page';

export const metadata = blogIndexMetadata;

export default function BlogIndexPage() {
  const blogLd = createBlogIndexJsonLd(posts);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogLd) }}
      />

      <section className="mb-10 grid max-w-5xl grid-cols-[1.08fr_.92fr] items-end gap-12 max-lg:grid-cols-1">
        <div>
          <p className="text-accent before:bg-accent/50 mb-5 inline-flex items-center gap-3 text-[0.72rem] font-bold tracking-[.16em] uppercase before:block before:h-px before:w-8">
            Notes
          </p>
          <h1 className="text-[clamp(3.125rem,7vw,5.625rem)] leading-[.9] font-semibold tracking-[-0.08em]">
            Blog
          </h1>
        </div>
        <div className="grid gap-4">
          <p className="text-muted text-lg leading-8">
            Practical notes from building, improving and shipping software products.
          </p>
          {posts.length > 0 && (
            <div className="flex items-center gap-3">
              <span className="text-quiet text-[0.72rem] font-bold tracking-[.14em] uppercase">
                {String(posts.length).padStart(2, '0')} posts
              </span>
            </div>
          )}
        </div>
      </section>

      {posts.length === 0 ? (
        <p className="text-muted text-base leading-8">
          No posts yet. The first one is coming soon.
        </p>
      ) : (
        <div className="divide-line border-line mx-auto max-w-5xl divide-y border-y">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </main>
  );
}
