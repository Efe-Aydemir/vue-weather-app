<script setup>
import {onMounted, defineProps } from 'vue';

const props = defineProps({
    city : String,
    mindeg : Number,
    maxdeg : Number
})

onMounted(() => console.log(props.city))
</script>


<template>
    <div class="w-56  h-56 bg-[#75a8a7] rounded-lg text-white font-bold flex flex-col px-5 py-5 gap-10s">
        <hr />
        <p class="p-3 text-gray-800 text-xl">{{city}}</p>
        <hr />
        <p class="p-1 text-yellow-500">Day</p>
        <p class="p-1 text-yellow-700">{{maxdeg}}</p>
        <hr />
        <p class="text-blue-700 p-1">Night</p>
        <p class="text-blue-700 p-1">{{mindeg}}</p>
        <hr />
    </div>
</template>