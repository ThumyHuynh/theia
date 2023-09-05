<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <nav class="navbar navbar-expand-lg custom-navbar mb-1">
        <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <RouterLink class="navbar-brand " aria-current="page" to="/">
                    <h2>T.W.T</h2>
                   <!--<img src="@/assets/logo.svg" width="30" height="30" class="d-inline-block align-top" alt=""/>-->
                </RouterLink>

            </div>
        </div>
    </nav>
</template>

<style scoped>

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
.navbar-collapse{
    margin-left: 0.5rem;
}
</style>


