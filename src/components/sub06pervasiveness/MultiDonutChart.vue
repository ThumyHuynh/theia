
<script setup>
import { GChart } from 'vue-google-charts'

let chartData1 = [
    ['', ''],
    ['First-Party', 169],
    ['Third-Party Non-Tracker', 43],
    ['Third-Party Tracker', 27],
]

let chartData2 = [
    ['', ''],
    ['First-Party', 540],
    ['Third-Party Non-Tracker', 76],
    ['Third-Party Tracker', 39],
]

let chartOptions = {
    backgroundColor: 'transparent',
    colorAxis: {colors: ['#15e8c2', '#a924fa']},
    pieHole: 0.6,
    width: 200,
    height: 200,
    slices: {
        0: { color: '#15e8c2' },
        1: { color: '#a924fa' }
    },
    pieSliceBorderColor: 'transparent',
    legend: {
        position: 'none'
    },
    tooltip: {
        text: 'percentage'
    },
    pieSliceText: 'none'
}
</script>

<template>
    <div class="donut-container">
        <div class="donut-chart">
            <GChart
                type="PieChart"
                :data="chartData1"
                :options="chartOptions"
            />
        </div>
        <div class="donut-chart">
            <GChart
                type="PieChart"
                :data="chartData2"
                :options="chartOptions"
            />
        </div>
    </div>
</template>


<style scoped>
.donut-container {
    display: flex;
    justify-content: center;
    align-items: center;
}
.donut-chart {
    margin-right: 10px;
}
</style>