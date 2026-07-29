'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/utils';
import { ArrowIcon } from './icon';

type ImageCarouselProps = {
  title: string;
  images: string[];
  label?: string;
  blurScreenshots?: boolean;
};

export function ImageCarousel({
  title,
  images,
  label = 'Screenshots',
  blurScreenshots = false,
}: ImageCarouselProps) {
  const [active, setActive] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const allImages = images.length > 0 ? images : [];

  if (allImages.length === 0) {
    return null;
  }

  const multiple = allImages.length > 1;
  const prev = () => setActive((s) => (s === 0 ? allImages.length - 1 : s - 1));
  const next = () => setActive((s) => (s === allImages.length - 1 ? 0 : s + 1));
  const blurApplied = blurScreenshots && !revealed;

  return (
    <figure className="border-line bg-surface shadow-card overflow-hidden border">
      <figcaption className="border-line bg-surface-2/50 flex items-center justify-between gap-4 border-b px-5 py-3.5 max-sm:flex-col max-sm:items-start max-sm:px-4">
        <span className="text-accent inline-flex items-center gap-3 text-[0.7rem] font-bold tracking-[.18em] uppercase before:block before:h-px before:w-7 before:bg-accent/50">
          {label}
        </span>

        <div className="flex items-center gap-3 max-sm:w-full max-sm:justify-between">
          {blurScreenshots && (
            <button
              type="button"
              onClick={() => setRevealed((v) => !v)}
              className="border-line text-quiet hover:border-accent hover:text-accent inline-flex items-center gap-2 border px-3 py-1.5 text-[0.65rem] font-bold tracking-[.14em] uppercase transition-colors"
              aria-pressed={revealed}
              aria-label={revealed ? 'Re-blur screenshots' : 'Reveal screenshots'}
            >
              {revealed ? 'Blur' : 'Reveal'}
            </button>
          )}

          <span className="text-[0.72rem] font-bold tracking-[.12em] tabular-nums uppercase whitespace-nowrap">
            <span className="text-accent">{String(active + 1).padStart(2, '0')}</span>
            <span className="text-quiet"> / {String(allImages.length).padStart(2, '0')}</span>
          </span>

          {multiple && (
            <div className="flex shrink-0 gap-2">
              <button
                onClick={prev}
                className="border-line text-fg hover:border-accent hover:text-accent grid h-9 w-9 place-items-center border transition-colors"
                aria-label="Previous screenshot"
                type="button"
              >
                <ArrowIcon className="h-4 w-4 rotate-180" />
              </button>
              <button
                onClick={next}
                className="border-line text-fg hover:border-accent hover:text-accent grid h-9 w-9 place-items-center border transition-colors"
                aria-label="Next screenshot"
                type="button"
              >
                <ArrowIcon className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </figcaption>

      <div className="bg-surface-2 relative overflow-hidden">
        <div
          className="flex transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {allImages.map((img, i) => (
            <div key={img} className="relative aspect-[16/9] w-full shrink-0 overflow-hidden">
              <Image
                src={img}
                alt={`${title} — image ${i + 1}`}
                fill
                className={cn(
                  'object-contain transition-[filter,transform] duration-500',
                  blurApplied && 'scale-[1.04] blur-[14px]',
                )}
                sizes="(max-width: 1024px) 100vw, 1180px"
                priority={i === 0}
              />
              {blurApplied && (
                <div className="pointer-events-none absolute inset-0 grid place-items-center">
                  <span className="bg-bg/85 border-line text-fg border px-3 py-1.5 text-[0.65rem] font-bold tracking-[.14em] uppercase backdrop-blur-sm">
                    Visuals anonymized for confidentiality
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {multiple && (
        <div className="border-line flex gap-3 overflow-x-auto border-t p-4 max-sm:p-3">
          {allImages.map((img, i) => (
            <button
              key={img}
              onClick={() => setActive(i)}
              className={cn(
                'relative h-16 w-24 shrink-0 overflow-hidden border transition-all duration-300',
                i === active
                  ? 'border-accent ring-accent/25 ring-2'
                  : 'border-line opacity-60 hover:opacity-100',
              )}
              aria-label={`Go to screenshot ${i + 1}`}
              aria-current={i === active}
              type="button"
            >
              <Image
                src={img}
                alt=""
                fill
                className={cn('object-cover', blurApplied && 'blur-[4px]')}
                sizes="96px"
              />
            </button>
          ))}
        </div>
      )}
    </figure>
  );
}
