<script setup>

</script>


<template>

<div class="flex justify-center flex-col mt-12">
    <div id="CountryLabel" class="mb-6">
        <h1 class="font-bold text-4xl text-gray-800">Country</h1>
    </div>
    <div id="EntryC" class="flex flex-col justify-center items-center">
        <input type="text" name="country" id="country_input" class="p-1 w-72 rounded-md text-center text-xl" required placeholder="Country">
    </div>
    
    <div id="CityLabel" class="mb-6 mt-12">
        <h1 class="font-bold text-4xl text-gray-800">City</h1>
    </div>
    <div id="EntryCt" class="flex flex-col justify-center items-center">
        <input type="text" name="city" id="city_input" class="p-1 w-72 rounded-md text-center text-xl" required placeholder="City">
    </div>
    <div class="flex justify-center">
    <button class="transition-all duration-500 mt-12 p-3 w-36 bg-gradient-to-r to-blue-400 from-slate-300 rounded-full text-xl font-bold hover:to-black 
    hover:from-black hover:text-white">Weather</button>
    </div>
</div>

</template>