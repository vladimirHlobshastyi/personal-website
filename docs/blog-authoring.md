# Blog authoring

Source of truth for posts is `src/features/blog/posts.data.ts`. Each post is one object in the
`rawPosts` array. The newest post by `publishedAt` shows up first — sorting is automatic.

## Current blog direction

- The `/blog` index uses a quiet portfolio-notes layout: a compact horizontal row with a square
  cover, concise metadata and clear article titles without card-heavy framing.
- An opened article centers the title and summary, then introduces a centered square cover before
  the reading flow. There is no redundant author card.
- Share options live in one compact chooser: Facebook, LinkedIn, X, Telegram, WhatsApp and copy
  link.
- Keep visual decoration secondary to the writing. Tags are plain `#tag` text and sit above a
  generous gap before the article link.

## Post schema

```ts
type Post = {
  slug: string; // URL segment, kebab-case, must be unique
  title: string; // shown on card + article hero + <title>
  description: string; // 1–2 sentences, used for card + <meta> + OG description
  cover: string; // /images/<file>.webp — see "Images" below
  tags: string[]; // lowercase, kebab-case, no '#', shown as plain #tag text on UI
  publishedAt: string; // 'YYYY-MM-DD' (ISO date, UTC midnight)
  ogTitle?: string; // overrides the auto-generated OG image headline only
  content: string; // Markdown body — see "Supported Markdown" below
};
```

Reading time is computed automatically (`reading-time` lib) — don't add it.

## Field rules

- **`slug`** — lowercase, kebab-case, stable. Once published, don't change it (URL + SEO).
- **`title`** — < 70 chars ideal for SEO. Sentence case.
- **`description`** — 140–180 chars. Treat it as the meta description.
- **`tags`** — 2–4 tags. Pick from existing tags first (`getAllPostTags()`); only invent new
  ones when no existing tag fits. Examples: `react`, `next-js`, `react-native`, `typescript`,
  `nda`, `seo`, `portfolio`, `freelance`, `ai-rescue`, `architecture`, `webrtc`, `stripe`.
- **`publishedAt`** — UTC date `YYYY-MM-DD`. Sorting is descending.
- **`ogTitle`** — only set when the real title would render poorly on the 1200×630 social card
  (too long, has a colon, etc).

## Images

Two options for the cover:

1. **Reuse a project cover** — `/images/case-NN-cover.webp` (already anonymized). Fast, free.
2. **Add a dedicated blog cover** — drop a square WebP into `public/images/blog/<slug>-cover.webp`.
   Current live covers are square (`1254×1254`), and the blog UI now expects that shape on both
   the index and the opened article. Keep important text away from the outer edges and anonymize
   any visible brand before committing.

In-body images: put under `public/images/blog/` and reference with absolute paths
(`/images/blog/<file>.webp`). All images must be WebP and anonymized.

## Supported Markdown

Renderer: `react-markdown` + `remark-gfm` (see `src/features/blog/components/post-body.tsx`).
Already styled:

- Headings — use `##` and `###` only. Article has its own `<h1>`, so `#` would clash.
- Paragraphs, **bold**, _italic_, `inline code`, links (external open in new tab).
- Bulleted and numbered lists.
- Block quotes — use for callouts / pull quotes.
- Tables (GFM).
- Fenced code blocks (no syntax highlighting yet — kept lightweight on purpose).
- Horizontal rule `---`.

Not supported by default: HTML, footnotes, MDX, embedded React. Add `remark-*` plugins to
`post-body.tsx` if needed.

## Template — copy this into the array

```ts
{
  slug: 'kebab-case-slug',
  title: 'Specific, scannable title in sentence case',
  description:
    '140–180 chars. State the problem and what the reader will learn. Should read well as a meta description AND as the card subtitle.',
  cover: '/images/blog/your-post-cover.webp',  // square WebP; case cover is also fine
  tags: ['react', 'architecture'],
  publishedAt: '2026-MM-DD',
  content: `Opening paragraph — what's the problem, who has it, why it matters. No throat-clearing.

## First H2 — the actual point

Body paragraph. Use **bold** to mark the load-bearing phrase in a long para — never decoration.

- List item
- List item

> Pull-quote that compresses the key insight into one sentence.

## Second H2 — the practical part

Show, don't tell. Tables, code, or numbered steps.

| Column | Column |
| --- | --- |
| value | value |

\`\`\`ts
// Code block — no highlighting yet, just monospace.
const example = true;
\`\`\`

## Wrap-up

Single para. State what's next or what to take away.`,
},
```

## Prompt for AI drafts

> Write a blog post for `posts.data.ts`. Topic: `<X>`. Audience: senior frontend / fullstack
> engineers + recruiters skimming for credibility. Use the schema and template in
> `docs/blog-authoring.md`. Keep it 600–1200 words. No throat-clearing intro. At least one
> H2, one list, one block quote, and one table or code block. Return only the JS object,
> ready to paste into the `rawPosts` array.

## After adding a post

- `next dev` will pick it up — no rebuild needed.
- `sitemap.xml` and `feed.xml` update automatically (posts are enumerated via `posts`).
- If you want the post title listed in `public/llms.txt`, update that file manually.
- Verify the share card by opening `http://localhost:3001/blog/<slug>/opengraph-image` — that
  PNG is what X / LinkedIn / Telegram will preview.
