<script setup>
import { ref, onMounted } from 'vue'
import ReserveUnit from '../ReserveUnit.vue'
import { getMyReservations } from '@/services/barber-service'
import Candy from '@/components/Candy.vue'
import { deleteReservationID } from '@/services/barber-service'

const user = ref(null);
const loading = ref(true);
const reservations = ref([]);

const handleDelete = (id) => {
    deleteReservationID(id);
    reservations.value = reservations.value.filter(el => el.id !== id);
}

onMounted(() => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    user.value = userData;
    getMyReservations(userData.userId).then((response) => {
        reservations.value = response;
        loading.value = false;
    });
})

</script>

<template>
    <div  class="reservations-layout">
        <h5 class="px-2 my-2 hello">Резервации</h5>
        <div class="reservations-container m-2">
            <ReserveUnit 
            v-for="reservation in reservations.sort(function(a,b){return new Date(a.reservation_dt) - new Date(b.reservation_dt)})" 
            v-bind="reservation"
            @handle-delete="handleDelete(reservation.id)"
            :key="reservation.id"
            />
        </div>
    </div>
    <Candy v-if="loading"/>
</template>

<style lang="scss">
    .reservations-container {
        display: grid;
        gap: 20px;
        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    }
    .reservations-layout {
        margin: auto;
        max-width: 991px;
        color: #FFF6E5;
    }
</style>