import type { Project } from './project.types';

// Platform label shown as a badge on each work card (top-right).
const PLATFORM_BY_SLUG: Record<string, string> = {
  prepry: 'Web',
  fitfast: 'Web',
  'fitfast-app': 'Mobile',
  carnify: 'Web',
  claratalks: 'Mobile',
  sighapp: 'Mobile',
  miidba: 'Web',
  truckrates: 'Web',
  homefinity: 'Web',
  'clinical-logs': 'Web',
  'ciq-mobile': 'Web + Mobile',
  flychat: 'Development',
};

export function getProjectPlatform(slug: string) {
  return PLATFORM_BY_SLUG[slug] ?? 'Web';
}

export function getProjectPreviewPath(slug: string) {
  return `/images/${slug}_cover.png`;
}

export function hasProjectRealScreenshots(project: Pick<Project, 'slug' | 'images'>) {
  return project.images.length > 0;
}

export function getProjectShowcaseImages(project: Pick<Project, 'slug' | 'image' | 'images'>) {
  const preview = getProjectPreviewPath(project.slug);

  if (!hasProjectRealScreenshots(project)) {
    return [preview];
  }

  const screenshots = project.images.length > 0 ? project.images : [project.image];
  return screenshots[0] === preview ? screenshots : [preview, ...screenshots];
}
