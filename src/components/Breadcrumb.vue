<script setup>
import { defineProps } from 'vue';

defineProps({
    home: {
        type: String,
        required: true
    },
    homeRef: {
        type: String,
        required: true
    },
    topic: {
        type: String,
        required: true
    },
})
</script>

<template>
    <div class="breadcrumb-container">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item" style="color: #f2f2f2" ><a href="/">Home</a></li>
                <li class="breadcrumb-item" style="color:#f2f2f2"> <a :href="homeRef">{{ topic }}</a></li>
               <!--<li class="breadcrumb-item active" style="color: #8dffff" aria-current="page">Current page</li>-->
            </ol>
        </nav>
    </div>
</template>

<style scoped>

.breadcrumb-container  {
    position: fixed;
    width: calc(100% - 20rem); /* Subtracts the top margin from the height */
    left: 0; /* Aligns the sidebar to the right */
    top: 0; /* Combined with margin-top, this will create a space from the top */
    margin-top: 4rem;
    margin-left: 2rem;
    overflow-y: auto;
    height: calc(100% - 2rem); /* Subtracts the top margin from the height */
}


.breadcrumb {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
}

.breadcrumb-item {
    margin-right: 5px;
}

.breadcrumb-item a {
    text-decoration: none;
    color: white; /* Link color */
}

.breadcrumb-item a:hover {
    text-decoration: underline;
}

.breadcrumb-item.active {
    color: #6c757d; /* Color for the active item */
}
</style>