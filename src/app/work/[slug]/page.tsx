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
  const title = `${project.title} Case Study`;
  const description = project.subtitle;
  const keywords = [
    ...(project.keywords ?? []),
    ...project.stack,
    project.category,
    project.title,
  ];

  return {
    title,
    description,
    keywords,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      type: 'article',
      url: `${SITE.url}/work/${project.slug}`,
      title: `${project.title} — ${project.category} Case Study`,
      description,
      images: [{ url: cover, width: 1600, height: 1000, alt: project.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} — ${project.category} Case Study`,
      description,
      images: [cover],
    },
  };
}

const SOFTWARE_PLATFORM_BY_CATEGORY: Record<string, string> = {
  Mobile: 'iOS, Android',
  Web: 'Web',
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const projectUrl = `${SITE.url}/work/${project.slug}`;
  const coverUrl = `${SITE.url}${getProjectPreviewPath(project.slug)}`;
  const category = project.category.toLowerCase();
  const isMobile =
    category.includes('mobile') || category.includes('ios') || category.includes('android');
  const isWeb = category.includes('web');
  const isSoftwareApplication = isMobile || isWeb;

  const breadcrumb = {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'Work', item: `${SITE.url}/work` },
      { '@type': 'ListItem', position: 3, name: project.title, item: projectUrl },
    ],
  };

  const creativeWork = {
    '@type': 'CreativeWork',
    '@id': `${projectUrl}#creativework`,
    name: project.title,
    headline: `${project.title} — ${project.category}`,
    description: project.shortDescription,
    abstract: project.overview,
    url: projectUrl,
    image: coverUrl,
    keywords: [...(project.keywords ?? []), ...project.stack].join(', '),
    about: project.category,
    author: { '@type': 'Person', '@id': `${SITE.url}/#person`, name: SITE.name },
    creator: { '@id': `${SITE.url}/#person` },
    contributor: { '@id': `${SITE.url}/#person` },
  };

  const softwareApplication = isSoftwareApplication
    ? {
        '@type': 'SoftwareApplication',
        '@id': `${projectUrl}#software`,
        name: project.title,
        applicationCategory: isMobile ? 'MobileApplication' : 'WebApplication',
        operatingSystem: isMobile
          ? SOFTWARE_PLATFORM_BY_CATEGORY.Mobile
          : SOFTWARE_PLATFORM_BY_CATEGORY.Web,
        description: project.shortDescription,
        url: projectUrl,
        image: coverUrl,
        keywords: [...(project.keywords ?? []), ...project.stack].join(', '),
        author: { '@type': 'Person', '@id': `${SITE.url}/#person`, name: SITE.name },
        offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' },
      }
    : null;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      breadcrumb,
      creativeWork,
      ...(softwareApplication ? [softwareApplication] : []),
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
