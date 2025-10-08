<template>
  <header class="flex justify-between items-center px-8 py-3 border-b border-gray-200 bg-white shadow-sm">
    <div class="flex items-center gap-4">
      <button @click="toggleSidebar" class="text-2xl hover:text-primary transition-colors">
        ☰
      </button>
      <div class="logo">
        <img src="/delivery.png" alt="Logo" class="h-12" />
      </div>
    </div>
    
    <div class="flex-1 max-w-xl mx-8">
      <div class="relative">
        <input 
          type="text" 
          placeholder="What would you like to eat?" 
          class="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-all"
        />
        <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
      </div>
    </div>
    
    <div class="flex gap-3 items-center">
      <button class="bg-transparent border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 transition-all duration-300">
        Log in
      </button>
      <button class="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-all duration-300">
        Sign up
      </button>
      <button @click="toggleCart" class="relative text-2xl cursor-pointer hover:scale-110 transition-transform">
        🛒
        <span v-if="itemCount > 0" class="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
          {{ itemCount }}
        </span>
      </button>
    </div>
  </header>
</template>

<script setup>
const { toggleCart, itemCount } = useCart()
const emit = defineEmits(['toggle-sidebar'])

const toggleSidebar = () => {
  emit('toggle-sidebar')
}
</script>
