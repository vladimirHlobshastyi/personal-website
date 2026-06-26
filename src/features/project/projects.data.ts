import type { Project } from './project.types';

// Project descriptions are based on commercial experience.
// Real client and product names are intentionally replaced with category-based
// titles for confidentiality. Visuals shown in the carousel are blurred or
// anonymized and do not expose internal data or proprietary UI.
const rawProjects: Project[] = [
  {
    slug: 'clinical-education-platform',
    title: 'Clinical Learning Platform',
    category: 'Healthcare · EdTech',
    eyebrow: 'Clinical Learning Platform · Web',
    badge: 'AI / vibe-coded rescue · architecture refactor',
    shortDescription:
      'Frontend Developer on a clinical learning platform: stabilized a vibe-coded AI-generated codebase, restored structure and refactored it into a maintainable React + TypeScript product.',
    subtitle:
      'Web platform for clinical training, assessment and AI-assisted learning workflows, rebuilt into a production-ready React architecture.',
    role: 'Frontend Developer',
    keywords: [
      'React Developer',
      'TypeScript Developer',
      'Frontend Architecture',
      'Web Application Development',
      'EdTech',
    ],
    stack: [
      'React 19',
      'TypeScript',
      'Vite',
      'TanStack Query',
      'React Router',
      'Tailwind CSS 4',
      'Zustand',
      'Zod',
      'Radix UI',
      'shadcn/ui',
      'Sentry',
    ],
    focus:
      'Architecture recovery after vibe coding, RBAC, tenant scope, route stability, legacy removal and production hardening.',
    cover: '/images/case-07-cover.webp',
    images: ['/images/case-07-01.webp', '/images/case-07-02.webp', '/images/case-07-03.webp'],
    overview:
      'Contributed to a large clinical-education web platform combining structured learning, assessment and AI-assisted workflows. Worked across a React + TypeScript codebase to recover structure after vibe coding and turn an unstable AI-generated foundation into a maintainable production architecture.',
    challenge:
      'The work was not a small feature, but a structural rescue after vibe coding: scattered logic, duplicate legacy paths, inconsistent multi-tenant scope, broken routes and weak separation between domains. The platform needed real cleanup before it could be treated as production software.',
    outcome:
      'Delivered a production-oriented refactor with restored feature boundaries, safer access control, consistent tenant scoping, removed legacy dead ends, more predictable data flow and a codebase that could be extended without compounding earlier issues.',
    responsibilities: [
      {
        title: 'Architecture refactor',
        description:
          'Reworked scattered AI-generated, vibe-coded code into clearer domain boundaries, reduced duplication and aligned the frontend with a predictable React project structure.',
      },
      {
        title: 'Access control and tenant scope',
        description:
          'Audited and corrected role checks, tenant-scoped data flow and route protection so user data stayed isolated and predictable across the platform.',
      },
      {
        title: 'Legacy cleanup',
        description:
          'Removed dead routes, legacy hooks, stale screens and mock data that were blocking production readiness.',
      },
      {
        title: 'Reliability and monitoring',
        description:
          'Hardened key flows, improved error boundaries and integrated runtime monitoring so production incidents could be detected and resolved quickly.',
      },
    ],
  },
  {
    slug: 'subscription-web-platform',
    title: 'Wellness Subscription Platform',
    category: 'Health & Wellness · Web',
    eyebrow: 'Wellness Subscription Platform · Web',
    badge: 'Quiz funnel · Stripe subscriptions',
    shortDescription:
      'Frontend Developer on a wellness subscription platform: quiz funnel, Stripe billing and onboarding localized into 10 languages.',
    subtitle:
      'Web platform for personalized quiz funnels, subscription billing and localized onboarding.',
    role: 'Frontend Developer',
    keywords: [
      'React Developer',
      'TypeScript Developer',
      'Next.js Developer',
      'Web Application Development',
      'Stripe Integration',
    ],
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
      'Sentry',
    ],
    focus:
      'Conversion quiz funnel, Stripe checkout, subscription management, localization and animated progress UI.',
    cover: '/images/case-02-cover.webp',
    images: ['/images/case-02-01.webp', '/images/case-02-02.webp', '/images/case-02-03.webp'],
    overview:
      'Worked on the web platform for a subscription product in the health and wellness category. The application walks visitors through a personalized multi-step quiz, builds a tailored plan, converts via Stripe checkout and lets users manage their subscription — localized into 10 languages and tuned for conversion.',
    challenge:
      'A funnel like this lives or dies on flow and trust: each quiz step has to feel effortless, validation must be forgiving, payments have to be reliable, and everything must work identically across 10 locales and unit systems without breaking the conversion path.',
    outcome:
      'A smooth, animated quiz-to-paywall funnel with reliable Stripe checkout, self-serve subscription management and full localization — a measurable acquisition surface rather than a static marketing page.',
    responsibilities: [
      {
        title: 'Quiz funnel',
        description:
          'Implemented the multi-step personalized quiz with progress UI, unit toggles, validated forms (React Hook Form + Yup) and animated step transitions (Framer Motion).',
      },
      {
        title: 'Payments and subscriptions',
        description:
          'Integrated Stripe checkout, payment review and self-serve subscription management (manage and cancel) with clear states and error handling.',
      },
      {
        title: 'Localization',
        description:
          'Wired i18next across 10 languages with locale-aware dates and units, keeping the entire funnel consistent across markets.',
      },
      {
        title: 'Data and reliability',
        description:
          'Connected the UI to the API with React Query, added progress charts and integrated runtime monitoring for production reliability.',
      },
    ],
  },
  {
    slug: 'react-native-mobile-app',
    title: 'Health & Wellness Mobile App',
    category: 'Health & Wellness · iOS & Android',
    eyebrow: 'Health & Wellness Mobile App · iOS & Android',
    badge: 'Cross-platform mobile app',
    shortDescription:
      'React Native Developer on a health and wellness app: new features, refactoring and cross-platform delivery for iOS and Android.',
    subtitle:
      'Cross-platform wellness app for iOS and Android built with React Native and TypeScript.',
    role: 'React Native Developer',
    keywords: [
      'React Native Developer',
      'TypeScript Developer',
      'Mobile App Development',
      'iOS Developer',
      'Android Developer',
    ],
    stack: [
      'React Native',
      'TypeScript',
      'React Navigation',
      'TanStack Query',
      'Reanimated',
      'Skia',
      'Vision Camera',
      'i18next',
      'MMKV',
      'react-native-iap',
      'OneSignal',
      'Sentry',
    ],
    focus:
      'New features, refactoring and ongoing improvements across tracking, scanning, subscriptions and notifications.',
    cover: '/images/case-11-cover.webp',
    images: ['/images/case-11-01.webp', '/images/case-11-02.webp', '/images/case-11-03.webp'],
    overview:
      'Contributed to a feature-dense React Native application live on the App Store and Google Play. Worked within a large existing codebase — developing new features, refactoring screens and shared logic, and helping evolve the app across multiple product domains.',
    challenge:
      'Contributing to a production app means changes have to fit existing patterns, stay smooth on real devices and not regress critical flows. Much of the work was careful refactoring alongside shipping new functionality.',
    outcome:
      'New features delivered and parts of the app refactored to be cleaner and more maintainable, while keeping the live application stable for users on both iOS and Android.',
    responsibilities: [
      {
        title: 'New features',
        description:
          'Developed and shipped new screens and flows across tracking, scanning and content creation as part of the team.',
      },
      {
        title: 'Refactoring',
        description:
          'Refactored existing screens and shared logic to reduce complexity and improve maintainability of the React Native codebase.',
      },
      {
        title: 'App-wide improvements',
        description:
          'Worked on performance, UI consistency and bug fixes across the application, using Reanimated and Skia to keep interactions smooth.',
      },
    ],
  },
  {
    slug: 'e-commerce-web-platform',
    title: 'E-commerce Subscription Platform',
    category: 'E-commerce · Web',
    eyebrow: 'E-commerce Subscription Platform · Web',
    badge: 'Quiz funnel · Subscriptions',
    shortDescription:
      'Frontend Developer on a subscription e-commerce platform: multi-step quiz funnel, Stripe billing and onboarding localized into 10 languages.',
    subtitle:
      'E-commerce platform with a personalized quiz funnel, subscription billing and localized onboarding.',
    role: 'Frontend Developer',
    keywords: [
      'React Developer',
      'TypeScript Developer',
      'Frontend Developer',
      'E-commerce Development',
      'Web Application Development',
    ],
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
      'Sentry',
    ],
    focus:
      'Conversion quiz funnel, Stripe checkout, subscription management, localization and animated progress UI.',
    cover: '/images/case-05-cover.webp',
    images: ['/images/case-05-01.webp', '/images/case-05-02.webp', '/images/case-05-03.webp'],
    overview:
      'Contributed to an e-commerce web platform with a personalized multi-step quiz funnel and recurring subscriptions. The application guides visitors through a tailored plan, converts through Stripe checkout and lets users manage their subscription — localized into 10 languages and tuned for conversion.',
    challenge:
      'A funnel-driven storefront lives or dies on flow and trust: each quiz step has to feel effortless, validation must be forgiving, payments have to be reliable, and the experience must work identically across 10 locales without breaking the conversion path.',
    outcome:
      'A smooth, animated quiz-to-paywall funnel with reliable Stripe checkout, self-serve subscription management and full localization — a measurable acquisition surface rather than a static marketing page.',
    responsibilities: [
      {
        title: 'Quiz funnel',
        description:
          'Implemented the multi-step personalized quiz with progress UI, unit toggles, validated forms (React Hook Form + Yup) and animated step transitions (Framer Motion).',
      },
      {
        title: 'Payments and subscriptions',
        description:
          'Integrated Stripe checkout, payment review and self-serve subscription management (manage and cancel) with clear states and error handling.',
      },
      {
        title: 'Localization',
        description:
          'Wired i18next across 10 languages with locale-aware dates and units, keeping the entire funnel consistent across markets.',
      },
      {
        title: 'Data and reliability',
        description:
          'Connected the UI to the API with React Query, added progress charts and integrated runtime monitoring for production reliability.',
      },
    ],
  },
  {
    slug: 'mental-health-mobile-app',
    title: 'Mental Health Support App',
    category: 'Mental Health · iOS & Android',
    eyebrow: 'Mental Health Support App · iOS & Android',
    badge: 'WebRTC realtime · React Native',
    shortDescription:
      'React Native Developer on a confidential mental health support app: realtime audio/video calls, on-device transcription and identity verification.',
    subtitle:
      'Confidential mobile app for realtime peer support, secure onboarding and on-device transcription.',
    role: 'React Native Developer',
    keywords: [
      'React Native Developer',
      'Mobile App Development',
      'WebRTC',
      'Realtime Communication',
      'iOS Developer',
      'Android Developer',
    ],
    stack: [
      'React Native',
      'Expo',
      'TypeScript',
      'WebRTC',
      'Socket.io',
      'WebSockets',
      'On-device Speech-to-Text',
      'TanStack Query',
      'Reanimated',
      'MMKV',
      'i18next',
      'Zod',
    ],
    focus:
      'Realtime audio/video calls, on-device transcription, secure onboarding and calm safety-critical flows.',
    cover: '/images/case-09-cover.webp',
    images: [
      '/images/case-09-01.webp',
      '/images/case-09-02.webp',
      '/images/case-09-03.webp',
      '/images/case-09-04.webp',
    ],
    overview:
      'Contributed to a confidential mental-health mobile application for iOS and Android. The product connects users with trained peer listeners over secure audio and video calls. Worked across the full call lifecycle — topic selection, matching, pre-call, active calls and post-call decompression — on top of WebRTC and Socket.io for signaling and session state.',
    challenge:
      'Realtime calling is unforgiving — connection setup, permissions, proximity handling, network drops and call state all have to feel instant and reliable. On top of that, the product operates in an emotionally sensitive, privacy-critical context: transcription must stay on-device, identity must be verified without friction, and safety flows need clear, calm, fail-safe UX.',
    outcome:
      'A reliable, private support-calling mobile app with a smooth end-to-end call experience, on-device transcription, verified onboarding and dedicated safety flows — engineering that stays invisible so the conversation can come first.',
    responsibilities: [
      {
        title: 'Realtime calling',
        description:
          'Implemented the full call lifecycle — pre-call, incoming, active and post-call screens — on WebRTC, including permissions, in-call proximity handling and graceful recovery from network changes.',
      },
      {
        title: 'On-device realtime AI',
        description:
          'Integrated an on-device speech-to-text pipeline driving live transcription, auto-mute and safety cues, keeping audio private on the client.',
      },
      {
        title: 'Onboarding and verification',
        description:
          'Implemented role-based onboarding with third-party identity verification and secure storage of user state.',
      },
      {
        title: 'Signaling and session state',
        description:
          'Wired Socket.io signaling with matching, waiting/queue and session lifecycle, coordinating server state through TanStack Query.',
      },
      {
        title: 'Safety flows',
        description:
          'Implemented crisis-protocol, immediate-help and decompression flows with calm, predictable UX for high-stress moments.',
      },
    ],
  },
  {
    slug: 'social-network-mobile-app',
    title: 'Social Media App',
    category: 'Social · iOS & Android',
    eyebrow: 'Social Media App · iOS & Android',
    badge: 'React Native social app',
    shortDescription:
      'React Native Developer on a social media app: feed, stories, posts, chat and calls, plus creator analytics and subscriptions.',
    subtitle:
      'Mobile social platform for content creation, messaging, profiles, creator analytics and subscriptions.',
    role: 'React Native Developer',
    keywords: [
      'React Native Developer',
      'TypeScript Developer',
      'Mobile App Development',
      'Social Network',
      'iOS Developer',
      'Android Developer',
    ],
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
      'Feed and stories, content creation, chat and calls, business accounts and analytics, subscriptions and moderation.',
    cover: '/images/case-04-cover.webp',
    images: ['/images/case-04-01.webp', '/images/case-04-02.webp', '/images/case-04-03.webp'],
    overview:
      'Contributed to a full-featured social network for iOS and Android. The application combines a media-rich feed and stories, content creation from camera and video, realtime chat and calls, follow/notification systems, and both personal and business accounts. Creators and businesses get analytics and performance screens, account upgrades and subscriptions, profile sharing and a moderation layer.',
    challenge:
      'A social app is many products at once — feed, stories, media capture, messaging, calls, profiles, analytics, payments and moderation — all of which must stay fast and smooth on real devices while handling media-heavy content, push notifications and live updates without janking the scroll or draining the battery.',
    outcome:
      'A polished, production-grade social application with a fluid media feed, frictionless content creation, realtime messaging, monetization for creators and businesses, and the safety tooling a public network needs.',
    responsibilities: [
      {
        title: 'Feed and stories',
        description:
          'Implemented the media feed, stories viewer and post screens with smooth scrolling and transitions (FlashList, pager-view, Reanimated) and fast image/video rendering.',
      },
      {
        title: 'Content creation',
        description:
          'Implemented camera and video capture (Vision Camera), thumbnail generation and upload flows for creating posts and stories.',
      },
      {
        title: 'Chat, calls and notifications',
        description:
          'Developed one-to-one chat, calls and a notification system with Firebase messaging and Notifee for rich push.',
      },
      {
        title: 'Business accounts and subscriptions',
        description:
          'Implemented personal and business profiles, performance analytics, account upgrades and subscriptions (RevenueCat), plus moderation flows (report and block).',
      },
    ],
  },
  {
    slug: 'saas-admin-dashboard',
    title: 'Operations Admin Dashboard',
    category: 'Admin · Web',
    eyebrow: 'Operations Admin Dashboard · Web',
    shortDescription:
      'Frontend Developer on an admin dashboard for managing backups, instances, organizations, users and access settings.',
    subtitle:
      'Administrative web application for operational data, account management and role-based access control.',
    role: 'Frontend Developer',
    keywords: [
      'React Developer',
      'TypeScript Developer',
      'Frontend Developer',
      'SaaS Dashboard',
      'Web Application Development',
    ],
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
      'Auth flows, admin screens, tabular data, forms, analytics and reusable dashboard UI.',
    cover: '/images/case-08-cover.webp',
    images: ['/images/case-08-01.webp', '/images/case-08-02.webp', '/images/case-08-03.webp'],
    overview:
      'Contributed to a SaaS admin dashboard for operational control. The product combines role-based access, structured management screens, form-driven workflows and data-heavy views for backups, instances, organizations, users and settings.',
    challenge:
      'The challenge was keeping dense administrative information usable. The interface had to present tables, filters, modals, forms and status-heavy workflows in a way that stayed predictable for operators working with production data.',
    outcome:
      'A clean B2B-style dashboard with a strong focus on data handling, operational clarity and reusable frontend architecture, demonstrating real admin product experience rather than marketing pages.',
    responsibilities: [
      {
        title: 'Admin workflows',
        description:
          'Implemented the main operational screens for dashboards, instances, backups, organizations, users and settings.',
      },
      {
        title: 'Forms and validation',
        description:
          'Developed structured form flows with validation for create and edit actions across admin entities.',
      },
      {
        title: 'Data handling',
        description:
          'Connected the UI to API-driven data with consistent loading, empty and error states.',
      },
      {
        title: 'Reusable UI',
        description:
          'Worked with shared tables, dialogs, inputs and layout patterns to keep the application maintainable.',
      },
    ],
  },
  {
    slug: 'logistics-management-platform',
    title: 'Freight Rate Platform',
    category: 'Logistics · Web',
    eyebrow: 'Freight Rate Platform · Web',
    shortDescription:
      'Next.js Developer on a freight rate platform: instant carrier pricing, route mapping and shipment booking workflows.',
    subtitle:
      'Logistics platform for carrier pricing, rate comparison and shipment booking.',
    role: 'Frontend Developer',
    keywords: [
      'Next.js Developer',
      'React Developer',
      'TypeScript Developer',
      'Frontend Developer',
      'Logistics Software',
      'Web Application Development',
    ],
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
    cover: '/images/case-01-cover.webp',
    images: [
      '/images/case-01-03.webp',
      '/images/case-01-01.webp',
      '/images/case-01-02.webp',
    ],
    overview:
      'Contributed to a logistics management platform providing instant carrier pricing for shippers and brokers. The product supports rate search by route, side-by-side carrier comparison, route maps with distance overlays and direct booking. The frontend handles complex search flows, rate tables, accessorial breakdowns and a content-driven blog section.',
    challenge:
      'The main complexity was presenting dense logistics data in a way that felt simple: carrier tables with pricing tiers, route maps with distance overlays, multi-step booking flows and role-based dashboards. Search filters, rate history and request-for-quote management all had to stay responsive and predictable under real production data volumes.',
    outcome:
      'A clean, product-grade logistics dashboard: intuitive rate search, visual route comparison, carrier booking in fewer clicks and a content section that drives organic traffic. The interface handles the density of logistics data without overwhelming the user.',
    responsibilities: [
      {
        title: 'Rate search engine',
        description:
          'Designed and implemented the full rate search flow: route input with autocomplete, carrier result tables with sortable columns, average rate aggregation, roundtrip distance calculations and paginated search history. Handled complex filter combinations and kept the interface fast under thousands of carrier records.',
      },
      {
        title: 'Interactive route mapping',
        description:
          'Integrated Mapbox GL to render pickup-to-delivery routes with real-time distance overlays, waypoint markers and pricing annotations. Built a reusable map component that adapts to different route types and viewport sizes.',
      },
      {
        title: 'Carrier and RFQ workflows',
        description:
          'Implemented the carrier directory with contact details, service areas and pricing tiers. Developed the request-for-quote workflow: multi-step forms with validation, status tracking and notification states, connected to the rate comparison engine for instant pricing lookups.',
      },
      {
        title: 'Dashboard architecture',
        description:
          'Structured the authenticated dashboard with persistent sidebar navigation, role-based screen access, user management and application settings. Implemented saved searches and bookmarked carriers with consistent layout behavior across all sections.',
      },
      {
        title: 'Content and SEO',
        description:
          'Implemented the public-facing blog and knowledge base: article listing with category filters, individual article pages with structured content, accessorial-charges reference and SEO-optimized meta tags. Created reusable content components for consistent typography and layout.',
      },
    ],
  },
  {
    slug: 'real-estate-platform',
    title: 'Property Marketplace',
    category: 'Real Estate · Web',
    eyebrow: 'Property Marketplace · Web',
    badge: 'Property marketplace',
    shortDescription:
      'Frontend Developer on a property marketplace for discovering, comparing and buying pre-construction and assignment-sale properties.',
    subtitle:
      'Real estate marketplace for pre-construction and assignment-sale listings.',
    role: 'Frontend Developer',
    keywords: [
      'Next.js Developer',
      'React Developer',
      'TypeScript Developer',
      'Frontend Developer',
      'Real Estate Web Platform',
      'Web Application Development',
    ],
    stack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'TanStack Query'],
    focus:
      'Property search and filtering, media-rich listing grids, detailed project pages and developer submissions.',
    cover: '/images/case-03-cover.webp',
    images: ['/images/case-03-01.webp', '/images/case-03-02.webp', '/images/case-03-03.webp'],
    overview:
      'Contributed to a real estate web platform focused on pre-construction and assignment-sale properties. Buyers search by location and currency, browse featured and filtered listing grids, save favorites and open detailed project pages with project information, floor plans, construction updates and city documents. Developers can submit and manage their own projects, with clear buy and contact paths throughout.',
    challenge:
      'Real estate discovery has to make dense listing data effortless: location-based search, currency and filters, fast media-heavy listing grids with pagination, and detailed project pages that stay readable across many information sections without overwhelming the buyer.',
    outcome:
      'A clean, conversion-oriented property marketplace — quick location search, scannable listing grids, rich multi-section project pages and direct buy/contact actions that move buyers from discovery to enquiry.',
    responsibilities: [
      {
        title: 'Search and listings',
        description:
          'Implemented location-based property search with currency and filters, plus paginated, media-rich listing grids and featured-project sections.',
      },
      {
        title: 'Project detail pages',
        description:
          'Developed multi-section project pages — information, floor plans, construction updates and city documents — with buy and contact actions.',
      },
      {
        title: 'Discovery UX',
        description:
          'Implemented favorites, recent search history and a clear, conversion-focused layout from landing to enquiry.',
      },
    ],
  },
  {
    slug: 'enterprise-management-platform',
    title: 'Enterprise Operations Platform',
    category: 'Enterprise Operations · Web + Mobile',
    eyebrow: 'Enterprise Operations Platform · Web + Mobile',
    shortDescription:
      'Frontend / Mobile Developer on an enterprise operations platform for managing projects, work bundles, maps, tasks and PDF exports.',
    subtitle:
      'Enterprise platform for project workflows, field data, map-based planning and operational exports.',
    role: 'Frontend / Mobile Developer',
    keywords: [
      'React Developer',
      'TypeScript Developer',
      'Ionic Developer',
      'Mobile App Development',
      'Enterprise Software',
      'Web Application Development',
    ],
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
      'Project navigation, map-driven planning, structured workflows, tables, dialogs and exports.',
    cover: '/images/case-10-cover.webp',
    images: ['/images/case-10-01.webp', '/images/case-10-02.webp', '/images/case-10-03.webp'],
    overview:
      'Contributed to an enterprise operations platform used to manage projects, work bundle definitions and field data. The frontend combines dense administrative screens, map-based planning, modal workflows and exportable operational views in one application, delivered to both web and mobile via Ionic and Capacitor.',
    challenge:
      'The challenge was keeping complex operational data understandable. Users needed to move between projects, plans, tasks and data sheets without losing context, while the UI had to stay responsive and predictable across large tables, overlays and map interactions.',
    outcome:
      'A production-style management platform that supports real operational workflows: planning, review, status tracking, map inspection and PDF output — heavy business UI delivered to web, iOS and Android from a single codebase.',
    responsibilities: [
      {
        title: 'Project and task workflows',
        description:
          'Implemented navigation and screen flows for projects, work bundle definitions, tasks and related operational records.',
      },
      {
        title: 'Map and planning views',
        description:
          'Worked with map-based layouts for project planning and visual inspection of operational areas.',
      },
      {
        title: 'Forms, dialogs and exports',
        description:
          'Implemented modal-driven CRUD flows, structured forms and PDF export interactions for operational data.',
      },
      {
        title: 'Data-heavy admin UI',
        description:
          'Worked with tables, filters, status indicators and loading states in a dense enterprise application.',
      },
    ],
  },
  {
    slug: 'real-time-chat-application',
    title: 'Realtime Messaging App',
    category: 'Realtime · Web (PWA)',
    eyebrow: 'Realtime Messaging App · Web (PWA)',
    shortDescription:
      'Frontend Developer on a realtime messaging app with JWT auth, WebSocket messaging, online presence and role-based user/admin flows.',
    subtitle:
      'Realtime web messaging product with synchronized dialogs, presence and PWA-ready frontend architecture.',
    role: 'Frontend Developer',
    keywords: [
      'React Developer',
      'TypeScript Developer',
      'Frontend Developer',
      'WebSocket',
      'PWA Developer',
      'Real-Time Web Applications',
    ],
    stack: [
      'React 19',
      'TypeScript',
      'Vite',
      'WebSocket',
      'Tailwind CSS',
      'TanStack Router',
      'TanStack Query',
      'Zustand',
      'PWA',
    ],
    focus:
      'JWT auth, realtime dialogs, message sync, unread/read flow, online presence, role-based routes and mobile-first product structure.',
    cover: '/images/case-06-cover.webp',
    images: ['/images/case-06-01.webp', '/images/case-06-02.webp', '/images/case-06-03.webp'],
    overview:
      'Developed a realtime chat web application with React, Vite, Zustand, TanStack Router/Query and a WebSocket backend. The product covers authentication, dialogs, unread counts, typing states, online presence, profile management, role-based user/admin areas and PWA preparation for desktop and mobile usage.',
    challenge:
      'Realtime product UI has to stay understandable while data changes constantly. Dialog order, unread counters, typing signals, read states, presence and infinite message history all needed to stay synchronized without breaking navigation or making the interface feel unstable on mobile and desktop.',
    outcome:
      'A structured chat product with real application depth: JWT auth, synchronized messaging, role-aware routes, searchable user flows, profile editing and PWA-ready frontend foundations — demonstrating realtime state handling, not just isolated messenger visuals.',
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
          'Developed dialogs, active chat, profile management and data-management screens in a mobile-first layout prepared for PWA installation.',
      },
    ],
  },
];

const PROJECT_ORDER = [
  'social-network-mobile-app',
  'e-commerce-web-platform',
  'mental-health-mobile-app',
  'logistics-management-platform',
  'real-estate-platform',
  'enterprise-management-platform',
  'real-time-chat-application',
  'clinical-education-platform',
  'react-native-mobile-app',
  'saas-admin-dashboard',
  'subscription-web-platform',
] as const;

const projectOrderIndex = new Map<string, number>(
  PROJECT_ORDER.map((slug, index) => [slug, index]),
);

export const projects: Project[] = [...rawProjects].sort((left, right) => {
  const leftIndex = projectOrderIndex.get(left.slug) ?? Number.MAX_SAFE_INTEGER;
  const rightIndex = projectOrderIndex.get(right.slug) ?? Number.MAX_SAFE_INTEGER;
  return leftIndex - rightIndex;
});

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
