<script setup>
import {onMounted} from 'vue';

const props = defineProps({
    topic: {
        type: Object,
        required: true
    }
});

const handleClick = (event) => {
    if (props.topic.ref) {
        event.preventDefault();
        const element = document.getElementById(props.topic.ref);
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    }
}


</script>
<template>
    <div class="card-wrapper">
        <a v-if="topic.ref" @click="handleClick" :href="`#${topic.ref}`" class="text-reset text-decoration-none">
            <div :style="{ opacity: 0.7 }">
                <div class="card square-card mx-auto"
                     :style="{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.1)), url(' + '/src/assets/' + topic.image + ')' }">
                    <div class="card-content">
                    </div>
                    <div class="card-hover square-card mx-auto">
                        <div class="card-content">
                            <div class="card-details">
                                <p>{{ topic.description }}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <span>{{ topic.title }}</span>
        </a>

        <RouterLink class="text-reset text-decoration-none" aria-current="page" v-else-if="topic.destination"
                    :to="topic.destination">
            <div :style="{ opacity: 0.7 }">
                <div class="card square-card mx-auto"
                     :style="{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.1)), url(' + '/src/assets/' + topic.image + ')' }">
                    <div class="card-content">
                    </div>
                    <div class="card-hover square-card mx-auto">
                        <div class="card-content">
                            <div class="card-details">
                                <p>{{ topic.description }}</p>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <span>{{ topic.title }}</span>
        </RouterLink>

    </div>
</template>


<style scoped>


.card {
    width: 300px;
    height: 250px;
    overflow: hidden;
    padding: 0;
    position: relative;
    background-color: rgba(255, 255, 255, 0.1);
    font-size: large;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.2rem;
}


.card-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 3rem;
}

.card-details {
    text-align: start;
    color: white;

}

p {
    font-size: large;
    font-weight: bold;
}

span {
    font-size: 20px;
    text-transform: uppercase;
    font-weight: bold;
    margin-left: 0.5rem;
}

.square-card {
    width: 300px;
    height: 250px;
    overflow: hidden;
    padding: 0;
    position: relative;
    background-color: rgba(255, 255, 255, 0.1);
    font-size: large;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}


.card-hover {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.9);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.7s
}

.card-hover h3 {
    margin: 10px;
}

.card-hover p {
    margin: 10px;
    text-align: center;
}

.square-card:hover .card-hover {
    opacity: 1;
}
</style>