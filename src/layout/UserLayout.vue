<script setup>
// Tools
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { useLanguageStore } from '@/stores/language'
// Components
import HeaderComponents from '@/components/UserComponents/HeaderComponent.vue'
import FigureComponents from '@/components/UserComponents/FigureComponents.vue'
import FooterComponents from '@/components/UserComponents/FooterComponents.vue'

const languageStore = useLanguageStore()

onMounted(() => {
   languageStore.setLanguage(languageStore.currentLanguage)
})
</script>

<template>
   <HeaderComponents></HeaderComponents>
   <RouterView />
   <FooterComponents></FooterComponents>
   <FigureComponents></FigureComponents>
</template>
