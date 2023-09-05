<script setup>
import NextTopic from "@/components/NextTopic.vue";
import Title from "@/components/Title.vue";
import GdprPrinciple from "@/components/sub7gdpr/GdprPrinciple.vue";
import Sidebar from "@/components/Sidebar.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import Background from "@/components/Background.vue";
import WhyEmbedThirdParty from "@/components/sub03what/WhyEmbedThirdParty.vue";
import TopicSummary from "@/components/TopicSummary.vue";
import topics from "@/router/topics.json";

const previous = "/sub06pervasiveness"
const next = "/sub08pet"
const up = "/"
const nextTitle= "The pervasiveness of web tracking"
const prevTitle= "What can you do about it"
const title = "General Data Protection Regulation"  
const subTitle= "What are the 7 Key Principles of the GDPR"

const topic = topics.find(t => t.id === 3);
const topicPreview = topic.summary;

</script>

<template>
    <div class="row justify-content-center">
        <div class="d-flex flex-nowrap">
            <Sidebar/>
            <div class="content-col">
                <Title :title="title" :subTitle="subTitle"></Title>
                <div class="row">
                    <GdprPrinciple/>
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
    justify-content: flex-start;
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
