<script setup>
    import { uploadFile } from '@/services/barber-service'
    import { ref } from 'vue'

    const props = defineProps(['id', 'total', 'reservation_dt', 'image']);
    const imageUrl = ref(null);
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

</script>

<template>
    <div class="reserve-unit position-relative">
        <div class="time position-absolute top-0 end-0">{{props.reservation_dt.split(' ')[1].slice(0, -3)}}</div>
        <div v-if="props.image" class="date">
            <img :src="`${currentHost}/storage/${props.image}`" alt="preview">
        </div>
        <div v-else-if="!imageUrl" class="date">
            {{props.reservation_dt.split(' ')[0].split('-')[2]}}
        </div>
        <div v-else class="date">
            <img :src="imageUrl" alt="preview">
        </div>
        <div class="actions pt-3 px-3" @click="$emit('handleDelete')">
            <i class="fa-solid fa-trash"></i>
        </div>
        <label :for="props.reservation_dt" class="plus position-absolute bottom-0 end-0">
            <i class="fa-solid fa-plus"></i>
        </label>
        <input type="file" :id="props.reservation_dt" name="picture" accept="image/png, image/jpeg" class="d-none" @change="handleFileInput"/>
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
            width: 40%;
            padding: 5px;
            font-size: 1.2rem;
            color: #333;
            font-weight: 600;
            user-select: none;
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
        }
        .actions {
            width: fit-content;
            font-size: 1.5rem;
            cursor: pointer;
            i {
                pointer-events: none;
            }
        }
    }
</style>