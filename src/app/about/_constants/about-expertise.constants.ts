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
