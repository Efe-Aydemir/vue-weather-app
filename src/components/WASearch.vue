<script setup>
import { onMounted} from 'vue';
onMounted(() => {
    const ctinput = document.getElementById('cityİnput')
    ctinput.focus()
})
</script>


<template>
    <div class="flex justify-center mt-12">
        <div class="flex flex-col justify-center items-center">

            <div class="entyrs flex flex-col ">

                <div id="cityDiv" class="flex items-center flex-col">
                    <label for="cityİnput" class="w-12 text-white text-xl">City</label>
                    <input id="cityİnput" class="rounded-md p-2 w-44 m-3 outline-none" type="text" required>
                </div>
            </div>
            <button class="transition-all duration-500 p-2 w-44 mt-6 border-none rounded-lg text-xl text-black shadow-md shadow-black bg-compbg hover:shadow-lg hover:bg-main hover:text-white hover:border hover:border-solid hover:border-black">Search</button>
        </div>
    </div>
</template>