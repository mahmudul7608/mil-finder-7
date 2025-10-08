<template>
  <section class="bg-gray-200 py-12 px-8 my-12">
    <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">🍴 Featured Delicious Food</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
      <div 
        v-for="item in foodItems" 
        :key="item.name"
        class="bg-white rounded-xl p-4 shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
      >
        <div class="relative">
          <img 
            :src="item.image" 
            :alt="item.name" 
            class="w-full h-auto rounded-lg mb-3 hover:scale-105 transition-transform duration-300" 
          />
          <button class="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md hover:bg-red-50 transition-colors">
            <span class="text-red-500 text-xl">❤️</span>
          </button>
        </div>
        <h3 class="font-semibold text-base text-gray-800 mb-1">{{ item.name }}</h3>
        <p class="text-xs text-gray-500 mb-2">{{ item.category }}</p>
        <div class="flex items-center justify-between mb-3">
          <p class="text-lg font-bold text-gray-800">£{{ item.price.toFixed(2) }}</p>
        </div>
        <button 
          @click="addToCart(item)"
          class="w-full py-2 bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-full font-semibold hover:from-orange-500 hover:to-orange-600 hover:scale-105 transition-all duration-300"
        >
          Order Now
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
const { addToCart } = useCart()

const foodItems = [
  { id: 'burger-1', name: 'Delicious Burger', price: 8.99, category: 'Fast-Food', image: '/burger.jpg' },
  { id: 'pizza-1', name: 'Cheesy Pizza', price: 12.50, category: 'Fast-Food', image: '/pizza.jpg' },
  { id: 'pasta-1', name: 'Italian Pasta', price: 10.20, category: 'Italian', image: '/pasta.jpg' },
  { id: 'sushi-1', name: 'Fresh Sushi', price: 15.00, category: 'Japanese', image: '/suchi.jpg' },
  { id: 'steak-1', name: 'Juicy Steak', price: 18.75, category: 'Grill', image: '/meet.jpg' },
  { id: 'salad-1', name: 'Healthy Salad', price: 7.50, category: 'Healthy', image: '/salad.jpg' },
  { id: 'pittha-1', name: 'Delicious Pittha', price: 5.00, category: 'Traditional', image: '/pittha.jpg' },
  { id: 'juice-1', name: 'Fresh Juice', price: 3.50, category: 'Beverage', image: '/jus.jpg' }
]

</script>
