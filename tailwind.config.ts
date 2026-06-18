import type { Config } from 'tailwindcss';
import { theme } from './src/config/theme';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: theme.colors,
      boxShadow: theme.shadow,
      spacing: theme.spacing,
      letterSpacing: {
        tighterX: '-0.085em',
      },
    },
  },
  plugins: [],
};

export default config;
