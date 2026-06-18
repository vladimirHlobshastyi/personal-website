import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects, getProjectBySlug } from '@/data/projects';
import { ProjectGallery } from '@/components/project/project-gallery';
import { ProjectHero } from '@/components/project/project-hero';
import { ProjectStory } from '@/components/project/project-story';

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
    title: `${project.title} — Vladimir Petrov`,
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
      <Link href="/work" className="mb-9 inline-flex font-bold text-muted transition-colors hover:text-ink">
        ← Back to work
      </Link>

      <ProjectHero project={project} />
      <ProjectStory project={project} />
      <ProjectGallery project={project} />
    </main>
  );
}
