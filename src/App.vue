<script setup>
import Header from './components/WaHeader.vue'
import Footer from './components/WaFooter.vue'
import Search from './components/WASearch.vue'
</script>

<template>
  <div class="h-screen   text-center" id="app">
    <div class="flex justify-center pt-5">
      <Header />
    </div>
    <Search />
    <Footer />
    
</div>
</template>


<style>
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-thumb {
  background: orange; 
  border-radius: 20px;
}
</style>
