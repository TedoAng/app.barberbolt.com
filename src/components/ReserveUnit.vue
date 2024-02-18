<script setup>
    import { uploadFile } from '@/services/barber-service'
    import { ref } from 'vue'

    const props = defineProps(['id', 'total', 'reservation_dt', 'image', 'services']);
    const imageUrl = ref(null);
    const dropdownShow = ref(false);
    const modalShow = ref(false);
    const currentHost = ref(import.meta.env.VITE_DOMAIN);
    defineEmits(['handleDelete']);

    const handleFileInput = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        uploadFile(event.target.files[0], props.id);

        reader.onload = (event) => {
            imageUrl.value = event.target.result;
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    }

    const handlePreview = () => {
        dropdownShow.value = !dropdownShow.value
        modalShow.value = !modalShow.value
        document.querySelector('body').style.overflow = 'hidden';
    }

    const handleClose = () => {
        modalShow.value = !modalShow.value
        document.querySelector('body').style.overflow = 'visible';
    }



</script>

<template>
    <div class="reserve-unit position-relative">
        <div class="time position-absolute top-0 end-0">{{props.reservation_dt.split(' ')[1].slice(0, -3)}}ч.</div>
        <div v-if="props.image" class="date">
            <img :src="`${currentHost}/storage/${props.image}`" alt="preview">
        </div>
        <div v-else-if="!imageUrl" class="date">
            {{props.reservation_dt.split(' ')[0].split('-')[2]}}
        </div>
        <div v-else class="date">
            <img :src="imageUrl" alt="preview">
        </div>
        <div class="actions pt-3 px-3" @click="dropdownShow = !dropdownShow">
            <i class="fa-solid fa-ellipsis"></i>
        </div>
        <div v-if="dropdownShow" class="dropdown rounded">
            <div class="menu-item" @click="$emit('handleDelete')">
                <i class="fa-solid fa-trash"></i> Изтрий
            </div>
            <div class="menu-item" @click="handlePreview">
                <i class="fa-solid fa-calendar-week"></i> Преглед
            </div>
        </div>
        <label :for="props.reservation_dt" class="plus position-absolute bottom-0 end-0">
            <i class="fa-solid fa-plus"></i>
        </label>
        <input type="file" :id="props.reservation_dt" name="picture" accept="image/png, image/jpeg" class="d-none" @change="handleFileInput"/>
        <div v-if="modalShow" class="preview-modal d-flex flex-column justify-content-center">
            <div class="picture position-relative my-3">
                <div v-if="props.image" class="date">
                    <img :src="`${currentHost}/storage/${props.image}`" alt="preview">
                </div>
                <div v-else-if="!imageUrl" class="date">
                    {{props.reservation_dt.split(' ')[0].split('-')[2]}}
                </div>
                <div v-else class="date">
                    <img :src="imageUrl" alt="preview">
                </div>
                <div class="time position-absolute top-0 end-0">{{props.reservation_dt.split(' ')[1].slice(0, -3)}}ч.</div>
            </div>
            <div class="order-description rounded">
                <div class="full-date">
                    {{ reservation_dt.split(' ').shift().split('-').reverse().join('/') }}
                </div>
                <div class="service-list">
                    <div v-for="service in services">
                        {{`${service.name} - ${service.price}лв.`}}
                    </div>
                </div>
                <hr>
                Общо: {{ total }}лв.
            </div>
            <div class="close align-self-center my-2" @click="handleClose">Затвори</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .reserve-unit {
        background-color: #525252;
        border-radius: 10px;
        max-width: 200px;
        min-width: 100px;
        padding: 5px;
        .time {
            background-color: #D9D9D9;
            border-top-right-radius: 10px;
            border-bottom-left-radius: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50%;
            padding: 5px;
            font-size: 1.2rem;
            color: #333;
            font-weight: 600;
            user-select: none;
            -webkit-user-select: none;
            -moz-user-select: none;
        }
        .date {
            background-color: #333;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 4rem;
            font-weight: 700;
            border-radius: 10px;
            user-select: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            height: 96px;
            overflow: hidden;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        .plus {
            bottom: 0;
            right: 0;
            background-color: #E08D41;
            width: 50px;
            height: 50px;
            border-top-left-radius: 10px;
            border-bottom-right-radius: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.5rem;
            cursor: pointer;
            user-select: none;
            -webkit-user-select: none;
            -moz-user-select: none;
        }
        .actions {
            width: fit-content;
            font-size: 1.5rem;
            cursor: pointer;
            i {
                pointer-events: none;
            }
        }
        .dropdown {
            position: absolute;
            background-color: #F3E0B8;
            z-index: 9;
            .menu-item {
                font-size: 0.9rem;
                font-weight: 500;
                padding: 10px;
                color: #333;
                cursor: pointer;
                user-select: none;
                -webkit-user-select: none;
                -moz-user-select: none;
            }
        }
        .preview-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            max-width: 991px;
            height: 100vh;
            padding: 20px;
            background-color: rgba(82, 82, 82, 0.9);
            z-index: 10;
            .picture {
                height: 50dvh;
                .date {
                    height: 100%;
                }
            }
            .order-description {
                background-color: #F3E0B8;
                padding: 10px;
                color: #333;
                font-weight: 500;
                .full-date {
                    font-size: 1.5rem;
                }
                .service-list {
                    max-height: 20dvh;
                    overflow-y: scroll;
                }
            }
            .close {
                background-color: #E08D41;
                color: #FFF6E5;
                border-radius: 30px;
                font-size: 1.2rem;
                font-weight: 600;
                width: fit-content;
                padding: 5px 20px;
                margin-inline: auto;
                display: block;
                cursor: pointer;
                user-select: none;
                -webkit-user-select: none;
                -moz-user-select: none;
                &:active {
                    background-color: darken(#E08D41, 8%);
                    color: #F3E0B8;
                    scale: 1.03;
                }
            }
        }
    }
</style>