import Script from "next/script";

const SILKTIDE_CSS =
  "https://cdn.jsdelivr.net/gh/silktide/consent-manager@v2.0.0/silktide-consent-manager.css";
const SILKTIDE_JS =
  "https://cdn.jsdelivr.net/gh/silktide/consent-manager@v2.0.0/silktide-consent-manager.js";

const SILKTIDE_CSS_INTEGRITY =
  "sha384-IO1E/jCrQXyH5rwcI0SXP7OXw47JFqQNDQcKhbFvqnL2IunBxxwE2Ne5XyAmCqKs";
const SILKTIDE_JS_INTEGRITY =
  "sha384-j4NIMOecmtzMWe9GJADIIe5hTlHG63aiTQ/2XorW10RNyQJg+IU+xwFVDy45wBah";

/** Consent default + Silktide CSS/JS. init() lives only in GTM (Consent Initialization). */
export function ConsentHead() {
  return (
    <>
      <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
      <Script id="gtm-consent-default" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          function stcmConsentGranted(key) {
            try { return localStorage.getItem('stcm.consent.' + key) === 'true'; } catch (e) { return false; }
          }
          function stcmHasStoredChoice() {
            try { return localStorage.getItem('stcm.hasConsented') === '1'; } catch (e) { return false; }
          }
          function stcmSignal(key) {
            if (!stcmHasStoredChoice()) return null;
            return stcmConsentGranted(key) ? 'granted' : 'denied';
          }
          var analyticsDefault = stcmSignal('analytics');
          var marketingDefault = stcmSignal('marketing');
          var shared = {
            functionality_storage: 'granted',
            security_storage: 'granted',
            wait_for_update: 500
          };
          // Resto del mondo: granted finché l'utente non sceglie (o finché Silktide non aggiorna in SEE).
          gtag('consent', 'default', Object.assign({}, shared, {
            analytics_storage: analyticsDefault !== null ? analyticsDefault : 'granted',
            ad_storage: marketingDefault !== null ? marketingDefault : 'granted',
            ad_user_data: marketingDefault !== null ? marketingDefault : 'granted',
            ad_personalization: marketingDefault !== null ? marketingDefault : 'granted'
          }));
          // SEE + UK + CH: denied finché l'utente non accetta dal banner.
          gtag('consent', 'default', Object.assign({}, shared, {
            region: ['AT','BE','BG','HR','CY','CZ','DK','EE','FI','FR','DE','GR','HU','IE','IT','LV','LT','LU','MT','NL','PL','PT','RO','SK','SI','ES','SE','IS','LI','NO','GB','CH'],
            analytics_storage: analyticsDefault !== null ? analyticsDefault : 'denied',
            ad_storage: marketingDefault !== null ? marketingDefault : 'denied',
            ad_user_data: marketingDefault !== null ? marketingDefault : 'denied',
            ad_personalization: marketingDefault !== null ? marketingDefault : 'denied'
          }));
        `}
      </Script>
      <link
        rel="stylesheet"
        id="silktide-consent-manager-css"
        href={SILKTIDE_CSS}
        integrity={SILKTIDE_CSS_INTEGRITY}
        crossOrigin="anonymous"
      />
      <style
        id="silktide-consent-manager-overrides"
        dangerouslySetInnerHTML={{
          __html: `#stcm-wrapper {
  --boxShadow: -5px 5px 10px 0px #00000012, 0px 0px 50px 0px #0000001a;
  --fontFamily: Helvetica Neue, Segoe UI, Arial, sans-serif;
  --primaryColor: #09C300;
  --backgroundColor: #ffffff;
  --textColor: #4b494b;
  --backdropBackgroundColor: #00000033;
  --backdropBackgroundBlur: 0px;
  --iconColor: #09c300;
  --iconBackgroundColor: #ffffff;
}
#stcm-wrapper .stcm-credit-link,
#stcm-wrapper .stcm-logo {
  display: none;
}`,
        }}
      />
      <Script
        id="silktide-consent-manager-js"
        src={SILKTIDE_JS}
        strategy="beforeInteractive"
        integrity={SILKTIDE_JS_INTEGRITY}
        crossOrigin="anonymous"
      />
    </>
  );
}
