import type { Project } from './project.types';

export const projects: Project[] = [
  {
    slug: 'miidba',
    title: 'MIIDBA',
    eyebrow: 'Admin Dashboard',
    shortDescription:
      'Internal dashboard for managing SQL backups, instances, organizations, users and access settings.',
    subtitle:
      'Administrative web application for database operations, backups and account management.',
    role: 'Frontend Engineer',
    stack: [
      'React',
      'TypeScript',
      'Vite',
      'React Router',
      'Zustand',
      'React Query',
      'Axios',
      'MUI',
      'Zod',
      'React Hook Form',
      'Sass',
    ],
    focus:
      'Auth flows, admin screens, tabular data, forms, backup analytics and reusable dashboard UI.',
    image: '/images/miidba_1.png',
    images: ['/images/miidba_1.png', '/images/miidba_2.png', '/images/miidba_3.png'],
    overview:
      'MIIDBA is an internal admin dashboard built for database operations and operational control. The product combines role-based access, structured management screens, form-driven workflows and data-heavy views for backups, instances, organizations, users and settings.',
    challenge:
      'The main challenge is keeping dense administrative information usable. The interface has to present tables, filters, modals, forms and status-heavy workflows in a way that remains predictable for operators working with production data.',
    outcome:
      'The result is a clean B2B-style dashboard with a strong focus on data handling, operational clarity and reusable frontend architecture. It demonstrates experience with real admin product requirements rather than marketing pages.',
    responsibilities: [
      {
        title: 'Admin workflows',
        description:
          'Implemented the main operational screens for dashboards, instances, backups, organizations, users and settings.',
      },
      {
        title: 'Forms and validation',
        description:
          'Built structured form flows with validation for create and edit actions across admin entities.',
      },
      {
        title: 'Data handling',
        description:
          'Connected the UI to API-driven data with consistent loading, empty and state transitions.',
      },
      {
        title: 'Reusable UI',
        description:
          'Worked with shared tables, dialogs, inputs and layout patterns to keep the application maintainable.',
      },
    ],
  },
  {
    slug: 'truckrates',
    title: 'TruckRates.ai',
    eyebrow: 'Logistics SaaS',
    shortDescription:
      'AI-powered drayage pricing platform with instant carrier rates, route mapping and booking workflows.',
    subtitle:
      'SaaS platform for instant drayage carrier pricing, rate comparison and shipment booking.',
    role: 'Frontend Engineer',
    stack: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'React Hook Form',
      'Zod',
      'Mapbox GL',
      'Recharts',
      'Zustand',
      'NextAuth.js',
      'Vercel',
    ],
    focus:
      'Product dashboard, rate search flows, carrier comparison tables, route visualization and role-based access.',
    image: '/images/truckrates_3.png',
    images: [
      '/images/truckrates_3.png',
      '/images/truckrates_1.png',
      '/images/truckrates_2.png',
    ],
    overview:
      'TruckRates.ai is an AI-driven logistics platform that provides instant drayage carrier pricing. The product allows shippers and brokers to search rates by route, compare carriers side by side, view distance and pricing on a map, and book shipments directly. The frontend handles complex search flows, real-time rate tables, accessorial charge breakdowns and a content-driven blog section.',
    challenge:
      'The main complexity is presenting dense logistics data in a way that feels simple: carrier tables with pricing tiers, route maps with distance overlays, multi-step booking flows and role-based dashboards for different user types. Search filters, rate history and RFQ management all need to stay responsive and predictable under real production data volumes.',
    outcome:
      'The result is a clean, product-grade logistics dashboard: intuitive rate search, visual route comparison, carrier booking in fewer clicks and a content section that drives organic traffic. The interface handles the density of logistics data without overwhelming the user.',
    responsibilities: [
      {
        title: 'Rate search engine',
        description:
          'Designed and implemented the full rate search flow from scratch: route input with autocomplete, carrier result tables with sortable columns, average rate aggregation, roundtrip distance calculations and paginated search history. Handled complex filter combinations and ensured the interface remains fast under thousands of carrier records.',
      },
      {
        title: 'Interactive route mapping',
        description:
          'Integrated Mapbox GL to render pickup-to-delivery routes with real-time distance overlays, waypoint markers and pricing annotations. Built a reusable map component that adapts to different route types and viewport sizes while maintaining smooth pan and zoom performance.',
      },
      {
        title: 'Carrier management and RFQ',
        description:
          'Built the carrier directory with contact details, service areas and pricing tiers. Implemented the RFQ (Request for Quote) workflow: multi-step forms with validation, status tracking and notification states. Connected carrier data to the rate comparison engine for instant pricing lookups.',
      },
      {
        title: 'Dashboard architecture',
        description:
          'Structured the authenticated dashboard with persistent sidebar navigation, role-based screen access, user management and application settings. Implemented search history with saved routes, bookmarked carriers and export capabilities. Ensured consistent layout behaviour across all dashboard sections.',
      },
      {
        title: 'Content and SEO platform',
        description:
          'Built the public-facing blog and knowledge base sections: article listing with category filters, individual article pages with structured content, accessorial charges reference and SEO-optimized meta tags. Created reusable content components for consistent typography and layout across editorial pages.',
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
    stack: [
      'React',
      'TypeScript',
      'React Hook Form',
      'Zod',
      'Zustand',
      'RBAC',
      'React Router',
      'Axios',
      'date-fns',
      'Tailwind CSS',
    ],
    focus:
      'Dynamic forms, role-based interfaces, review flows, validation and predictable user states.',
    image:
      'https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1600&auto=format&fit=crop',
    images: [],
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
    stack: [
      'Ionic React',
      'TypeScript',
      'Apollo GraphQL',
      'Capacitor',
      'React Router',
      'Formik',
      'CSS Modules',
      'iOS',
      'Android',
    ],
    focus:
      'Mobile UX, GraphQL state handling, screen flows, loading states and app-like interactions.',
    image:
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1600&auto=format&fit=crop',
    images: [],
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
    stack: [
      'React',
      'TypeScript',
      'Supabase',
      'WebSocket',
      'Tailwind CSS',
      'React Router',
      'Zustand',
      'Framer Motion',
    ],
    focus:
      'Authentication, realtime communication, user flows, storage and product-oriented frontend structure.',
    image:
      'https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=1600&auto=format&fit=crop',
    images: [],
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
