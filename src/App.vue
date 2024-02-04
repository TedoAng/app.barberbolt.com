<script setup>
    import Navigation from '@/components/BarberApp/Navigation.vue'
    import DevNavigation from '@/components/DevNavigation.vue'
    import { onMounted } from 'vue';

    onMounted(() => {
        // console.log(import.meta.env.VITE_MY_NAME);
    });
</script>

<template>
    <Navigation/>
    <router-view></router-view>
    <DevNavigation/>
</template>

<style lang="scss" scoped>
    .app {
        &::-webkit-scrollbar {
            display: none;
        }
    }
</style>

