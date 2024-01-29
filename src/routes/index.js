import Home from '@/components/BarberApp/Home.vue';
import Services from '@/components/BarberApp/Services.vue';
import Summary from '@/components/BarberApp/Summary.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/services',
        name: 'Services',
        component: Services
    },
    {
        path: '/summary',
        name: 'Summary',
        component: Summary
    },
];

export default routes;