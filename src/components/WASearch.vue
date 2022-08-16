<script setup>
import { onMounted} from 'vue';
onMounted(() => {
const ctinput = document.getElementById('cityİnput')
    ctinput.focus()
    const input = document.querySelector('input')
const btn = document.querySelector('button')
btn.addEventListener('click', () => {alert(input.value)})
})


</script>


<template>
    <div class="flex justify-center mt-12">
        <div class="flex flex-col justify-center items-center">

            <div class="entyrs flex flex-col ">

                <div id="cityDiv" class="flex items-center flex-col">
                    <input id="cityİnput" class="text-center rounded-md p-2 w-44 m-3 outline-none" type="text" placeholder="City" required>
                </div>
            </div>
            <button class="transition-all duration-500 p-2 w-44 mt-6 border-none rounded-lg text-xl text-white shadow-md shadow-black bg-[#00AFB9] hover:shadow-xl hover:bg-[#BEE9E8] hover:text-black ">Search</button>
        </div>
    </div>
</template>