import './assets/main.css'

import { createApp } from 'vue'
// state managements
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// for tow language
import i18n from './i18n'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
