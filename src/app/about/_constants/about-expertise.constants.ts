export const aboutExpertise = [
  {
    title: 'Product thinking in code',
    summary:
      'I start with what the product needs to do, then make the rules visible in the flow and the data.',
    points: [
      'Turn incomplete requirements into user flows, states, and acceptance criteria.',
      'Keep business rules out of accidental UI behavior so they can change safely.',
    ],
    tags: ['Flows', 'Business logic'],
    icon: 'architecture',
  },
  {
    title: 'Web and mobile delivery',
    summary:
      'I build complex product surfaces across web, iOS, and Android, keeping the experience coherent between them.',
    points: [
      'Dashboards, subscriptions, maps, realtime interactions, onboarding, and forms.',
      'Connect UI states, API data, errors, and release behavior instead of treating them as separate tasks.',
    ],
    tags: ['React', 'React Native', 'TypeScript'],
    icon: 'mobile',
  },
  {
    title: 'Systems that survive delivery',
    summary:
      'I care about what happens after the first demo: integration failures, changing requirements, and the next engineer touching the code.',
    points: [
      'Structure APIs, auth, payments, realtime, monitoring, and frontend boundaries around real use.',
      'Recover unstable or AI-generated codebases when speed has created more risk than progress.',
      'Use AI for product research, testing, debugging, documentation, and faster implementation while validating the result myself.',
    ],
    tags: ['Architecture', 'Integrations', 'AI-assisted'],
    icon: 'nodes',
  },
] as const;
