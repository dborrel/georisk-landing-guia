import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { messages } from './messages';

const STORAGE_KEY = 'lang'; // misma clave que la app original
const SUPPORTED = ['es', 'en'];

const LanguageContext = createContext(null);

const readStoredLang = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return SUPPORTED.includes(stored) ? stored : 'es';
};

const interpolate = (text, params) =>
  params ? text.replace(/\{(\w+)\}/g, (_, k) => (params[k] ?? `{${k}}`)) : text;

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(readStoredLang);

  const setLang = useCallback((next) => {
    if (!SUPPORTED.includes(next)) return;
    localStorage.setItem(STORAGE_KEY, next);
    setLangState(next);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  /**
   * t('clave', { param })  → busca en el diccionario
   * t({ es: '…', en: '…' }) → texto inline
   */
  const t = useCallback(
    (keyOrMap, params) => {
      if (keyOrMap && typeof keyOrMap === 'object') {
        return interpolate(keyOrMap[lang] ?? keyOrMap.en ?? keyOrMap.es ?? '', params);
      }
      const text = messages[lang]?.[keyOrMap] ?? messages.es[keyOrMap] ?? keyOrMap;
      return interpolate(text, params);
    },
    [lang],
  );

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage debe usarse dentro de <LanguageProvider>');
  return ctx;
}
