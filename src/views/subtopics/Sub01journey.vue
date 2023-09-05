<script setup>
import NextTopic from "@/components/NextTopic.vue";
import Title from "@/components/Title.vue";
import TopicSummary from "@/components/TopicSummary.vue";
import JourneyOfAnHttpRequest from "@/components/sub01journey/JourneyOfAnHttpRequest.vue";
import Background from "@/components/Background.vue";
import Sidebar from "@/components/Sidebar.vue";

const previous = "/sub00elements"
const next = "/sub02build"
const up = "/"
const nextTitle= "Build your own digital footprint"
const prevTitle= "The elements of the Internet"

const title= "The journey of an HTTP request"
const subTitle= "What happens when you enter a website ?"
</script>

<template>
    <div class="row justify-content-center">
        <div class="d-flex flex-nowrap">
            <Sidebar/>
            <div class="content-col">
                <Title :title="title" :subTitle="subTitle"></Title>
                <div class="row">
                    <JourneyOfAnHttpRequest/>
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