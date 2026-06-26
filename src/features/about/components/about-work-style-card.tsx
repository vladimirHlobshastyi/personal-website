import type { ReactNode } from 'react';

type AboutWorkStyleCardProps = {
  title: string;
  summary: string;
  points: readonly string[];
  icon: ReactNode;
};

export function AboutWorkStyleCard({ title, summary, points, icon }: AboutWorkStyleCardProps) {
  return (
    <article className="border-line bg-surface-2/28 border p-5">
      <div className="flex items-start gap-3.5">
        <span className="text-accent border-line bg-bg/65 grid h-10 w-10 shrink-0 place-items-center border">
          {icon}
        </span>
        <div>
          <h3 className="text-base font-semibold tracking-[-0.03em]">{title}</h3>
          <p className="text-muted mt-1.5 text-sm leading-[1.65rem]">{summary}</p>
        </div>
      </div>

      <ul className="mt-3.5 grid gap-1.5">
        {points.map((point) => (
          <li key={point} className="text-muted flex gap-3 text-sm leading-[1.65rem]">
            <span className="bg-accent mt-[0.72rem] h-1.5 w-1.5 shrink-0 rounded-full" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
