<script setup>
import { ref, onMounted } from 'vue';
import ReserveUnit from '../ReserveUnit.vue';
import { getMyReservations } from '@/services/barber-service';

const user = ref(null);

onMounted(() => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    user.value = userData;
    getMyReservations(userData.userId).then((response) => console.log(response));
})

</script>

<template>
    <div  class="reservations-layout">
        <h5 class="px-2 hello">Резервации</h5>
        <div class="reservations-container m-2">
            <ReserveUnit/>
            <ReserveUnit/>
            <ReserveUnit/>
            <ReserveUnit/>
            <ReserveUnit/>
            <ReserveUnit/>
            <ReserveUnit/>
        </div>
    </div>
</template>

<style lang="scss">
    .reservations-container {
        display: grid;
        gap: 10px;
        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    }
    .reservations-layout {
        margin: auto;
        max-width: 991px;
        color: #FFF6E5;
    }
</style>