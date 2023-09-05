<script setup> 

</script>

<template>

    <div class="container-fluid">
      <ul class="timeline">
    <li class="timeline-item mb-5">
      <h5 class="fw-bold">first-party</h5>
     <!-- <p class="text-muted mb-2 fw-bold">11 March 2020</p> --> 
      <p class="text-muted">
        Every time you access a website (like "example.com"), a direct connection to that primary website host is created.
      </p>
    </li>


    <li class="timeline-item mb-5">
      <h5 class="fw-bold">third-party</h5>
      <p class="text-muted">
        As you're viewing "example.com", your browser might want additional content to fully display the page. For instance, an image hosted on "imgservice.com" or a video from "videosite.com", creating additional connections.
      </p>
    </li>
    <li class="timeline-item mb-5">
      <h5 class="fw-bold">third-party tracker</h5>
      <p class="text-muted">
        Now, while you're enjoying your content, there might be unseen components such as ads from "adprovider.com" or embedded widgets from "widgetservice.com". These are the silent third-party entities, lurking in the shadows but still impacting your journey.
      </p>
    </li>
    <li class="timeline-item mb-5">
      <h5 class="fw-bold">connecting the dots</h5>
      <p class="text-muted">
        Your browser, a diligent notetaker, draws lines between these dots, marking down the sequence of your interactions and the interconnected web of sites and services you touch.
      </p>
    </li>
    <li class="timeline-item mb-5">
      <h5 class="fw-bold">action monitoring</h5>
      <p class="text-muted">
        Every click you make, every section you scroll through, and even the moments you pause and linger, are all added as key data points in your online story.
      </p>
    </li>
    <li class="timeline-item mb-5">
      <h5 class="fw-bold">detecting patterns</h5>
      <p class="text-muted">
        Over time, as this network grows and more data is added, certain pathways and habits become clearer, like well-trodden paths in a forest.
      </p>
    </li>
    <li class="timeline-item mb-5">
      <h5 class="fw-bold">tayloring ads</h5>
      <p class="text-muted">
        Advertisers, keen to catch your attention, use this graph to craft specific messages they believe you'd like, based on your observed preferences.
      </p>
    </li>
    <li class="timeline-item mb-5">
      <h5 class="fw-bold">digital footprint map</h5>
      <p class="text-muted">
        And in the end, this entire intricate web – a mixture of your direct interactions and the third-party entities you never even knew you encountered – paints a comprehensive picture of your digital travels.
      </p>
    </li>
  </ul>
			
    </div>

</template>



<style scoped>
.timeline {
  border-left: 1px solid hsl(0, 0%, 90%);
  position: relative;
  list-style: none;
}

.timeline .timeline-item {
  position: relative;
}

.timeline .timeline-item:after {
  position: absolute;
  display: block;
  top: 0;
}

.timeline .timeline-item:after {
  background-color: hsl(0, 0%, 90%);
  left: -38px;
  border-radius: 50%;
  height: 11px;
  width: 11px;
  content: "";
}

.timeline-item {
    height: 50rem;
    vertical-align: middle;
}
</style>