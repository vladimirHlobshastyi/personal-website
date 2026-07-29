export const ROUTES = {
  home: '/',
  work: '/work',
  blog: '/blog',
  about: '/about',
  contact: '/contact',
  retroLines: '/apps/retro-lines',
  feed: '/feed.xml',
  llms: '/llms.txt',
} as const;

export const PRIMARY_NAV_ITEMS = [
  { href: ROUTES.home, label: 'Home' },
  { href: ROUTES.work, label: 'Work' },
  { href: ROUTES.blog, label: 'Blog' },
  { href: ROUTES.about, label: 'About' },
  { href: ROUTES.contact, label: 'Contact' },
] as const;
