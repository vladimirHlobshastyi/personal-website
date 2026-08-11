import type { ReactNode } from 'react';

type AboutWorkStyleCardProps = {
  title: string;
  summary: string;
  points: readonly string[];
  icon: ReactNode;
};

export function AboutWorkStyleCard({ title, summary, points, icon }: AboutWorkStyleCardProps) {
  return (
    <article className="bg-surface flex h-full flex-col p-6 max-sm:p-5">
      <span className="text-accent border-line bg-surface-2/55 grid h-11 w-11 shrink-0 place-items-center border">
        {icon}
      </span>
      <h3 className="mt-5 text-lg font-semibold tracking-[-0.03em]">{title}</h3>
      <p className="text-muted mt-2 text-sm leading-[1.7rem]">{summary}</p>

      <ul className="border-line mt-auto grid gap-2 border-t pt-5">
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
