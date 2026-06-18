import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#11100f',
        muted: '#68615a',
        quiet: '#9a928a',
        surface: '#fffdf9',
        page: '#f7f5f1',
        accent: '#7a523b',
      },
      boxShadow: {
        soft: '0 16px 45px rgba(40, 28, 20, 0.055)',
        elevated: '0 24px 70px rgba(40, 28, 20, 0.09)',
      },
      letterSpacing: {
        tighterX: '-0.085em',
      },
    },
  },
  plugins: [],
};

export default config;
