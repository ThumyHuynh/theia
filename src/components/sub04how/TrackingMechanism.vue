<script>

</script>

<template>

    <div class="row justify-content-around">
        <!-- First column -->
        <div class="col-3 content-container">
            <h3  id="cookie" class="align-center">
                tracking pixels
            </h3>
            <p class="align-left" style="font-size: large">
                Device fingerprinting uses unique device and browser settings to create identifiers that track user behavior across sites
            </p>
            <p class="example-text align-left">
                Device fingerprinting aggregates various bits of information from your device—such as screen resolution, operating system, installed fonts, and even the version of software plugins.
            </p>
            <p class="example-text align-left">
                Example: Two individuals might be using the same model of a laptop, but one has a particular set of browser plugins installed while the other does not. This difference, among others, helps in distinguishing and tracking each user's activity, even if they're visiting the same websites.
            </p>
            <div class="image-container">
                <img class="example-text" src="@/assets/cookie.svg" alt="cookie1" width="10%">
            </div>
        </div>
        <!-- Second column -->
        <div class="col-3 content-container">
            <h3  id="finger" class="align-center">
                tracking pixels
            </h3>
            <p class="align-right" style="font-size: large">
                Tracking pixels, often called web beacons, are minuscule, transparent images inserted into websites and emails
            </p>
            <p class="example-text align-right">
                Tracking pixels, often called web beacons, are minuscule, transparent images inserted into websites and emails
            </p>
            <p class="example-text align-right">
                Example: You've subscribed to a newsletter from your favorite shoe brand. When they send out a promotional email and you open it, a tracking pixel within the email notifies the brand of the exact time and date you viewed their message. This can help companies gauge the effectiveness of their campaigns.

            </p>
            <div class="image-container">
                <img class="example-text" src="@/assets/cookie.svg" alt="cookie1" width="10%">
            </div>
        </div>
    </div>


    <!-- Row for the next sections -->
    <div class="row justify-content-around">
        <!-- Third column -->
        <div class="col-4 content-container">
            <p class="example-text align-left">
                Device fingerprinting aggregates various bits of information from your device—such as screen resolution, operating system, installed fonts, and even the version of software plugins.
            </p>
            <p class="example-text align-left">
                Example: Two individuals might be using the same model of a laptop, but one has a particular set of browser plugins installed while the other does not. This difference, among others, helps in distinguishing and tracking each user's activity, even if they're visiting the same websites.
            </p>
            <p class="align-left" style="font-size: large">
                Device fingerprinting uses unique device and browser settings to create identifiers that track user behavior across sites
            </p>

            <h3  id="finger" class="align-center">fingerprints</h3>
            <div class="image-container">
                <img class="example-text" src="@/assets/cookie.svg" alt="cookie1" width="10%">
            </div>
        </div>

        <!-- Fourth column -->
        <div class="col-4 content-container">
            <p class="example-text align-right">These buttons can detect and communicate your visit to the corresponding social media platforms (Facebook, Twitter)

            </p>
            <p class="example-text align-right">
                Example: You are reading an article about sustainable living on a blog. Even if you don't click the 'Like' button, Facebook (if a Facebook Like button is embedded on the page) can recognize that you've visited that specific page. Over time, collecting such data points might lead to you seeing more ads or content related to sustainable living on your Facebook feed.
            </p>
            <p class="align-right" style="font-size: large">
                Device fingerprinting uses unique device and browser settings to create identifiers that track user behavior across sites
            </p>
            <h3  id="like" class="align-center">like and share button </h3>
            <div class="image-container">
                <img class="example-text" src="@/assets/cookie.svg" alt="cookie1" width="10%">
            </div>
        </div>
    </div>
</template>


<style scoped>


.image-container {
     position: absolute;  /* Position it absolutely within its relative parent */
     top: 50%;            /* Center it vertically */
     left: 55%;           /* Center it horizontally */
     transform: translate(-50%, -50%); /* Use transform to fine-tune the centering */
     display: flex;
     justify-content: center; /* Horizontally center */
     align-items: center; /* Vertically center */
     width: 100%;
 }

.align-center{
    text-align: center;
    font-size: x-large;
}
.align-right{
    text-align: right;
}

.align-left{
    text-align: left;
}
.example-text {
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s;
    height: auto;
}
.content-container:hover .example-text {
    opacity: 1;
    visibility: visible;
    display: block;
}

.content-container:hover .flush-right {
    opacity: 0;
}

#cookie {
    color: #15e8c2;
    transition: 0.3s;
    font-size: xx-large;
}

#finger {
    color: #a924fa;
    transition: 0.3s;
    font-size: xx-large;
}

#like {
    color: #00b9ef;
    transition: 0.3s;
    font-size: xx-large;
}
.content-container:hover #cookie {
    color: #86ffd7;
    font-size: xx-large;
}

.content-container:hover #finger {
    color: #cb6ce6;
    transition: 0.3s;

}
.content-container:hover #pixel {
    color: #ff009d;
    transition: 0.3s;
}
.content-container:hover #like {
    color:#67f1ff;
    transition: 0.3s;
}
</style>