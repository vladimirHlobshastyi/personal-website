import { SITE } from '@/config/site';
import { posts } from '@/features/blog';

function escapeXml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

export function GET() {
  const items = posts
    .map((post) => {
      const url = `${SITE.url}/blog/${post.slug}`;
      const title = escapeXml(post.title);
      const description = escapeXml(post.description);
      const pubDate = new Date(`${post.publishedAt}T00:00:00Z`).toUTCString();

      return `
        <item>
          <title>${title}</title>
          <link>${url}</link>
          <guid>${url}</guid>
          <pubDate>${pubDate}</pubDate>
          <description>${description}</description>
        </item>`;
    })
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(`${SITE.name} Blog`)}</title>
    <link>${SITE.url}/blog</link>
    <description>${escapeXml('Practical notes on building, improving and shipping software products.')}</description>
    <language>en-US</language>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
