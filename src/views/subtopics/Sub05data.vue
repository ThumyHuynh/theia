<script setup>

        import NextTopic from "@/components/NextTopic.vue";
        import Title from "@/components/Title.vue";
        import Background from "@/components/Background.vue";
        import Sidebar from "@/components/Sidebar.vue";
        import TopicSummary from "@/components/TopicSummary.vue";
        import TrackingMechanism from "@/components/sub04how/TrackingMechanism.vue";
        import topics from "@/router/topics.json";
        import WhatDataCollected from "@/components/sub03what/whatDataCollected.vue";

        const topic = topics.find(t => t.id === 3);
        const topicPreview = topic.preview;

        const previous = "/sub04how"
    const next = "/sub06pervasiveness"
    const up = "/"
    const nextTitle= "The pervasiveness of web tracking"
    const prevTitle= "How web tracking works"
        const title = ""
        const subTitle= "What data is being collected ?"

    </script>

<template>
    <div class="row justify-content-center">
        <div class="d-flex flex-nowrap">
            <Sidebar/>
            <div class="content-col">
                <Title :title="title" :subTitle="subTitle"></Title>
                <div class="map-container">
                    <WhatDataCollected/>
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

            .map-container {
                width: 100%;
                margin-left: 10rem;
                margin-top: -5rem;
            }
        </style>
