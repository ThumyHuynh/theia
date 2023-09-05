<script setup>
    import Subtopic from './Subtopic.vue'
    import Fab from "@/components/Fab.vue";


    defineProps({
        topic: {
            type: Object,
            required: true
        }
    })

</script>

<template>
    <div class="container-fluid topic" :style=" {'background-color': topic.backgroundColor }"  v-if="topic.id" :id="topic.id">
        <div class="row mt-5">
            <div class="col-3 custom-spacing">
                <h1>{{ topic.title }}</h1>
                <p>{{ topic.preview }}</p>
            </div>
            <div class="col">
                <div class="d-flex flex-wrap">
                    <div class="subtopic-container" v-for="subtopic in topic.subtopics">
                        <Subtopic :subtopic="subtopic"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<style scoped>
.topic {
    padding: 2em;
    margin-top: 1em;
}

p{
    margin-top: 2rem;
    width: 15rem;
    font-size: medium;
    font-weight: bold;
    text-align:justify;
}
.custom-spacing {
    margin-left: 50px;
    margin-right: 15px;
}
.subtopic-container {
    flex: 0 0 auto;
}
h1{
    font-weight: 1000;
}
</style>