<script setup>
import { useRouter } from 'vue-router';

    const router = useRouter();

    const back = () => {
        router.go(-1)
    }
</script>

<template >
    <div class="nav d-flex justify-content-between">
        <i class="fa-solid fa-chevron-left" @click="back"></i>
        <i class="fa-solid fa-bars"></i>
    </div>
</template>

<style lang="scss" scoped>
    .nav {
        height: 7vh;
    }
    i {
        color: #FFF6E5;
        font-size: 2rem;
        padding: 10px 20px;
    }
</style>