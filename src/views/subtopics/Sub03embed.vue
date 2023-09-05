<script setup>
import NextTopic from "@/components/NextTopic.vue";
import Title from "@/components/Title.vue"
import Background from "@/components/Background.vue";
import WhyEmbedThirdParty from "@/components/sub03what/WhyEmbedThirdParty.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import Sidebar from "@/components/Sidebar.vue";
import JourneyOfAnHttpRequest from "@/components/sub01journey/JourneyOfAnHttpRequest.vue";
import TopicSummary from "@/components/TopicSummary.vue";
import topics from "@/router/topics.json";


const previous = "/sub03whyTrack"
const next = "/sub04how"
const up = "/"
const nextTitle= "How web tracking works"
const prevTitle="Why first parties track you"

const title = "Third Party Integrations"
const subTitle= "Why websites have third-parties embedded ?"

const topic = topics.find(t => t.id === 1)
const topicSummary= topic.summary


</script>

<template>
    <div class="row justify-content-center">
        <div class="d-flex flex-nowrap">
            <Sidebar/>
            <div class="content-col">
                <Title :title="title" :subTitle="subTitle"></Title>
                <div class="row">
                    <WhyEmbedThirdParty/>
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
