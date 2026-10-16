import { useLanguage } from '../i18n/LanguageContext';

export default function LanguageSelector() {
  const { lang, setLang } = useLanguage();
  return (
    <select
      id="lang-selector"
      value={lang}
      onChange={(e) => setLang(e.target.value)}
      style={{ position: 'absolute', top: 10, right: 10, zIndex: 2000, padding: 5 }}
    >
      <option value="es">Español</option>
      <option value="en">English</option>
    </select>
  );
}
