import { ImageResponse } from 'next/og';
import { posts, SITE } from '@/constants';

export const runtime = 'edge';
export const alt = 'Blog post preview';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((entry) => entry.slug === slug);

  const title = post?.ogTitle ?? post?.title ?? 'Vladimir Hlobchastyi';
  const tags = post?.tags ?? [];
  const domain = SITE.url.replace(/^https?:\/\//, '');

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px',
          background:
            'linear-gradient(135deg, #f7f4ef 0%, #efe8dc 60%, #e6dccb 100%)',
          color: '#1c1916',
          fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: '#7c5d2c',
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                background: '#b08039',
                borderRadius: 999,
              }}
            />
            {domain}
          </div>
          <div
            style={{
              fontSize: 18,
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#5a4530',
            }}
          >
            Blog
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 28,
            maxWidth: 1000,
          }}
        >
          <div
            style={{
              fontSize: title.length > 80 ? 56 : 72,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
            }}
          >
            {title}
          </div>

          {tags.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              {tags.slice(0, 4).map((tag) => (
                <div
                  key={tag}
                  style={{
                    fontSize: 22,
                    fontWeight: 600,
                    padding: '8px 18px',
                    border: '1px solid #b08039',
                    color: '#7c5d2c',
                    background: 'rgba(255,255,255,0.45)',
                  }}
                >
                  #{tag}
                </div>
              ))}
            </div>
          )}
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.02em' }}>
              {SITE.name}
            </div>
            <div style={{ fontSize: 20, color: '#5a4530', fontWeight: 600 }}>
              Software Engineer · React · Next.js · React Native
            </div>
          </div>
          <div
            style={{
              fontSize: 18,
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#5a4530',
            }}
          >
            Read the full article →
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
