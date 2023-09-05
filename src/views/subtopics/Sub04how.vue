<script setup>
import NextTopic from "@/components/NextTopic.vue";
import Title from "@/components/Title.vue";
import TrackingMechanism1 from "@/components/sub04how/TrackingMechanism1.vue";
import Background from "@/components/Background.vue";
import Sidebar from "@/components/Sidebar.vue";
import TopicSummary from "@/components/TopicSummary.vue";
import topics from "@/router/topics.json";


const previous = "/sub03embed"
const next = "/sub05data"
const up = "/"
const nextTitle= "What data is being collected"
const prevTitle= "Why websites have third parties emedded"
const title = "The mechanism of web tracking"  
const subTitle= "How web tracking works"


const topic = topics.find(t => t.id === 2);
const topicPreview = topic.summary;

</script>


<template>
    <div class="row justify-content-center">
        <div class="d-flex flex-nowrap">
            <Sidebar/>
            <div class="content-col">
                <Title :title="title" :subTitle="subTitle"></Title>
                    <TrackingMechanism1/>
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
    justify-content: flex-start;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    max-height: calc(100vh);
    padding: 1rem;
}
.row {
    margin-left: 0;
    margin-right: 0;
}
</style>