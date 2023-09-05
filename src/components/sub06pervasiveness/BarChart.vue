<script setup>
import { GChart } from 'vue-google-charts'


let chartData = [
    ['Hostname', 'Percent', { role: 'style' } ],
    ['facebook.com',60,'#5d538e'],
    ['doubleclick.net',35,'#b18ec2'],
    ['googleapis.com',29,'#aa78ab'],
    ['crashlytics.com',26,'#f6d5e8'],
    ['googlesyndication.com',20,'#5d538e'],
    ['appsflyer.com',20,'#b18ec2'],
    ['google.com',19,'#aa78ab'],
    ['googleusercontent.com',19,'#f6d5e8'],
    ['gstatic.com',18,'#5d538e'],
    ['accountkit.com',14,'#b18ec2'],
    ['supersonicads.com',9,'#aa78ab'],
    ['akamaihd.net',9,'#f6d5e8'],
    ['unity3d.com',8,'#5d538e'],
    ['adjust.com',8,'#b18ec2'],
    ['applovin.com',8,'#aa78ab'],
    ['mopub.com',8,'#f6d5e8'],
    ['google-analytics.com',7,'#5d538e'],
    ['helpshift.com',7,'#b18ec2'],
    ['googleadservices.com',6,'#aa78ab'],
    ['ntp.org',6,'#f6d5e8'],
    ['moatads.com',6,'#5d538e'],
    ['amazonaws.com',6,'#b18ec2'],
    ['supersonic.com',6,'#aa78ab'],
    ['applvn.com',5,'#f6d5e8']
]


let chartOptions = {
    backgroundColor: 'transparent',
    hAxis: {
        title: 'Percent',
        textStyle: {
            color: 'white',
            fontSize: 15,

        },
        titleTextStyle: { color: '#fff' }
    },
    vAxis: {
        title: 'Hostname',
        textStyle: {
            color: 'white',
            fontSize: 15,

        },
        titleTextStyle: { color: '#fff' }
    },
    height: 900,
    legend: 'none'
}
</script>

<template>
    <GChart
        type="BarChart"
        :data="chartData"
        :options="chartOptions"
    />
</template>

<style scoped>

</style>