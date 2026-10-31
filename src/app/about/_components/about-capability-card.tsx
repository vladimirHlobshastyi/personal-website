import type { ReactNode } from 'react';

type AboutCapabilityCardProps = {
  title: string;
  summary: string;
  icon: ReactNode;
};

export function AboutCapabilityCard({ title, summary, icon }: AboutCapabilityCardProps) {
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
    </article>
  );
}
