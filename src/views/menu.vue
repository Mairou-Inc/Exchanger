<template>

  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen unselectable">

    <div class="flex flex-col items-center">

      <RouterLink to="/"
        class="animate__animated animate__zoomIn animate__faster text-5xl sm:text-6xl p-4 hover:bg-white hover:text-black transition-all">
        MAIN PAGE
      </RouterLink>
      <RouterLink to="/converter"
        class="animate__animated animate__zoomIn animate__faster text-5xl sm:text-6xl p-4 hover:bg-white hover:text-black transition-all">
        CONVERTER
      </RouterLink>




    </div>

  </div>


</template>


<script setup>
import 'animate.css';
document.title = "Menu"


</script>