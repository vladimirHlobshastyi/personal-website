import { cn } from '@/lib/cn';

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <div
      className={cn(
        'border-accent/30 text-accent inline-flex items-center border px-3 py-1.5 text-[0.7rem] font-bold tracking-[.16em] uppercase',
        className,
      )}
    >
      {children}
    </div>
  );
}
