<script setup>
    import { ref, onMounted, onBeforeMount } from 'vue'
    import { getReservations, sendReservation, getHours } from '@/services/barber-service'
    import Candy from '@/components/Candy.vue'
    import Confirm from '@/components/Confirm.vue'
    import { useRouter } from 'vue-router'

    const router = useRouter();
    const showDays = ref([]);
    const showTimes = ref([]);
    const selectedDay = ref(null);
    const selectedTime = ref('-');
    const printDate = ref({
        day: '-',
        date: '-'
    });
    const printDescription = ref([]);
    const printTotal = ref('-');
    const reservations = ref({});
    const busyTimes = ref([]);
    const loading = ref(true);
    const orderSuccess = ref(false);
    const refDays = ref (null);
    const refTimes = ref (null);

    const getDays = ( length = 7 ) => {
        const dayNames = ['Нед', 'Пон', 'Вт', 'Ср', 'Чет', 'Пет', 'Съб'];
        let result = [
            {
                day: dayNames[(new Date).getDay()],
                month: ((new Date).getMonth()) + 1,
                year: (new Date).getFullYear(),
                date: (new Date).getDate(),
            }
        ];

        for (let index = 1; index <= length; index++) {
            const date = new Date();
            date.setDate(date.getDate() + index);

            result.push({
                day: dayNames[date.getDay()],
                month: (date.getMonth()) + 1,
                year: date.getFullYear(),
                date: date.getDate()
            });
        }


        return result;
    }

    const createTimes = async (lunch = '0-0') => {
        const resp = await getHours(18);
        const { open_time, close_time } = resp.filter(day => day.day.includes(printDate.value.day))[0];
        const from = parseInt(open_time.split(':')[0]);
        const to = parseInt(close_time.split(':')[0]);
        const arr = [];
  		let curr = from;
        const arrLunch = lunch.split('-');
        for (let index = 0; index < (to - from) + 1; index++) {
            if (arrLunch[0] === curr.toString()) {
                curr++; 
                continue;
            }
            arr.push(curr);
            curr ++;
        }
        return arr;
    }

    const createTimesNew = async(setBreak = '0-0') => {
        const resp = await getHours(18);
        const { open_time, close_time } = await resp.filter(day => day.day.includes(printDate.value.day))[0];
        //From
        const [fromH, fromM] = open_time.split(':');
        const dateFrom = new Date();
        dateFrom.setHours(parseInt(fromH));
        dateFrom.setMinutes(parseInt(fromM));
        //To
        const [toH, toM] = close_time.split(':');
        const dateTo = new Date();
        dateTo.setHours(parseInt(toH));
        dateTo.setMinutes(parseInt(toM));
        //Break
        const [breakFrom, breakTo] = setBreak.split('-');
        const breakTimeFrom = new Date();
        const breakTimeTo = new Date();
        breakTimeFrom.setHours(parseInt(breakFrom));
        breakTimeFrom.setMinutes(parseInt(0));
        breakTimeTo.setHours(parseInt(breakTo));
        breakTimeTo.setMinutes(parseInt(0));

        const arr = [];
        
        while (dateFrom <= dateTo) {
            if (dateFrom >= breakTimeFrom && dateFrom < breakTimeTo) {
                dateFrom.setMinutes(dateFrom.getMinutes() + 30);
                continue;
            }
            arr.push(dateFrom.toLocaleTimeString("en-UK", { hour: "2-digit", minute: "2-digit" }))
            dateFrom.setMinutes(dateFrom.getMinutes() + 30);
        }

        arr.pop();
        return arr;
    }

    const handleSelectDay = (event) => {
        loading.value = true;
        createTimesNew().then(res => {
            showTimes.value = res;
            loading.value = false;
        });
        printDate.value.day = event.target.children[0].textContent;
        printDate.value.date = event.target.children[1].textContent;
        selectedDay.value = event.target.getAttribute("data-date");
        busyTimes.value = reservations.value[selectedDay.value] ?? [];
        selectedTime.value = '-';
    }

    const handleSelectTime = (event) => {
        selectedTime.value = event.target.textContent;
    }

    const handleOk = () => {
        loading.value = true;
        //collect cart items
        const cartData = JSON.parse(localStorage.getItem('cart'));
        const userData = JSON.parse(localStorage.getItem('userData'));
        const data = {
            userId: userData.userId,
            total: cartData.total,
            services: cartData.services,
            date: `${selectedDay.value} ${selectedTime.value}:00`
        };
        //send reservation to the api
        sendReservation(data).then(status => {
            if (status == 200) orderSuccess.value = true;
            loading.value = false;
            localStorage.removeItem('cart');
        });
    }

    const handleWheelDay = (event) => {
        const scrollableContainer = refDays.value;
        const delta = Math.sign(event.deltaY);
        const scrollSpeed = 150;

        
        scrollableContainer.scrollLeft += delta * scrollSpeed;
        event.preventDefault();
    }

    const handleWheelTime = (event) => {
        const scrollableContainer = refTimes.value;
        const delta = Math.sign(event.deltaY);
        const scrollSpeed = 150;

        
        scrollableContainer.scrollLeft += delta * scrollSpeed;
        event.preventDefault();
    }

    onBeforeMount(() => {
        getReservations().then(el => {
            reservations.value = el;
            loading.value = false;
        }).catch(error => console.log(error));

        showDays.value = getDays(20);

        const cartData = JSON.parse(localStorage.getItem('cart'));

        if (cartData?.services.length > 0) {
            printDescription.value = cartData.description.split('\n');
            printTotal.value = cartData.total;
        } else {
            router.push('/services');
        }
    });
</script>

<template>
    <div class="summary-layout">
        <div class="date">
            <h5 class="px-2 my-2 hello">Резервация</h5>
            <h4 class="px-2 choose-date">Избери дата:</h4>
            <div ref="refDays" class="days rounded rounded-end-0 p-2 m-2 me-0" @wheel.prevent="handleWheelDay">
                <div
                v-for="day in showDays"
                :class="{'select-day': `${day.year}-${day.month < 10 ? '0' + day.month : day.month}-${day.date < 10 ? '0' + day.date : day.date}` === selectedDay}"
                class="day"
                :data-date="`${day.year}-${day.month < 10 ? '0' + day.month : day.month}-${day.date < 10 ? '0' + day.date : day.date}`"
                @click="handleSelectDay">
                    <p>{{day.day}}</p>
                    <p>{{day.date}}</p>
                </div>
            </div>
        </div>
        <div v-if="selectedDay" class="time mb-2">
            <h5 class="px-2 hello">Час</h5>
            <h4 v-if="showTimes.length === 0 && !loading" class="px-2 choose-date off-day rounded text-center mx-2">Не работен ден :)</h4>
            <div ref="refTimes" class="times ms-2" @wheel.prevent="handleWheelTime">
                <div v-for="time in showTimes" class="hour" :class="{'select-hour': time === selectedTime}" @click="handleSelectTime">
                    {{busyTimes.includes(`${time}:00`)? 'зает' : time}}
                </div>
            </div>
        </div>
        <div v-else class="time mb-2">
            <h5 class="px-2 hello">Час</h5>
            <div class="times ms-2">
                <div v-for="time in 20" class="hour">
                    <div class="whole">
                        - -
                    </div>
                </div>
            </div>
        </div>
        <div class="summary">
            <h5 class="px-2 hello">Обобщение</h5>
            <div class="row mx-3">
                <div class="col-5 orange rounded-start p-4">
                    <div>
                        <p>{{printDate.day}}</p>
                        <p>{{printDate.date}}</p>
                        <hr class="text-dark">
                        <p class="text-dark">{{selectedTime === 'зает' ? 'N/A' : selectedTime}}</p>
                    </div>
                </div>
                <div class="col-7 carta rounded-end">
                    <div class="order-preview d-flex flex-column justify-content-between">
                        <div>
                            <p v-for="item in printDescription.slice(1)">
                                {{ item }}
                                <hr>
                            </p>
                        </div>
                    </div>
                    <div class="action-bar d-flex mt-3">
                        <div class="price">{{ printTotal }} лв.</div>
                        <button v-if="selectedDay && selectedTime != '-' && selectedTime != 'зает'" class="total" @click="handleOk" :disabled="loading">OK</button>
                        <button v-else class="total color-gray">OK</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Candy v-if="loading"/>
    <Confirm v-if="orderSuccess"/>
</template>

<style lang="scss" scoped>
    .off-day {
        background-color: #E08D41;
        padding: 10px;
    }
    .choose-date{
        font-family: "NotoSerifExtraCondensedBlackItalic", serif;
        font-size: 2rem;
        font-weight: 600;
    }
    .hello {
        font-weight: 700;
        font-size: 1.2rem;
        line-height: 1.4rem;
    }
    .summary-layout {
        margin: auto;
        max-width: 991px;
        color: #FFF6E5;
    }
    .date {
        height: 28dvh;
        overflow: hidden;
    }
    .time {
        height: 20dvh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }
    .summary {
        height: 45dvh;
        overflow: hidden;
        .row {
            height: calc(100% - 60px);
        }
    }
    .days {
        scroll-behavior: smooth;
        background-color: #F3E0B8;
        height: calc(100% - 94px);
        overflow-x: scroll;
        white-space: nowrap;
        &::-webkit-scrollbar {
            display: none;
        }
    }
    .day {
        width: 50px;
        height: 100%;
        color: #333333;
        margin-right: 5px;
        display: inline-block;
        cursor: pointer;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        p {
            height: 50%;
            text-align: center;
            margin-bottom: 0;
            font-family: 'NotoSerifExtraCondensedItalic', serif;
            font-size: 1.4rem;
            display: flex;
            justify-content: center;
            align-items: center;
            pointer-events: none;
        }
    }
    .select-day {
        color: #E08D41 !important;
        background-color: #FFF6E5;
        border-radius: 20px;
    }
    .hour {
        min-width: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #FFF6E5;
        border-radius: 10px;
        color: #333333;
        font-family: 'NotoSerifExtraCondensedItalic', serif;
        font-size: 1.4rem;
        cursor: pointer;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
    }
    .select-hour {
        background-color: #E08D41 !important;
    }
    .times {
        display: grid;
        grid-template-columns: repeat(auto-fill, 100px);
        grid-template-rows: auto auto;
        gap: 10px;
        grid-auto-flow: column;
        overflow-x: scroll;
        height: 100%;
        &::-webkit-scrollbar {
            display: none;
        }
    }
    .orange {
        background-color: #E08D41;
        height: 100%;
        p {
            font-family: 'NotoSerifExtraCondensedItalic', serif;
            font-size: 1.3rem;
            font-style: italic;
        }
    }
    .carta {
        background-color: #F3E0B8;
        height: 100%;
        color: #333333;
        overflow-y: hidden;
        padding: 20px;
        .order-preview {
            height: 80%;
            overflow: scroll;
            &::-webkit-scrollbar {
                display: none;
            }
        }
        p {
            font-family: 'NotoSerifExtraCondensedItalic', serif;
            font-size: 1.3rem;
            margin-bottom: 0;
        }
        .action-bar {
            height: 15%;
            .price {
                display: flex;
                align-items: center;
                background-color: #525252;
                padding: 5px 10px;
                color: #FFF6E5;
                border-top-left-radius: 10px;
                border-bottom-left-radius: 10px;
                border: none;
                font-weight: 600;
                font-size: 1.2rem;
                line-height: 1rem;
                user-select: none;
                -webkit-user-select: none;
                -moz-user-select: none;
            }
            .total {
                display: flex;
                align-items: center;
                background-color: #E08D41;
                padding: 5px 20px;
                color: #FFF6E5;
                border-top-right-radius: 30px;
                border-bottom-right-radius: 30px;
                border: none;
                font-weight: 600;
                font-size: 1.2rem;
                user-select: none;
                -webkit-user-select: none;
                -moz-user-select: none;
                &:not(.color-gray) {
                    &:active {
                        filter: brightness(80%);
                        transform: scale(1.03);
                    }
                }
            }
            .total.color-gray {
                background-color: #525252;
            }
            
        }
    }
    @media screen and (max-width: 320px) {
        h5 {
            font-size: 1.1rem !important;
        }
        h4 {
            font-size: 1.5rem !important;
        }
        .days {
            padding: 5px !important;
        }
        p {
            font-size: 1rem !important;
        }
        .hour {
            .whole {
                font-size: 1.2rem !important;
            }
        }
        .orange {
            padding: 10px !important;
        }
        .carta {
            padding: 10px;
            .order-preview {
                height: 70%;
            } 
        }
        .action-bar {
            .price,
            .total {
                font-weight: 400 !important;
                padding: 12px !important;
                font-size: 1rem !important;
                white-space: nowrap;
                transform: translateX(-7px);
            }
        }
    }
</style>