<script setup>
import { ref } from 'vue';

const footerItems = ref([
    {icon:'pin_drop', title: 'Address', desc: 'Bulgaria, Plovdiv'},
    {icon:'phone_in_talk', title: 'Lets talk', desc: '(+395) 888 850 006'},
    {icon:'mail', title: 'Send us Email', desc: 'admin@tvangelov.com'},
]);

</script>

<template>
    <section>
        <div class="container">
            <div class="row py-5">
                <div v-for="item in footerItems" class="col-lg-4 col-md-6 col-12 d-sm-flex align-items-center p-4">
                    <div class="pb-sm-0 pe-4 pb-4">
                        <i class="material-icons">{{item.icon}}</i>
                    </div>
                    <div>
                        <h4 class="text-white">{{item.title}}</h4>
                        <p>{{item.desc}}</p>
                    </div>
                </div>
            </div>
            <div class="row border-top py-5">
                <div class="col-md-6 col-12">
                    <p>© TANG 2024 | All Rights Reserved</p>
                </div>
                <div class="col-md-6 col-12 d-sm-flex justify-content-end">
                    <p class="ps-3 mt-3 mt-sm-0">Trams & Condition</p>
                    <p class="ps-3 mt-2 mt-sm-0">Privacy Policy</p>
                    <p class="ps-3 mt-2 mt-sm-0">Sitemap</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    section {
        background-color: #02050A
    }
    i {
        background-color: #55E6A5;
        border-radius: 50%;
        padding: 16px;
        font-size: 2.5rem;
    }
    p {
        color: #a2a2a2;
        font-weight: 500;
        margin-bottom: 0;
    }
    .border-top {
        border-top-color: #fff1 !important;
    }
    @media screen and (max-width: 767px) {
        
    }
</style>