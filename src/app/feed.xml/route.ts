import { buildFeedXml } from './_utils/feed';

export function GET() {
  const xml = buildFeedXml();

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
