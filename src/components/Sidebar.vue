<script setup>
import { ref, watch, computed } from 'vue';
import {RouterLink, useRoute} from "vue-router";

const titles = ref([
    {
        title: "The internet in a nutshell",
        links: [
            { path: "/sub00elements", text: "The elements of the Internet" },
            { path: "/sub01journey", text: "The journey of an HTTP request" },
            { path: "/sub02build", text: "Build your own digital footprint" },
            { path: "/sub02map", text: "Map of the internet" }
        ]
    },
    {
        title:  "The world of web tracking",
        links: [
            { path:"/sub03who", text: "Understanding First- & Third Party Tracker" },
            { path: "/sub03whyTrack", text: "First-Party Data Collection" },
            { path: "/sub03embed", text: "Third-Party Integrations" },
            { path: "/sub04how", text: "Mechanism of web tracking"}
        ]
    },
    {
        title:  "Issues with web tracking",
        links: [
            { path:"/sub05data", text: "Collected data" },
            { path: "/sub06pervasiveness", text: "Pervasiveness of web tracking" },
            { path: "/sub06whoTrack", text: "The biggest third-party Trackers" },
            { path: "/sub06whereData", text: "Trackers around the globe" },
            { path: "/sub07gdpr", text: "GDPR" }
        ]
    },
    {
        title:  "What can you do about it",
        links: [
            { path:"/sub08pet", text: "PETs and TETs" },
            { path:"/sub09protect", text: "Protect your privacy" }
        ]
    },

]);


const route = useRoute();
const activeIndex = ref(-1);
const expandedState = ref({});

const isActiveGroup = computed(() => {
    return titles.value.map((item, index) => {
        const isActive = item.links.some(link => link.path === route.path);
        if (isActive) activeIndex.value = index;
        return isActive;
    });
});

const toggleExpansion = (index) => {
    if (index !== activeIndex.value) {
        expandedState.value[index] = !expandedState.value[index];
    }
};


// Watch for changes in the expandedState and save them to localStorage
watch(expandedState, (newState) => {
    localStorage.setItem('expandedState', JSON.stringify(newState));
}, { deep: true });
</script>


<template>
    <div class="sidebar-container" style="border-right: 0.2px solid #41EAD488;">
        <div class="sidebar-header">
            <RouterLink class="navbar-brand" aria-current="page" to="/">
                <img src="@/assets/LogoDark.png" width="100" height="100" class="d-inline-block align-top" alt=""/>
            </RouterLink>
            <h4 class="sidebar-title " style="z-index: -1; margin-left: -9px" >Web tracking</h4>
        </div>
        <ul class="list-container">
            <li v-for="(item, index) in titles" :key="index" style=" list-style: none">
                <div class="li-container">
                    <div @click="() => toggleExpansion(index)" class="title" :aria-expanded="expandedState[index]" :class="{ 'nav-title-active': isActiveGroup[index] }">
                      <span :class="expandedState[index] ? 'arrow-up' : 'arrow-down'"></span>
                        <span class="nav-title">{{ item.title }}</span>
                    </div>
                    <ul v-show="expandedState[index] || isActiveGroup[index]">

                    <li v-for="link in item.links" :key="link.path">
                            <router-link class="nav-link" :to="link.path">
                                <span>{{ link.text }}</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>

    </div>
</template>

<style scoped>

.list-container{
    margin-left: -1rem;
}
.sidebar-header {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
    margin-top: 1rem;
    margin-left: 0.5rem;
}

.sidebar-title {
    margin-left: 10px;
    display: flex;
    align-items: center;
}

.li-container{
    margin-bottom: 1.25rem;
}
.sidebar-container {
    width: 20rem;
    max-height: calc(100vh - 2rem);
    margin-top: 1rem;
    margin-left: 1rem;
    overflow-y: auto;
}

.sidebar-title {
    text-align: left;
     font-weight: 900;
    margin-left: 1rem;
}

.nav-link {
    text-decoration: none;
    color: white;
    padding: 0.5rem;
    font-size: 15px;
}

.router-link-active  {
    background-color: rgba(255, 255, 255, 0.25);
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
}

.router-link-active {
    font-weight: bold;
}


.nav-link:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;

}
.nav-title {
    font-size: 16px;
}
.nav-title-active{
    color: #20efda;
    font-weight: bold;
    font-size: large;
}


.nav-title:hover {
    color: white;
    font-weight: 600;
}
.title {
    display: flex;
    align-items: center;
    cursor: pointer;
}

.arrow-down:before,
.arrow-up:before {
    display: inline-block;
    margin-right: 10px;
}


.arrow-down:before {
    content: '->';
}

.arrow-up:before {
    content: '↓';
}
</style>
