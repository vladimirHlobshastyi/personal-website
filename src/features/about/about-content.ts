export const aboutSnapshot = [
  ['Role', 'Software Engineer focused on frontend architecture and product delivery'],
  ['Primary stack', 'React, Next.js, TypeScript, JavaScript, React Native'],
  ['Commercial experience', '5+ years across product teams and existing codebases'],
  ['Platforms', 'Web, iOS and Android'],
  ['Domains', 'Healthcare, EdTech, e-commerce, logistics, social and operations'],
  ['Collaboration', 'Design, frontend, backend and product collaboration'],
  ['Location', 'Remote, Europe-friendly hours'],
  ['Availability', 'Available for the right collaborations'],
] as const;

export const aboutExpertise = [
  {
    title: 'Frontend architecture',
    summary:
      'I design React and Next.js applications around clear boundaries, predictable state and code that stays easy to extend.',
    points: [
      'Clear feature boundaries, reusable UI primitives and maintainable component structure.',
      'Data flow shaped for real product complexity, not only happy-path demos.',
    ],
    tags: ['React', 'Next.js', 'TypeScript'],
    icon: 'architecture',
  },
  {
    title: 'Mobile development',
    summary:
      'I build and maintain React Native products for iOS and Android, from shared TypeScript logic to release-ready flows.',
    points: [
      'Cross-platform product delivery with attention to device-specific behavior and performance.',
      'Comfortable with release readiness, app stability and long-term support.',
    ],
    tags: ['React Native', 'iOS', 'Android'],
    icon: 'mobile',
  },
  {
    title: 'Backend integration',
    summary:
      'I am comfortable beyond the frontend: APIs, auth, payments, realtime flows, maps, monitoring and deployment.',
    points: [
      'REST and GraphQL integration with realistic contracts, failure states and rollout concerns.',
      'Comfortable wiring product UI into the systems that make it work in production.',
    ],
    tags: ['GraphQL', 'Stripe', 'WebRTC'],
    icon: 'integration',
  },
  {
    title: 'AI-assisted development',
    summary:
      'I use AI to accelerate research, scaffolding and repetitive work, but quality still depends on engineering judgment.',
    points: [
      'AI helps with speed, but architecture, naming and correctness still need an experienced engineer.',
      'Comfortable stabilizing AI-generated code before it reaches production.',
    ],
    tags: ['AI systems', 'Code rescue', 'Maintainability'],
    icon: 'ai',
  },
] as const;

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
    items: ['GraphQL', 'Stripe', 'Mapbox', 'WebRTC', 'Sentry', 'Vercel'],
  },
] as const;

export const aboutWhoIAmSignals = [
  {
    title: 'Strong frontend core',
    text: 'Most of my work is product-facing engineering built with React, Next.js, TypeScript and modern JavaScript.',
  },
  {
    title: 'Commercial product experience',
    text: 'I work in live products and existing codebases, not only greenfield demos or isolated landing pages.',
  },
  {
    title: 'Cross-boundary delivery',
    text: 'I can move between frontend, mobile, backend integration, release work and product collaboration when needed.',
  },
  {
    title: 'Maintainability matters',
    text: 'I optimize for code that stays understandable under product pressure, team growth and future changes.',
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
      'I am most useful on non-trivial interfaces: dashboards, onboarding, forms, maps, subscription flows and realtime surfaces.',
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
      'With backend engineers, I focus on contracts, failure states, pagination and data shape realism.',
    ],
    icon: 'collaboration',
  },
  {
    title: 'AI-assisted development',
    summary:
      'I use AI pragmatically for speed and exploration while keeping architecture and correctness under control.',
    points: [
      'AI can accelerate execution, but it does not replace engineering judgment.',
      'I am comfortable cleaning up AI-generated code when it lacks structure or production quality.',
    ],
    icon: 'ai',
  },
] as const;
