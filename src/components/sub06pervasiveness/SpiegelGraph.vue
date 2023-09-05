<script setup>
import {onMounted, ref} from "vue";
import ForceGraph from "force-graph";
import spiegelNodes from "@/assets/spiegel-nodes.json";

const initialGraphData = {
    nodes: [ { id: 'spiegel.de', nodeType: "initiator" } ],
    links: []
};

const graphView = ref(null)
let graph
let clicked = false

async function buildSpiegelGraph() {
    clicked = true
    if(graph != null) {
        let i = 0
        for(let node of spiegelNodes) {
            const {nodes, links} = graph.graphData()

            graph.graphData({
                nodes: [...nodes, node],
                links: [...links, { source: node.id, target: 'spiegel.de' }]
            })

            await new Promise(resolve => setTimeout(resolve, 50));
        }

        graph.zoomToFit(100)
    }
}

onMounted(() => {

    //graphView.value.style.height = graphView.value.getBoundingClientRect().width + 'px'

    graph = ForceGraph()(graphView.value)
        .width(graphView.value.getBoundingClientRect().width)
        .height(graphView.value.getBoundingClientRect().height)
        .nodeRelSize(6)
        .nodeLabel(node => node.id)
        .nodeAutoColorBy('id')
        .nodeColor(node => (node.nodeType == "initiator") ? 'rgba(21,242,194,1)' : (node.nodeType == "harmless") ? 'rgba(84,48,108,1)' : 'rgba(204,7,43,1)')
        .linkColor(() => 'rgba(255,255,255,0.2)')
        //.linkDirectionalParticles(1)
        .cooldownTicks(100)
        .enableZoomInteraction(false)
        .enablePanInteraction(false)
        .onNodeClick(node => { if(!clicked && node.id == 'spiegel.de') { buildSpiegelGraph() }})
        .graphData(initialGraphData)
});
</script>

<template>
    <div ref="graphView" class="graph" style="width: 400px; height:400px; overflow: hidden"></div>
</template>

<style scoped>
.graph{
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>