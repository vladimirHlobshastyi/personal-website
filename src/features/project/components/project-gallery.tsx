'use client';

import { useState } from 'react';
import type { Project } from '../project.types';

type ProjectGalleryProps = {
  project: Project;
};

export function ProjectGallery({ project }: ProjectGalleryProps) {
  const allImages = project.images.length > 0 ? project.images : [project.image, project.image];
  const [active, setActive] = useState(0);

  return (
    <section className="mt-5">
      <div
        className="shadow-elevated min-h-[28rem] bg-cover bg-center transition-[background-image] duration-500 max-sm:min-h-[18rem]"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(17,16,15,.04), rgba(17,16,15,.22)), url(${allImages[active]})`,
        }}
      />

      {allImages.length > 1 && (
        <div className="mt-3 flex gap-3 overflow-x-auto pb-2">
          {allImages.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`shadow-subtle h-20 w-28 shrink-0 bg-cover bg-center transition-opacity ${
                i === active ? 'opacity-100 ring-2 ring-accent' : 'opacity-50 hover:opacity-80'
              }`}
              style={{
                backgroundImage: `url(${img})`,
              }}
            />
          ))}
        </div>
      )}
    </section>
  );
}
