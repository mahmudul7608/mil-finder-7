<template>
  <div>
    <!-- Overlay -->
    <div 
      v-if="isOpen" 
      @click="$emit('close')"
      class="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
    ></div>
    
    <!-- Sidebar -->
    <div 
      :class="[
        'fixed top-0 left-0 h-full w-64 bg-white shadow-2xl z-50 transform transition-transform duration-300',
        isOpen ? 'translate-x-0' : '-translate-x-full'
      ]"
    >
      <div class="p-6">
        <div class="flex justify-between items-center mb-8">
          <h2 class="text-xl font-bold">Menu</h2>
          <button @click="$emit('close')" class="text-2xl hover:text-red-500">×</button>
        </div>
        
        <nav class="space-y-4">
          <a href="#" class="flex items-center gap-3 text-gray-700 hover:text-primary transition-colors py-2">
            <span class="text-xl">🏠</span>
            <span class="font-medium">Home</span>
          </a>
          <a href="#" class="flex items-center gap-3 text-gray-700 hover:text-primary transition-colors py-2">
            <span class="text-xl">❤️</span>
            <span class="font-medium">Favorites</span>
          </a>
          <a href="#" class="flex items-center gap-3 text-gray-700 hover:text-primary transition-colors py-2">
            <span class="text-xl">🏪</span>
            <span class="font-medium">Restaurants</span>
          </a>
          <a href="#" class="flex items-center gap-3 text-gray-700 hover:text-primary transition-colors py-2">
            <span class="text-xl">📦</span>
            <span class="font-medium">Orders</span>
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  isOpen: Boolean
})

defineEmits(['close'])
</script>
