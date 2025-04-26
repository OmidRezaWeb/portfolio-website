<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
<template>
   <main class="p-3 max-w-5xl m-auto">
      <header class="about">
         <h1 class="font-bold text-3xl">
            <span class="text-primery">/</span>{{ t('home.project') }}
         </h1>
         <p class="my-4">{{ t('home.projectList') }}</p>

         <section class="my-20">
            <h2 class="font-bold text-3xl my-5">
               <span class="text-primery">#</span
               >{{ t('home.projectComplete') }}
            </h2>

            <ul class="flex flex-col md:flex-row gap-3">
               <li class="cart mt-5 md:w-1/2">
                  <div class="border border-text flex flex-col gap-3">
                     <img src="/src/assets/img/gallery/portfolio.png" alt="" />
                     <h3 class="border-b pb-2 ps-2 text-center">
                        {{ t('home.prpjectMainTechnology1') }}
                     </h3>
                     <div class="p-3">
                        <h3 class="font-medium text-xl mb-4 text-center">
                           {{ t('home.prpjectMainTitel1') }}
                        </h3>
                        <p class="text-center">
                           {{ t('home.prpjectMainDescription1') }}
                        </p>
                        <div
                           class="flex items-center justify-between gap-3 mt-5"
                        >
                           <button class="border p-2 border-primery">
                              {{ t('home.prpjectMain1Button1') }} =>
                           </button>
                           <button class="border p-2">
                              {{ t('home.prpjectMain1Button2') }} &lt; ~~ &gt;
                           </button>
                        </div>
                     </div>
                  </div>
               </li>
               <li class="cart mt-5 md:w-1/2">
                  <div class="border border-text flex flex-col gap-3">
                     <img src="/src/assets/img/gallery/portfolio.png" alt="" />
                     <h3 class="border-b pb-2 ps-2 text-center">
                        {{ t('home.prpjectMainTechnology1') }}
                     </h3>
                     <div class="p-3">
                        <h3 class="font-medium text-xl mb-4 text-center">
                           {{ t('home.prpjectMainTitel1') }}
                        </h3>
                        <p class="text-center">
                           {{ t('home.prpjectMainDescription1') }}
                        </p>
                        <div
                           class="flex items-center justify-between gap-3 mt-5"
                        >
                           <button class="border p-2 border-primery">
                              {{ t('home.prpjectMain1Button1') }} =>
                           </button>
                           <button class="border p-2">
                              {{ t('home.prpjectMain1Button2') }} &lt; ~~ &gt;
                           </button>
                        </div>
                     </div>
                  </div>
               </li>
            </ul>
         </section>

         <section class="mt-30">
            <h2 class="font-bold text-3xl my-5">
               <span class="text-primery">#</span
               >{{ t('home.projectSmallApp') }}
            </h2>

            <ul class="flex flex-col flex-wrap md:flex-row items-center justify-between">
               <li class="cart mt-5 md:w-[48%] lg:w-[32%]">
                  <div class="border border-text flex flex-col gap-3">
                     <img src="/src/assets/img/gallery/portfolio.png" alt="" />
                     <h3 class="border-b pb-2 ps-2 text-center">
                        {{ t('home.prpjectMainTechnology1') }}
                     </h3>
                     <div class="p-3">
                        <h3 class="font-medium text-xl mb-4 text-center">
                           {{ t('home.prpjectMainTitel1') }}
                        </h3>
                        <p class="text-center">
                           {{ t('home.prpjectMainDescription1') }}
                        </p>
                        <div
                           class="flex items-center justify-between gap-3 mt-5"
                        >
                           <button class="border p-2 border-primery">
                              {{ t('home.prpjectMain1Button1') }} =>
                           </button>
                           <button class="border p-2">
                              {{ t('home.prpjectMain1Button2') }} &lt; ~~ &gt;
                           </button>
                        </div>
                     </div>
                  </div>
               </li>
               <li class="cart mt-5 md:w-[48%] lg:w-[32%]">
                  <div class="border border-text flex flex-col gap-3">
                     <img src="/src/assets/img/gallery/portfolio.png" alt="" />
                     <h3 class="border-b pb-2 ps-2 text-center">
                        {{ t('home.prpjectMainTechnology1') }}
                     </h3>
                     <div class="p-3">
                        <h3 class="font-medium text-xl mb-4 text-center">
                           {{ t('home.prpjectMainTitel1') }}
                        </h3>
                        <p class="text-center">
                           {{ t('home.prpjectMainDescription1') }}
                        </p>
                        <div
                           class="flex items-center justify-between gap-3 mt-5"
                        >
                           <button class="border p-2 border-primery">
                              {{ t('home.prpjectMain1Button1') }} =>
                           </button>
                           <button class="border p-2">
                              {{ t('home.prpjectMain1Button2') }} &lt; ~~ &gt;
                           </button>
                        </div>
                     </div>
                  </div>
               </li>
               <li class="cart mt-5 md:w-[48%] lg:w-[32%]">
                  <div class="border border-text flex flex-col gap-3">
                     <img src="/src/assets/img/gallery/portfolio.png" alt="" />
                     <h3 class="border-b pb-2 ps-2 text-center">
                        {{ t('home.prpjectMainTechnology1') }}
                     </h3>
                     <div class="p-3">
                        <h3 class="font-medium text-xl mb-4 text-center">
                           {{ t('home.prpjectMainTitel1') }}
                        </h3>
                        <p class="text-center">
                           {{ t('home.prpjectMainDescription1') }}
                        </p>
                        <div
                           class="flex items-center justify-between gap-3 mt-5"
                        >
                           <button class="border p-2 border-primery">
                              {{ t('home.prpjectMain1Button1') }} =>
                           </button>
                           <button class="border p-2">
                              {{ t('home.prpjectMain1Button2') }} &lt; ~~ &gt;
                           </button>
                        </div>
                     </div>
                  </div>
               </li>
               <li class="cart mt-5 md:w-[48%] lg:w-[32%]">
                  <div class="border border-text flex flex-col gap-3">
                     <img src="/src/assets/img/gallery/portfolio.png" alt="" />
                     <h3 class="border-b pb-2 ps-2 text-center">
                        {{ t('home.prpjectMainTechnology1') }}
                     </h3>
                     <div class="p-3">
                        <h3 class="font-medium text-xl mb-4 text-center">
                           {{ t('home.prpjectMainTitel1') }}
                        </h3>
                        <p class="text-center">
                           {{ t('home.prpjectMainDescription1') }}
                        </p>
                        <div
                           class="flex items-center justify-between gap-3 mt-5"
                        >
                           <button class="border p-2 border-primery">
                              {{ t('home.prpjectMain1Button1') }} =>
                           </button>
                           <button class="border p-2">
                              {{ t('home.prpjectMain1Button2') }} &lt; ~~ &gt;
                           </button>
                        </div>
                     </div>
                  </div>
               </li>
            </ul>
         </section>
      </header>
   </main>
</template>
