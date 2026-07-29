import {
  ANALYTICS_PROJECT_ROUTE_DEPTH,
  ANALYTICS_PROJECT_ROUTE_PREFIX,
} from '../_constants/analytics.constants';

export function isProjectPath(pathname: string) {
  return (
    pathname.startsWith(ANALYTICS_PROJECT_ROUTE_PREFIX) &&
    pathname.split('/').filter(Boolean).length === ANALYTICS_PROJECT_ROUTE_DEPTH
  );
}

export function getProjectSlugFromPath(pathname: string) {
  if (!isProjectPath(pathname)) {
    return null;
  }

  return pathname.split('/')[2] ?? null;
}
