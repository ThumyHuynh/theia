<script setup>
    import NextTopic from "@/components/NextTopic.vue"
    import Background from "@/components/Background.vue"
    import {ref, onMounted, onBeforeUnmount} from 'vue'
    import Sidebar from "@/components/Sidebar.vue"
    import TopicSummary from "@/components/TopicSummary.vue"
    import ForceGraph from "force-graph"
    import Title from "@/components/Title.vue"
    import topics from "@/router/topics.json"


    //////////////////////////////////////
    // NAVIGATION CONSTANTS
    //////////////////////////////////////

    const previous = "/sub01journey"
    const next = "/sub02map"
    const up = "/"
    const nextTitle= "The map of the internet"
    const prevTitle= "The journey of an HTTP request"
    const title = "Build your own digital footprint"
    const subTitle= "Why does every action leave a digital trail"




    //////////////////////////////////////
    // TEMPLATE REFS
    //////////////////////////////////////

    const contentCol = ref(null)
    const fixedCol = ref(null)
    const graphView = ref(null)
    const timelineItems = ref([])


    //////////////////////////////////////
    // TIMELINE DATA
    //////////////////////////////////////

    const timeline = [
        {
            id: "firstparty",
            headline: "The First Party",
            text: "Every time you access a website (like \"example.com\"), a direct connection to that primary website host is created.",
            add: () => {},
            remove: () => {}
        },
        {
            id: "thirdparty",
            headline: "Third Parties",
            text: "As you're viewing \"example.com\", your browser might want additional content to fully display the page. For instance, an image hosted on \"imgservice.com\" or a video from \"videosite.com\", creating additional connections. Since these connections were triggered by your visit to “example.com”, we can associate the third parties with this first party.",
            add: () => {
                addNode("imagehost.com", 1, "example.com")
                addNode("fontprovider.org", 1, "example.com")
                addNode("datastore.com", 1, "example.com")
            },
            remove: () => {
                removeNode("imagehost.com")
                removeNode("fontprovider.org")
                removeNode("datastore.com")
            }
        },
        {
            id: "tracker",
            headline: "Third-party Trackers",
            text: "Now, not all third parties are just content providers - websites you visit also connect to so-called web trackers. These come in many shapes, but most commonly they are advertising services that the websites you visit use to generate income. These services don’t just serve advertising, but also collect information about you to show you personalised ads. " +
                "Every click you make, every section you scroll through, and even the moments you pause and linger, are all added as key data points in your online story. ",
            add: () => {
                addNode("tracker.com", 2, "example.com")
                addNode("analytics.co.uk", 2, "example.com")
            },
            remove: () => {
                removeNode("tracker.com")
                removeNode("analytics.co.uk")
            }
        },
        {
            id: "morefirstparty",
            headline: "The Footprint grows",
            text: "As you browse the web, you visit other websites that also trigger additional connections to third parties they cooperate with.",
            add: () => {
                addNode("news.com", 0, )
                addNode("images.net", 1, "news.com")
                addNode("contentprovider.net", 1, "news.com")
                addNode("insights.com", 2, "news.com")
            },
            remove: () => {
                removeNode("news.com")
                removeNode("images.net")
                removeNode("contentprovider.net")
                removeNode("insights.com")
            }
        },
        {
            id: "interconnection",
            headline: "Global Tracking",
            text: "Many third-party services cooperate with multiple websites, which means that your visits to different websites can trigger connections to the same third party. For web trackers, this means that they can observe you across multiple websites. For example, they might notice you reading a blog post about Italy and searching for a delicious pasta recipe, so they start showing you travel ads for a holiday in Rome.",
            add: () => {
                addNode("globaltracking.net", 2, "example.com")
                addLink("news.com", "globaltracking.net")
            },
            remove: () => {
                removeNode("globaltracking.net")
            }
        },
    ]


    //////////////////////////////////////
    // ELEMENT HEIGHT ADJUSTMENTS
    //////////////////////////////////////

    /**
     * Function to set the height and top position of the fixed column.
     */
    const setFixedColAttributes = () => {
        const topDistance = fixedCol.value.getBoundingClientRect().top
        const viewportHeight = window.innerHeight

        // Set the top value to the original distance from the top of the viewport
        fixedCol.value.style.top = `${topDistance}px`

        // Set the height to fill the remaining space in the viewport
        fixedCol.value.style.height = `${viewportHeight - topDistance}px`
    };

    /**
     * Function to set the height the scrollable column's children.
     */
    const setTimelineItemHeight = () => {
        const topDistance = fixedCol.value.getBoundingClientRect().top
        const viewportHeight = window.innerHeight

        timelineItems.value.forEach(item => item.style.height = "" + (viewportHeight - topDistance) + "px")
    }


    //////////////////////////////////////
    // INTERSECTION OBSERVER STUFF
    //////////////////////////////////////

    let lastScrollY = 0
    let observer

    function registerIntersections() {
        const options = { threshold: 0.8 };
        observer = new IntersectionObserver(handleIntersection, options)

        // Start observing each target
        timelineItems.value.forEach(target => observer.observe(target))
    }

    const handleIntersection = (entries) => {
        entries.forEach(entry => {
            const scrollDirection = contentCol.value.scrollTop > lastScrollY ? 'down' : 'up';
            lastScrollY = contentCol.value.scrollTop;

            if (entry.isIntersecting) {
                for(let i = 0; i < timeline.length; i++) {
                    let timelineEntry = timeline[i]
                    if(entry.target.id === timelineEntry.id) {
                        if(scrollDirection === 'down') {
                            console.log(entry.target.id + " triggered DOWN SCROLL (" + window.scrollY + " > " + lastScrollY + ")")
                            timelineEntry.add()
                            graph.centerAt()
                        } else {
                            console.log(entry.target.id + " triggered UP SCROLL (" + window.scrollY + " < " + lastScrollY + ")")
                            if(i < timeline.length - 1) {
                                timeline[i + 1].remove()
                                graph.centerAt()
                            }
                        }
                    }
                }
            }
        })
    }


    //////////////////////////////////////
    // GRAPH MANIPULATION STUFF
    //////////////////////////////////////

    let graph = null;

    function addNode(id, type, source = null) {
        if(graph != null) {
            const { nodes, links } = graph.graphData()

            if(source != null) {
                graph.graphData({
                    nodes: [...nodes, { id, type }],
                    links: [...links, { source: source, target: id }]
                })
            } else {
                graph.graphData({
                    nodes: [...nodes, { id, type }],
                    links: links
                })
            }
        }
    }

    function addLink(source, target) {
        if(graph != null) {
            const { nodes, links } = graph.graphData()

            graph.graphData({
                nodes: nodes,
                links: [...links, { source: source, target: target }]
            })
        }
    }

    function removeLink(source, target) {
        if(graph != null) {
            let { nodes, links } = graph.graphData()
            links = links.filter(l => !(l.source.id == source && l.target.id == target))
            graph.graphData({ nodes, links })
        }
    }

    function removeNode(id) {
        if(graph != null) {
            let { nodes, links } = graph.graphData()

            links = links.filter(l => l.source.id !== id && l.target.id !== id); // Remove links attached to node
            nodes = nodes.filter(n => n.id !== id);

            graph.graphData({ nodes, links })
        }
    }

    const initialGraphData = {
        nodes: [ { id: 'example.com', type: 0 } ],
        links: []
    };


    //////////////////////////////////////
    // COMPONENT LIFECYCLE HOOKS
    //////////////////////////////////////

    onMounted(() => {
        setFixedColAttributes();
        setTimelineItemHeight()

        graph = ForceGraph()(graphView.value)
            .width(fixedCol.value.getBoundingClientRect().width)
            .height(fixedCol.value.getBoundingClientRect().height)
            .nodeRelSize(6)
            .nodeLabel(node => node.id)
            .nodeColor(node => (node.type == 0) ? 'rgba(21,242,194,1)' : (node.type == 1) ? 'rgba(84,48,108,1)' : 'rgba(204,7,43,1)')
            .linkColor(() => 'rgba(255,255,255,0.2)')
            .linkDirectionalParticles(1)
            .cooldownTicks(100)
            .enableZoomInteraction(false)
            .enablePanInteraction(false)
            .graphData(initialGraphData)

        graph.d3Force('center', null)

        registerIntersections()

        // fit to canvas when engine stops
        //graph.onEngineStop(() => graph.zoomToFit(400));
    });

    // Clean up the event listener on component unmount
    onBeforeUnmount(() => {
        window.removeEventListener('resize', setFixedColAttributes)
        if (observer) observer.disconnect()
    });
</script>

<template>
    <div class="row justify-content-center">
        <div class="d-flex flex-nowrap">
            <Sidebar/>
            <div class="content-col" ref="contentCol">
                <Title :title="title" :subTitle="subTitle"></Title>
                <div class="row">

                    <!-- Container for the timeline -->
                    <div class="col scrollable timeline">
                        <div v-for="item in timeline" :key=item.id class="timeline-item d-flex align-items-center" ref="timelineItems" :id=item.id>
                            <i></i>
                            <div class="details">
                                <h5>{{item.headline}}</h5>
                                <p class="details">{{item.text}}</p>
                            </div>
                        </div>
                    </div>

                    <!-- Container for the graph -->
                    <div ref="fixedCol" class="col fixed-height">
                        <div ref="graphView" class="child-div" style="z-index: 9"></div>
                    </div>

                </div>
                <div class="row">
                    <NextTopic :previous=previous :next=next :up=up :nextTitle=nextTitle :prevTitle="prevTitle"/>
                </div>
            </div>
        </div>
    </div>

    <Background/>
</template>

<style scoped>
    .fixed-height {
        position: sticky; /* Use sticky positioning */
        overflow: hidden;
    }

    .child-div {
        position: absolute; /* Absolute positioning within the parent */
        width: 100%;        /* Fill 100% of the parent's width */
        height: 100%;       /* Fill 100% of the parent's height */
    }

    .content-col {
        display: flex;
        flex-direction: column;
        align-items: center; /* Centers the items horizontally */
        justify-content: flex-start; /* Aligns items to the top of the container */
        width: 100%;
        overflow-y: auto;
        overflow-x: hidden;
        max-height: calc(100vh); /* You may need to adjust this value */
        padding: 1rem; /* Add some padding to prevent content from touching the edges */
    }
    .row {
        margin-left: 0;
        margin-right: 0;
    }



    .timeline-item {
        margin-top: 2rem;
        display: flex;
        position: relative;
    }

    .details {
        flex: 1;
        margin-left: 1rem;
    }

    i {
        display: flex;
        place-items: center;
        place-content: center;
        width: 32px;
        height: 32px;
        color: var(--color-text);
    }

    h5 {
        font-size: 1.2rem;
        font-weight: 500;
        margin-bottom: 0.4rem;
    }

    i {
        top: calc(50% - 6px);
        left: -5px;
        position: absolute;
        border: 1px solid #ffffff;
        background: #ffffff;
        border-radius: 8px;
        width: 12px;
        height: 12px;
    }

    .timeline-item {
        margin-top: 0;
        padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
    }

    .timeline-item:before {
        content: ' ';
        border-left: 2px solid;
        border-color: white;
        position: absolute;
        left: 0;
        bottom: calc(50% + 6px);
        height: calc(50% - 6px);
    }

    .timeline-item:after {
        content: ' ';
        border-left: 2px solid;
        position: absolute;
        border-color: white;
        left: 0;
        top: calc(50% + 6px);
        height: calc(50% - 6px);
    }

    .timeline-item:first-of-type:before {
        display: none;
    }

    .timeline-item:last-of-type:after {
        display: none;
    }
</style>
