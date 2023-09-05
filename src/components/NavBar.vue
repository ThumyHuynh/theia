<script setup>
    import { RouterLink } from 'vue-router'
</script>

<template>
    <nav class="navbar navbar-expand-lg custom-navbar mb-1">
        <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <RouterLink class="navbar-brand " aria-current="page" to="/">
                 <img src="@/assets/logo.svg" width="30" height="30" class="d-inline-block align-top" alt=""/>  
                </RouterLink>
            <ul class="navbar-nav  position-absolute start-50 translate-middle-x">
                <RouterLink class="text-reset text-decoration-none" aria-current="page" to="/">
                    <li class="nav-item nav-link text-center text-uppercase mb-1">
                        Home
                    </li>
                </RouterLink>
                <RouterLink  class="text-reset text-decoration-none mb-2" aria-current="page" to="/about">
                    <li class="nav-item nav-link text-center text-uppercase mb-1">
                        about
                    </li>
                </RouterLink>

                <RouterLink class="text-reset text-decoration-none" aria-current="page" to="/about">
                    <li class="nav-item nav-link text-center text-uppercase mb-1">
                        research
                    </li>
                </RouterLink>
            </ul>
            </div>
        </div>
    </nav>  
</template>

<style scoped>

    .custom-navbar {
        background-color: rgba(255, 255, 255, 0.1); /*rgb(175, 175, 175); */
        height: 60px;

    }

    .nav-link {
        width: 250px;
        border-bottom: 1px solid #41EAD488;
        color: white;        /*rgb(175, 175, 175); */
        font-weight: 600;
        padding-bottom: 2px;
        font-size: medium;
    }

    .nav-link:hover {
        border-bottom: 1px solid #41EAD4ff;
        color: #41EAD4;
}

</style>


