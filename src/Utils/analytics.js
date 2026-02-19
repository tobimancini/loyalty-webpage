/**
 * Envia un evento a Google Analytics 4.
 * Si gtag no esta disponible (ej: GA no configurado), no hace nada.
 */
export const trackEvent = (eventName, params = {}) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
};
