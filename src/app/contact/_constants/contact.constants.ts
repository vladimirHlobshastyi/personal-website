import { CONTACTS } from '@/constants';

export const CONTACT_SOCIALS = [
  { name: 'email', ...CONTACTS.email },
  { name: 'telegram', ...CONTACTS.telegram },
  { name: 'linkedin', ...CONTACTS.linkedin },
] as const;

export const CONTACT_QUICK_FACTS = [
  { label: 'Availability', value: 'Project-based or long-term' },
  { label: 'Location', value: 'Remote · Europe-friendly' },
  { label: 'Languages', value: 'English B2 · Ukrainian and Russian (native)' },
] as const;
