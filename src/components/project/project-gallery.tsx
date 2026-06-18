import type { Project } from '@/types/project';

type ProjectGalleryProps = {
  project: Project;
};

export function ProjectGallery({ project }: ProjectGalleryProps) {
  return (
    <section className="mt-5 grid grid-cols-[1.2fr_.8fr] gap-5 max-lg:grid-cols-1">
      <div
        className="min-h-[350px] bg-cover bg-center shadow-soft max-sm:min-h-[280px]"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(17,16,15,.04), rgba(17,16,15,.22)), url(${project.image})`,
        }}
      />
      <div
        className="min-h-[350px] bg-cover bg-center shadow-soft max-sm:min-h-[280px]"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(17,16,15,.04), rgba(17,16,15,.22)), url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop')",
        }}
      />
    </section>
  );
}
