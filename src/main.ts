import './assets/css/base.css'
import './assets/css/easy-table.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { OhVueIcon } from 'oh-vue-icons'

import Vue3EasyDataTable from 'vue3-easy-data-table'
import 'vue3-easy-data-table/dist/style.css'

import ElementPlus from 'element-plus'
import './assets/css/element-variable.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())

app.component('v-icon', OhVueIcon)

app.component('EasyDataTable', Vue3EasyDataTable)

app.use(router)

app.use(ElementPlus)

app.mount('#app')
