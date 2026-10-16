import { createElement } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

/**
 * Elemento con contenido bilingüe (puede incluir HTML en es/en).
 * Sustituye al patrón `data-es` / `data-en` + `innerHTML` del HTML original.
 */
export default function Bi({ as = 'span', es, en, ...rest }) {
  const { lang } = useLanguage();
  return createElement(as, { ...rest, dangerouslySetInnerHTML: { __html: lang === 'en' ? en : es } });
}
