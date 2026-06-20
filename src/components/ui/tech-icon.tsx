import {
  siAndroid,
  siAnthropic,
  siApollographql,
  siApple,
  siAxios,
  siCapacitor,
  siChartdotjs,
  siExpo,
  siFastify,
  siFirebase,
  siFramer,
  siGooglemaps,
  siGraphql,
  siI18next,
  siIonic,
  siMapbox,
  siMui,
  siNextdotjs,
  siNodedotjs,
  siPrisma,
  siPusher,
  siRevenuecat,
  siSocketdotio,
  siStripe,
  siWebrtc,
  siReact,
  siReacthookform,
  siReactquery,
  siReactrouter,
  siRadixui,
  siSass,
  siSentry,
  siShadcnui,
  siSupabase,
  siTailwindcss,
  siTypescript,
  siVercel,
  siVite,
  siZod,
} from 'simple-icons';
import { cn } from '@/lib/cn';

type SimpleIcon = { path: string };

// Maps a technology label (lowercased) to a monochrome Simple Icons glyph.
// Unmapped labels fall back to a neutral diamond mark in the same house style.
const ICONS: Record<string, SimpleIcon> = {
  react: siReact,
  'react 19': siReact,
  'react native': siReact,
  typescript: siTypescript,
  vite: siVite,
  'tanstack query': siReactquery,
  'react query': siReactquery,
  'react router': siReactrouter,
  'tailwind css': siTailwindcss,
  'tailwind css 4': siTailwindcss,
  supabase: siSupabase,
  'firebase auth': siFirebase,
  'firebase functions': siFirebase,
  firebase: siFirebase,
  fastify: siFastify,
  prisma: siPrisma,
  anthropic: siAnthropic,
  zod: siZod,
  'radix ui': siRadixui,
  'shadcn/ui': siShadcnui,
  sentry: siSentry,
  axios: siAxios,
  mui: siMui,
  'react hook form': siReacthookform,
  sass: siSass,
  'next.js': siNextdotjs,
  'mapbox gl': siMapbox,
  vercel: siVercel,
  'ionic react': siIonic,
  'apollo graphql': siApollographql,
  capacitor: siCapacitor,
  'chart.js': siChartdotjs,
  'google maps': siGooglemaps,
  ios: siApple,
  android: siAndroid,
  'framer motion': siFramer,
  'node.js': siNodedotjs,
  graphql: siGraphql,
  stripe: siStripe,
  expo: siExpo,
  i18next: siI18next,
  pusher: siPusher,
  'socket.io': siSocketdotio,
  webrtc: siWebrtc,
  revenuecat: siRevenuecat,
};

type TechIconProps = {
  name: string;
  className?: string;
};

export function TechIcon({ name, className }: TechIconProps) {
  const icon = ICONS[name.trim().toLowerCase()];
  const cls = cn('shrink-0', className);

  if (!icon) {
    return (
      <svg viewBox="0 0 24 24" className={cls} fill="currentColor" aria-hidden="true">
        <path d="M12 3.2 20.8 12 12 20.8 3.2 12z" opacity="0.85" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={cls} fill="currentColor" aria-hidden="true">
      <path d={icon.path} />
    </svg>
  );
}
