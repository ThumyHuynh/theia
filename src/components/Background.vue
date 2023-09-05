<script setup>
</script>

<template>
    <img class="backdrop-lights" src="@/assets/bgr.png">
</template>


<style scoped>
.backdrop-lights {
    position: fixed; /* Fixed/Sticky position */
    top: 0;
    left: 0;
    height: 100vh; /* 100% of the viewport's height */
    width: 100vw; /* 100% of the viewport's width */
    z-index: -2; /* Place it behind other content */
    object-fit: cover; /* Ensure the SVG covers the full area without distortion */
    opacity: 1;
}
</style>
