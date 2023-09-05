<script setup>
import NextTopic from "@/components/NextTopic.vue";
import { ref, onMounted } from 'vue';
import Sidebar from "@/components/Sidebar.vue";
import Background from "@/components/Background.vue";
import Title from "@/components/Title.vue";
import DonutChart from "@/components/sub06pervasiveness/DonutChart.vue";
import BuildGraph from "@/components/sub02build/BuildGraph.vue";
import WhyEmbedThirdParty from "@/components/sub03what/WhyEmbedThirdParty.vue";
import SpiegelGraph from "@/components/sub06pervasiveness/SpiegelGraph.vue";


const previous = "/sub05data"
const next = "/sub06whoTrack"
const up = "/"
const nextTitle= "Who are the Third party tracker"
const prevTitle= "What data is being collected"
const title="Pervasiveness of web tracking"
const subTitle="How widespread is web tracking?"

</script>



<template>
    <div class="row justify-content-center">
        <div class="d-flex flex-nowrap">
            <Sidebar/>
            <div class="content-col">
                <Title :title="title" :subTitle="subTitle"></Title>
                <div class="row align-items-center mb-5 mt-5">
                    <div class="col justify-content-center">
                        <DonutChart></DonutChart>
                    </div>
                    <div class="col text">
                        <div>
                            <h3 style="color: white" >Domains</h3>
                            <p class="details">As part of our research, we analysed 8838 websites. This chart shows you a breakdown of the number of third-party trackers we found in each. Only 12.6% of the websites embedded no third-party trackers at all - in a fully private world, that percentage would be 100!</p>
                        </div>

                    </div>
                </div>
                <div class="row align-items-center mb-5 mt-5">
                    <div class="col text">
                        <p class="text">In many cases, websites embed multiple third-party services.</p>
                        <p class="details">Let's take a closer look at <i>spiegel.de</i>, a prominent German news website to see how pervasive third-party tracking is.</p>
                        <p class="details">Go ahead and <b style="color:rgba(21,242,194,1)">click on the node </b> on the right that represents <i>spiegel.de</i> to trigger the additional requests caused by a visit to the website!</p>
                    </div>
                    <div class="col justify-content-center">
                        <SpiegelGraph></SpiegelGraph>
                    </div>
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

.text{
    font-size: large;
    font-weight: bold;
}

.row {
    margin-left: 0;
    margin-right: 0;
}

.hover-container {
    position: relative;
    display: inline-block;
}

.hover-text {
    visibility: hidden;
    color: white;
    transform: translate(-50%, 0);
    opacity: 0;
    transition: opacity 0.9s ease;
    position: absolute;
    z-index: 2;
    top:10%;
    left: 14rem;
}

.hover-container:hover .hover-text {
    visibility: visible;
    opacity: 1
}

h3{
    font-weight: bold;
}
.hover-effect {
    transition: opacity 0.5s ease;
    font-size: large;
    font-weight: bold;
}

.hover-container:hover .hover-effect {
    opacity: 0;
}

.hover-container:hover .hover-text {
    visibility: visible;
    opacity: 1
}

.details {
    flex: 1;
    margin-left: 1rem;
    width: 30rem;
}


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

