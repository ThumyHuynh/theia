<script setup>
import Topic from './Topic.vue'
import Fab from "@/components/Fab.vue";

defineProps({
    topics: {
        type: Array,
        required: true
    }
})
</script>

<template>
    <div class="container-fluid  ">
        <div v-for="topic in topics" :key=topic.title class="row topic">
            <div class="col">
                <Topic :topic="topic"/>
            </div>
        </div>
        <div class="topic-list-container" style="background-color: red !important;">
            <Fab/>
        </div>
    </div>
</template>

<style scoped>
.topic-list-container {
    position: relative;
}
</style>
