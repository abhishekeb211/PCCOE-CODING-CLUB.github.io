/* Google Analytics bootstrap — loaded as external script so CSP can omit script-src 'unsafe-inline'. */
window.dataLayer = window.dataLayer || [];
function gtag() {
  window.dataLayer.push(arguments);
}
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';
const gaIdValid =
  GA_MEASUREMENT_ID &&
  GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX' &&
  /^G-[A-Z0-9]+$/.test(GA_MEASUREMENT_ID);

function loadAnalytics() {
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_MEASUREMENT_ID;
  script.onload = function () {
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID);
  };
  document.head.appendChild(script);
}

if (gaIdValid) {
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(loadAnalytics, { timeout: 2000 });
  } else {
    window.addEventListener('load', loadAnalytics, { once: true });
  }
}
