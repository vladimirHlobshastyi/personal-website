import type { Project } from '@/types/project';

type ProjectGalleryProps = {
  project: Project;
};

export function ProjectGallery({ project }: ProjectGalleryProps) {
  return (
    <section className="mt-sm grid grid-cols-[1.2fr_.8fr] gap-sm max-lg:grid-cols-1">
      <div
        className="min-h-[21.875rem] bg-cover bg-center shadow-soft max-sm:min-h-[17.5rem]"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(17,16,15,.04), rgba(17,16,15,.22)), url(${project.image})`,
        }}
      />
      <div
        className="min-h-[21.875rem] bg-cover bg-center shadow-soft max-sm:min-h-[17.5rem]"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(17,16,15,.04), rgba(17,16,15,.22)), url(${project.image})`,
        }}
      />
    </section>
  );
}
