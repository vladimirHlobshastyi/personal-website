export type Project = {
  slug: string;
  title: string;
  category: string;
  eyebrow: string;
  badge?: string;
  shortDescription: string;
  subtitle: string;
  role: string;
  stack: string[];
  focus: string;
  keywords?: string[];
  links?: { label: string; href: string }[];
  cover: string;
  images: string[];
  overview: string;
  challenge: string;
  outcome: string;
  responsibilities: {
    title: string;
    description: string;
  }[];
};
