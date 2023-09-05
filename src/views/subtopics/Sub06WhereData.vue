<script setup>
import NextTopic from "@/components/NextTopic.vue";
import Sidebar from "@/components/Sidebar.vue";
import Background from "@/components/Background.vue";
import Title from "@/components/Title.vue";
import WorldMap from "@/components/sub06pervasiveness/WorldMap.vue";

const previous = "/sub06WhoTrack"
const next = "/sub07gdpr"
const up = "/"
const nextTitle= "General Data Protection Regulation"
const prevTitle= "Who are the biggest third-party Trackers?"
const title= "Trackers around the globe"
const subTitle= "Where is your data sent"

</script>

<template>
    <div class="row justify-content-center">
        <div class="d-flex flex-nowrap">
            <Sidebar/>
            <div class="content-col">
                <Title :title="title" :subTitle="subTitle"></Title>
                <div class="mt-5">
                    <p>This map provides a visual representation of the distribution of trackers found across various countries in our recent crawl of global websites.</p>
                    <p>Each country on the map is color-coded according to the number of trackers detected:</p>

                    <ul class="legend">
                        <li class="legend-item">
                            <span class="legend-color higher-trackers"></span>
                            Represent countries where a higher number of trackers were found.
                        </li>
                        <li class="legend-item">
                            <span class="legend-color fewer-trackers"></span>
                            Indicate countries with fewer detected trackers.
                        </li>
                        <li class="legend-item">
                            <span class="legend-color no-data"></span>
                            Signify locations where no data is available or no trackers were detected.
                        </li>
                    </ul>

                </div>
                <div class="map-container">
                    <WorldMap/>
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
.legend {
    padding: 1rem 0;
}

.legend-item {
    display: flex;
    align-items: center;
    margin: 0.5rem 0;
}

.legend-color {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 8px;
}

.higher-trackers {
    background-color: #af03a6;
}

.fewer-trackers {
    background-color: #12b2b2;
}

.no-data {
    background-color: white;
}


.content-col {
    display: flex;
    flex-direction: column;
    align-items: center;
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

.map-container {
    width: 80%;

}
</style>
