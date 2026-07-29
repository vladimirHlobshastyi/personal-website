export const aboutTechnologyGroups = [
  {
    title: 'Core web stack',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'TanStack Query', 'Node.js'],
  },
  {
    title: 'Mobile stack',
    items: ['React Native', 'iOS', 'Android', 'Expo', 'Ionic', 'Capacitor'],
  },
  {
    title: 'Product integrations',
    items: ['GraphQL', 'Stripe', 'Mapbox', 'WebRTC', 'Sentry', 'OpenAI'],
  },
] as const;

export const aboutWorkStyle = [
  {
    title: 'Architecture and maintainability',
    summary:
      'I prefer explicit boundaries, focused responsibilities and predictable data flow over clever abstractions.',
    points: [
      'Clean architecture for me means clarity, not ceremony.',
      'I avoid local fixes that make the system harder to evolve later.',
    ],
    icon: 'architecture',
  },
  {
    title: 'Complex product UI',
    summary:
      'I am most useful on non-trivial interfaces: dashboards, onboarding, forms, maps, subscriptions, and realtime surfaces.',
    points: [
      'I care about state ownership, edge cases and UI logic staying manageable.',
      'The goal is not just shipping screens, but shipping stable product behavior.',
    ],
    icon: 'compass',
  },
  {
    title: 'Performance and accessibility',
    summary:
      'Performance and accessibility are part of implementation, not cleanup tasks for later.',
    points: [
      'I think about rendering cost, perceived speed, semantics, keyboard flow and clarity while building.',
      'Good UX depends on engineering decisions, not only visual design.',
    ],
    icon: 'speed',
  },
  {
    title: 'Team collaboration',
    summary:
      'I work closely with designers, backend engineers and product teams to keep decisions concrete and implementable.',
    points: [
      'With designers, I focus on states, edge cases, responsiveness and interaction quality.',
      'With backend engineers, I focus on contracts, failure states, and realistic data flow.',
    ],
    icon: 'collaboration',
  },
] as const;
