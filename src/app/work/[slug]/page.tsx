import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowIcon } from '@/components/ui';
import { projects, getProjectBySlug, ProjectHero, ProjectStory } from '@/features/project';

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
