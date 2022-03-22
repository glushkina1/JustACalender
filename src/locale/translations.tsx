import LocalizedStrings from 'react-native-localization'
import english from './en'
import russian from './ru'

const DEFAULT_LANGUAGE = 'en';

const translations = new LocalizedStrings({
  en: english,
  rus: russian,
})

export { translations, DEFAULT_LANGUAGE }
