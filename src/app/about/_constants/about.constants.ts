export const ABOUT_ROLE_TAGS = [
  'Senior Software Engineer',
  'Frontend Engineer',
  'React Developer',
  'Next.js Developer',
  'TypeScript Developer',
  'React Native Developer',
] as const;

export const aboutSnapshot = [
  {
    label: 'Role',
    value: 'Senior Software Engineer with a frontend core',
    icon: 'briefcase',
  },
  {
    label: 'Primary stack',
    value: 'React, Next.js, React Native, TypeScript, Node.js',
    icon: 'layers',
  },
  {
    label: 'Commercial experience',
    value: '5+ years across product teams and existing codebases',
    icon: 'shield',
  },
  {
    label: 'Platforms',
    value: 'Web, iOS and Android',
    icon: 'mobile',
  },
  {
    label: 'Domains',
    value: 'Healthcare, EdTech, e-commerce, logistics, social, ops and realtime',
    icon: 'globe',
  },
  {
    label: 'Collaboration',
    value: 'Design, frontend, backend and product collaboration',
    icon: 'conversation',
  },
  {
    label: 'Location',
    value: 'Remote, Europe-friendly hours',
    icon: 'globe',
  },
  {
    label: 'Availability',
    value: 'Available for the right collaborations',
    icon: 'clock',
  },
] as const;

export const aboutExpertise = [
  {
    title: 'Frontend architecture',
    summary:
      'I design React and Next.js systems around clear boundaries, predictable state, and code that stays easy to extend.',
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
      'I build and improve React Native products for iOS and Android, from shared TypeScript logic to release-ready flows.',
    points: [
      'Cross-platform product delivery with attention to device-specific behavior and performance.',
      'Comfortable with release readiness, app stability and long-term support.',
    ],
    tags: ['React Native', 'iOS', 'Android'],
    icon: 'mobile',
  },
  {
    title: 'AI project analysis and refactoring',
    summary:
      'I review AI-generated codebases, identify structural risks, and turn unstable implementations into maintainable product systems.',
    points: [
      'Codebase audit, targeted support, and focused refactoring instead of blind cleanup.',
      'Comfortable restoring structure while keeping delivery moving toward production.',
    ],
    tags: ['AI audit', 'Refactoring', 'Production hardening'],
    icon: 'nodes',
  },
  {
    title: 'Integrations and product systems',
    summary:
      'I work confidently across APIs, auth, payments, realtime flows, maps, monitoring, and release processes.',
    points: [
      'REST and GraphQL integration with realistic contracts, failure states, and rollout concerns.',
      'Comfortable wiring product UI into the systems that make it work in production.',
    ],
    tags: ['GraphQL', 'Stripe', 'WebRTC'],
    icon: 'spark',
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
    items: ['GraphQL', 'Stripe', 'Mapbox', 'WebRTC', 'Sentry', 'OpenAI'],
  },
] as const;

export const aboutWhoIAmSignals = [
  {
    title: 'Strong frontend core',
    text: 'Most of my work is product-facing engineering built with React, Next.js, TypeScript and modern JavaScript.',
    icon: 'layers',
  },
  {
    title: 'Cross-platform delivery',
    text: 'I work across web, mobile, integrations, and release flows when the product needs end-to-end execution.',
    icon: 'nodes',
  },
  {
    title: 'AI codebase recovery',
    text: 'I can assess AI-generated code, find risky structure, support delivery, and refactor unstable areas into maintainable systems.',
    icon: 'shield',
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
