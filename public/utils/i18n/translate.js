import en from "../locales/en";
import kz from "../locales/kz";
import ru from "../locales/ru";
const translations = {
  en,
  kz,
  ru,
};

const translate =
  (lang = "en") =>
  (token) => {
    let value;

    try {
      value = translations[lang][token];
    } catch {
      console.error("Translation error: lang and token", lang, token);
    }

    return value;
  };

export default translate;
