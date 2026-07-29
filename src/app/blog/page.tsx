import { SITE } from '@/config/site';
import { PostCard, posts } from '@/features/blog';

export const metadata = {
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
  alternates: { canonical: '/blog' },
  openGraph: {
    type: 'website',
    url: `${SITE.url}/blog`,
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

export default function BlogIndexPage() {
  const blogLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Vladimir Hlobchastyi — Blog',
    url: `${SITE.url}/blog`,
    description: metadata.description,
    author: { '@type': 'Person', '@id': `${SITE.url}/#person`, name: SITE.name },
    blogPost: posts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      url: `${SITE.url}/blog/${post.slug}`,
      datePublished: post.publishedAt,
      author: { '@type': 'Person', '@id': `${SITE.url}/#person` },
      image: `${SITE.url}${post.cover}`,
      keywords: post.tags.join(', '),
    })),
  };

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
