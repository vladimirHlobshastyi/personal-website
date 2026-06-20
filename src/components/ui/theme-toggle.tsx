'use client';

import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';
const STORAGE_KEY = 'theme-preference';
const LEGACY_STORAGE_KEY = 'theme';

function getInitialTheme(): Theme {
  if (typeof document === 'undefined') {
    return 'light';
  }
  return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
}

function getStoredPreference(): Theme | null {
  if (typeof window === 'undefined') {
    return null;
  }

  const saved = window.localStorage.getItem(STORAGE_KEY) ?? window.localStorage.getItem(LEGACY_STORAGE_KEY);
  return saved === 'dark' || saved === 'light' ? saved : null;
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = getStoredPreference();
    const resolved = stored ?? getInitialTheme();

    setTheme(resolved);
    setMounted(true);

    if (stored) {
      document.documentElement.setAttribute('data-theme', stored);
      return;
    }

    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const syncWithSystem = (event: MediaQueryListEvent | MediaQueryList) => {
      const next = event.matches ? 'dark' : 'light';
      setTheme(next);
      document.documentElement.setAttribute('data-theme', next);
    };

    syncWithSystem(media);

    if (typeof media.addEventListener === 'function') {
      media.addEventListener('change', syncWithSystem);
      return () => media.removeEventListener('change', syncWithSystem);
    }

    media.addListener(syncWithSystem);
    return () => media.removeListener(syncWithSystem);
  }, []);

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);

    try {
      localStorage.setItem(STORAGE_KEY, next);
      localStorage.removeItem(LEGACY_STORAGE_KEY);
    } catch {
      // ignore storage failures (private mode, etc.)
    }
  };

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      aria-pressed={isDark}
      className="border-line text-fg/70 hover:text-fg hover:border-line-strong grid h-9 w-9 place-items-center border transition-colors"
    >
      {/* Render a stable icon until mounted to avoid hydration mismatch. */}
      <span className="relative block h-[1.05rem] w-[1.05rem]">
        <SunIcon
          className={`absolute inset-0 transition-opacity duration-200 ${
            mounted && isDark ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <MoonIcon
          className={`absolute inset-0 transition-opacity duration-200 ${
            mounted && isDark ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </span>
    </button>
  );
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
      <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M12 2.5v2.4M12 19.1v2.4M21.5 12h-2.4M4.9 12H2.5M18.7 5.3l-1.7 1.7M7 17l-1.7 1.7M18.7 18.7L17 17M7 7L5.3 5.3" />
      </g>
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M20 14.2A8.2 8.2 0 1 1 9.8 4a6.4 6.4 0 0 0 10.2 10.2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}
