<template>
    <RouterLink to="/menu">
        <div>
            <button aria-label="Menu"
                class="main_btn unselectable text-6xl w-20 h-20 flex items-center justify-center">
                ☵
            </button>
        </div>
    </RouterLink>
</template>



<style>
.main_btn {
    position: fixed;
    bottom: 0%;
    left: 50vw;
    transform: translate(-50%, -25%);
    border: 1px solid white;
    background-color: black;
}

.main_btn:hover {
    background-color: rgb(0, 255, 255);
    border: 1px solid rgb(0, 255, 255);
    color: black;
    transition: all .3s ease-out;
}
</style>