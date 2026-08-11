import type { ReactNode } from 'react';
import { Tag } from '@/components/ui';

type AboutCapabilityCardProps = {
  title: string;
  summary: string;
  points: readonly string[];
  tags: readonly string[];
  icon: ReactNode;
};

export function AboutCapabilityCard({
  title,
  summary,
  points,
  tags,
  icon,
}: AboutCapabilityCardProps) {
  return (
    <article className="border-line bg-surface flex h-full flex-col border p-6 max-sm:p-5">
      <div className="flex items-start gap-3.5">
        <span className="text-accent border-line bg-surface-2/55 grid h-11 w-11 shrink-0 place-items-center border">
          {icon}
        </span>
        <div className="min-w-0">
          <h3 className="text-[1.02rem] font-semibold tracking-[-0.03em]">{title}</h3>
          <p className="text-muted mt-1.5 text-sm leading-[1.65rem]">{summary}</p>
        </div>
      </div>

      <ul className="mt-4 grid gap-1.5">
        {points.map((point) => (
          <li key={point} className="text-muted flex gap-3 text-sm leading-[1.65rem]">
            <span className="bg-accent mt-[0.72rem] h-1.5 w-1.5 shrink-0 rounded-full" />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap gap-2 pt-5">
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </article>
  );
}
