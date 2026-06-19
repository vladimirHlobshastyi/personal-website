import type { Project } from './project.types';

export const projects: Project[] = [
  {
    slug: 'prepry',
    title: 'Prepry AI',
    eyebrow: 'AI Recovery / EdTech Platform',
    badge: 'AI cleanup + architecture rescue',
    shortDescription:
      'Large education platform that I stabilized after AI-vibe coding, rebuilt into a maintainable production structure and hardened for real delivery.',
    subtitle:
      'Full-stack education platform for clinical, academic and AI-driven workflows, brought from scattered AI output to production-ready architecture.',
    role: 'Frontend Engineer',
    stack: [
      'React 19',
      'TypeScript',
      'Vite',
      'TanStack Query',
      'React Router',
      'Tailwind CSS 4',
      'Supabase',
      'Firebase Auth',
      'Firebase Functions',
      'Fastify',
      'Prisma',
      'OpenAI',
      'Anthropic',
      'Zod',
      'Radix UI',
      'shadcn/ui',
      'Zustand',
      'Sentry',
    ],
    focus:
      'Architecture cleanup, RBAC, institution scope, route stability, legacy removal and production hardening.',
    image: '/images/prepry_1.png',
    images: ['/images/prepry_1.png', '/images/prepry_2.png', '/images/prepry_3.png'],
    overview:
      'Prepry is a large education platform for clinical, academic and AI-assisted workflows. The codebase spans a React frontend, backend services, serverless functions, Supabase/Postgres, Firebase Auth and multiple AI features. My work focused on turning an unstable AI-generated foundation into a maintainable product architecture.',
    challenge:
      'The main challenge was not adding a small feature, but rescuing a large codebase with scattered logic, duplicate legacy paths, inconsistent institution scope, broken routes and weak separation between domains. The platform needed real structural cleanup before it could be treated like production software.',
    outcome:
      'The result was a production-oriented refactor: clearer feature boundaries, safer access control, consistent tenant scoping, removed legacy dead ends, better data flow and a codebase that could actually be extended without compounding the earlier AI-generated mess.',
    responsibilities: [
      {
        title: 'Architecture rescue',
        description:
          'Reworked scattered AI-generated code into clearer domain boundaries, reduced duplication and aligned the frontend with a predictable project structure.',
      },
      {
        title: 'RBAC and tenant scope',
        description:
          'Audited and fixed role checks, institution-scoped data flow and route protection so selected institution data stayed isolated and predictable.',
      },
      {
        title: 'Legacy cleanup',
        description:
          'Removed or planned removal of dead routes, legacy hooks, stale screens and mock data that were blocking production readiness.',
      },
      {
        title: 'AI feature hardening',
        description:
          'Kept AI features usable while moving risky logic into safer backend boundaries and making the product easier to maintain.',
      },
    ],
  },
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
    eyebrow: 'Operations Platform',
    shortDescription:
      'Industrial dashboard for project operations, street sheets, maps, task workflows and PDF export.',
    subtitle:
      'Operational web platform for managing construction projects, work bundles and field data.',
    role: 'Frontend / Mobile Engineer',
    stack: [
      'React',
      'TypeScript',
      'Ionic React',
      'Apollo GraphQL',
      'Capacitor',
      'React Router',
      'React Hook Form',
      'Zod',
      'Chart.js',
      'Google Maps',
      'PDF export',
      'iOS',
      'Android',
    ],
    focus:
      'Project navigation, map-driven planning, street sheet workflows, tables, dialogs and exports.',
    image: '/images/ciq_1.png',
    images: ['/images/ciq_1.png', '/images/ciq_2.png', '/images/ciq_3.png'],
    overview:
      'CIQ is an operations platform used to manage construction projects, work bundle definitions, street sheets and field data. The frontend combines dense administrative screens, map-based planning, modal workflows and exportable operational views in one application.',
    challenge:
      'The challenge is to keep complex operational data understandable. Users need to move between projects, plans, tasks and street sheets without losing context, while the UI still has to stay responsive and predictable across large tables, overlays and map interactions.',
    outcome:
      'The result is a production-style dashboard that supports real operational workflows: planning, review, status tracking, map inspection and PDF output. It shows experience with heavy business UI rather than just static marketing pages.',
    responsibilities: [
      {
        title: 'Project and task workflows',
        description:
          'Built navigation and screen flows for projects, work bundle definitions, tasks and related operational records.',
      },
      {
        title: 'Map and planning views',
        description:
          'Worked with map-based layouts for construction planning and visual inspection of project areas.',
      },
      {
        title: 'Forms, dialogs and exports',
        description:
          'Implemented modal-driven CRUD flows, structured forms and PDF export interactions for street sheet data.',
      },
      {
        title: 'Data-heavy admin UI',
        description:
          'Handled tables, filters, status indicators and loading states in a dense business application.',
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
