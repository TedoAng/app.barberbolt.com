<script setup>
    import Logo from '@/assets/BarberBoltLogo.svg'
    import {ref, onMounted} from 'vue'
    import { GoogleLogin, decodeCredential, googleLogout } from 'vue3-google-login'
    import { useRouter } from 'vue-router';
    
    const reserve = ref(true);
    const router = useRouter();
    const loggedIn = ref(false);


    const callback = (response) => {
        console.log(decodeCredential(response.credential));
        localStorage.setItem('userData', JSON.stringify(decodeCredential(response.credential)));
        router.push('/services');
    }

    const handleReserveBtn = () => {
        if (loggedIn.value) {
            router.push('/services');
        } else {
            reserve.value = !reserve.value
        }
    }

    onMounted(() => {
        localStorage.getItem('userData') ? loggedIn.value = true : false;
    });
</script>

<template>
    <div class="layout">
        <Logo class="logo mb-4"/>
        <h1 class="text-center">Barber</h1>
        <h1 class="text-center">Bolt</h1>
        <div class="position-relative">
            <transition name="out">
                <div v-show="reserve" class="my-5 position-absolute top-50 start-50 translate-middle-x">
                    <h4 class="text-center">best style</h4>
                    <button class="reserve my-4" @click="handleReserveBtn">РЕЗЕРВИРАЙ</button>
                </div>
            </transition>
            <transition name="in">
                <div v-show="!reserve" class="my-5 pt-5 position-absolute top-50 start-50 translate-middle-x">
                    <a href="/auth/facebook" class="text-decoration-none d-none">
                        <button class="rounded social-button mx-auto position-relative my-3 fb-btn">
                            <i class="fa-brands fa-facebook"></i>
                            Вход с Facebook
                        </button>
                    </a>
                    <GoogleLogin :callback="callback" :buttonConfig="{shape: 'pill', theme: 'filled_blue'}"/>
                </div>
            </transition>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .out-enter-active,
    .out-leave-active {
        transition: opacity 0.5s ease;
    }
    .out-enter-from,
    .out-leave-to {
        opacity: 0;
    }
    .in-enter-active,
    .in-leave-active {
        transition: opacity 0.5s ease;
    }
    .in-enter-from,
    .in-leave-to {
        opacity: 0;

    }
    h1 {
        color: #FFF6E5;
        font-size: 6rem;
        font-weight: 800;
        font-family: "NotoSerifCBlack", serif;
        line-height: 5rem;
        margin-bottom: 0;
    }
    h4 {
        color: #FFF6E5;
        font-family: "Noto Serif", serif;
        font-style: italic;
        font-weight: 100;
        font-size: 2.5rem;
    }
    .reserve {
        border: none;
        background-color: #E08D41;
        color: #FFF6E5;
        border-radius: 30px;
        font-size: 1.2rem;
        font-weight: 600;
        width: fit-content;
        padding: 5px 20px;
        margin: auto;
        display: block;
        &:active {
            background-color: darken(#E08D41, 8%);
            color: #F3E0B8;
            scale: 1.03;
        }
    }
    
    @media only screen and (max-width: 575px) {
        .social-button {
            button {
                width: 200px;
                font-size: 1rem;
            }
            i,
            svg {
                font-size: 1.5rem !important;
                left: 8px !important;
                top: 8px !important;
            }
            svg {
                width: 34px !important;
                height: 34px !important;
            }
        }
    }
    @media screen and (min-width: 992px) {
        .layout {
            margin: auto;
            width: 50%;
            max-width: 991px;
            padding: 10px;
        }
    }
</style>

<style lang="scss">
    .logo {
        width: 300px;
        display: block;
        margin: auto;
    }
</style>
