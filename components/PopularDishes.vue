<template>
  <section class="mx-8 my-12">
    <h2 class="text-3xl font-bold text-gray-800 mb-6">🔥 Popular Dishes</h2>
    
    <div v-if="loading" class="text-center py-10">
      <p class="text-gray-600">Loading popular dishes...</p>
    </div>
    
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      <div 
        v-for="meal in meals" 
        :key="meal.idMeal"
        class="bg-white rounded-xl shadow-md overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
      >
        <div class="relative">
          <img :src="meal.strMealThumb" :alt="meal.strMeal" class="w-full h-40 object-cover" />
          <button class="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md hover:bg-red-50 transition-colors">
            <span class="text-red-500 text-xl">❤️</span>
          </button>
        </div>
        <div class="p-4">
          <h3 class="font-semibold text-base mb-1">{{ meal.strMeal }}</h3>
          <p class="text-gray-600 text-xs mb-2">{{ meal.strCategory }}</p>
          <div class="flex items-center justify-between mb-3">
            <p class="text-lg font-bold text-gray-800">£{{ getRandomPrice() }}</p>
          </div>
          <button 
            @click="handleAddToCart(meal)"
            class="w-full py-2 bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-full font-semibold hover:from-orange-500 hover:to-orange-600 transition-all duration-300"
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { addToCart } = useCart()
const meals = ref([])
const loading = ref(true)

const fetchPopularDishes = async () => {
  try {
    const { data } = await useFetch('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken')
    if (data.value && data.value.meals) {
      meals.value = data.value.meals.slice(0, 8)
    }
  } catch (error) {
    console.error('Error fetching popular dishes:', error)
  } finally {
    loading.value = false
  }
}

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

onMounted(() => {
  fetchPopularDishes()
})
</script>
