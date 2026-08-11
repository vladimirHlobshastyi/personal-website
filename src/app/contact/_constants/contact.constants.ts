import { CONTACTS } from '@/constants';

export const CONTACT_SOCIALS = [
  { name: 'email', ...CONTACTS.email },
  { name: 'linkedin', ...CONTACTS.linkedin },
  { name: 'github', ...CONTACTS.github },
  { name: 'telegram', ...CONTACTS.telegram },
  { name: 'x', ...CONTACTS.x },
] as const;

export const CONTACT_LANGUAGES = [
  { label: 'English', value: 'Upper-Intermediate · B2' },
  { label: 'Ukrainian', value: 'Native' },
  { label: 'Russian', value: 'Native' },
] as const;

export const CONTACT_QUICK_FACTS = [
  { label: 'Availability', value: 'Available for the right collaborations' },
  { label: 'Location', value: 'Remote · Europe-friendly hours' },
  { label: 'Response time', value: 'Within 24 hours' },
] as const;

export const CONTACT_WORK_FOCUS = [
  'Product Discovery',
  'Web and Mobile',
  'Product Flows and Integrations',
  'Codebase Recovery',
] as const;

export const CONTACT_HELP_AREAS = [
  {
    title: 'From business rules to product flows',
    description:
      'Turn unclear requirements into user flows, states, forms, dashboards, maps, onboarding, and other product behavior.',
  },
  {
    title: 'Web, mobile, and product systems',
    description:
      'Build and connect the frontend, APIs, auth, payments, realtime features, and release details that make the product work.',
  },
  {
    title: 'AI-generated codebase recovery',
    description:
      'Review an AI-built project, find architectural and reliability risks, fix broken flows, and prepare the codebase for continued development.',
  },
] as const;

export const CONTACT_WORKING_STYLE = [
  { label: 'Engagement', value: 'Long-term or project-based' },
  { label: 'Timezone fit', value: 'Europe / async-friendly' },
  { label: 'Collaboration', value: 'Open to the right fit' },
] as const;
