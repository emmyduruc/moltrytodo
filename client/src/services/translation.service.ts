import * as Localization from "expo-localization";
import { I18n, Scope } from "i18n-js";
import { translations } from "../../localization";

const i18n = new I18n(translations);
i18n.enableFallback = true;
i18n.locale = Localization.locale;
i18n.defaultLocale = "de";

export const translate = (key: string, options?: any) => {
  return i18n.t(key as any, options);
};

export const changeLanguage = (language: string) => {
  i18n.locale = language;
};

export const getLanguage = () => i18n.locale;
export const getLanguages = () =>
  i18n.translations ? Object.keys(i18n.translations) : [];
i18n.locale = Localization.locale;
export const localization = Localization.locale;
export const getTranslations = () => i18n.translations;
export const getScope = (scope: Scope, options?: any) => i18n.t(scope, options);
export const getScopeWithDefault = (
  scope: Scope,
  defaultValue: string,
  options?: any
) => i18n.t(scope, { defaultValue, ...options });

export type Translate = typeof translate;
