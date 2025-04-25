import { defineStore } from 'pinia'

export const useLanguageStore = defineStore('language', {
   state: () => ({
      currentLanguage: localStorage.getItem('language') || 'en',
   }),
   actions: {
      setLanguage(lang) {
         this.currentLanguage = lang
         localStorage.setItem('language', lang)
         document.documentElement.lang = lang
         document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr'
      },
   },
})
