import { useRouter } from "next/router";
import translate from "public/utils/i18n/translate";
export const useLocale = () => {
  const { locale, defaultLocale } = useRouter();
  const t = translate(locale);

  return { locale, defaultLocale, t };
};
