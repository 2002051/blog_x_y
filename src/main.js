import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import VueCookies from "vue3-cookies";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)  //全局注册element-plus
app.use(VueCookies)

app.mount('#app')
