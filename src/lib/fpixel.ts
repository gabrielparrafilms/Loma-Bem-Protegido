type FbqPrimitive = string | number | boolean;
type FbqData = Record<string, FbqPrimitive | FbqPrimitive[]>;

declare global {
  interface Window {
    fbq: (action: string, event: string, data?: FbqData) => void;
  }
}

// Função auxiliar para limpar objetos (remove null/undefined) e garantir tipos primitivos
const cleanData = (data: Record<string, unknown>): FbqData => {
  const cleaned: FbqData = {};
  Object.keys(data).forEach((key) => {
    const value = data[key];
    if (value !== null && value !== undefined && value !== '') {
      // O Pixel prefere strings e números. Objetos e arrays podem causar problemas e serem ignorados.
      if (typeof value === 'object') {
        try {
            // Converte objetos/arrays para string para garantir que sejam enviados
            cleaned[key] = JSON.stringify(value);
        } catch {
            cleaned[key] = String(value);
        }
      } else if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
        cleaned[key] = value;
      }
    }
  });
  return cleaned;
};

export const pageview = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView');
  }
};

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const event = (name: string, options = {}) => {
  if (typeof window !== 'undefined' && window.fbq) {
    const safeOptions = cleanData(options);
    window.fbq('track', name, safeOptions);
  }
};

// Evento Customizado para Etapas do Funil
export const trackStep = (stepName: string, data = {}) => {
  if (typeof window !== 'undefined' && window.fbq) {
    const safeData = cleanData({
      step_name: stepName,
      ...data
    });

    // Cada etapa dispara um evento único para permitir segmentação no Meta Ads
    const eventName = `QuotationStep_${stepName}`;
    window.fbq('trackCustom', eventName, safeData);
  }
};
