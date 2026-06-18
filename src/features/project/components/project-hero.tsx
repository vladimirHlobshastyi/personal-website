'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { Project } from '../project.types';

type ProjectHeroProps = {
  project: Project;
};

export function ProjectHero({ project }: ProjectHeroProps) {
  const allImages = project.images.length > 0 ? project.images : [project.image];
  const [active, setActive] = useState(0);

  const goTo = (index: number) => setActive(index);
  const prev = () => setActive((s) => (s === 0 ? allImages.length - 1 : s - 1));
  const next = () => setActive((s) => (s === allImages.length - 1 ? 0 : s + 1));

  return (
    <>
      <div className="mb-14 grid grid-cols-[.98fr_1.02fr] items-end gap-14 max-lg:grid-cols-1">
        <div>
          <div className="text-accent before:bg-accent mb-7 inline-flex items-center gap-3 text-xs font-extrabold tracking-[.12em] uppercase before:block before:h-px before:w-10 before:opacity-50">
            Case Study
          </div>
          <h1 className="text-[clamp(3.125rem,7vw,5.625rem)] leading-[.9] font-semibold tracking-[-0.08em]">
            {project.title}
          </h1>
          <p className="text-muted mt-7 max-w-2xl text-lg leading-8">{project.subtitle}</p>
        </div>

        <div className="grid gap-3">
          <ProjectMeta label="Role" value={project.role} />
          <div className="shadow-subtle bg-white/55 p-5">
            <strong className="mb-3 block text-xs font-extrabold tracking-[.08em] uppercase">
              Stack
            </strong>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="bg-page px-3 py-1.5 text-[0.8125rem] font-medium text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <ProjectMeta label="Focus" value={project.focus} />
        </div>
      </div>

      <div className="group relative overflow-hidden rounded-sm bg-[#1a1816]">
        <div className="relative aspect-[16/9]">
          {allImages.map((img, i) => (
            <Image
              key={img}
              src={img}
              alt={`${project.title} — screenshot ${i + 1}`}
              fill
              className={`object-contain transition-opacity duration-500 ${
                i === active ? 'opacity-100' : 'opacity-0'
              }`}
              sizes="(max-width: 1024px) 100vw, 1180px"
              priority={i === 0}
            />
          ))}

          {allImages.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute top-1/2 left-5 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center bg-white/10 text-white/70 opacity-0 backdrop-blur-md transition-all hover:bg-white/20 hover:text-white group-hover:opacity-100"
              >
                ←
              </button>
              <button
                onClick={next}
                className="absolute top-1/2 right-5 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center bg-white/10 text-white/70 opacity-0 backdrop-blur-md transition-all hover:bg-white/20 hover:text-white group-hover:opacity-100"
              >
                →
              </button>
            </>
          )}
        </div>

        {allImages.length > 1 && (
          <div className="flex items-center justify-center gap-2 py-4">
            {allImages.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === active ? 'w-6 bg-white/70' : 'w-1.5 bg-white/25 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

function ProjectMeta({ label, value }: { label: string; value: string }) {
  return (
    <div className="shadow-subtle bg-white/55 p-5">
      <strong className="mb-1.5 block text-xs font-extrabold tracking-[.08em] uppercase">
        {label}
      </strong>
      <span className="text-muted leading-7">{value}</span>
    </div>
  );
}
