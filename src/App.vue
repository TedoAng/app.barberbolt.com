<script setup>
    import Home from '@/components/BarberApp/Home.vue'
    import Services from '@/components/BarberApp/Services.vue'
    import Tester from '@/components/BarberApp/Tester.vue'
    import Summary from '@/components/BarberApp/Summary.vue'
    import Navigation from '@/components/BarberApp/Navigation.vue'
</script>

<template>
    <Navigation/>
    <Home/>
</template>

<style lang="scss" scoped>
    .app {
        &::-webkit-scrollbar {
            display: none;
        }
    }
</style>

