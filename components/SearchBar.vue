<template>
  <div class="flex justify-center py-5 gap-3 px-4">
    <input 
      v-model="searchQuery"
      @keyup.enter="handleSearch"
      type="text" 
      placeholder="Search for restaurants, cuisines, and dishes" 
      class="w-2/3 px-6 py-3 rounded-full border border-gray-300 outline-none text-base bg-gray-100 focus:bg-white focus:border-primary transition-all duration-300"
    />
    <button 
      @click="handleSearch"
      class="px-6 py-3 bg-gradient-to-r from-primary to-primary-light text-white rounded-full font-semibold hover:from-primary-dark hover:to-primary hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
    >
      Search
    </button>
  </div>
</template>

<script setup>
const emit = defineEmits(['search'])
const searchQuery = ref('')

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    emit('search', searchQuery.value.trim())
    searchQuery.value = ''
  }
}
</script>
