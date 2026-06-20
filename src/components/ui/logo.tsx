import { cn } from '@/lib/cn';

// Compact monogram mark used in the header. Theme-aware via CSS variables:
// a solid foreground square with the "VH" monogram knocked out in the page color.
export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn('shrink-0', className)}
      role="img"
      aria-label="Vladimir Hlobchastyi"
    >
      <rect width="32" height="32" rx="9" style={{ fill: 'var(--fg)' }} />
      {/* V */}
      <path
        d="M7.5 10.5 12 21 16.5 10.5"
        fill="none"
        style={{ stroke: 'var(--bg)' }}
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* H */}
      <path
        d="M19 10.5V21M24.5 10.5V21M19 15.75H24.5"
        fill="none"
        style={{ stroke: 'var(--bg)' }}
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
