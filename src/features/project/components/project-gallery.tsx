import type { Project } from '../project.types';

type ProjectGalleryProps = {
  project: Project;
};

export function ProjectGallery({ project }: ProjectGalleryProps) {
  return (
    <section className="mt-5 grid grid-cols-[1.2fr_.8fr] gap-5 max-lg:grid-cols-1">
      <div
        className="shadow-soft min-h-[21.875rem] bg-cover bg-center max-sm:min-h-[17.5rem]"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(17,16,15,.04), rgba(17,16,15,.22)), url(${project.image})`,
        }}
      />
      <div
        className="shadow-soft min-h-[21.875rem] bg-cover bg-center max-sm:min-h-[17.5rem]"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(17,16,15,.04), rgba(17,16,15,.22)), url(${project.image})`,
        }}
      />
    </section>
  );
}
