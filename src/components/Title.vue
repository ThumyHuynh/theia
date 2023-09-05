<script setup>
import { ref } from 'vue';


const props = defineProps({
    title: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
    required: true,
  }
}
)

const firstLetter = ref(props.title[0]);
const remainingText = ref(props.title.slice(1));


</script>

<template>
    <div class="mt-2">
        <div class="row text-center text-light mt-2">
            <h1 style="font-size: 60px;"><span style="font-family: Sirin Stencil;">{{firstLetter}}</span>{{ remainingText }}</h1>
        </div>

        <div class="row text-center text-light mb-2">
            <div class="col">
                <h2 class="text" style="font-size: 25px; color:#8dffff">{{ subTitle }} ?</h2>
            </div>
        </div>
    </div>


 
</template>


<style scoped>

</style>