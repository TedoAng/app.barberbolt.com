<script setup>
    import Navigation from '@/components/BarberApp/Navigation.vue'
    import DevNavigation from '@/components/DevNavigation.vue'
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

