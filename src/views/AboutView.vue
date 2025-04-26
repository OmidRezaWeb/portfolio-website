<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
   <main class="p-3 max-w-5xl m-auto">
      <header class="about">
         <h1 class="font-bold text-3xl">
            <span class="text-primery">/</span>{{ t('home.AboutMe') }}
         </h1>
         <p class="my-4">{{ t('home.WhoAmI') }}</p>
      </header>
      <!-- About me -->
      <section class="md:flex gap-10 items-center">
         <div class="md:w-1/2">
            <p class="my-3">{{ t('home.AboutMeDescriptionOne') }}</p>

            <p class="my-3">
               {{ t('home.AboutMeDescriptionTow') }}
            </p>

            <p class="my-3">
               {{ t('home.AboutMeDescriptionThree') }}
            </p>

            <button class="my-3 border border-text p-2 cursor-pointer">
               {{ t('home.AboutMeBtn') }}
            </button>
         </div>
         <div class="relative">
            <img
               src="@/assets/img/gallery/hero-2.png"
               alt=""
               class="relative z-20"
            />
            <div
               class="flex flex-col gap-3 absolute end-40 bottom-2 start-16 z-30"
            >
               <div class="flex gap-3">
                  <div class="w-0.5 h-0.5 bg-text rounded-full"></div>
                  <div class="w-0.5 h-0.5 bg-text rounded-full"></div>
                  <div class="w-0.5 h-0.5 bg-text rounded-full"></div>
                  <div class="w-0.5 h-0.5 bg-text rounded-full"></div>
                  <div class="w-0.5 h-0.5 bg-text rounded-full"></div>
               </div>
               <div class="flex gap-3">
                  <div class="w-0.5 h-0.5 bg-text rounded-full"></div>
                  <div class="w-0.5 h-0.5 bg-text rounded-full"></div>
                  <div class="w-0.5 h-0.5 bg-text rounded-full"></div>
                  <div class="w-0.5 h-0.5 bg-text rounded-full"></div>
                  <div class="w-0.5 h-0.5 bg-text rounded-full"></div>
               </div>
               <div class="flex gap-3">
                  <div class="w-0.5 h-0.5 bg-text rounded-full"></div>
                  <div class="w-0.5 h-0.5 bg-text rounded-full"></div>
                  <div class="w-0.5 h-0.5 bg-text rounded-full"></div>
                  <div class="w-0.5 h-0.5 bg-text rounded-full"></div>
                  <div class="w-0.5 h-0.5 bg-text rounded-full"></div>
               </div>
               <div class="flex gap-3">
                  <div class="w-0.5 h-0.5 bg-text rounded-full"></div>
                  <div class="w-0.5 h-0.5 bg-text rounded-full"></div>
                  <div class="w-0.5 h-0.5 bg-text rounded-full"></div>
                  <div class="w-0.5 h-0.5 bg-text rounded-full"></div>
                  <div class="w-0.5 h-0.5 bg-text rounded-full"></div>
               </div>
               <div class="flex gap-3">
                  <div class="w-0.5 h-0.5 bg-text rounded-full"></div>
                  <div class="w-0.5 h-0.5 bg-text rounded-full"></div>
                  <div class="w-0.5 h-0.5 bg-text rounded-full"></div>
                  <div class="w-0.5 h-0.5 bg-text rounded-full"></div>
                  <div class="w-0.5 h-0.5 bg-text rounded-full"></div>
               </div>
            </div>
            <img
               src="@/assets/img/icon/logo.png"
               alt=""
               class="w-40 absolute top-0"
            />
         </div>
      </section>
      <!-- skills -->
      <section class="my-50">
         <div class="flex items-center gap-2 my-5">
            <h3 class="text-3xl">
               <span class="text-primery">#</span>{{ t('home.Skills') }}
            </h3>
            <div class="w-50 h-0.5 bg-primery"></div>
         </div>
         <div class="md:flex gap-5">
            <div class="flex flex-wrap gap-5">
               <div class="border border-text w-5/10 h-32 md:h-30">
                  <h4 class="border-b text-center py-2">
                     {{ t('home.SkillsLanguage') }}
                  </h4>
                  <p class="p-2">{{ t('home.SkillsLanguageDescription') }}</p>
               </div>
               <div class="border border-text w-4/10 h-40 md:h-30">
                  <h4 class="border-b text-center py-2">
                     {{ t('home.SkillsTools') }}
                  </h4>
                  <p class="p-2">{{ t('home.SkillsToolsDescription') }}</p>
               </div>
               <div class="border border-text w-4/10 lg:w-2/5 h-28 md:h-30">
                  <h4 class="border-b text-center py-2">
                     {{ t('home.SkillsFrameworks') }}
                  </h4>
                  <p class="p-2">{{ t('home.SkillsFrameworksDescription') }}</p>
               </div>
               <div class="border border-text w-56 h-20 md:h-30">
                  <h4 class="border-b text-center py-2">
                     {{ t('home.SkillsOther') }}
                  </h4>
                  <p class="p-2">{{ t('home.SkillsOtherDescription') }}</p>
               </div>
               <div class="border border-text w-1/1 md:w-1/5 h-20 md:h-30">
                  <h4 class="border-b text-center py-2">
                     {{ t('home.SkillsDatabases') }}
                  </h4>
                  <p class="p-2">{{ t('home.SkillsDatabasesDescription') }}</p>
               </div>
            </div>
         </div>
      </section>
      <!-- fun facts -->
      <section class="">
         <div class="flex items-center gap-2 my-5">
            <h3 class="text-3xl">
               <span class="text-primery">#</span>{{ t('home.FunFacuts') }}
            </h3>
            <div class="w-50 h-0.5 bg-primery"></div>
         </div>
         <div class="flex flex-col md:flex-row gap-5">
            <div class="flex flex-wrap gap-5">
               <p class="p-3 border border-text inline-block md:h-14">
                  {{ t('home.FunFacutsOne') }}
               </p>
               <p class="p-3 border border-text inline-block md:h-14">
                  {{ t('home.FunFacutsTwo') }}
               </p>
               <p class="p-3 border border-text inline-block md:h-14">
                  {{ t('home.FunFacutsThree') }}
               </p>
               <p class="p-3 border border-text inline-block md:h-14">
                  {{ t('home.FunFacutsFour') }}
               </p>
               <p class="p-3 border border-text inline-block md:h-14">
                  {{ t('home.FunFacutsFive') }}
               </p>
            </div>
            <div class="relative w-full h-96">
               <div class="flex flex-col gap-3 absolute end-60 top-30">
                  <div class="flex gap-3">
                     <div class="w-0.5 h-0.5 bg-text rounded-full"></div>
                     <div class="w-0.5 h-0.5 bg-text rounded-full"></div>
                     <div class="w-0.5 h-0.5 bg-text rounded-full"></div>
                     <div class="w-0.5 h-0.5 bg-text rounded-full"></div>
                     <div class="w-0.5 h-0.5 bg-text rounded-full"></div>
                  </div>
                  <div class="flex gap-3">
                     <div class="w-0.5 h-0.5 bg-text rounded-full"></div>
                     <div class="w-0.5 h-0.5 bg-text rounded-full"></div>
                     <div class="w-0.5 h-0.5 bg-text rounded-full"></div>
                     <div class="w-0.5 h-0.5 bg-text rounded-full"></div>
                     <div class="w-0.5 h-0.5 bg-text rounded-full"></div>
                  </div>
                  <div class="flex gap-3">
                     <div class="w-0.5 h-0.5 bg-text rounded-full"></div>
                     <div class="w-0.5 h-0.5 bg-text rounded-full"></div>
                     <div class="w-0.5 h-0.5 bg-text rounded-full"></div>
                     <div class="w-0.5 h-0.5 bg-text rounded-full"></div>
                     <div class="w-0.5 h-0.5 bg-text rounded-full"></div>
                  </div>
                  <div class="flex gap-3">
                     <div class="w-0.5 h-0.5 bg-text rounded-full"></div>
                     <div class="w-0.5 h-0.5 bg-text rounded-full"></div>
                     <div class="w-0.5 h-0.5 bg-text rounded-full"></div>
                     <div class="w-0.5 h-0.5 bg-text rounded-full"></div>
                     <div class="w-0.5 h-0.5 bg-text rounded-full"></div>
                  </div>
                  <div class="flex gap-3">
                     <div class="w-0.5 h-0.5 bg-text rounded-full"></div>
                     <div class="w-0.5 h-0.5 bg-text rounded-full"></div>
                     <div class="w-0.5 h-0.5 bg-text rounded-full"></div>
                     <div class="w-0.5 h-0.5 bg-text rounded-full"></div>
                     <div class="w-0.5 h-0.5 bg-text rounded-full"></div>
                  </div>
               </div>
               <img
                  src="@/assets/img/icon/Logoline.png"
                  alt="logo"
                  class="absolute end-20 top-40"
               />
            </div>
         </div>
      </section>
   </main>
</template>
