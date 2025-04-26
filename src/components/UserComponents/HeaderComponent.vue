<script setup>
import { useLanguageStore } from '@/stores/language'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const languageStore = useLanguageStore()
const { t, locale } = useI18n()

const language = computed({
   get: () => languageStore.currentLanguage,
   set: (value) => {
      languageStore.setLanguage(value)
      locale.value = value
   },
})
</script>
<template>
   <header class="flex items-center justify-between p-3 max-w-5xl m-auto">
      <router-link
         :to="{ name: 'home' }"
         class="logo flex items-center justify-center"
      >
         <img src="@/assets/img/icon/logo.png" alt="" />
         <span class="font-bold text-2xl text-text px-2">{{
            t('home.menuName')
         }}</span>
      </router-link>
      <!-- menu -->
      <div class="flex items-center">
         <!-- check box for open close menu -->
         <input type="checkbox" id="menu-toggle" class="peer hidden" />
         <!-- menu button -->
         <label for="menu-toggle" class="cursor-pointer md:hidden block">
            <div class="w-6 h-0.5 bg-text my-2"></div>
            <div class="w-4 h-0.5 bg-text my-2"></div>
         </label>
         <!-- menu content -->
         <nav
            class="peer-checked:block hidden md:flex md:static md:bg-transparent bg-white absolute top-17 right-0 w-full md:w-auto shadow-md md:shadow-none rounded-md p-4 md:p-0 z-50"
         >
            <ul class="space-y-2 md:flex md:gap-5 md:items-center md:space-y-0">
               <li>
                  <router-link
                     :to="{ name: 'home' }"
                     class="block text-gray-700 md:text-text hover:text-primery"
                     >{{ t('home.menuHome') }}</router-link
                  >
               </li>
               <li>
                  <router-link
                     :to="{ name: 'home' }"
                     class="block text-gray-700 md:text-text hover:text-primery"
                     >{{ t('home.menuWorks') }}</router-link
                  >
               </li>
               <li>
                  <router-link
                     :to="{ name: 'about' }"
                     class="block text-gray-700 md:text-text hover:text-primery"
                     >{{ t('home.menuAbout') }}</router-link
                  >
               </li>
               <li>
                  <router-link
                     :to="{ name: 'contact' }"
                     class="block text-gray-700 md:text-text hover:text-primery"
                     >{{ t('home.menuContacts') }}</router-link
                  >
               </li>
               <!-- language select -->
               <li>
                  <select
                     name="lang"
                     id="lang"
                     class="bg-transparent text-black md:text-text border border-none px-3 py-2 rounded-md focus:outline-none"
                     v-model="language"
                  >
                     <option value="en" class="bg-bg text-white">EN</option>
                     <option value="fa" class="bg-bg text-white">FA</option>
                  </select>
               </li>
            </ul>
         </nav>
      </div>
   </header>
</template>
