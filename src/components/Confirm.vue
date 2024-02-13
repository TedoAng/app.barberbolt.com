<script setup>
    import Svg from '@/assets/svg/index.js'
    import { useRouter } from 'vue-router'

    const router = useRouter();
</script>

<template>
    <div class="success-modal">
        <div class="modal-body py-4">
            <div v-html="Svg.Confirm"></div>
            <h3 class="text-center mb-4">Вашата резервация е успешна!</h3>
            <button class="reserve" @click="router.push('/reservations')">НАПРЕД</button>
        </div>
    </div>
</template>
  
<style lang="scss" scoped>
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
</style>

<style lang="scss">
    .success-modal {
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(82, 82, 82, 0.36);
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .modal-body {
            background-color: rgba(51, 51, 51, 0.95);
            margin: 50px;
            padding: 10px;
            border-radius: 6px;
            max-width: 991px;
            div {
                width: 120px;
                margin-inline: auto;
                margin-bottom: 8px;
                svg {
                    width: 100%;
                }
            }
        }
    }
</style>