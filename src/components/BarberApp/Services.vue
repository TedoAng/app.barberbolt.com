<script setup>
import {ref, onMounted} from 'vue'

const user = ref({})

    onMounted(() => {
        user.value = JSON.parse(localStorage.getItem('userData'));
    });
</script>
<template>
    <div class="service-layout">
        <div class="welcome">
            <div class="d-flex px-3">
                <p class="align-self-end pe-2">Здравей, </p>
                <h3>{{user.given_name}}</h3>
            </div>
            <div class="info rounded m-3 p-3">
                <p class="hello">От тук можеш да избереш процедурите за да резервираш своя час</p>
            </div>
        </div>
        <div class="services p-3 position-relative">
            <h5 class="hello">Процедури</h5>
            <div class="products d-flex flex-wrap gap-4 justify-content-center my-3">
                <div class="product"></div>
                <div class="product"></div>
                <div class="product"></div>
                <div class="product"></div>
                <div class="product"></div>
                <div class="product"></div>
                <div class="product"></div>
                <div class="product"></div>
                <div class="product"></div>
                <div class="product"></div>
                <div class="product"></div>
                <div class="product"></div>
                <div class="product"></div>
                <div class="product"></div>
                <div class="product"></div>
                <div class="product"></div>
                <div class="product"></div>
                <div class="product"></div>
                <div class="product"></div>
                <div class="product"></div>
                <div class="product"></div>
                <div class="product"></div>
                <div class="product"></div>
                <div class="product"></div>
                <div class="product"></div>
                <div class="product"></div>
                <div class="product"></div>
                <div class="product"></div>
                <div class="product"></div>
                <div class="product"></div>
                <div class="product"></div>
                <div class="product"></div>
                <div class="product"></div>
                <div class="product"></div>
                <div class="product"></div>
            </div>
            <button class="reserve position-absolute start-50 bottom-0 translate-middle-x my-3">НАПРЕД</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .welcome {
        height: 23vh;
    }
    .hello {
        font-weight: 700;
        font-size: 1.2rem;
        line-height: 1.4rem;
    }
    .service-layout {
        margin: auto;
        max-width: 991px;
        color: #FFF6E5;
    }
    p,
    h3,
    h5 {
        margin-bottom: 0;
    }
    .info {
        background-color: #E08D41;
    }
    h3 {
        font-family: "NotoSerifCBlackItalic", serif;
        font-size: 2.5rem;
        line-height: 2.5rem;
        font-style: italic;
    }
    .services {
        height: 70vh;
        background-color: #F3E0B8;
        color: #525252;
        overflow: hidden;
    }
    .reserve {
        border: none;
        background-color: #E08D41;
        color: #FFF6E5;
        border-radius: 30px;
        font-size: 1.5rem;
        font-weight: 600;
        width: fit-content;
        padding: 5px 20px;
        margin: auto;
        display: block;
        &:hover {
            background-color: darken(#E08D41, 8%);
            color: #F3E0B8;
            scale: 1.03;
        }
    }
    .product {
        width: 80px;
        height: 80px;
        background-color: crimson;
    }
    .products {
        overflow: scroll;
        height: calc(100% - 104px);
        &::-webkit-scrollbar {
            display: none;
        }
    }
</style>