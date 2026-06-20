'use client';

import { useState } from 'react';
import * as Collapsible from '@radix-ui/react-collapsible';
import { ArrowIcon, Tag } from '@/components/ui';

// The most in-demand stack stays visible; the long tail expands on demand.
const core = [
  'React',
  'Next.js',
  'TypeScript',
  'React Native',
  'Ionic React',
  'Node.js',
  'GraphQL',
  'Tailwind CSS',
  'TanStack Query',
  'Zustand',
];

const more = [
  'Vite',
  'Supabase',
  'Firebase',
  'Prisma',
  'Fastify',
  'Zod',
  'React Hook Form',
  'Radix UI',
  'shadcn/ui',
  'Apollo GraphQL',
  'Capacitor',
  'Mapbox GL',
  'Recharts',
  'Framer Motion',
  'Sentry',
  'MUI',
  'Sass',
];

export function SkillList() {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible.Root open={open} onOpenChange={setOpen}>
      <div className="flex flex-wrap gap-2">
        {core.map((item) => (
          <Tag key={item}>{item}</Tag>
        ))}
      </div>

      <Collapsible.Content className="collapsible-content">
        <div className="flex flex-wrap gap-2 pt-2">
          {more.map((item) => (
            <Tag key={item}>{item}</Tag>
          ))}
        </div>
      </Collapsible.Content>

      <Collapsible.Trigger asChild>
        <button
          type="button"
          className="text-accent group mt-4 inline-flex items-center gap-1.5 text-sm font-bold transition-colors"
        >
          {open ? 'Show fewer' : `+${more.length} more technologies`}
          <ArrowIcon
            className={`h-3.5 w-3.5 transition-transform duration-300 ${open ? '-rotate-90' : 'rotate-90'}`}
          />
        </button>
      </Collapsible.Trigger>
    </Collapsible.Root>
  );
}
