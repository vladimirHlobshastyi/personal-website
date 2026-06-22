import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowIcon } from '@/components/ui';
import { SITE } from '@/config/site';
import {
  projects,
  getProjectBySlug,
  getProjectPreviewPath,
  ProjectHero,
  ProjectStory,
} from '@/features/project';

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  const cover = getProjectPreviewPath(project.slug);

  return {
    title: project.title,
    description: project.shortDescription,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      type: 'article',
      title: `${project.title} — ${project.eyebrow}`,
      description: project.shortDescription,
      images: [{ url: cover, width: 1600, height: 1000, alt: project.title }],
    },
    twitter: { card: 'summary_large_image', images: [cover] },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const projectUrl = `${SITE.url}/work/${project.slug}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
          { '@type': 'ListItem', position: 2, name: 'Work', item: `${SITE.url}/work` },
          { '@type': 'ListItem', position: 3, name: project.title, item: projectUrl },
        ],
      },
      {
        '@type': 'CreativeWork',
        name: project.title,
        headline: `${project.title} — ${project.eyebrow}`,
        description: project.shortDescription,
        url: projectUrl,
        image: `${SITE.url}${getProjectPreviewPath(project.slug)}`,
        keywords: project.stack.join(', '),
        author: { '@type': 'Person', '@id': `${SITE.url}/#person`, name: SITE.name },
        creator: { '@id': `${SITE.url}/#person` },
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Link
        href="/work"
        className="text-muted hover:text-fg group mb-9 inline-flex items-center gap-2 font-bold transition-colors"
      >
        <ArrowIcon className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" />
        Back to work
      </Link>

      <ProjectHero project={project} />
      <ProjectStory project={project} />
    </main>
  );
}
