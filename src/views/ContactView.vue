<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
<template>
   <main class="p-3 max-w-5xl m-auto">
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
               <div class="p-3 border border-text md:w-80">
                  <h4 class="font-medium text-xl">
                     {{ t('home.ContactsMessage') }}
                  </h4>
                  <span class="flex gap-2 items-center my-3">
                     <img src="@//assets/img/icon/Telegram.png" alt="" />
                     <p v-html="t('home.ContactsTelegram')"></p>
                  </span>

                  <span class="flex gap-2 items-center my-3 flex-wrap">
                     <img src="@//assets/img/icon/Email.png" alt="" />
                     <p v-html="t('home.ContactsEmail')"></p>
                  </span>

                  <span class="flex gap-2 items-center my-3">
                     <img src="@//assets/img/icon/Discord.png" alt="" />
                     <p v-html="t('home.ContactsDiscord')"></p>
                  </span>
               </div>
            </div>
         </div>
      </section>

      <!-- media -->
      <section>
         <div class="flex items-center gap-2 my-5">
            <h3 class="text-3xl">
               <span class="text-primery">#</span>{{ t('home.Contacts') }}
            </h3>
            <div class="w-50 lg:w-96 h-0.5 bg-primery"></div>
         </div>
         <div class="">
            <span class="flex items-center gap-1">
               <img src="@//assets/img/icon/Telegram.png" alt="" />
               <p v-html="t('home.AllMdiaTelegram')"></p>
            </span>

            <span class="flex items-center gap-1">
               <img src="@//assets/img/icon/Discord.png" alt="" />
               <p v-html="t('home.AllMdiaDiscord')"></p>
            </span>

            <span class="flex items-center gap-1">
               <img src="@//assets/img/icon/Linkedin.png" alt="" />
               <p>{{ t('home.AllMdiaLinkedin') }}</p>
            </span>

            <span class="flex items-center gap-1 flex-wrap">
               <img src="@//assets/img/icon/Email.png" alt="" />
               <p v-html="t('home.AllMdiaEmail')"></p>
            </span>
         </div>
      </section>
   </main>
</template>
