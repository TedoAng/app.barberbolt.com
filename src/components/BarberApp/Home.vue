<script setup>
    import Logo from '@/assets/BarberBoltLogo.svg';
    import GoogleLogo from '@/assets/google_logo.svg';
    import {ref} from 'vue'

    const reserve = ref(true);
</script>

<template>
    <div class="layout">
        <Logo class="logo mb-4"/>
        <h1 class="text-center">Barber</h1>
        <h1 class="text-center">Bolt</h1>
        <div class="position-relative">
            <transition name="out">
                <div v-if="reserve" class="my-5 position-absolute top-50 start-50 translate-middle-x">
                    <h4 class="text-center">best style</h4>
                    <button class="reserve my-4" @click="reserve = !reserve">РЕЗЕРВИРАЙ</button>
                </div>
            </transition>
            <transition name="in">
                <div v-if="!reserve" class="my-5 position-absolute top-50 start-50 translate-middle-x">
                    <a href="/auth/facebook" class="text-decoration-none">
                        <button class="rounded social-button mx-auto position-relative my-3 fb-btn">
                            <i class="fa-brands fa-facebook"></i>
                            Вход с Facebook
                        </button>
                    </a>
                    <a href="/auth/google" class="text-decoration-none">
                        <button class="rounded social-button mx-auto position-relative my-3 google-btn">
                            <GoogleLogo/>
                            Вход с Google
                        </button>
                    </a>
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
        font-size: 5rem;
        font-weight: 800;
        font-family: "Noto Serif", serif;
        line-height: 5.5rem;
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
        margin-top: 10%;
    }
    .social-button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: auto;
        width: 250px;
        height: 50px;
        border: none;
        font-weight: 600;
        font-size: 1.3rem;
        padding-left: 50px;
        transition: all .2s linear;
        i,
        svg {
            position: absolute;
            left: 4px;
            top: 4px;
            font-size: 2rem;
            padding: 5px;
            border-radius: 50%;
        }
        i {
            background-color: #4267b2;
        }
        &:hover {
            transform: scale(0.98);
        }
        svg {
            width: 40px;
            height: 40px;
        }
    }
    .google-btn {
        background-color: #fff;
        color: #333333;
        &:hover {
            svg {
                background-color: #333333;
            }
        }
    }
    .fb-btn {
        background-color: #4267b2;
        color: #fff;
        &:hover {
            color: #333333;
        }
    }
</style>
