import { createApp } from 'vue'
import './scss/styles.scss'
import App from './App.vue'
import Dotenv from 'dotenv'
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from '@/routes'

const router = createRouter({
    history: createWebHashHistory(),
    routes, 
});
const app = createApp(App);
app.use(router);
app.mount('#app')
