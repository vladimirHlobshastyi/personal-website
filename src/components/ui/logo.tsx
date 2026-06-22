import { cn } from '@/lib/cn';

// Restrained single-initial mark: a clean, optically-centered "V" knocked out of
// a rounded foreground square. Theme-aware via CSS variables.
export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn('shrink-0', className)}
      role="img"
      aria-label="Vladimir Hlobchastyi"
    >
      <rect width="32" height="32" rx="9" style={{ fill: 'var(--fg)' }} />
      <path
        d="M9 10 16 22.6 23 10 19.7 10 16 17.2 12.3 10 Z"
        style={{ fill: 'var(--bg)' }}
        strokeLinejoin="round"
      />
    </svg>
  );
}
