import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useUserStore = defineStore('user', () => {
    const userData = ref({});
   
    const getData = computed(() => userData.value);

    function setData(val) {
        userData.value = val
    }

    return { userData, getData, setData}
})