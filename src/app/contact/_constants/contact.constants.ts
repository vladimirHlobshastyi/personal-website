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
  'Web and Mobile',
  'Frontend Architecture',
  'AI Codebase Audit',
  'Refactoring and Recovery',
] as const;

export const CONTACT_HELP_AREAS = [
  {
    title: 'Complex product interfaces',
    description:
      'SaaS dashboards, admin panels, complex forms, maps, onboarding and multi-step product flows.',
  },
  {
    title: 'AI project recovery',
    description:
      'Codebase audit, structural cleanup, focused support, refactoring, and production hardening for AI-generated or AI-assisted projects.',
  },
] as const;

export const CONTACT_WORKING_STYLE = [
  { label: 'Engagement', value: 'Long-term or project-based' },
  { label: 'Timezone fit', value: 'Europe / async-friendly' },
  { label: 'Collaboration', value: 'Open to the right fit' },
] as const;
