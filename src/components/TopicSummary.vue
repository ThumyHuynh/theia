<script setup>

import { defineProps, ref } from 'vue';



const {summary} = defineProps({
    summary: String
});

const slideOut = ref(false);

const handleNextTopic = () => {
    slideOut.value = true;
};
</script>

<template>
    <div class="summary-container">
        <div class="summary-content" :class="{ 'slide-out': slideOut }">
            <p>{{ summary }}</p>
        </div>
    </div>
</template>




<style scoped>
.summary-content.slide-out {
    animation: slideOutToLeft 2s ease forwards;
}

@keyframes slideOutToLeft {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-100%);
    }
}
.summary-container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 3rem;
    margin-bottom: 3rem;
}

p{
    font-size: medium;
    line-height: 2;
    text-align: left;

}
.summary-content {
    background-color: rgba(255, 255, 255, 0.08);
    padding: 1.5rem;
    width: 66rem;
    text-align: center;
    animation: appearFromLeft 2s ease;
}

@keyframes appearFromLeft {
    from {
        opacity: 0;
        transform: translateX(100%);
    }
    to {
        opacity: 0.8;
        transform: translateX(0);
    }
}
</style>