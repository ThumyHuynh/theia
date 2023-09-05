<script setup>
    import TopicOverviewItem from './TopicOverviewItem.vue'

    defineProps({
        topics: {
            type: Array,
            required: true
        }
    })
</script>

<template>
    <div class="container backdrop px-5 mt-5">
        <div class="row">
            <div class="col text-center text-light text-uppercase mb-5 mt-3">
                <h1>Topics</h1>
            </div>
        </div>
        <div class="row">
            <div class="col" v-for="topic in topics">
                <TopicOverviewItem :topic="topic"/>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .backdrop {
        background-color: rgba(255, 255, 255, 0.1);
        padding: 2em;
        margin-top: 1em;
    }
    h1{
        font-weight: bold;
        font-size: xxx-large;
        color: white
    }
</style>