
<script setup>

</script>

<template>

    <div class="row justify-content-center  mt-5 mb-5">
        <div class="col d-flex justify-content-center">
            <img src="@/assets/theJourneyOfAnHttpRequest.png" alt="theJourneyOfAnHttpRequest" class="responsive-image">
        </div>
    </div>

    <div class="row mt-5 justify-content-center">
        <div class="col d-flex justify-content-end align-items-center">
        </div>
    </div>
</template>


<style>
.responsive-image {
    max-width: 100%;
    height: auto;
}

.circle-container {
    width: 80%;
}
.full-screen-image-container {
    min-height: 100vh; /* Set the container height to fill the screen */
    margin-top:5rem
}

.responsive-image {
    max-width: 100%; /* Ensures the image doesn't exceed the width of its container */
    height: auto;   /* Keeps the aspect ratio intact */
}
</style>