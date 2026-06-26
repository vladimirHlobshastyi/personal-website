export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
export const CLARITY_PROJECT_ID = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

export function isProjectPath(pathname: string) {
  return pathname.startsWith('/work/') && pathname.split('/').filter(Boolean).length === 2;
}

export function getProjectSlugFromPath(pathname: string) {
  if (!isProjectPath(pathname)) {
    return null;
  }

  return pathname.split('/')[2] ?? null;
}
