<script setup>
import { RouterLink } from 'vue-router'
import Fab from "@/components/Fab.vue";

defineProps({
  previous: {
    type: String,
    required: true,
  },
  next: {
    type: String,
    required: true
  },
  up: {
    type: String,
    required: true
  },

  prevTitle: {
      type: String,
      required: true
  },
        nextTitle: {
            type: String,
            required: true
        }

}
)

</script>

<template>
    <div class="top-layer mt-5">
        <div class="row  mt-5 mb-5">
            <div class="col-6 nav-link nav-link-start">
                <RouterLink v-if="previous" class="text-reset" aria-current="page" :to=previous style=";text-decoration: none; list-style-type: none">
                    <li class=" nav-item text-decoration-none text-uppercase mb-1 fab">
                        ← Prev
                    </li>
                    <li class="nav-item text-decoration-none text-uppercase mb-1 title" style="list-style-type: none;">
                        {{ prevTitle}}
                    </li>
                </RouterLink>
            </div>

            <div class="col-6 nav-link nav-link-end">
                <RouterLink v-if="next" class="text-reset" aria-current="page" :to=next style="text-decoration: none; list-style-type: none">
                    <li class=" nav-item text-left text-decoration-none text-uppercase mb-1 fab">
                        Next →
                    </li>
                    <li class="nav-item text-left text-decoration-none text-uppercase mb-1 title" style="list-style-type: none">
                        {{ nextTitle }}
                    </li>
                </RouterLink>
            </div>
        </div>
    </div>
</template>


<style scoped>

.nav-item {
    width: 450px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.nav-link-start {
    text-align: start;
}
.nav-link-end{
    text-align: end
}

.top-layer {
    position: static;
    z-index: auto;
    margin-top: 3rem;
}
.fab {
    font-size: 1.25em;
    align-items: center;
    user-select: none;
    transition: color 0.3s, font-size 0.3s; /* smooth transition */

}
.title{
    font-size: small;
    text-decoration: none;
    color: whitesmoke;
}
.nav-link:hover {
    color: #41EAD4;
    font-size: large;
    transition: color 0.3s, font-size 0.3s;
}

</style>