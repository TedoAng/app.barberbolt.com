<template>
    <div class="summary-layout">
        <div class="date">
            <h5 class="px-2 mb-2 hello">Резервация</h5>
            <h4 class="px-2 choose-date">Избери дата:</h4>
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
            <h5 class="px-2 hello">Час</h5>
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
            <h5 class="px-2 hello">Обобщение</h5>
            <div class="row m-3">
                <div class="col-5 orange rounded-start p-4 d-flex flex-column justify-content-between">
                    <div>
                        <p>Ср</p>
                        <p>21</p>
                        <hr>
                        <p>11:00</p>
                    </div>
                    <div>
                        <button>OK</button>
                    </div>
                </div>
                <div class="col-7 carta rounded-end">
                    <div class="order-preview">
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
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    .choose-date{
        font-family: "NotoSerifExtraCondensedBlackItalic", serif;
        font-size: 2rem;
        font-weight: 600;
        font-style: italic;
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
        height: 25vh;
    }
    .time {
        height: 20vh;
    }
    .summary {
        height: 48vh;
        .row {
            height: calc(100% - 80px);
        }
    }
    .days {
        background-color: #F3E0B8;
        overflow-x: scroll;
        white-space: nowrap;
        &::-webkit-scrollbar {
            display: none;
        }
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
        color: #525252;
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