<script setup>


import {ref} from "vue";
import Background from "@/components/Background.vue";



const topics = ref([
    {
        title: "Device IDs",
        description: "These are unique identifiers associated with a specific device, such as a smartphone, tablet, or computer. Device IDs can include information like the device model, brand, operating system version, and other hardware-specific details. By tracking Device IDs, websites, apps, and advertisers can recognize and remember a device between sessions. ",
        img:"src/assets/deviceId.png",
        example:"browser (firefox, chrome, edge, ...), browser version, operating system (windows, mac, linux, ...), screen resolution,available fonts, ... and many more",
        color:"#72aeff"
    },
    {
        title:  "Personal IDs",
        description: " This category includes personal identifiable information (PII) that can be tracked and stored. Personal IDs might encompass details like your full name, email address, age, and gender. This information can be utilized to create a more personalized online experience or for more invasive purposes such as targeted marketing campaigns",
        img:"src/assets/personalID.png",
        example:"Name, email, age, gender, ... and many more ",
        color:"#a872ff"
    },
    {
        title:  "Location",
        description: "Location tracking involves identifying the geographical location of a user. This can be broad, such as the country or city you are in (e.g., Germany, Berlin), or highly specific, like your exact GPS coordinates. Knowing a user's location allows websites to provide localized content, such as regional news or advertisements.",
        img:"src/assets/location.png",
        example: " locale (i.e. the language settings of your browser), rough location (Germany, Berlin, ...), precise location- websites can request your exact GPS coordinates (ever clicked 'yes' on that pesky popup?) ",
        color:"#f472ff"
    },
    {
        title:  "Browser history",
        description: "This pertains to the record of web pages and sites that you've visited over a specific period. By tracking your browser history, entities can gather insights into your interests, habits, and behavior patterns. This information can be used to offer personalized content, recommendations, or for more sophisticated data profiling for marketing or other analytical purposes.",
        img:"src/assets/browserHistory.png",
        example: "",
        color:"#f64f90"
    },

]);


</script>

<template>
    <div class="row justify-content-center" style="margin-top: 5rem">
        <div class="row mt-5 ">
            <div class="col scrollable timeline">

                <div v-for="item in topics" :key=item.id class="timeline-item d-flex align-items-center" ref="timelineItems" :id=item.id>
                    <img class="cookie-image" :src="item.img">
                    <i></i>
                    <div>
                        <h3 :style="{ color: item.color }" >{{ item.title}}</h3>
                        <p class="details">{{ item.description }}</p>
                        <div class="hover-container">
                            <p   v-if="item.example " class="hover-effect" :style="{ color: item.color }">more</p>
                            <span class="hover-text details">{{ item.example}}</span>
                        </div>
                    </div>
                    <div  class="image-container">
                        <h3 class="hover-text" >more</h3>
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
    max-width: 20%;
    height: auto;
    display: block;

    margin-right: 4rem;
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
