<template>
    <div class="summary-layout">
        <div class="date">
            <h5 class="px-2">Резервация</h5>
            <h4 class="px-2">Избери дата:</h4>
            <div class="days rounded p-3 m-2">
                <div class="day"></div>
                <div class="day"></div>
                <div class="day"></div>
                <div class="day"></div>
                <div class="day"></div>
                <div class="day"></div>
                <div class="day"></div>
                <div class="day"></div>
                <div class="day"></div>
                <div class="day"></div>
                <div class="day"></div>
                <div class="day"></div>
                <div class="day"></div>
                <div class="day"></div>
                <div class="day"></div>
                <div class="day"></div>
            </div>
        </div>
        <div class="time">
            <h5 class="px-2">Час</h5>
            <div class="times">
                <div class="hour">
                    <div class="whole"></div>
                    <div class="whole"></div>
                </div>
                <div class="hour">
                    <div class="whole"></div>
                    <div class="whole"></div>
                </div>
                <div class="hour">
                    <div class="whole"></div>
                    <div class="whole"></div>
                </div>
                <div class="hour">
                    <div class="whole"></div>
                    <div class="whole"></div>
                </div>
                <div class="hour">
                    <div class="whole"></div>
                    <div class="whole"></div>
                </div>
                <div class="hour">
                    <div class="whole"></div>
                    <div class="whole"></div>
                </div>
                <div class="hour">
                    <div class="whole"></div>
                    <div class="whole"></div>
                </div>
                <div class="hour">
                    <div class="whole"></div>
                    <div class="whole"></div>
                </div>
                <div class="hour">
                    <div class="whole"></div>
                    <div class="whole"></div>
                </div>
            </div>
        </div>
        <div class="summary">
            <h5 class="px-2">Обобщение</h5>
            <div class="row m-3">
                <div class="col-5 orange rounded-start">
                    <p>Wed</p>
                    <p>21</p>
                    <hr>
                    <p>11:00</p>
                    <button>OK</button>
                </div>
                <div class="col-7 carta rounded-end">
                    <p>order</p>
                    <p>order</p>
                    <p>order</p>
                    <p>order</p>
                    <p>order</p>
                    <p>order</p>
                    <p>order</p>
                    <p>order</p>
                    <p>order</p>
                    <p>order</p>
                    <p>order</p>
                    <p>order</p>
                    <p>order</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    .summary-layout {
        margin: auto;
        max-width: 991px;
        color: #FFF6E5;
    }
    .date,
    .time {
        height: 25vh;
    }
    .summary {
        height: 50vh;
        .row {
            height: calc(100% - 80px);
        }
    }
    .days {
        background-color: #F3E0B8;
        overflow-x: scroll;
        white-space: nowrap;
    }
    .day {
        width: 50px;
        height: 80px;
        background-color: crimson;
        margin-right: 5px;
        display: inline-block;
        vertical-align: middle;
    }
    .whole {
        width: 100px;
        height: 50px;
        background-color: crimson;
        margin: 5px;
        border-radius: 10px;
    }
    .hour {
        display: inline-block;
    }
    .times {
        overflow-x: scroll;
        white-space: nowrap;
    }
    .orange {
        background-color: #E08D41;
        height: 100%;
    }
    .carta {
        background-color: #F3E0B8;
        height: 100%;
        color: #525252;
        overflow-y: scroll;
    }
</style>