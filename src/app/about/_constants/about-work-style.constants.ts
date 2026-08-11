export const aboutTechnologyGroups = [
  {
    title: 'Core web stack',
    items: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'TanStack Query',
      'Node.js',
      'Express.js',
    ],
  },
  {
    title: 'Backend and data',
    items: ['GraphQL', 'REST APIs', 'Supabase', 'PostgreSQL', 'MongoDB', 'Prisma'],
  },
  {
    title: 'Mobile and integrations',
    items: ['React Native', 'Ionic', 'Expo', 'Capacitor', 'Stripe', 'Mapbox', 'WebRTC', 'Sentry'],
  },
] as const;

export const aboutWorkStyle = [
  {
    title: 'Make complexity visible',
    summary:
      'I prefer explicit boundaries and predictable data flow over clever abstractions that hide the real rules.',
    points: [
      'Clean architecture means the next decision is easier to make.',
      'I avoid local fixes that make the product harder to evolve later.',
    ],
    icon: 'architecture',
  },
  {
    title: 'Build for real use',
    summary: 'The work is not finished when the happy path looks good in a screenshot.',
    points: [
      'I think through loading, empty, error, permission, and mobile states.',
      'Performance, accessibility, and interaction quality are part of implementation.',
    ],
    icon: 'compass',
  },
  {
    title: 'Stay close to the decisions',
    summary:
      'I work with product, design, and backend teammates to keep the system understandable and the trade-offs visible.',
    points: [
      'With design, I clarify states, edge cases, responsiveness, and interaction quality.',
      'With backend and product, I clarify contracts, failure states, and what success means.',
    ],
    icon: 'collaboration',
  },
] as const;
