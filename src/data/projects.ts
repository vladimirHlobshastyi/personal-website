import type { Project } from '@/types/project';

export const projects: Project[] = [
  {
    slug: 'homfinity',
    title: 'Homfinity',
    eyebrow: 'Real Estate Platform',
    shortDescription:
      'Property discovery platform with interactive maps, project pages and multi-step user flows.',
    subtitle:
      'Real estate platform for property discovery, project presentation and map-based search.',
    role: 'Frontend Engineer',
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'shadcn/ui', 'React Hook Form', 'Mapbox'],
    focus:
      'Product logic, UI architecture, reusable components, responsive behaviour and implementation quality.',
    image:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1600&auto=format&fit=crop',
    overview:
      'Homfinity is a real estate product where the frontend has to do more than render pages. The interface combines property discovery, project presentation, interactive map behaviour, filtering, forms and responsive layouts. The main value of the work is a clean product flow: users can explore properties visually, understand the object context and move through the platform without friction.',
    challenge:
      'The technically sensitive part is keeping the UI predictable while many states change at once: search filters, map movement, selected objects, loading states, form steps and responsive layouts. The implementation needs stable state boundaries, reusable sections and a component structure that does not collapse when the product grows.',
    outcome:
      'The result is a product-oriented frontend foundation: reusable UI blocks, clearer user journeys, polished visual hierarchy and map-based interaction that feels integrated into the product instead of being a separate technical widget.',
    responsibilities: [
      {
        title: 'Map-based product experience',
        description:
          'Implemented UI flows around property discovery, selected map objects and location-driven browsing.',
      },
      {
        title: 'Reusable interface sections',
        description:
          'Built repeatable UI blocks for project pages, search results, forms and content-heavy layouts.',
      },
      {
        title: 'Responsive product layout',
        description:
          'Adjusted hierarchy and spacing across desktop, tablet and mobile breakpoints.',
      },
    ],
  },
  {
    slug: 'clinical-logs',
    title: 'Clinical Logs',
    eyebrow: 'Healthcare Education',
    shortDescription:
      'Clinical education platform with roles, logs, review screens and location verification.',
    subtitle: 'Clinical education platform for students, preceptors and admins.',
    role: 'Frontend Engineer',
    stack: ['React', 'TypeScript', 'React Hook Form', 'Zod', 'Zustand', 'RBAC'],
    focus:
      'Dynamic forms, role-based interfaces, review flows, validation and predictable user states.',
    image:
      'https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1600&auto=format&fit=crop',
    overview:
      'Clinical Logs is a role-based web platform for clinical education workflows. Students create logs, preceptors review submitted work, and admins manage structured operational flows. The frontend has to support serious usage: clear forms, strict validation, status visibility, review screens and predictable navigation.',
    challenge:
      'The main complexity is correctness. Different roles see different states, logs move through multiple statuses, forms depend on selected templates, and location verification can block or allow actions. The UI must explain what is happening without overwhelming the user.',
    outcome:
      'The implementation direction is focused on maintainable dynamic forms, role-aware rendering, readable review flows and clean state separation. For a client, this shows ability to work with business rules, not only landing pages.',
    responsibilities: [
      {
        title: 'Role-aware UI',
        description:
          'Separated student, preceptor and admin interactions into predictable screen states.',
      },
      {
        title: 'Complex forms',
        description:
          'Worked with dynamic fields, validation rules and multi-step clinical log flows.',
      },
      {
        title: 'Review experience',
        description:
          'Designed clear review screens with statuses, actions and readable clinical log data.',
      },
    ],
  },
  {
    slug: 'ciq-mobile',
    title: 'CIQ Mobile',
    eyebrow: 'Mobile Application',
    shortDescription: 'Mobile-first Ionic React application with GraphQL-driven product logic.',
    subtitle: 'Mobile-first application with structured GraphQL-driven product logic.',
    role: 'Frontend / Mobile Engineer',
    stack: ['Ionic React', 'TypeScript', 'Apollo GraphQL', 'Capacitor'],
    focus:
      'Mobile UX, GraphQL state handling, screen flows, loading states and app-like interactions.',
    image:
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1600&auto=format&fit=crop',
    overview:
      'CIQ Mobile is a mobile-first application where the frontend experience depends on clear flows, fast feedback and correct data handling. The product combines mobile UX constraints with a GraphQL data layer and app-like interaction patterns.',
    challenge:
      'The challenge is to keep the app feeling simple while handling real production states: fetching, mutations, cache updates, form screens, navigation transitions and mobile responsiveness. In mobile interfaces, small inconsistencies become visible very quickly, so spacing, hierarchy and interaction states matter.',
    outcome:
      'The work demonstrates practical mobile frontend experience: Ionic React structure, Apollo integration, production-oriented UI states and layouts that remain usable across device sizes.',
    responsibilities: [
      {
        title: 'Mobile-first flows',
        description:
          'Built screens and interactions around mobile behaviour, smaller viewports and app navigation.',
      },
      {
        title: 'GraphQL integration',
        description: 'Handled query and mutation states through Apollo-driven UI logic.',
      },
      {
        title: 'Production states',
        description:
          'Covered loading, empty, error and transition states to keep the interface stable.',
      },
    ],
  },
  {
    slug: 'flychat',
    title: 'FlyChat',
    eyebrow: 'Realtime Product',
    shortDescription:
      'Realtime pet communication concept with authentication, storage and websocket features.',
    subtitle:
      'Realtime pet communication concept with authentication, storage and websocket features.',
    role: 'Frontend Engineer',
    stack: ['React', 'TypeScript', 'Supabase', 'WebSocket', 'Tailwind'],
    focus:
      'Authentication, realtime communication, user flows, storage and product-oriented frontend structure.',
    image:
      'https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=1600&auto=format&fit=crop',
    overview:
      'FlyChat is a realtime communication concept focused on pet-related social interaction. It includes authentication, profile-like flows, storage and websocket-based messaging behaviour. The project is useful for showing full product thinking, not just isolated UI screens.',
    challenge:
      'Realtime interfaces need careful handling of optimistic updates, connection states, loading states and message ordering. The frontend must remain understandable when data changes quickly and when network conditions are imperfect.',
    outcome:
      'The result is a compact but meaningful product case: authentication, storage, realtime communication and user-facing flows combined into a modern React application structure.',
    responsibilities: [
      {
        title: 'Realtime communication',
        description: 'Structured message-related UI states and websocket-driven updates.',
      },
      {
        title: 'Auth and storage',
        description: 'Integrated authentication and storage flows into the product experience.',
      },
      {
        title: 'Product UI',
        description:
          'Created a clear social-product interface around profiles, messages and user actions.',
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
