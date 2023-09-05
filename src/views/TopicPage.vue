<script setup>
    import LandingView from '../components/LandingView.vue'
    import TopicOverview from '../components/TopicOverview.vue'
    import TopicList from '../components/TopicList.vue'

    import topics from '@/router/topics.json'
    import Background from "@/components/Background.vue";

    let dst = "/sub00elements"
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
            <div class="col mb-5 mt-5">
                <TopicList :topics="topics"/>
            </div>
        </div>

        <footer class="app-footer">
            <div class="row">
                <div class="col " >
                    <p >A Journey into transparent web tracking</p>
                    <p>© 2023</p>
                </div>
                <div class="col">
                    <a href="/glossar" class="custom-link">ABOUT</a>
                </div>
                <div class="col">
                    <a href="/glossar" class="custom-link">CONTACT</a>
                </div>
            </div>

        </footer>
    </div>

    <Background/>

</template>


<style scoped>
    .app-footer {
    margin-top: 40px;
    padding: 20px 0;
    background:rgba(255, 255, 255, 0.05);
    background-size: cover;
    text-align: center
}
    .custom-link {
        text-decoration: none;
        color: rgba(21,242,194,0.8);
        font-size: 20px;
        text-transform: uppercase;
    }
</style>