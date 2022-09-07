<script setup>
import { onMounted, ref } from 'vue';
import WACard from '@/components/WACard.vue'

let city = ref('')
let resCity = ref('')
let cardClass = ref('invisible opacity-0')
let uri = ref('')
let tempmin = ref('')
let tempmax = ref('')


function enterClick() {
    const ctinput = document.getElementById('cityİnput')
    ctinput.focus()
    const btn = document.querySelector('button')
    ctinput.addEventListener('keypress', (event) => {
        if (event.key === "Enter") {
            event.preventDefault()
            btn.click()
            
        }
    })
}


function request() {
    fetch(uri.value)
    .then((response) => {
        return response.json()

    })
    .then((data) => {
        console.log(data.days[0].tempmin)
        console.log(data.days[0].tempmax)
        tempmin.value = parseInt(data.days[0].tempmin)
        tempmax.value = parseInt(data.days[0].tempmax)
    })
    .catch(() => {
        cardClass.value = 'invisible opacity-0'
    })
}


function buttonCLick() {
    if (cardClass.value === 'invisible opacity-0') {
        cardClass.value = 'visible opacity-100'
    } 
    resCity.value = city.value
    uri.value = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${resCity.value}?unitGroup=metric&include=days&key=64UKDFAJBWCXNZVVEXPGSZZ2Q&contentType=json
`
    request()
    console.log(uri)
}



onMounted(() => {
    enterClick()
})


</script>


<template>
    <div>
        <div class="flex justify-center mt-12">
        <div class="flex flex-col justify-center items-center">

            <div class="entyrs flex flex-col ">

                <div id="cityDiv" class="flex items-center flex-col">
                    <input id="cityİnput" class="text-center rounded-md p-2 w-44 m-3 outline-none" type="text"
                        placeholder="City" required v-model="city">
                </div>
            </div>
            <button
                class="transition-all duration-500 p-2 w-44 mt-6 border-none rounded-lg text-xl text-white shadow-md shadow-black bg-[#00AFB9] hover:shadow-xl hover:bg-[#BEE9E8] hover:text-black" @click="buttonCLick">Search</button>
        </div>
    </div>
    <div :class="cardClass" class="transition-all duration-700 flex items-center justify-center pt-10">
    <WACard :city="resCity" :mindeg="tempmin" :maxdeg="tempmax" />
    </div>
    </div>
</template>