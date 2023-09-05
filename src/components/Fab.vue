


<template>
    <div class="fab">
        <div class="scroll-up-message">Scroll up</div>
        <a href="#"><div class="btn btn-secondary">^</div></a>
</div>
</template>

<style scoped>

.btn-secondary:hover{
    background-color:  rgba(255, 255, 255, 0.01);
    border-width: 1px;
    border-color: #86ffd7;
    color:rgba(255, 255, 255, 0.5);

}
.btn-secondary{
    color: #86ffd7;
    background-color:  rgba(255, 255, 255, 0.1);
}
.fab {
    align-items: center;
    user-select: none;
    position: absolute;
    bottom: 30px; right: 30px;
}

.scroll-up-message {
    position: absolute;
    right: -250%;
    top: -50%;
    transform: translateY(-50%);
    white-space: nowrap;
    opacity: 0;
    transition: opacity 0.3s;
    padding-right: 10px;
    color: #86ffd7;
    font-size: large;
    font-weight: bold;
}

.fab:hover .scroll-up-message {
    opacity: 1;
}
</style>