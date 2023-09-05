<script setup>
import NextTopic from "@/components/NextTopic.vue";
import Title from "@/components/Title.vue";
import TopicSummary from "@/components/TopicSummary.vue";
import Background from "@/components/Background.vue";
import Sidebar from "@/components/Sidebar.vue";
import ElementsOfTheInternet1 from "@/components/sub00elements/ElementsOfTheInternet1.vue";
import topics from"@/router/topics.json"

const previous = ""
const next = "/sub01journey"
const up = "/"
const nextTitle= "The journey of an HTTP request"
const prevTitle= ""
const title= "The elements of the Internet"
const subTitle= "What are the core elements driving the Internet ?"

const topic = topics.find(t => t.id === 1);
const topicPreview = topic.preview;

</script>

<template>
    <div class="row justify-content-center">
        <div class="d-flex flex-nowrap">
            <Sidebar/>
            <div class="content-col">
                <Title :title="title" :subTitle="subTitle"></Title>
                <div class="row">
                <ElementsOfTheInternet1></ElementsOfTheInternet1>
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

</style>