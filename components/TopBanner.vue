<template>
  <div v-if="isVisible" class="bg-secondary text-white flex justify-center items-center gap-4 px-4 py-3 text-sm relative">
    <button class="bg-white text-pink-600 px-4 py-2 rounded-md font-semibold hover:bg-pink-50 transition-all duration-300">
      Search your favorite food
    </button>
    <button class="bg-white text-pink-600 px-4 py-2 rounded-md font-semibold hover:bg-pink-50 transition-all duration-300">
      We are delivering your favorite food
    </button>
    <span 
      @click="isVisible = false" 
      class="absolute right-4 cursor-pointer text-xl hover:scale-110 transition-transform"
    >
      ×
    </span>
  </div>
</template>

<script setup>
const isVisible = ref(true)
</script>
