<script setup>
import LandingView from '../components/LandingView.vue'
import TopicOverview from '../components/TopicOverview.vue'
import TopicList from '../components/TopicList.vue'

import topics from '@/router/topics.json'
import Background from "@/components/Background.vue";


</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <LandingView />
            </div>
        </div>
        <div class="row">
            <div class="col mb-5 mt-5">
                <TopicOverview :topics="topics"/>
            </div>
        </div>

        <div class="row">
            <div class="col mb-2 mt-5">
                <TopicList :topics="topics"/>
            </div>
        </div>

        <footer class="app-footer">
            <p>© 2023</p>
            <p>A Journey into transparent web tracking</p>
        </footer>
    </div>

    <Background/>

</template>

<style scoped>
.app-footer {
    margin-top: 40px;
    padding: 20px 0;
    background:rgba(255, 255, 255, 0.1);
    background-size: cover;
    text-align: center
}
</style>