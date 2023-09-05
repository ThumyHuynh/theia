
<script setup>

import {onMounted, ref} from "vue";
import ForceGraph from "force-graph";
// import graphData from "@/assets/output-graph.json";
import graphData from "@/assets/graph-small.json";

const graphView = ref(null)
let graph

onMounted(() => {

    //graphView.value.style.height = graphView.value.getBoundingClientRect().width + 'px'

    graph = ForceGraph()(graphView.value)
        .width(graphView.value.getBoundingClientRect().width)
        .height(graphView.value.getBoundingClientRect().height)
        .nodeRelSize(6)
        .nodeLabel(node => node.id)
        .nodeColor(node => (node.nodeType == "initiator") ? 'rgba(21,242,194,1)' : (node.nodeType == "harmless") ? 'rgba(84,48,108,1)' : 'rgba(204,7,43,1)')
        .linkColor(() => 'rgba(255,255,255,0.2)')
        .linkDirectionalParticles(1)
        .cooldownTicks(100)
        .graphData(graphData)
});

</script>

<template>
    <div ref="graphView" class="graph" style="border: 1px solid lightblue; width: 80%; height:100%; overflow: hidden"></div>
</template>

<style scoped>
.graph{
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>