import type { Project } from './project.types';

export const projects: Project[] = [
  {
    slug: 'prepry',
    title: 'Prepry AI',
    eyebrow: 'AI Recovery / EdTech Platform',
    badge: 'AI rescue / production refactor',
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
    slug: 'fitfast',
    title: 'FitFast',
    eyebrow: 'Intermittent Fasting · Web',
    badge: 'Quiz funnel · Subscriptions',
    shortDescription:
      'Web platform for an intermittent-fasting product: a personalized quiz funnel, Stripe subscriptions and onboarding localized into 10 languages.',
    subtitle:
      'A conversion-focused quiz funnel and subscription web app for an intermittent-fasting product.',
    role: 'Frontend Engineer',
    stack: [
      'React',
      'TypeScript',
      'Vite',
      'React Router',
      'TanStack Query',
      'React Hook Form',
      'Yup',
      'Stripe',
      'i18next',
      'Tailwind CSS',
      'Framer Motion',
      'Victory',
      'Sentry',
    ],
    focus:
      'Conversion quiz funnel, Stripe checkout, subscription management, localization and animated progress UI.',
    image: '/images/fitfast_1.png',
    images: ['/images/fitfast_1.png', '/images/fitfast_2.png', '/images/fitfast_3.png'],
    overview:
      'FitFast is the web platform for an intermittent-fasting product. It walks visitors through a personalized multi-step quiz, builds a tailored plan, converts them through a Stripe checkout and lets them manage their subscription — localized into 10 languages and tuned for conversion. It is the acquisition surface that feeds the FitFast mobile app.',
    challenge:
      'A funnel like this lives or dies on flow and trust: each quiz step has to feel effortless, validation must be forgiving, payment has to be rock-solid, and everything must work identically across 10 locales and metric/imperial units without breaking the conversion path.',
    outcome:
      'A smooth, animated quiz-to-paywall funnel with reliable Stripe checkout, self-serve subscription management and full localization — a measurable acquisition surface rather than a static marketing page.',
    responsibilities: [
      {
        title: 'Quiz funnel',
        description:
          'Built the multi-step personalized quiz with progress UI, metric/imperial inputs, validated forms (React Hook Form + Yup) and animated step transitions (Framer Motion).',
      },
      {
        title: 'Payments & subscriptions',
        description:
          'Integrated Stripe checkout, payment review and self-serve subscription management (manage and cancel) with clear states and error handling.',
      },
      {
        title: 'Localization',
        description:
          'Wired i18next across 10 languages with locale-aware dates and units, keeping the entire funnel consistent across markets.',
      },
      {
        title: 'Data & reliability',
        description:
          'Connected the UI to the API with React Query, added progress charts (Victory) and Sentry monitoring for production reliability.',
      },
    ],
  },
  {
    slug: 'fitfast-app',
    title: 'FitFast',
    eyebrow: 'Intermittent Fasting · iOS & Android',
    badge: 'React Native app',
    shortDescription:
      'React Native app for intermittent fasting and nutrition (live on Google Play). Joined the team to ship new features and refactor parts of the app.',
    subtitle:
      'Cross-platform mobile app (iOS & Android) for fasting, nutrition and workout tracking, built with React Native.',
    role: 'React Native Engineer (team)',
    links: [
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.fitfast.health&hl=uk',
      },
    ],
    stack: [
      'React Native',
      'TypeScript',
      'React Navigation',
      'TanStack Query',
      'Reanimated',
      'Skia',
      'Vision Camera',
      'Victory Native',
      'i18next',
      'MMKV',
      'Pusher',
      'react-native-iap',
      'OneSignal',
      'Sentry',
    ],
    focus:
      'New features, refactoring and ongoing improvements across fasting, nutrition, scanning, workouts and subscriptions.',
    image: '/images/fitfast_app_1.png',
    images: ['/images/fitfast_app_1.png', '/images/fitfast_app_2.png', '/images/fitfast_app_3.png'],
    overview:
      'FitFast is a comprehensive intermittent-fasting and nutrition app for iOS and Android, live on Google Play. I joined the existing team and worked within a large React Native codebase — adding new features, refactoring screens and shared logic, and helping evolve the app across fasting, meal tracking, food scanning, workouts and subscriptions.',
    challenge:
      'Contributing to a feature-dense production app means changes have to fit existing patterns, stay smooth on real devices and not regress fasting, nutrition, realtime or payment flows. Much of the work was careful refactoring alongside shipping new functionality.',
    outcome:
      'New features delivered and parts of the app refactored to be cleaner and easier to maintain, while keeping the live app stable for users on both platforms.',
    responsibilities: [
      {
        title: 'New features',
        description:
          'Built and shipped new screens and flows across fasting, nutrition and tracking as part of the team.',
      },
      {
        title: 'Refactoring',
        description:
          'Refactored existing screens and shared logic to reduce complexity and improve maintainability of the codebase.',
      },
      {
        title: 'App-wide improvements',
        description:
          'Worked on performance, UI consistency and fixes across the React Native app, using Reanimated and Skia to keep interactions smooth.',
      },
    ],
  },
  {
    slug: 'carnify',
    title: 'Carnify',
    eyebrow: 'Health & Diet SaaS',
    badge: 'Quiz funnel · Subscriptions',
    shortDescription:
      'Carnivore-diet web platform with a personalized multi-step quiz funnel, Stripe subscriptions and onboarding localized into 10 languages.',
    subtitle:
      'A conversion-focused quiz funnel and subscription web app for a carnivore-nutrition product.',
    role: 'Frontend Engineer',
    stack: [
      'React',
      'TypeScript',
      'Vite',
      'React Router',
      'TanStack Query',
      'React Hook Form',
      'Yup',
      'Stripe',
      'i18next',
      'Tailwind CSS',
      'Framer Motion',
      'Victory',
      'Sentry',
    ],
    focus:
      'Conversion quiz funnel, Stripe checkout, subscription management, localization and animated progress UI.',
    image: '/images/carnify_1.png',
    images: ['/images/carnify_1.png', '/images/carnify_2.png', '/images/carnify_3.png'],
    overview:
      'Carnify is the web platform for a carnivore-diet product. It guides visitors through a personalized multi-step quiz, builds a tailored plan, converts them through a Stripe checkout and lets them manage their subscription — all localized into 10 languages and tuned for conversion.',
    challenge:
      'A funnel like this lives or dies on flow and trust: each quiz step has to feel effortless, validation must be forgiving, payment has to be rock-solid, and everything must work identically across 10 locales and metric/imperial units without breaking the conversion path.',
    outcome:
      'A smooth, animated quiz-to-paywall funnel with reliable Stripe checkout, self-serve subscription management and full localization — a measurable acquisition surface for the product rather than a static marketing page.',
    responsibilities: [
      {
        title: 'Quiz funnel',
        description:
          'Built the multi-step personalized quiz with progress UI, metric/imperial inputs, validated forms (React Hook Form + Yup) and animated step transitions (Framer Motion).',
      },
      {
        title: 'Payments & subscriptions',
        description:
          'Integrated Stripe checkout, payment review and self-serve subscription management (manage and cancel) with clear states and error handling.',
      },
      {
        title: 'Localization',
        description:
          'Wired i18next across 10 languages with locale-aware dates and units, keeping the entire funnel consistent across markets.',
      },
      {
        title: 'Data & reliability',
        description:
          'Connected the UI to the API with React Query, added progress charts (Victory) and Sentry monitoring for production reliability.',
      },
    ],
  },
  {
    slug: 'claratalks',
    title: 'ClaraTalks',
    eyebrow: 'Realtime Support · iOS & Android',
    badge: 'WebRTC calling app',
    shortDescription:
      'Confidential realtime support app: secure audio/video calls connecting people with trained peer listeners, with on-device transcription and identity verification.',
    subtitle:
      'A private, realtime emotional-support calling platform built with React Native, WebRTC and on-device speech-to-text.',
    role: 'React Native Engineer',
    stack: [
      'React Native',
      'Expo',
      'TypeScript',
      'WebRTC',
      'Daily.co',
      'Socket.io',
      'WebSockets',
      'Whisper.rn',
      'AI / LLM',
      'Persona',
      'Firebase',
      'TanStack Query',
      'Reanimated',
      'MMKV',
      'i18next',
      'Zod',
    ],
    focus:
      'Realtime audio/video calls, on-device transcription, secure onboarding & identity verification, and calm crisis-safety flows.',
    image: '/images/claratalks_1.jpg',
    images: [
      '/images/claratalks_1.jpg',
      '/images/claratalks_2.jpg',
      '/images/claratalks_3.jpg',
      '/images/claratalks_4.jpg',
    ],
    overview:
      'ClaraTalks is a confidential, realtime support product for iOS and Android. It connects people who need to talk with trained peer listeners ("sisters") over secure audio and video calls. The app spans a full call lifecycle — topic selection, matching and waiting, pre-call, incoming and active calls, and post-call decompression — on top of WebRTC and Daily.co, with Socket.io handling signaling and session state. Sensitive context shaped every decision: a client-side AI agent processes the conversation in real time (live transcription, auto-mute and safety cues) with speech-to-text running on-device via Whisper, identity is verified through Persona, and data is kept in secure storage.',
    challenge:
      'Realtime calling is unforgiving — connection setup, permissions, proximity handling, network drops and call state all have to feel instant and reliable. On top of that, the product operates in an emotionally sensitive, privacy-critical context: transcription has to stay on-device, identity must be verified without friction, and crisis situations need clear, calm, fail-safe flows rather than clever UI.',
    outcome:
      'A reliable, private support-calling app with a smooth end-to-end call experience, on-device transcription, verified onboarding and dedicated crisis-protocol and immediate-help flows — a product where the engineering stays invisible so the conversation can come first.',
    responsibilities: [
      {
        title: 'Realtime calling',
        description:
          'Built the full call lifecycle — pre-call, incoming, active and post-call screens — on WebRTC and Daily.co, including permissions, in-call proximity handling and graceful recovery from network changes.',
      },
      {
        title: 'Client-side realtime AI agent',
        description:
          'Added an on-client AI agent that processes the live conversation in real time — driving live transcription, auto-mute and safety cues — with whisper.rn speech-to-text running entirely on the device to keep audio private.',
      },
      {
        title: 'Onboarding & verification',
        description:
          'Implemented role- and mission-based onboarding with Persona identity verification and secure storage (expo-secure-store / MMKV).',
      },
      {
        title: 'Signaling & session state',
        description:
          'Wired Socket.io signaling with matching, waiting/queue and session lifecycle, coordinating server state through TanStack Query.',
      },
      {
        title: 'Safety flows',
        description:
          'Built crisis-protocol, immediate-help and support-decompression experiences with deliberately calm, predictable UX for high-stress moments.',
      },
    ],
  },
  {
    slug: 'sighapp',
    title: 'SighApp',
    eyebrow: 'Social Network · iOS & Android',
    badge: 'React Native app',
    shortDescription:
      'Social platform for iOS and Android — feed, stories, posts, chat and calls, with business accounts, analytics and subscriptions.',
    subtitle:
      'A full social network built with React Native: content creation, messaging, personal and business profiles, and creator analytics.',
    role: 'React Native Engineer',
    stack: [
      'React Native',
      'TypeScript',
      'React Navigation',
      'TanStack Query',
      'Firebase',
      'Notifee',
      'Vision Camera',
      'Skia',
      'Reanimated',
      'RevenueCat',
      'MMKV',
      'i18next',
      'Yup',
      'Sentry',
    ],
    focus:
      'Feed & stories, content creation, chat & calls, business accounts & analytics, subscriptions and moderation.',
    image: '/images/sighapp_1.jpg',
    images: ['/images/sighapp_1.jpg', '/images/sighapp_2.jpg', '/images/sighapp_3.jpg'],
    overview:
      'Sigh is a full-featured social network for iOS and Android. It combines a media-rich feed and stories, post creation from camera and video, real-time chat and calls, follow/notification systems, and both personal and business accounts. Creators and businesses get analytics and performance screens, account upgrades and subscriptions (RevenueCat), QR-based profile sharing, and a complete moderation layer with reporting and blocking.',
    challenge:
      'A social app is many products at once — feed, stories, media capture, messaging, calls, profiles, analytics, payments and moderation — all of which must stay fast and smooth on real devices while handling media-heavy content, push notifications and live updates without janking the scroll or draining the battery.',
    outcome:
      'A polished, production-grade social app with a fluid media feed, frictionless content creation, real-time messaging, monetization for creators and businesses, and the safety tooling a public network needs.',
    responsibilities: [
      {
        title: 'Feed & stories',
        description:
          'Built the media feed, stories viewer and post screens with smooth scrolling and transitions (FlashList, pager-view, Reanimated) and fast image/video rendering.',
      },
      {
        title: 'Content creation',
        description:
          'Implemented camera and video capture (Vision Camera), thumbnail generation, view-shot and upload flows for creating posts and stories.',
      },
      {
        title: 'Chat, calls & notifications',
        description:
          'Delivered one-to-one chat, calls and a notification system with Firebase messaging and Notifee for rich push.',
      },
      {
        title: 'Business accounts & subscriptions',
        description:
          'Built personal and business profiles, performance analytics, account upgrades and subscriptions (RevenueCat), plus moderation flows (report and block).',
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
    slug: 'homefinity',
    title: 'Homefinity',
    eyebrow: 'Real Estate · Web',
    badge: 'Property marketplace',
    shortDescription:
      'Web platform for discovering, comparing and buying pre-construction and assignment-sale properties — location search, listing grids and rich project pages.',
    subtitle:
      'A real-estate marketplace for pre-construction and assignment sales: find, compare and move to your ideal home.',
    role: 'Frontend Engineer',
    stack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'TanStack Query'],
    focus:
      'Property search & filtering, media-rich listing grids, detailed project pages and developer submissions.',
    image: '/images/homefinity_1.png',
    images: ['/images/homefinity_1.png', '/images/homefinity_2.png', '/images/homefinity_3.png'],
    overview:
      'Homefinity is a web platform for pre-construction and assignment-sale real estate. Buyers search by location and currency, browse featured and filtered listing grids, save favorites, and open detailed project pages with project information, floor plans, construction monitoring and city documents. Developers can add and manage their own projects, with clear buy and contact paths throughout.',
    challenge:
      'Real-estate discovery has to make dense listing data effortless: location-based search, currency and filters, fast media-heavy listing grids with pagination, and detailed project pages that stay readable across many information sections without overwhelming the buyer.',
    outcome:
      'A clean, conversion-oriented property marketplace — quick location search, scannable listing grids, rich multi-section project pages, and direct buy/contact actions that move buyers from discovery to enquiry.',
    responsibilities: [
      {
        title: 'Search & listings',
        description:
          'Built location-based property search with currency and filters, plus paginated, media-rich listing grids and featured-project sections.',
      },
      {
        title: 'Project detail pages',
        description:
          'Implemented multi-section project pages — information, floor plans, construction monitoring and city documents — with buy and contact actions.',
      },
      {
        title: 'Discovery UX',
        description:
          'Added favorites, recent search history and a clear, conversion-focused layout from landing to enquiry.',
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
    eyebrow: 'Realtime Chat · PWA',
    shortDescription:
      'Realtime chat app with JWT auth, WebSocket messaging, unread/read states, online presence and role-based user/admin flows.',
    subtitle:
      'Realtime chat product built with React, TanStack Router/Query, Zustand, Supabase and WebSocket-driven messaging.',
    role: 'Frontend Engineer',
    stack: [
      'React 19',
      'TypeScript',
      'Vite',
      'Supabase',
      'WebSocket',
      'Tailwind CSS',
      'TanStack Router',
      'TanStack Query',
      'Zustand',
      'PWA',
    ],
    focus:
      'JWT auth, realtime dialogs, message sync, unread/read flow, online presence, role-based routes and mobile-first product structure.',
    image: '/images/flychat_1.png',
    images: ['/images/flychat_1.png', '/images/flychat_2.png', '/images/flychat_3.png'],
    overview:
      'FlyChat is a realtime chat application built with React, Vite, Zustand, TanStack Router/Query, Supabase and a WebSocket backend. The product covers more than a single chat screen: authentication, dialogs, unread counts, typing states, online presence, profile management, role-based user/admin areas and PWA preparation for desktop and mobile usage.',
    challenge:
      'Realtime product UI has to stay understandable while data changes constantly. Dialog order, unread counters, typing signals, read states, presence and infinite message history all need to stay synchronized without breaking navigation or making the interface feel unstable on mobile and desktop.',
    outcome:
      'The result is a structured chat product with real application depth: JWT auth, synchronized messaging, role-aware routes, searchable user flows, profile editing and PWA-ready frontend foundations. It demonstrates product thinking and realtime state handling, not just isolated messenger visuals.',
    responsibilities: [
      {
        title: 'Realtime messaging',
        description:
          'Implemented chat flows around WebSocket updates, typing states, unread counters, read events and synchronized message ordering.',
      },
      {
        title: 'Auth and app state',
        description:
          'Worked with JWT auth, persisted Zustand state, TanStack Query data flow and route-level role separation for user and admin areas.',
      },
      {
        title: 'Product surfaces',
        description:
          'Built dialogs, active chat, profile management and data-management screens in a mobile-first layout prepared for PWA installation.',
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
