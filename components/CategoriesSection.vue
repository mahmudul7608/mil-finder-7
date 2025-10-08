<template>
  <section class="mx-8 my-12">
    <h2 class="text-3xl font-bold text-gray-800 mb-6">🍽️ Browse by Category</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      <div 
        v-for="category in categories" 
        :key="category.name"
        @click="searchByCategory(category.name)"
        class="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
      >
        <div class="text-4xl mb-2">{{ category.icon }}</div>
        <h3 class="font-semibold text-gray-800">{{ category.name }}</h3>
      </div>
    </div>
  </section>
</template>

<script setup>
const categories = [
  { name: 'Burger', icon: '🍔' },
  { name: 'Pizza', icon: '🍕' },
  { name: 'Pasta', icon: '🍝' },
  { name: 'Sushi', icon: '🍣' },
  { name: 'Chicken', icon: '🍗' },
  { name: 'Dessert', icon: '🍰' },
  { name: 'Seafood', icon: '🦞' },
  { name: 'Vegetarian', icon: '🥗' },
  { name: 'Beef', icon: '🥩' },
  { name: 'Breakfast', icon: '🥞' },
  { name: 'Lamb', icon: '🍖' },
  { name: 'Pork', icon: '🥓' }
]

const searchByCategory = async (categoryName) => {
  // This would trigger a category search
  console.log('Searching for:', categoryName)
}
</script>
