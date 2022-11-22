<script setup>
import { RouterView } from 'vue-router'
import MenuButton from "@/components/MenuButton.vue";
</script>

<template>
    <RouterView />
    <MenuButton />
</template>

<style>
@font-face {
  font-family: 'JetBrains Mono';
  font-style: monospace;
  font-weight: 400;
  font-display: swap;
  src: url('../assets/JetBrainsMono-VariableFont_wght.ttf') format('truetype');
}


body {
  background-color: black !important;
  color: white;
  overflow-x: hidden;
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
}

.unselectable {
  -webkit-touch-callout: none;
  /* iOS Safari */
  -webkit-user-select: none;
  /* Chrome/Safari/Opera */
  -khtml-user-select: none;
  /* Konqueror */
  -moz-user-select: none;
  /* Firefox */
  -ms-user-select: none;
  /* Internet Explorer/Edge */
  user-select: none;
  /* Non-prefixed version, currently
  not supported by any browser */
}


.btn {
  position: relative;
  background: none;
  border: solid 1px white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn:hover {
  color: black;
  border: 1px solid rgb(0, 255, 255);
  background-color: rgb(0, 255, 255);
  transition: 0.3s ease-out;
}

.link {
  color: rgb(0, 255, 255);
}


::selection {
  background: blue;
  /* Safari */
}

::-moz-selection {
  background: blue;
  /* Firefox */
}



::-webkit-scrollbar-track {
  background-color: black;
}

::-webkit-scrollbar {
  width: 15px;
  background-color: black;
}

::-webkit-scrollbar-thumb {
  background-color: black;
  border: 1px solid white;

}



.dropbtn {
  color: white;
  border: none;
  cursor: pointer;
  border: 1px solid white;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  z-index: 1;
  border: 1px solid white;
}

.dropdown-content-2 {
  display: none;
  position: absolute;
  z-index: 1;

}

.dropdown:hover .dropdown-content {
  display: block;
}




.rainbow {
  background: linear-gradient(to right, rgb(255, 0, 0), rgb(0, 165, 0), rgb(255, 255, 0), rgb(124, 252, 0), rgb(0, 255, 255), rgb(0, 0, 255), rgb(255, 0, 255));
  /* background: linear-gradient(to right, rgb(0, 0, 0), rgb(0, 255, 255), rgb(0, 0, 0)); */
  background-size: 200% auto;
  background-clip: text;
  scrollbar-color: black;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: shine 1s linear infinite;
  animation: shine 1s linear infinite;
}

@-webkit-keyframes shine {
  to {
    background-position: 200% center;
  }
}

@keyframes shine {
  to {
    background-position: 200% center;
  }
}



input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}

</style>
  