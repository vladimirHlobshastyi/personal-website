export const aboutExpertise = [
  {
    title: 'Complex frontend systems',
    summary:
      'React and Next.js applications with business rules, data-heavy screens, reusable UI, and long-term maintenance.',
    points: [
      'Dashboards, subscriptions, onboarding, forms, maps, and realtime interfaces.',
      'Clear state ownership and feature boundaries that keep new work predictable.',
    ],
    tags: ['React', 'Next.js', 'Architecture'],
    icon: 'architecture',
  },
  {
    title: 'Web and mobile delivery',
    summary:
      'Web and mobile versions of the same product, with consistent flows and platform-specific behavior where needed.',
    points: [
      'React Native delivery with attention to platform behavior and performance.',
      'API states, device behavior, and release readiness handled as part of the feature.',
    ],
    tags: ['React', 'React Native', 'TypeScript'],
    icon: 'mobile',
  },
  {
    title: 'Integrations and codebase recovery',
    summary:
      'I connect product features to the services behind them and make unstable code safer to change.',
    points: [
      'Auth, payments, realtime, maps, monitoring, REST, and GraphQL integrations.',
      'Targeted refactoring of unstable or AI-generated code without a blind rewrite.',
    ],
    tags: ['Integrations', 'Refactoring', 'AI-assisted'],
    icon: 'nodes',
  },
] as const;
