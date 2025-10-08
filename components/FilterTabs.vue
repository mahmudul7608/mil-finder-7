<template>
  <div class="border-b border-gray-200 bg-white px-8 py-3">
    <div class="flex gap-6 overflow-x-auto">
      <button 
        v-for="tab in tabs" 
        :key="tab.id"
        @click="activeTab = tab.id"
        :class="[
          'flex items-center gap-2 px-4 py-2 whitespace-nowrap font-medium transition-all',
          activeTab === tab.id 
            ? 'text-primary border-b-2 border-primary' 
            : 'text-gray-600 hover:text-gray-800'
        ]"
      >
        <span>{{ tab.icon }}</span>
        <span>{{ tab.label }}</span>
      </button>
    </div>
  </div>
</template>

<script setup>
const activeTab = ref('nearby')

const tabs = [
  { id: 'nearby', label: 'Nearby', icon: '📍' },
  { id: 'promotion', label: 'Promotion', icon: '🔥' },
  { id: 'newcomers', label: 'Newcomers', icon: '✨' },
  { id: 'bestseller', label: 'Best Seller', icon: '🏆' },
  { id: 'toprated', label: 'Top Rated', icon: '⭐' },
  { id: 'all', label: 'All', icon: '📋' }
]
</script>
