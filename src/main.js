// #TODO 0: Commit dan push hanya setiap ToDo yang selesai satu persatu
// Tidak boleh langsung commit dari Todo 1-selesai

// #TODO 1: Pastikan sudah membuat branch baru
// lalu push dengan menambahkah 1 file .txt baru
// isinya bebas

import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
