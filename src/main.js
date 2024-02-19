import { createApp } from 'vue';
import { createPinia } from 'pinia';
import vue3GoogleLogin from 'vue3-google-login';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import routes from '@/routes';
import './scss/styles.scss';

const router = createRouter({
    history: createWebHistory(),
    routes, 
});
const pinia = createPinia();
const app = createApp(App);
app.use(vue3GoogleLogin, {
    clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID
})
app.use(router);
app.use(pinia);
app.mount('#app')
