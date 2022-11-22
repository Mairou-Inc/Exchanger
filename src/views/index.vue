<template>


  <div class="">

    <div class=" w-full h-screen flex flex-col items-center justify-center">

      <div class="md:text-9xl sm:text-9xl text-[20vw] ">

        <div class="animate__animated unselectable animate__zoomIn flex items-center font-semibold">
          <div class="rainbow">Exchanger</div>
        </div>

      </div>

      <div class="animate__animated animate__zoomIn text-2xl mt-1 text-center ">
        <a class="link" href="https://cultrace.com/">Cultrace Project</a>


      </div>
    </div>
  </div>

</template>

<script setup>
import { MainStore } from "@/store";
import 'animate.css';
document.title = "Cultrace"


const store = MainStore();

</script>
    