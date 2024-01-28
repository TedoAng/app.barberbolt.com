<script setup>
    import Home from '@/components/BarberApp/Home.vue'
    import Services from '@/components/BarberApp/Services.vue'
    import Tester from '@/components/BarberApp/Tester.vue'
    import Summary from '@/components/BarberApp/Summary.vue'
</script>

<template>
    <Home class="spacer"/>
    <Services/>
    <Summary/>
</template>

<style lang="scss" scoped>
    .spacer {
        padding-bottom: 230px;
    }
</style>

