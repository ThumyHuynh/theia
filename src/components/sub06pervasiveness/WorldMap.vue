<script setup>
import { GChart } from 'vue-google-charts'

let chartData = [
    ['Country', 'Trackers'],
    ['US', 819],
    ['DE', 64],
    ['IE', 55],
    ['CN', 40],
    ['NL', 26],
    ['SG', 25],
    ['CA', 17],
    ['IN', 14],
    ['GB', 10],
    ['SE', 7],
    ['HK', 6],
    ['RU', 5],
    ['UK', 4],
    ['JP', 4],
    ['FR', 4],
    ['KR', 3],
    ['CZ', 2],
    ['CH', 1],
    ['PL', 1]
]

let chartOptions = {
    backgroundColor: 'transparent',
    datalessRegionColor: ' ',
    defaultColor: '#2e2b65',
    colorAxis: {colors: ['#00d3d3', '#af03a6']},
    chart: {
        title: '',
        subtitle: '',


    }, legend: { position: 'none' }
}
</script>

<template>
    <GChart
        :settings="{ packages: ['geochart'] }"
        type="GeoChart"
        :data="chartData"
        :options="chartOptions"
    />
</template>

<style scoped>

</style>