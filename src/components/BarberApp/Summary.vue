<script setup>
    import { ref, onMounted } from 'vue';

    const showDays = ref([]);
    const showTimes = ref([]);
    const selectedDay = ref('-');
    const selectedTime = ref('-');
    const printDate = ref({
        day: '-',
        date: '-'
    });

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

    const createTimes = (from, to, lunch = '0-0') => {
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

    const handleSelectDay = (event) => {
        printDate.value.day = event.target.children[0].textContent;
        printDate.value.date = event.target.children[1].textContent;
        selectedDay.value = event.target.getAttribute("data-date");
    }

    const handleSelectTime = (event) => {
        selectedTime.value = event.target.textContent;
    }

    onMounted(() => {
        showDays.value = getDays();
        showTimes.value = createTimes(10, 19, '17-18');
    });
</script>

<template>
    <div class="summary-layout">
        <div class="date">
            <h5 class="px-2 mb-2 hello">Резервация</h5>
            <h4 class="px-2 choose-date">Избери дата:</h4>
            <div class="days rounded p-3 m-2 ">
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
        <div class="time mb-2">
            <h5 class="px-2 hello">Час</h5>
            <div class="times py-1">
                <div v-for="time in showTimes" class="hour">
                    <div :class="{'select-whole': `${time}:00` === selectedTime}" class="whole" @click="handleSelectTime">
                        {{`${time}:00`}}
                    </div>
                    <div :class="{'select-whole': `${time}:30` === selectedTime}" class="whole" @click="handleSelectTime">
                        {{`${time}:30`}}
                    </div>
                </div>
            </div>
        </div>
        <div class="summary">
            <h5 class="px-2 hello">Обобщение</h5>
            <div class="row mx-3">
                <div class="col-5 orange rounded-start p-4 d-flex flex-column justify-content-between">
                    <div>
                        <p>{{printDate.day}}</p>
                        <p>{{printDate.date}}</p>
                        <hr>
                        <p>{{selectedTime}}</p>
                    </div>
                    <div>
                        <button>OK</button>
                    </div>
                </div>
                <div class="col-7 carta rounded-end">
                    <div class="order-preview">
                        <p>Lorem, ipsum dolor.</p>
                        <p>Lorem, ipsum.</p>
                        <p>Lorem ipsum dolor sit.</p>
                        <p>Lorem, ipsum dolor.</p>
                        <p>Lorem, ipsum dolor.</p>
                        <p>Lorem, ipsum.</p>
                        <p>Lorem ipsum dolor sit.</p>
                        <p>Lorem, ipsum dolor.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
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
        border-radius: 6px;

    }
    .whole {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #FFF6E5;
        border-radius: 10px;
        color: #333333;
        font-family: 'NotoSerifExtraCondensedItalic', serif;
        font-size: 1.4rem;
        cursor: pointer;
    }
    .select-whole {
        background-color: #E08D41 !important;
    }
    .hour {
        display: grid;
        grid-template-columns: repeat(auto-fill, 100px);
        gap: 5px;
        height: 100%;
    }
    .times {
        flex: 1;
        display: grid;
        grid-template-columns: repeat(auto-fit, 100px);
        grid-auto-flow: column;
        gap: 5px;
        overflow-x: scroll;
        white-space: nowrap;
        margin-left: 5px;
        &::-webkit-scrollbar {
            display: none;
        }
    }
    .orange {
        background-color: #E08D41;
        height: 100%;
        button {
            background-color: #525252;
            padding: 10px 30px;
            color: #FFF6E5;
            border-radius: 30px;
            border: none;
            font-weight: 600;
            font-size: 1.2rem;
            &:hover {
                filter: brightness(80%);
                transform: scale(1.03);
            }
        }
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
            height: 100%;
            overflow: scroll;
            &::-webkit-scrollbar {
                display: none;
            }
        }
        p {
            font-family: 'NotoSerifExtraCondensedItalic', serif;
            font-size: 1.3rem;
            font-style: italic;
        }
    }
</style>