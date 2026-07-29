export const THEME_PREFERENCE_STORAGE_KEY = 'theme-preference';
export const THEME_LEGACY_STORAGE_KEY = 'theme';
export const SYSTEM_DARK_MEDIA_QUERY = '(prefers-color-scheme: dark)';

/**
 * Design tokens for use in TypeScript (inline styles, canvas, etc.).
 * The CSS source of truth is the @theme / :root blocks in globals.css —
 * keep these in sync. Theme-aware values are listed per scheme.
 */
export const palette = {
  light: {
    bg: '#fbfaf7',
    surface: '#ffffff',
    surface2: '#f3efe8',
    fg: '#17130f',
    muted: '#6a625a',
    quiet: '#9a928a',
    accent: '#8a5a40',
  },
  dark: {
    bg: '#100d0a',
    surface: '#191512',
    surface2: '#231d18',
    fg: '#f1ebe2',
    muted: '#a89e92',
    quiet: '#786d61',
    accent: '#c2895e',
  },
} as const;

/** Dark gradient overlay used on photo cards — theme-agnostic (text is always white). */
export const mediaOverlay =
  'linear-gradient(180deg, rgba(17,16,15,.10), rgba(17,16,15,.72))';
