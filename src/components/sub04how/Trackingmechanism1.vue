<script setup>
import NextTopic from "@/components/NextTopic.vue";
import Background from "@/components/Background.vue";
import {ref, onMounted, onBeforeUnmount, computed} from 'vue'
import TopicSummary from "@/components/TopicSummary.vue";
import ForceGraph from "force-graph";
import Title from "@/components/Title.vue";
import topics from "@/router/topics.json";

import cookie from '@/assets/cookie.svg';

// NAVIGATION CONSTANTS
const previous = "/sub01journey"
const next = "/sub03who"
const up = "/"
const nextTitle= "Understanding first- and third party tracker"
const prevTitle= "The journey of an HTTP request"


const topic = topics.find(t => t.id === 1);
const topicPreview = topic.summary;

// TEMPLATE REFS
const contentCol = ref(null);
const fixedCol = ref(null);
const graphView = ref(null);
const timelineItems = ref([])

const timeline = [
    {
        id: "cookie",
        headline: "Cookies",
        text: "Ever wonder why websites seem to 'remember' you? That's cookies at work! These are small bits of data stored on your computer by websites, capturing your preferences and activity to provide a personalised experience.",
        example: "when you visit an online shopping site and add items to your cart. If you leave the site and come back later, the items are still in your cart, even if you haven't logged in. This is because cookies have stored that information on your computer, enabling the website to \"remember\" your previous activity and preferences, providing a more personalized experience",
        img:"src/assets/cookie.svg",
        color:"#f64f90"
    },
    {
        id: "fingerprint",
        headline: "Fingerprints",
        text: "Device fingerprinting collects and combines various unique attributes from a device, such as screen resolution, operating system, installed fonts, and software plugin versions, to create identifiers. These identifiers are then used to track user behavior across different websites.",
        example:"Two individuals might be using the same model of a laptop, but one has a particular set of browser plugins installed while the other does not. This difference, among others, helps in distinguishing and tracking each user's activity, even if they're visiting the same websites.",
        img:"src/assets/fingerprint.png",
        color:"#d992fd"
    },
    {
        id: " trackingPixels",
        headline: "Tracking Pixels",
        text: " A tracking pixel, also known as a web beacon or pixel tag, is a tiny 1x1 image file that's often embedded into the code of a website or email and collects information about user behaviour. It's typically transparent or the same color as the background, so you can't see it",
        example:"While browsing a pair of shoes on an online store, a tracking pixel on the site records your interest in that item. Later, this information is used by advertisers to target you with an ad for those exact shoes on different websites, utilizing the tracking pixel as a tool to personalize your online experience.",
        img:"src/assets/pixel.png",
        color:"#38b6ff"
    },
    {
        id: "likeAndshare",
        headline: "Like and Share button",
        text: "These buttons can detect and communicate your visit to the corresponding social media platforms (Facebook). The information collected is then used by the social media platforms to understand your interests and online behavior, leading to personalized ads and content tailored specifically to your preferences",
        example: "You are reading an article about sustainable living on a blog. Even if you don't click the 'Like' button, Facebook (if a Facebook Like button is embedded on the page) can recognize that you've visited that specific page. Over time, collecting such data points might lead to you seeing more ads or content related to sustainable living on your Facebook feed",
        img:"src/assets/likeAndShare.png",
        color:"#6f5ce6"
    },

]

</script>

<template>
    <div class="row justify-content-center">
                <div class="row mt-5 ">
                    <div class="col scrollable timeline">
                        <div v-for="item in timeline" :key=item.id class="timeline-item d-flex align-items-center" ref="timelineItems" :id=item.id>
                            <i></i>
                            <div>
                                <h3 :style="{ color: item.color }" >{{ item.headline }}</h3>
                                <p class="details">{{ item.text }}</p>
                                <div class="hover-container">
                                    <p class="hover-effect" :style="{ color: item.color }">more</p>
                                    <span class="hover-text details">{{ item.example}}</span>
                                </div>
                            </div>
                            <div class="image-container">
                                <h3 class="hover-text" >more</h3>
                                <img class="cookie-image" :src="item.img">
                            </div>
                        </div>

                    </div>
                </div>
            </div>


    <Background/>
</template>


<style scoped>

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
    transition: opacity 0.5s ease; /* Add transition for smooth effect */
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
h5{
    font-size: xxx-large;
}

.image-container {
    position: relative;
}

.cookie-image {
    max-width: 50%;
    height: auto;
    display: block;
    margin-left: 7rem;
    margin-right: 4rem;
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
    margin-top: 3rem;
}
.row {
    margin-left: 0;
    margin-right: 0;
}


.timeline-item {
    margin-top: 2rem;
    display: flex;
    position: relative;
}

.details {
    flex: 1;
    margin-left: 1rem;
    width: 30rem;
}

i {
    display: flex;
    place-items: center;
    place-content: center;
    width: 32px;
    height: 32px;
    color: var(--color-text);
}

h5 {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 0.4rem;
}

i {
    top: calc(50% - 6px);
    left: -5px;
    position: absolute;
    border: 1px solid #ffffff;
    background: #ffffff;
    border-radius: 8px;
    width: 12px;
    height: 12px;
}

.timeline-item {
    margin-top: 1.5rem;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
    margin-bottom: 9rem;
}

.timeline-item:before {
    content: ' ';
    border-left: 2px solid;
    border-color: white;
    position: absolute;
    left: 0;
    bottom:  calc(50% + 3px);
    height:  calc(100% - 3px);
}

.timeline-item:after {
    content: ' ';
    border-left: 2px solid;
    position: absolute;
    border-color: white;
    left: 0;
    top:  calc(50% + 3px);
    height: calc(100% - 3px);
}

.timeline-item:first-of-type:before {
    display: none;
}

.timeline-item:last-of-type:after {
    display: none;
}
</style>
