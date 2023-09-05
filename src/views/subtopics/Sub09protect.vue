<script setup>
import NextTopic from "@/components/NextTopic.vue";
import Title from "@/components/Title.vue";
import HowProtectPrivacy from "@/components/sub08pet/HowProtectPrivacy.vue";
import Sidebar from "@/components/Sidebar.vue";
import Background from "@/components/Background.vue";
import TopicSummary from "@/components/TopicSummary.vue";
import topics from "@/router/topics.json";

const previous = "/sub07gdpr"
const next = "/"
const up = "/"
const nextTitle = "Home"
const prevTitle = "PET's and TET's"
const title = "Measures against unwanted tracking"
const subTitle= "How can you protect your privacy online"

const topic = topics.find(t => t.id === 4);
const topicPreview = topic.summary;

</script>
<template>
    <div class="row justify-content-center">
        <div class="d-flex flex-nowrap">
            <Sidebar/>
            <div class="content-col">
                <Title :title="title" :subTitle="subTitle"></Title>
                <div class="row">
                    <HowProtectPrivacy></HowProtectPrivacy>
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
    align-items: center; /* Centers the items horizontally */
    justify-content: flex-start; /* Aligns items to the top of the container */
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    max-height: calc(100vh); /* You may need to adjust this value */
    padding: 1rem; /* Add some padding to prevent content from touching the edges */
}

.row {
    margin-left: 0;
    margin-right: 0;
}
</style>
