<script setup>
          import NextTopic from "@/components/NextTopic.vue";
          import Title from "@/components/Title.vue";
          import PetsAndTets from "@/components/sub08pet/PetsAndTets.vue";
          import Sidebar from "@/components/Sidebar.vue";
          import Background from "@/components/Background.vue";
          import TopicSummary from "@/components/TopicSummary.vue";
          import topics from "@/router/topics.json";

          const previous = "/sub07gdpr"
          const next = "sub09protect"
          const up = "/"
          const nextTitle= "How can you protect your privacy online"
          const prevTitle= "GDPR"
          const title = "PETs and TETs"
          const subTitle= "The tools that help us protect our privacy"

          const topic = topics.find(t => t.id === 4);
          const topicPreview = topic.preview;
      </script>

<template>
    <div class="row justify-content-center">
        <div class="d-flex flex-nowrap">
            <Sidebar/>
            <div class="content-col">
                <Title :title="title" :subTitle="subTitle"></Title>
                <TopicSummary  :summary="topicPreview" ></TopicSummary>
                <div class="row">
                    <PetsAndTets/>
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
