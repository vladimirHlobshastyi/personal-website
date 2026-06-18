import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  projects,
  getProjectBySlug,
  ProjectGallery,
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

  return {
    title: `${project.title} — Vladimir Hlobchastyi`,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <Link
        href="/work"
        className="text-muted hover:text-ink mb-9 inline-flex font-bold transition-colors"
      >
        ← Back to work
      </Link>

      <ProjectHero project={project} />
      <ProjectStory project={project} />
      <ProjectGallery project={project} />
    </main>
  );
}
