<script setup>
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';


    const router = useRouter();

    const back = () => {
        router.go(-1)
    }

    onMounted(() => {
        // console.log('mounted');
    });

</script>

<template >
    <div class="nav d-flex justify-content-between">
        <i class="fa-solid fa-chevron-left" @click="back"></i>
        <i class="fa-solid fa-bars" @click="$emit('hamburgerClick')"></i>
    </div>
</template>

<style lang="scss" scoped>
    .nav {
        height: 7dvh;
    }
    i {
        color: #FFF6E5;
        font-size: 1.7rem;
        padding: 10px 20px;
        line-height: 150%;
        cursor: pointer;
    }
</style>