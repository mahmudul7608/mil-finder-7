<template>
  <div>
    <!-- Overlay -->
    <div 
      v-if="isCartOpen" 
      @click="toggleCart"
      class="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
    ></div>
    
    <!-- Cart Sidebar -->
    <div 
      :class="[
        'fixed top-0 right-0 h-full w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300',
        isCartOpen ? 'translate-x-0' : 'translate-x-full'
      ]"
    >
      <div class="flex flex-col h-full">
        <!-- Header -->
        <div class="p-6 border-b border-gray-200">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-2xl font-bold text-gray-800">My Order</h2>
            <button @click="toggleCart" class="text-2xl hover:text-red-500 transition-colors">
              ×
            </button>
          </div>
          <div class="flex items-center justify-between text-sm text-gray-600">
            <div class="flex items-center gap-2">
              <span>📍</span>
              <div>
                <p class="font-semibold text-gray-800">Delivery address</p>
                <p>1342 Morris Street</p>
              </div>
            </div>
            <button class="text-gray-400 hover:text-gray-600">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
          </div>
          <div class="flex gap-4 mt-2 text-xs text-gray-500">
            <span>⏱️ 40mins</span>
            <span>📍 5km</span>
          </div>
        </div>

        <!-- Cart Items -->
        <div class="flex-1 overflow-y-auto p-6">
          <div v-if="cartItems.length === 0" class="text-center py-12">
            <p class="text-gray-400 text-lg">Your cart is empty</p>
            <p class="text-gray-400 text-sm mt-2">Add items to get started</p>
          </div>
          
          <div v-else class="space-y-4">
            <div 
              v-for="item in cartItems" 
              :key="item.id"
              class="flex gap-3 bg-gray-50 p-3 rounded-lg"
            >
              <img :src="item.image" :alt="item.name" class="w-16 h-16 rounded-lg object-cover" />
              <div class="flex-1">
                <h3 class="font-semibold text-sm">{{ item.name }}</h3>
                <p class="text-xs text-gray-500">{{ item.category }}</p>
                <p class="text-primary font-bold mt-1">£{{ item.price.toFixed(2) }}</p>
              </div>
              <div class="flex flex-col items-end justify-between">
                <button 
                  @click="removeFromCart(item.id)"
                  class="text-gray-400 hover:text-red-500 transition-colors"
                >
                  ×
                </button>
                <div class="flex items-center gap-2 border border-gray-300 rounded-md">
                  <button 
                    @click="updateQuantity(item.id, item.quantity - 1)"
                    class="px-2 py-1 hover:bg-gray-200 transition-colors"
                  >
                    −
                  </button>
                  <span class="px-2 font-semibold">{{ item.quantity }}</span>
                  <button 
                    @click="updateQuantity(item.id, item.quantity + 1)"
                    class="px-2 py-1 hover:bg-gray-200 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div v-if="cartItems.length > 0" class="border-t border-gray-200 p-6 bg-gray-50">
          <div class="space-y-2 mb-4">
            <div class="flex justify-between text-sm">
              <span class="text-gray-600">Sub Total</span>
              <span class="font-semibold">£{{ subtotal.toFixed(2) }}</span>
            </div>
            <div class="flex justify-between text-sm">
              <span class="text-gray-600">Delivery Fee</span>
              <span class="font-semibold">£{{ deliveryFee.toFixed(2) }}</span>
            </div>
            <div class="flex justify-between text-lg font-bold pt-2 border-t border-gray-300">
              <span>Total</span>
              <span class="text-primary">£{{ total.toFixed(2) }}</span>
            </div>
          </div>
          <button class="w-full bg-gradient-to-r from-orange-400 to-orange-500 text-white py-3 rounded-lg font-bold hover:from-orange-500 hover:to-orange-600 transition-all duration-300 shadow-lg">
            Check Out
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { 
  cartItems, 
  isCartOpen, 
  toggleCart, 
  removeFromCart, 
  updateQuantity,
  subtotal,
  deliveryFee,
  total
} = useCart()
</script>
