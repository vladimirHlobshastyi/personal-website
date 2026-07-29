import { posts, ROUTES, SITE } from '@/constants';

function escapeXml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

export function buildFeedXml() {
  const items = posts
    .map((post) => {
      const url = `${SITE.url}${ROUTES.blog}/${post.slug}`;
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

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(`${SITE.name} Blog`)}</title>
    <link>${SITE.url}${ROUTES.blog}</link>
    <description>${escapeXml('Practical notes on building, improving and shipping software products.')}</description>
    <language>en-US</language>
    ${items}
  </channel>
</rss>`;
}
