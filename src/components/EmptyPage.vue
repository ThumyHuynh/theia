

<script setup>

import Title from "@/components/Title.vue";
import Background from "@/components/Background.vue";
import {RouterLink} from "vue-router";

const title = "Exciting new content is on the way!"
const subTitle= " This page will be available shortly"

</script>

<template>
    <div class="container">
        <Title :title="title" :subTitle="subTitle"></Title>
        <RouterLink class="navbar-brand" aria-current="page" to="/">
            <img src="@/assets/logo.png" width="800" height="600" class="d-inline-block align-top" alt=""/>
        </RouterLink>
        <Background></Background>
    </div>



</template>


<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}


</style>