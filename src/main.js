import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './scss/styles.scss'
import App from './App.vue'
import Dotenv from 'dotenv'
import { createRouter, createWebHistory } from 'vue-router'
import routes from '@/routes'

const router = createRouter({
    history: createWebHistory(),
    routes, 
});
const pinia = createPinia();
const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount('#app')
