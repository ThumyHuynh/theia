<script setup>
import NextTopic from "@/components/NextTopic.vue";
import ForceGraph from 'force-graph';
import { ref, onMounted } from 'vue';
import blocks from '@/assets/blocks.json';
import Sidebar from "@/components/Sidebar.vue";
import Background from "@/components/Background.vue";
import Title from "@/components/Title.vue";

import BarChart from "@/components/sub06pervasiveness/BarChart.vue";
import TopicSummary from "@/components/TopicSummary.vue";

const previous = "/sub06pervasiveness"
const next = "/sub06whereData"
const up = "/"
const nextTitle= "Where is my data send"
const prevTitle= "The pervasiveness of web tracking"
const title="The biggest Third Party trackers"
const subTitle=" Who Dominates the Landscape of Third-Party Tracking?"

const graph = ref(null);
const data = [{name: "Nontracker", value: 20}, {name: "Tracker", value: 80}]


</script>

<template>
    <div class="row justify-content-center">
        <div class="d-flex flex-nowrap">
            <Sidebar/>
            <div class="content-col">
                <Title :title="title" :subTitle="subTitle"></Title>
                <div class="bar-chart-container">
                    <BarChart/>
                </div>
                <div class="description">
                    <p>At the top of the chart, we notice dominating hostnames like <strong>facebook.com</strong>, <strong>google.com</strong>, and <strong>doubleclick.net</strong>, which represent significant percentages of the overall traffic. This highlights the dominance of these platforms in the online space relating to advertisements, social interactions, and data tracking.</p>

                    <p>As we move down the chart, there's a noticeable shift in the pattern, forming what's referred to as a "long tail." The bars become progressively shorter, symbolizing a decrease in percentage. Hostnames like akamaihd.net, unity3d.com, moatads.com, and amazonaws.com are included in this tail.</p>

                    <p>This shows that users unwittingly interact with a broad spectrum of trackers, but only a small number of trackers are 'omnipresent'.</p>
                </div>

                <div class="row">
                    <NextTopic :previous=previous :next=next :up=up :nextTitle=nextTitle :prevTitle="prevTitle"/>
                </div>
            </div>
        </div>
    </div>
    <Background/>
</template>


<style scoped>
.description{
    text-align: justify;
    font-size: 17px;
    margin-left: 3rem;
    margin-right: 3rem;


}

.content-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    max-height: calc(100vh);
    flex: 1;

}

.bar-chart-container {
    width: 100%;
    margin-left: 10rem;
    margin-top: -5rem;
}
.row {
    margin-left: 0;
    margin-right: 0;
}

</style>
