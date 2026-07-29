'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { GA_MEASUREMENT_ID } from '../_constants/analytics.constants';
import { getProjectSlugFromPath } from '../_utils/analytics';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

type AnalyticsParams = Record<string, string | number | boolean | undefined>;

function trackEvent(eventName: string, params: AnalyticsParams = {}) {
  if (!GA_MEASUREMENT_ID || typeof window.gtag !== 'function') {
    return;
  }

  window.gtag('event', eventName, params);
}

function buildPageLocation(pathname: string, search: string) {
  if (typeof window === 'undefined') {
    return pathname;
  }

  const path = search ? `${pathname}?${search}` : pathname;
  return new URL(path, window.location.origin).toString();
}

export function AnalyticsProvider() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const previousLocationRef = useRef<string | null>(null);
  const search = searchParams.toString();

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const trackedElement = target.closest<HTMLElement>('[data-analytics-event]');

      if (trackedElement) {
        const eventName = trackedElement.dataset.analyticsEvent;

        if (eventName) {
          trackEvent(eventName, {
            label: trackedElement.dataset.analyticsLabel,
            href: trackedElement.getAttribute('href') ?? undefined,
            page_path: window.location.pathname,
          });
        }
      }

      const anchor = target.closest<HTMLAnchorElement>('a[href]');

      if (!anchor) {
        return;
      }

      const href = anchor.getAttribute('href');

      if (!href || href.startsWith('/') || href.startsWith('#')) {
        return;
      }

      if (href.startsWith('mailto:') || href.startsWith('tel:')) {
        return;
      }

      let url: URL;

      try {
        url = new URL(anchor.href);
      } catch {
        return;
      }

      if (url.origin === window.location.origin) {
        return;
      }

      trackEvent('outbound_click', {
        link_domain: url.hostname,
        link_url: url.toString(),
        link_text: anchor.textContent?.trim() || undefined,
        page_path: window.location.pathname,
      });
    };

    document.addEventListener('click', handleDocumentClick, true);

    return () => {
      document.removeEventListener('click', handleDocumentClick, true);
    };
  }, []);

  useEffect(() => {
    const pageLocation = buildPageLocation(pathname, search);
    const pageReferrer = (previousLocationRef.current ?? document.referrer) || undefined;

    trackEvent('page_view', {
      page_location: pageLocation,
      page_path: search ? `${pathname}?${search}` : pathname,
      page_referrer: pageReferrer,
      page_title: document.title,
    });

    const projectSlug = getProjectSlugFromPath(pathname);

    if (projectSlug) {
      trackEvent('project_view', {
        project_slug: projectSlug,
        page_location: pageLocation,
        page_title: document.title,
      });
    }

    previousLocationRef.current = pageLocation;
  }, [pathname, search]);

  return null;
}
