<template>
  <section class="mx-8 my-8">
    <div class="mb-5">
      <h3 v-if="meals && meals.length > 0" class="text-2xl font-bold text-gray-800">
        Search results for '{{ searchTerm }}'
      </h3>
      <p v-else class="text-xl text-gray-600">
        No results found for '{{ searchTerm }}'. Try again!
      </p>
    </div>
    
    <div v-if="meals && meals.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <div 
        v-for="meal in meals" 
        :key="meal.idMeal"
        class="bg-white rounded-xl shadow-md overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col"
      >
        <div class="relative">
          <img :src="meal.strMealThumb" :alt="meal.strMeal" class="w-full h-48 object-cover" />
          <button class="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md hover:bg-red-50 transition-colors">
            <span class="text-red-500 text-xl">❤️</span>
          </button>
        </div>
        <div class="p-4 flex flex-col justify-between flex-grow">
          <div>
            <h3 class="font-semibold text-lg mb-1">{{ meal.strMeal }}</h3>
            <p class="text-gray-600 text-xs mb-2">{{ meal.strCategory }} · {{ meal.strArea }}</p>
            <p class="text-lg font-bold text-gray-800">£{{ getRandomPrice() }}</p>
          </div>
          <button 
            @click="handleAddToCart(meal)"
            class="mt-3 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-semibold hover:from-green-600 hover:to-green-700 hover:shadow-md transition-all duration-300"
          >
            ➕ Add to Cart
          </button>
        </div>
      </div>
    </div>
    
    <div v-if="hasMore" class="flex justify-center mt-5">
      <button 
        @click="$emit('load-more')"
        class="px-8 py-3 bg-gradient-to-r from-primary to-primary-light text-white rounded-full font-semibold hover:from-primary-dark hover:to-primary hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
      >
        Load More
      </button>
    </div>
  </section>
</template>

<script setup>
const { addToCart } = useCart()

defineProps({
  meals: Array,
  searchTerm: String,
  hasMore: Boolean
})

defineEmits(['load-more'])

const getRandomPrice = () => {
  return (Math.random() * 15 + 5).toFixed(2)
}

const handleAddToCart = (meal) => {
  const item = {
    id: meal.idMeal,
    name: meal.strMeal,
    price: parseFloat(getRandomPrice()),
    category: meal.strCategory,
    image: meal.strMealThumb
  }
  addToCart(item)
}
</script>
