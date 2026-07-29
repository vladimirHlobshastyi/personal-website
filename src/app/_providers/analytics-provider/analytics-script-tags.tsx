import Script from 'next/script';
import {
  getClarityInitScript,
  getGoogleAnalyticsInitScript,
  getGoogleAnalyticsScriptSrc,
} from '../../_utils/analytics-scripts';

export function AnalyticsScriptTags() {
  const googleAnalyticsScriptSrc = getGoogleAnalyticsScriptSrc();
  const googleAnalyticsInitScript = getGoogleAnalyticsInitScript();
  const clarityInitScript = getClarityInitScript();

  return (
    <>
      {googleAnalyticsScriptSrc && googleAnalyticsInitScript ? (
        <>
          <Script src={googleAnalyticsScriptSrc} strategy="afterInteractive" />
          <Script id="google-analytics" strategy="afterInteractive">
            {googleAnalyticsInitScript}
          </Script>
        </>
      ) : null}

      {clarityInitScript ? (
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {clarityInitScript}
        </Script>
      ) : null}
    </>
  );
}
