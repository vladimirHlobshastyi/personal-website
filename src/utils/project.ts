import { projects } from '@/constants/projects.data';
import type { Project } from '@/types';

// Platform label shown as a badge on each work card (top-right).
const PLATFORM_BY_SLUG: Record<string, string> = {
  'clinical-education-platform': 'Web',
  'subscription-web-platform': 'Web',
  'react-native-mobile-app': 'Mobile',
  'e-commerce-web-platform': 'Web',
  'mental-health-mobile-app': 'Mobile',
  'social-network-mobile-app': 'Mobile',
  'saas-admin-dashboard': 'Web',
  'logistics-management-platform': 'Web',
  'real-estate-platform': 'Web',
  'enterprise-management-platform': 'Web + Mobile',
  'real-time-chat-application': 'Web (PWA)',
};

export function getProjectPlatform(slug: string) {
  return PLATFORM_BY_SLUG[slug] ?? 'Web';
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectPreviewPath(slug: string) {
  return getProjectBySlug(slug)?.cover ?? '';
}

export function hasProjectRealScreenshots(project: Pick<Project, 'images'>) {
  return project.images.length > 0;
}

export function getProjectShowcaseImages(project: Pick<Project, 'cover' | 'images'>) {
  const preview = project.cover;

  if (!hasProjectRealScreenshots(project)) {
    return preview ? [preview] : [];
  }

  return project.images[0] === preview ? project.images : [preview, ...project.images];
}
