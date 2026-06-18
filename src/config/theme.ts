/**
 * Design tokens for use in TypeScript (inline styles, canvas, etc.).
 * CSS source of truth is globals.css @theme block.
 */
export const colors = {
  ink: '#11100f',
  muted: '#68615a',
  quiet: '#9a928a',
  surface: '#fffdf9',
  page: '#f7f5f1',
  accent: '#7a523b',
  dark: '#141210',
} as const;

export const shadows = {
  soft: '0 1rem 2.8125rem rgba(40, 28, 20, 0.055)',
  elevated: '0 1.5rem 4.375rem rgba(40, 28, 20, 0.09)',
  subtle: '0 0.875rem 2.375rem rgba(40, 28, 20, 0.035)',
  button: '0 1rem 2.375rem rgba(17, 16, 15, 0.16)',
} as const;
