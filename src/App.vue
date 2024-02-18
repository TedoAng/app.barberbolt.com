<script setup>
    import Navigation from '@/components/BarberApp/Navigation.vue'
    import DevNavigation from '@/components/DevNavigation.vue'
    import { onMounted, ref, watch, computed} from 'vue';
    import { useRoute } from 'vue-router'

    const show = ref(true);
    const route = useRoute();
    const currentRoute = computed(() => route.fullPath);

    onMounted(() => {
        // console.log(import.meta.env.VITE_MY_NAME);
    });
</script>

<template>
    <Navigation v-if="currentRoute != '/'" @hamburger-click="show = !show"/>
    <router-view></router-view>
    <DevNavigation :class="{'d-none': show}"/>
</template>

<style lang="scss" scoped>
</style>

