export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  shortDescription: string;
  subtitle: string;
  role: string;
  stack: string[];
  focus: string;
  image: string;
  images: string[];
  overview: string;
  challenge: string;
  outcome: string;
  responsibilities: {
    title: string;
    description: string;
  }[];
};
