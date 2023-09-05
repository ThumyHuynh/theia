<script setup>
import NextTopic from "@/components/NextTopic.vue";
import Title from "@/components/Title.vue"
import TheTrackers from "@/components/sub03what/TheTrackers.vue"
import Background from "@/components/Background.vue";
import topics from "@/router/topics.json";
import Sidebar from "@/components/Sidebar.vue";


const previous = "/sub02map"
const next = "/sub03whyTrack"
const up = "/"
const nextTitle= "Why first parties track you"
const prevTitle= "Map of the internet"

const title = "First- and third party tracker"
const subTitle= "Who are the trackers?"

const topic = topics.find(t => t.id === 2);

</script>

<template>
    <div class="row justify-content-center">
        <div class="d-flex flex-nowrap">
            <Sidebar/>
            <div class="content-col">
                <Title :title="title" :subTitle="subTitle"></Title>
                <div class="row">
                    <TheTrackers/>
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
