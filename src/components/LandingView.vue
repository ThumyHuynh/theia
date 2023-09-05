
<script setup>
import Title from "@/components/Title.vue";

const title = "Web tracking"
const subTitle= " A Journey into transparent web tracking"
</script>

<template>
    <div class="row text-center text-light">
        <div>
            <Title :title="title" :subTitle="subTitle"></Title>
        </div>

        <div class="row text-center text-light align-items-center">
            <div class="col landing">
                <img src="@/assets/logo.png" alt="landing" class=" my-4" width="60%">
            </div>
        </div>


        <div class="row mb-3">
            <div class="col">
                <div class="row text-center justify-content-center flex-direction-column mb-3">
                    <div class="col align-items-center ">
                        <h5>We create stories with interactive visualisations to guide you through the world of web tracking.  </h5>
                    </div>
                    <div class="row text-center justify-content-center">
                        <div class="col align-items-center">
                            <h5> Think of us as a friend showing you the way, providing you with the knowledge and tools you need to make informed decisions about your online privacy and internet safety. </h5>
                        </div>
                    </div>
                    <div class="row text-center justify-content-center mb-3">
                        <div class="col-10 align-items-center">
                            <h5 >By connecting privacy experts and regular people like you, we change the confusing world of web tracking into something everyone can understand. </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="row mt-5">
            <div class="col">
                <div class="row">
                    <div class="col align-right-flex">
                        <img alt="Web Studio" class="img-fluid rounded-circle" width="65%" src="@/assets/logoTellStories1.png" />
                    </div>
                    <div class="col ">
                        <h4 class=" text">Utilize Storytelling to Share Knowledge and Craft Engaging Narratives</h4>
                    </div>
                </div>

            </div>

            <div class="col">
                <div class="row">
                    <div class="col align-right-flex">
                        <img alt="Web Studio" class="img-fluid rounded-circle " width="65%" src="@/assets/logoEmpower1.png"   />
                    </div>
                    <div class="col">
                        <h4 class="text">Empower users with facts and increase privacy awareness</h4>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="row">
                    <div class="col align-right-flex">
                        <img alt="Web Studio" class="img-fluid rounded-circle mb-0" width="65%" src="@/assets/logoBridge1.png" />
                    </div>
                    <div class="col">
                        <h4 class=" text">Bridging the gap between privacy experts and internet users</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>


<style scoped>


.landing{
    z-index: -1;
    margin-top: -7rem;
    margin-bottom:-6rem ;
}
h5{
    font-size: 19px;

}
.align-right-flex {
    display: flex;
    justify-content: flex-end;
    margin-right: 1em;
}


.text{
    font-size: 17px;
    text-align:center;
    font-weight: bold;
    color: #9cecf3;
}

</style>