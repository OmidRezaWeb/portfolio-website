import { createI18n } from 'vue-i18n'

// Import language modules
import homeFa from '@/i18n/Language/Fa/home'
import homeEn from '@/i18n/Language/En/home'

// Supported languages
const supportedLocales = ['fa', 'en']

// Try to get saved language from localStorage
const savedLocale = localStorage.getItem('language')

// Fallback to browser language if saved one is invalid or not present
const browserLocale = navigator.language.split('-')[0]
const defaultLocale = supportedLocales.includes(savedLocale)
   ? savedLocale
   : supportedLocales.includes(browserLocale)
     ? browserLocale
     : 'en'

// Set up messages
const messages = {
   fa: {
      home: homeFa,
      // Add more modules here like about: aboutFa, etc.
   },
   en: {
      home: homeEn,
      // Add more modules here like about: aboutEn, etc.
   },
}

// Create i18n instance
const i18n = createI18n({
   legacy: false,
   locale: defaultLocale,
   fallbackLocale: 'fa',
   messages,
})

// Save the chosen locale so it's remembered next time
localStorage.setItem('language', defaultLocale)

export default i18n
