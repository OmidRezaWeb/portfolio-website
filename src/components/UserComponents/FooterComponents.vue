<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
<template>
   <footer class="border-t border-text mt-20 p-3">
      <div
         class="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mt-5 max-w-5xl m-auto"
      >
         <div class="flex flex-col gap-3">
            <div class="">
               <span class="flex gap-2 items-center">
                  <img src="@/assets/img/icon/logo.png" alt="logo" />
                  <p class="text-xl font-bold text-amber-50">
                     {{ t('home.menuName') }}
                  </p>
               </span>
            </div>
            <div class="">
               <p>{{ t('home.FooterDescrption') }}</p>
            </div>
         </div>
         <div class="flex flex-col gap-3">
            <h4 class="font-medium text-xl">{{ t('home.FooterMedia') }}</h4>
            <span class="flex gap-2">
               <a
                  href="https://www.linkedin.com/in/omidreza-shahbazi-133532345/"
               >
                  <img src="@/assets/img/icon/Linkedin.png" alt="Linkedin" />
               </a>

               <a href="https://www.figma.com/@omidreza3">
                  <img src="@/assets/img/icon/Figma.png" alt="Figma" />
               </a>

               <a href="https://github.com/OmidRezaWeb">
                  <img src="@/assets/img/icon/Github.png" alt="Github" />
               </a>
            </span>
         </div>
      </div>
      <div class="flex items-center justify-center">
         <p>{{ t('home.FooterLisense') }}</p>
      </div>
   </footer>
</template>
