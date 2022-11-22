<template>

    <div class="m-2 flex flex-col items-center animate__animated animate__zoomIn animate__faster">
        <div style="max-width: 400px; width:100%;">

            <div class="mt-6">
                <label for="usd" class="text-2xl mb-4">
                    USD
                </label>

                <div class="border">
                    <div class="p-2 flex justify-between">
                        <input id="usd" @keyup="Convert($event)" v-model="usd" maxlength="40"
                            class="bg-black w-full focus:outline-none" placeholder="0.00" type="number" required>
                    </div>
                </div>
            </div>


            <div class="mt-6">
                <label for="rub" class="text-2xl mb-4">
                    RUB
                </label>

                <div class="border">
                    <div class="p-2 flex justify-between">
                        <input id="rub" @keyup="Convert($event)" v-model="rub" maxlength="40"
                            class="bg-black w-full focus:outline-none" placeholder="0.00" type="number" required>
                    </div>
                </div>
            </div>
            <div class="mt-2 text-2xl text-red-600">{{ store.error_message }}</div>



        </div>
    </div>


</template>




<script setup>
import { MainStore } from "@/store";
import { ref } from "vue";

document.title = "Converter"

const store = MainStore();
store.fetchExchange()

let usd = ref(null)
let rub = ref(null)



function Convert(event) {
    const value = event.target.value
    const id = event.target.id
    if (value=="") {
        this.rub = null
        this.usd = null
        return
    }
    if (id == 'usd') {
        this.rub = value * store.exchange
    }else{
        this.usd = value / store.exchange
    }
}


</script>
        