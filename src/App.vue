<script setup>
    import Navigation from '@/components/BarberApp/Navigation.vue'
    import DevNavigation from '@/components/DevNavigation.vue'
    import { onMounted, ref} from 'vue';

    const show = ref(true);
    onMounted(() => {
        // console.log(import.meta.env.VITE_MY_NAME);
    });
</script>

<template>
    <Navigation @click="show = !show"/>
    <router-view></router-view>
    <DevNavigation :class="{'d-none': show}"/>
</template>

<style lang="scss" scoped>
    .app {
        &::-webkit-scrollbar {
            display: none;
        }
    }
</style>

