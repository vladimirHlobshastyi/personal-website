import { cn } from '@/lib/cn';
import { TechIcon } from './tech-icon';

type TagProps = {
  children: React.ReactNode;
  /** `surface` sits on the page; `onMedia` sits on top of a photo overlay. */
  variant?: 'surface' | 'onMedia';
  /** Show the leading technology glyph (on by default for string labels). */
  icon?: boolean;
  className?: string;
};

const variants: Record<NonNullable<TagProps['variant']>, string> = {
  surface: 'border-line bg-surface-2 text-muted border',
  onMedia: 'border-white/15 bg-white/10 text-white/90 border backdrop-blur-[2px]',
};

export function Tag({ children, variant = 'surface', icon = true, className }: TagProps) {
  const label = typeof children === 'string' ? children : null;

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1.5 text-[0.8125rem] font-medium tracking-[-0.01em]',
        variants[variant],
        className,
      )}
    >
      {icon && label ? <TechIcon name={label} className="h-3.5 w-3.5 opacity-85" /> : null}
      {children}
    </span>
  );
}
