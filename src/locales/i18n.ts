import { i18n } from '@lingui/core';
import { en, ru } from 'make-plural/plurals'

export const LOCALES = {
  en: "English",
  ru: "Русский",
};

export const DEFAULT_LOCALE = "en";

i18n.loadLocaleData({
  en: { plurals: en },
  ru: { plurals: ru },
});

export function dynamicActivate(locale: string = DEFAULT_LOCALE) {
  import(`./messages/${locale}.ts`).then(({ messages }) => {
    i18n.load(locale, messages);
    i18n.activate(locale);
  });
}
