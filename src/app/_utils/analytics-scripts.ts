import { CLARITY_PROJECT_ID, GA_MEASUREMENT_ID } from '../_constants/analytics.constants';

export function getGoogleAnalyticsScriptSrc() {
  if (!GA_MEASUREMENT_ID) {
    return null;
  }

  return `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
}

export function getGoogleAnalyticsInitScript() {
  if (!GA_MEASUREMENT_ID) {
    return null;
  }

  return `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false });
  `;
}

export function getClarityInitScript() {
  if (!CLARITY_PROJECT_ID) {
    return null;
  }

  return `
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");
  `;
}
