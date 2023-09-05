<script setup>
import NextTopic from "@/components/NextTopic.vue";
import Title from "@/components/Title.vue"
import Background from "@/components/Background.vue";
import TheMotivation from "@/components/sub03what/TheMotivation.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import Sidebar from "@/components/Sidebar.vue";
import WhyEmbedThirdParty from "@/components/sub03what/WhyEmbedThirdParty.vue";
import TopicSummary from "@/components/TopicSummary.vue";


const previous = "/sub03who"
const next = "/sub03embed"
const up = "/"
const nextTitle= "Why websites have third-parties embedded"
const prevTitle= "Understanding first- and third party tracker"
const title = "First-Party Data Collection"
const subTitle =" Why first parties track you?"

</script>

<template>
    <div class="row justify-content-center">
        <div class="d-flex flex-nowrap">
            <Sidebar/>
            <div class="content-col">
                <Title :title="title" :subTitle="subTitle"></Title>
                <div class="row">
                    <TheMotivation/>
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
