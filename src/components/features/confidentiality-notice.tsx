import { cn } from '@/utils';

const DEFAULT_TEXT =
  'Project descriptions are based on commercial experience. Real client and product names are replaced with category-based titles, and some visuals are recreated or anonymized for portfolio purposes and do not contain confidential information.';

export function ConfidentialityNotice({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <aside
      role="note"
      aria-label="Confidentiality notice"
      className={cn(
        'border-line bg-surface-2/35 text-muted border px-5 py-4 text-[0.8125rem] leading-6',
        className,
      )}
    >
      <span className="text-accent mr-2 text-[0.7rem] font-bold tracking-[.16em] uppercase">
        Note
      </span>
      {children ?? DEFAULT_TEXT}
    </aside>
  );
}
