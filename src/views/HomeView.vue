<script setup>
import { useI18n } from 'vue-i18n'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

const { t } = useI18n()

// Swiper
const onSwiper = (swiper) => {
   console.log(swiper)
}
const onSlideChange = () => {
   console.log('slide change')
}

const sliderBreakpoints = {
   0: {
      slidesPerView: 1.2,
      spaceBetween: 10,
   },
   640: {
      slidesPerView: 2.2,
      spaceBetween: 20,
   },
   1024: {
      slidesPerView: 3,
      spaceBetween: 40,
   },
}
</script>

<template>
   <main class="p-3 max-w-5xl m-auto">
      <!-- hero section -->
      <section class="sm:flex items-center">
         <div class="md:w-1/2">
            <h2 class="text-3xl font-semibold">
               <i18n-t keypath="home.heroTitle">
                  <template #designer
                     ><span class="text-primery">{{
                        t('home.webDesigner')
                     }}</span></template
                  >
                  <template #developer
                     ><span class="text-primery">{{
                        $t('home.frontEndDeveloper')
                     }}</span></template
                  >
               </i18n-t>
            </h2>
            <p class="text-base text-amber-50/50">
               {{ t('home.heroSubTitle') }}
            </p>
            <router-link
               :to="{ name: 'contact' }"
               class="border border-primery inline-block p-3 mt-5"
            >
               {{ t('home.heroButton') }}
            </router-link>
         </div>
         <div class="mt-10 lg:w-1/2">
            <div class="relative">
               <div class="absolute z-0">
                  <img src="@/assets/img/icon/Logoline.png" alt="logo" />
               </div>
               <div class="relative z-20">
                  <img
                     class="z-20"
                     src="@/assets/img/icon/hero.png"
                     alt="hero"
                  />
               </div>
            </div>
            <div class="flex gap-3 items-center border border-amber-50/50 p-3">
               <div class="min-w-5 h-5 bg-primery"></div>
               <p class="m-auto">
                  <i18n-t keypath="home.heroUnderProject">
                     <template #portfolio
                        ><strong>{{ t('home.portfolio') }}</strong></template
                     >
                  </i18n-t>
               </p>
            </div>
         </div>
      </section>
      <!-- quotation -->
      <section class="w-4xl my-44 hidden lg:block">
         <div class="border p-3 text-2xl flex justify-center relative">
            <p class="my-3">{{ t('home.quotation') }}</p>
            <div class="bg-bg p-3 absolute start-10 -top-7">
               <img
                  src="@/assets/img/icon/quotation.png"
                  alt="quotation"
                  class="w-7 h-6"
               />
            </div>
            <div class="bg-bg p-3 absolute end-10 -bottom-7">
               <img
                  src="@/assets/img/icon/quotation.png"
                  alt="quotation"
                  class="w-7 h-6"
               />
            </div>
         </div>

         <div class="border p-3 w-40 text-xl flex justify-center float-end">
            <span class="my-3">{{ t('home.quotationAuthor') }}</span>
         </div>
      </section>
      <!-- projects -->
      <article class="my-20">
         <div class="title flex items-center justify-between my-10">
            <h3 class="font-semibold text-3xl">
               <span class="text-primery">#</span>{{ t('home.project') }}
            </h3>
            <div class="line bg-primery h-0.5 md:w-3/5"></div>
            <span
               ><a href=""
                  >{{ t('home.projectView') }}
                  <span class="text-primery">~~></span></a
               ></span
            >
         </div>

         <swiper
            dir="rtl"
            :space-between="50"
            :breakpoints="sliderBreakpoints"
            :pagination="{ clickable: true }"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
         >
            <swiper-slide class="cart mt-5">
               <div class="border border-text flex flex-col gap-3">
                  <img src="@/assets/img/gallery/Rectangle 22.jpg" alt="" />
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
                     <div class="flex items-center justify-between gap-3 mt-5">
                        <button class="border p-2 border-primery">
                           {{ t('home.prpjectMain1Button1') }} =>
                        </button>
                        <button class="border p-2">
                           {{ t('home.prpjectMain1Button2') }} &lt; ~~ &gt;
                        </button>
                     </div>
                  </div>
               </div>
            </swiper-slide>

            <swiper-slide class="cart mt-5">
               <div class="border border-text flex flex-col gap-3">
                  <img src="@/assets/img/gallery/Rectangle 22.jpg" alt="" />
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
                     <div class="flex items-center justify-between gap-3 mt-5">
                        <button class="border p-2 border-primery">
                           {{ t('home.prpjectMain1Button1') }} =>
                        </button>
                        <button class="border p-2">
                           {{ t('home.prpjectMain1Button2') }} &lt; ~~ &gt;
                        </button>
                     </div>
                  </div>
               </div>
            </swiper-slide>

            <swiper-slide class="cart mt-5">
               <div class="border border-text flex flex-col gap-3">
                  <img src="@/assets/img/gallery/Rectangle 22.jpg" alt="" />
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
                     <div class="flex items-center justify-between gap-3 mt-5">
                        <button class="border p-2 border-primery">
                           {{ t('home.prpjectMain1Button1') }} =>
                        </button>
                        <button class="border p-2">
                           {{ t('home.prpjectMain1Button2') }} &lt; ~~ &gt;
                        </button>
                     </div>
                  </div>
               </div>
            </swiper-slide>
         </swiper>
      </article>
      <!-- skills -->
      <section class="">
         <div class="flex items-center gap-2 my-5">
            <h3 class="text-3xl">
               <span class="text-primery">#</span>{{ t('home.Skills') }}
            </h3>
            <div class="w-50 h-0.5 bg-primery"></div>
         </div>
         <div class="md:flex gap-5">
            <div class="relative w-full h-96">
               <div class="w-25 h-25 border border-text absolute start-5"></div>
               <div
                  class="w-20 h-25 bg-text absolute start-4 md:start-20 top-40"
               ></div>
               <div class="flex flex-col gap-3 absolute end-40">
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
                  class="absolute end-0 top-40"
               />
            </div>
            <div class="flex flex-wrap gap-5">
               <div class="border border-text w-5/10 h-36 md:h-30">
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
               <div class="border border-text w-3/10 lg:w-2/5 h-32 md:h-30">
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
            </div>
         </div>
      </section>
      <!-- About me -->
      <section class="my-20">
         <div class="flex items-center gap-2 my-5">
            <h3 class="text-3xl">
               <span class="text-primery">#</span>{{ t('home.AboutMe') }}
            </h3>
            <div class="w-30 lg:w-80 h-0.5 bg-primery"></div>
         </div>

         <div class="md:flex gap-10 justify-between">
            <div class="md:w-1/2">
               <p class="my-3">{{ t('home.AboutMeDescriptionOne') }}</p>

               <p class="my-3">
                  {{ t('home.AboutMeDescriptionTow') }}
               </p>

               <p class="my-3 mb-10">
                  {{ t('home.AboutMeDescriptionThree') }}
               </p>

               <router-link
                  :to="{ name: 'about' }"
                  class="border border-text p-2 cursor-pointer"
               >
                  {{ t('home.AboutMeBtn') }}
               </router-link>
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
         </div>
      </section>
      <!-- contacts -->
      <section>
         <div class="flex items-center gap-2 my-5">
            <h3 class="text-3xl">
               <span class="text-primery">#</span>{{ t('home.Contacts') }}
            </h3>
            <div class="w-50 lg:w-96 h-0.5 bg-primery"></div>
         </div>
         <div class="flex flex-col md:flex-row gap-10 mt-5">
            <div class="">
               <p>
                  {{ t('home.ContactsDescription') }}
               </p>
            </div>
            <div class="">
               <div class="p-3 border border-text md:w-100">
                  <h4 class="font-medium text-xl">
                     {{ t('home.ContactsMessage') }}
                  </h4>
                  <span class="flex gap-2 items-center my-3">
                     <img src="@/assets/img/icon/Telegram.png" alt="" />
                     <p>@{{ t('home.AllMdiaTelegram') }}</p>
                  </span>

                  <span class="flex gap-2 items-center my-3 flex-wrap">
                     <img src="@/assets/img/icon/Email.png" alt="" />
                     <p>{{ t('home.AllMdiaEmail') }}@gmail.com</p>
                  </span>

                  <span class="flex gap-2 items-center my-3">
                     <img src="@/assets/img/icon/Discord.png" alt="" />
                     <p>{{ t('home.AllMdiaDiscord') }}#6325</p>
                  </span>
               </div>
            </div>
         </div>
      </section>
   </main>
</template>
