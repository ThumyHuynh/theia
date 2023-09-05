<script setup>
</script>

<template>
    <div class="container-fluid  align-items-center ">
        <div class="custom-row ">
        <div class="row ">
            <div class="col d-flex flex-column justify-content-center align-items-start">
                <div>
                    <h3 style="color: #0bdbff">First-Party Tracker</h3>
                    <h55>" Your direct stops "</h55>
                </div>
            </div>
            <div class="col d-flex flex-column justify-content-center align-items-end">
                <div class="align-right">
                    <h3  style="color: #ff66c4">Third-Party Tracker</h3>
                    <h5>" The silent observers"</h5>
                </div>
            </div>
        </div>

            <div class="row  row-custom" >
                <div class="col text-align">
                    <p> Direct- Websites you intentionally visit (like "www.example.com")</p>
                    <div class="hover-container">
                        <p class="hove-effect" style="color: #0bdbff">Example</p>
                        <span class="hover-text details"> For example, if you're browsing "www.example.com" and it sets a cookie to remember your language preference, that's a first-party cookie </span>
                    </div>
                </div>
                <div class="col d-flex flex-column  align-items-center">
                    <h3 class="category" > Relationship with user</h3>
                </div>
                <div class="col text-align align-right">
                    <p> Indirect - Third party trackers come from a domain different from the one you are visiting.</p>
                    <div class="hover-container">
                        <p class="hove-effect" style="color: #ff66c4">Example</p>
                        <span class="hover-text details">  For instance, while you are on "www.example.com", a cookie might be set by "ads.network.com" - that's a third-party cookie. This cookie could be used to show you targeted ads based on your browsing  history.</span>
                    </div>
                </div>
            </div>

            <div class="row row-custom">
                <div class="col text-align">
                    <p> Their primary mission is to enhance your experience on their website. </p>
                    <div class="hover-container">
                        <p class="hove-effect" style="color: #0bdbff">Example</p>
                        <span class="hover-text details">They remember your preferences, like items you've added to a shopping cart or even your login status</span>
                    </div>
                </div>
                <div class="col d-flex flex-column  align-items-center">
                    <h3 class="category">  Data Collection Purpose</h3>
                </div>
                <div class="col text-align align-right">
                    <p> They aim to gather data about your wider online behaviour</p>
                    <div class="hover-container">
                        <p class="hove-effect" style="color: #ff66c4">Example</p>
                        <span class="hover-text details">  You might see an ad for a pair of shoes you were looking at on a different site, this is because third-party trackers have tracked your browsing habits across multiple websites and built a detailed profile for targeted advertising.</span>
                    </div>
                </div>
            </div>
            <div class="row last-row">
                <div class="col text-align">
                    <p>Generally, these trackers are seen as less intrusive because the data stays with the website you've opted to visit. They only monitor your activity on their site.
                    </p>
                    <div class="hover-container">
                        <p class="hove-effect" style="color: #0bdbff">Example</p>
                        <span class="hover-text details">When you're on "www.exampleblog.com", the first-party tracker only logs your activity there and does not know or care about what you do on different websites.</span>
                    </div>
                </div>
                <div class="col d-flex flex-column  align-items-center">
                    <h3 class="category">  Privacy Implications</h3>
                </div>
                <div class="col text-align align-right">
                    <p> Third-party  trackers can be seen as more invasive since they monitor your activities across various unrelated websites. </p>
                    <div class="hover-container">
                        <p class="hove-effect example" style="color: #ff66c4;">Example</p>
                        <span class="hover-text details"> You might have noticed you are seeing ads related to a topic you searched for earlier on a different websites.</span>
                    </div>
                </div>
            </div>





        </div>
    </div>
</template>


<style scoped>

.example{
    font-size: large;
}

.align-right{
    text-align: right;
}
.row-custom{
    margin-bottom: 15rem ;
    margin-top: 3rem;
}
.last-row{
    margin-top: 3rem;
    margin-bottom: 5rem ;
}
.custom-row {
    width: 63rem;
    margin-top:5rem;
}
.category{

    font-weight: 800;
    font-size: large;
    text-transform: uppercase;
    color:white;

    padding-top: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 1rem;

    background-color:  rgba(203, 108, 230, 0.1);
}
.text-align{
    text-align: justify;
    justify-content: end;
    align-items: end;
}


.hover-container {
    position: relative;
    display: inline-block;
}

.hover-text {
    visibility: hidden;
    color: white;
    transform: translate(-50%, 0);
    opacity: 0;
    transition: opacity 0.9s ease;
    position: absolute;
    z-index: 2;
    top:90%;
    left: 10rem;
    width: 500%;
    text-align: justify-all;
}

.hover-container:hover .hover-text {
    visibility: visible;
    opacity: 1
}

</style>

