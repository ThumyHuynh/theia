<script setup>

</script>

<template>
    <div class="row no-gutters mt-5 full-screen-image-container">
        <div class="col d-flex justify-content-end align-items-center p-0">
            <div class="circle-container">
                <img src="@/assets/elementsOfTheInternetCircle.png" alt="elementsOfTheInternetCircle" class="responsive-image">
            </div>
        </div>
        <div class="col d-flex justify-content-start p-0">
            <img src="@/assets/elementsOfTheInternet.png" alt="elementsOfTheInternet" class="full-screen-image">
        </div>
    </div>
</template>


<style scoped>
.full-screen-image {
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    height: 100%;
}

.responsive-image {
    max-width: 100%;
    height: auto;
}

.circle-container {
    width: 80%;
}
.full-screen-image-container {
    height: 100vh; /* Set the container height to fill the screen */
}

.responsive-image {
    max-width: 100%; /* Ensures the image doesn't exceed the width of its container */
    height: auto;   /* Keeps the aspect ratio intact */
}

.full-screen-image {
    max-width: none; /* Removes the max-width constraint */
    max-height: none; /* Removes the max-height constraint */
    width: 100vh; /* Set the width to be equal to the viewport height */
    height: 100vh; /* Set the height to fill the screen */
}
</style>