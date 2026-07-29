export type Post = {
  slug: string;
  title: string;
  // Short summary, shown on cards + meta description + OG description.
  description: string;
  cover: string;
  tags: string[];
  // ISO date string 'YYYY-MM-DD' so it's sortable & survives backend swap.
  publishedAt: string;
  // Optional override for the auto-generated OG image headline.
  ogTitle?: string;
  // Markdown body — rendered with react-markdown + remark-gfm.
  content: string;
};
