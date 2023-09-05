<script setup>
</script>

<template>
    <img class="image-container" src="@/assets/mechanism.svg" alt="cookie1" width="18%">
</template>



<style scoped>

.image-container {
    position: absolute;  /* Position it absolutely within its relative parent */
    top: 50%;            /* Center it vertically */
    left: 50%;           /* Center it horizontally */
    transform: translate(-50%, -50%); /* Use transform to fine-tune the centering */
    display: flex;
    justify-content: center; /* Horizontally center */
    align-items: center; /* Vertically center */
    width: 18%;
}
</style>