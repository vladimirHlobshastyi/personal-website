export const aboutWorkStyle = [
  {
    title: 'Agree on the behavior before coding',
    summary: 'I clarify the flow, the data, and what the team will consider complete.',
    points: [
      'Fewer assumptions hidden inside the interface.',
      'An architecture based on actual use, not imagined scale.',
    ],
    icon: 'architecture',
  },
  {
    title: 'Build the states users actually meet',
    summary:
      'Loading, empty, error, permission, and mobile states are part of the feature from the start.',
    points: [
      'No demo-only behavior that breaks in normal use.',
      'Performance and accessibility included in implementation.',
    ],
    icon: 'compass',
  },
  {
    title: 'Stay close to the team during delivery',
    summary: 'I keep product, design, and backend decisions connected while implementation moves.',
    points: [
      'Clear contracts, edge cases, and trade-offs.',
      'Less rework during integration and release.',
    ],
    icon: 'collaboration',
  },
] as const;
