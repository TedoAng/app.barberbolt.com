<script setup>
    import {ref, onMounted, onUnmounted} from 'vue'
    import { getServices } from '@/services/barber-service'
    import { useRouter } from 'vue-router';
    import Svg from '@/assets/svg/index';
    import Candy from '@/components/Candy.vue'
    
    
    const router = useRouter();
    const user = ref({});
    const services = ref([]);
    const cartServices = ref([]);
    const cartTotal = ref(0);
    const loading = ref(true);

    const handleForwardBtn = () => {
        router.push('/summary');
        putInCart();
    }

    const handleProductSelect = (event) => {
        const selected = +event.target.getAttribute("data-service-id");
        cartServices.value.includes(selected) ? 
        cartServices.value = cartServices.value.filter(el => el !== selected) :
        cartServices.value.push(selected);
    }

    const putInCart = () => {
        services.value.forEach(service => {
            if (cartServices.value.includes(service.id)) {
                cartTotal.value += +service.price
            }
        });
        localStorage.setItem('cart', JSON.stringify({ services: cartServices.value, total: cartTotal.value }));
    }

    onMounted(() => {
        user.value = JSON.parse(localStorage.getItem('userData'));
        getServices().then(response => {
          services.value = response;
          loading.value = false;
        });

        localStorage.getItem('cart') !== null ? 
        cartServices.value = JSON.parse(localStorage.getItem('cart')).services :
        cartServices.value = cartServices.value;
    });

    onUnmounted(() => {
        console.log("unmounted");
        putInCart();
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
            <div class="products my-3">
                <div class="grid">
                    <div 
                    v-for="service in services" 
                    :class="{ selected: cartServices.includes(service.id) ? true : false }" 
                    class="product d-flex flex-column align-items-center justify-content-between" 
                    :key="service.id" 
                    :data-service-id="service.id" 
                    @click="handleProductSelect"
                    >
                        <div v-html="Svg[service.icon]"></div>
                        <p>{{ service.name }}</p>
                        <p><strong>{{ service.price }}лв.</strong></p>
                    </div>
                </div>
            </div>
            <button class="reserve position-absolute start-50 bottom-0 translate-middle-x my-3" @click="handleForwardBtn">НАПРЕД</button>
        </div>
    </div>
    <div v-if="loading" class="candy-loading">
        <Candy class="candy"/>
    </div>
</template>

<style lang="scss" scoped>
    .candy-loading {
        position: absolute;
        top: 0;
        left: 0;
        background-color: #5252525b;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .candy {
            transform: scale(.6);
        }
    }
    .welcome {
        height: 23dvh;
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
        height: 70dvh;
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
    .products {
        height: calc(100% - 104px);
        &::-webkit-scrollbar {
            display: none;
        }
        overflow: scroll;
        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
            gap: 10px;
            .product {
                padding: 5px;
                line-height: 1.1rem;
                font-weight: 600;
                font-size: 0.9rem;
                cursor: pointer;
                user-select: none;
                div {
                    width: 80px;
                    margin-inline: auto;
                    pointer-events: none;
                }
                p {
                    text-align: center;
                    pointer-events: none;
                    text-decoration: none;
                    strong {
                        font-size: 1rem;
                    }
                }
            }
            .selected {
                background-color: #FFF6E5;
                border-radius: 6px;
            }
        }
    }

    @media screen and (max-width: 320px) {
        .reserve {
            font-size: 1.1rem;
        }
        .grid {
            grid-template-columns: repeat(auto-fill, minmax(90px, 1fr)) !important;
        }
        h3 {
            font-size: 2rem;
        }
        .info {
            padding: 10px !important;
            margin: 10px !important;
            p {
                font-size: 13px;
            }
        }
    }
</style>