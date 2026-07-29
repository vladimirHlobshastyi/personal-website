import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowIcon } from '@/components/ui';
import { projects, ROUTES, SITE } from '@/constants';
import { getProjectBySlug, getProjectPreviewPath } from '@/utils';
import { ProjectHero } from '../_components/project-hero';
import { ProjectStory } from '../_components/project-story';
import { createProjectJsonLd, createProjectMetadata } from '../_utils/work-page';

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
  return createProjectMetadata(project, project ? getProjectPreviewPath(project.slug) : undefined);
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const coverUrl = `${SITE.url}${getProjectPreviewPath(project.slug)}`;
  const jsonLd = createProjectJsonLd(project, coverUrl);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Link
        href={ROUTES.work}
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
