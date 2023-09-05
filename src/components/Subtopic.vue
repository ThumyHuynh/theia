<script setup>


defineProps({
    subtopic: {
        type: Object,
        required: true
    },
})

</script>


<template>

    <div class="card-wrapper">
    <RouterLink class="text-reset text-decoration-none" aria-current="page" :to=subtopic.destination>
        <div class="card square-card mx-auto">
            <div class="card-content">
                <div class="card-details">
                    <span>{{ subtopic.title }}</span>
                    <br>
                    <span>{{ subtopic.subtitle }}</span>
                    <p>{{ subtopic.description }}</p>
                </div>
            </div>
            <div class="card-hover square-card mx-auto" :style="{ backgroundImage: 'url(' + '/src/assets/' + subtopic.image + ')' }"></div>
        </div>
    </RouterLink>
    </div>
</template>

<style scoped>

.card-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 3rem;
    margin-bottom: 3rem;
}

.card-details {
    text-align: center;
    color:white;

}
span {
    font-size: x-large;
    text-transform: uppercase;
    font-weight: bold;
}

.square-card {
    width: 350px;
    height: 275px;
    overflow: hidden;
    padding: 0;
    position: relative;
    background-color: rgba(255, 255, 255, 0.1);
    font-size:large;
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
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.7s ease; /* Transition effect for smooth reveal */
}

.card-hover h3 {
    margin: 10px;
}

.card-hover p {
    margin: 10px;
    text-align: center; /* Center the description text */
}

.square-card:hover .card-hover {
    opacity: 1;
}
</style>
