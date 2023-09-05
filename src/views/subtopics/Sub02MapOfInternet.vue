<script setup>
import NextTopic from "@/components/NextTopic.vue";

import Sidebar from "@/components/Sidebar.vue";
import Background from "@/components/Background.vue";
import Title from "@/components/Title.vue";
import TopicSummary from "@/components/TopicSummary.vue";

import BuildGraph from "@/components/sub02build/BuildGraph.vue";

import topics from "@/router/topics.json";


const previous = "/sub02build"
const next = "/sub03who"
const up = "/"
const nextTitle= "First- & Third Party Tracker"
const prevTitle= "Build your map of the internet"
const title="Map of the internet"
const subTitle="How does a network graph with real data look like? "

const topic = topics.find(t => t.id === 1)
const topicPreview = topic.summary

</script>


<template>
    <div class="row justify-content-center">
        <div class="d-flex flex-nowrap">
            <Sidebar/>
            <div class="content-col">
                <Title :title="title" :subTitle="subTitle"></Title>
                <div class=" row mt-5 mb-4 " style="text-align: left">
                    <p>This network graph illustrates the digital footprint of x crawled websites, providing insights of their connections.
                    Feel free to zoom in or out, and drag the nodes to customize the layout and explore the </p>
                <ul class="legend">
                    <li class="legend-item">
                        <span class="legend-color higher-trackers"></span>
                        Host
                    </li>
                    <li class="legend-item">
                        <span class="legend-color fewer-trackers"></span>
                       Harmless Third-party
                    </li>
                    <li class="legend-item">
                        <span class="legend-color  harmful"></span>
                        Tracking Third-party
                    </li>
                </ul>
                </div>
                <div class="row">
                    <BuildGraph/>
                </div>
                <TopicSummary  :summary="topicPreview" ></TopicSummary>
                    <div class="row">
                    <NextTopic :previous=previous :next=next :up=up :nextTitle=nextTitle :prevTitle="prevTitle"/>
                </div>
            </div>
        </div>
    </div>
    <Background/>
</template>
<style scoped>

.content-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    max-height: calc(100vh);
    padding: 4rem;
}
.row {
    margin-left: 0;
    margin-right: 0;
}


.legend {
    padding: 1rem 0;
    margin-left: 1rem;

}

.legend-item {
    display: flex;
    align-items: center;
    margin: 0.5rem 0;
}

.legend-color {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 8px;
}

.higher-trackers {
    background-color: rgba(21,242,194,1)
}

.fewer-trackers {
    background-color: rgba(84,48,108,1)
}

.harmful {
    background-color: rgba(204,7,43,1)
}


</style>
