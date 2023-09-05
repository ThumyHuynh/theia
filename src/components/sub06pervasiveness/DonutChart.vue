<script setup>
import {GChart} from 'vue-google-charts'

let chartData = [
    ['', ''],
    ['0 Trackers', 1113],
    ['1-10 Trackers', 4520],
    ['11-20 Trackers', 1602],
    ['21-30 Trackers', 772],
    ['31-40 Trackers', 364],
    ['41-30 Trackers', 233],
    ['51-40 Trackers', 129],
    ['61-30 Trackers', 23],
    ['71-40 Trackers', 62],
    ['81-40 Trackers', 12],
    ['91-40 Trackers', 6],
    ['101-110', 2],

]

let chartData2 = [
    ['Number of trackers', 'Percentage of websites'],
    ['0 Trackers', 1113],
    ['1-10 Trackers', 4520],
    ['11-20 Trackers', 1602],
    ['21-30 Trackers', 772],
    ['31+ Trackers', 821]
]

let chartOptions = {
    backgroundColor: 'transparent',
    pieHole: 0.6,

    width: 500,
    height: 400,
    slices: {
        0: {color: '#15e8c2'},
        1: {color: '#54306c'},
        2: {color: '#cc072b'}
    },
    pieSliceBorderColor: 'transparent',
    legend: {
        position: 'bottom',
        textStyle: {
            color: 'white',
            fontSize: 15,

        }
    },
    tooltip: {
        text: 'percentage'
    },
    pieSliceText: 'none',
}
</script>

<template>
    <GChart
        type="PieChart"
        :data="chartData2"
        :options="chartOptions"
    />
</template>

<style scoped>

</style>