import { language } from '@/settings';

const config = {
  defaultLanguage: language,
  options: [
    {
      languageId: 'english',
      locale: 'en',
      text: 'English',
      icon: '/images/flag/uk.svg',
    },
    {
      languageId: 'chinese',
      locale: 'zh',
      text: 'Chinese',
      icon: '/images/flag/china.svg',
    },
    {
      languageId: 'spanish',
      locale: 'es',
      text: 'Spanish',
      icon: '/images/flag/spain.svg',
    },
    {
      languageId: 'french',
      locale: 'fr',
      text: 'French',
      icon: '/images/flag/france.svg',
    },
    {
      languageId: 'italian',
      locale: 'it',
      text: 'Italian',
      icon: '/images/flag/italy.svg',
    },
  ],
};

export function getCurrentLanguage(lang) {
  let selecetedLanguage = config.options[0];
  config.options.forEach(language => {
    if (language.languageId === lang) {
      selecetedLanguage = language;
    }
  });
  return selecetedLanguage;
}
export default config;
