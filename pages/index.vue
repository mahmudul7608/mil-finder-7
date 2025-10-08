<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Sidebar -->
    <Sidebar :is-open="isSidebarOpen" @close="isSidebarOpen = false" />
    
    <!-- Cart Sidebar -->
    <CartSidebar />
    
    <!-- Top Banner -->
    <TopBanner />
    
    <!-- Header -->
    <AppHeader @toggle-sidebar="isSidebarOpen = !isSidebarOpen" />
    
    <!-- Filter Tabs -->
    <FilterTabs />
    
    <!-- Search Bar -->
    <SearchBar @search="handleSearch" />
    
    <!-- Promo Banner -->
    <PromoBanner v-if="!searchResults" />
    
    <!-- Search Results -->
    <SearchResults 
      v-if="searchResults" 
      :meals="searchResults" 
      :search-term="searchTerm"
      @load-more="loadMore"
      :has-more="hasMore"
    />
    
    <!-- Categories Section -->
    <CategoriesSection v-if="!searchResults" />
    
    <!-- Popular Dishes -->
    <PopularDishes v-if="!searchResults" />
    
    <!-- Featured Restaurants -->
    <FeaturedFood v-if="!searchResults" />
  </div>
</template>

<script setup>
const isSidebarOpen = ref(false)
const searchResults = ref(null)
const searchTerm = ref('')
const currentIndex = ref(0)
const itemsPerPage = 6
const allMeals = ref([])
const hasMore = ref(false)

const handleSearch = async (term) => {
  if (!term) return
  
  searchTerm.value = term
  currentIndex.value = 0
  
  try {
    const { data } = await useFetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
    
    if (data.value && data.value.meals) {
      allMeals.value = data.value.meals
      searchResults.value = allMeals.value.slice(0, itemsPerPage)
      currentIndex.value = itemsPerPage
      hasMore.value = allMeals.value.length > itemsPerPage
    } else {
      searchResults.value = []
      allMeals.value = []
      hasMore.value = false
    }
  } catch (error) {
    console.error('Search error:', error)
    searchResults.value = []
  }
}

const loadMore = () => {
  const nextItems = allMeals.value.slice(currentIndex.value, currentIndex.value + itemsPerPage)
  searchResults.value = [...searchResults.value, ...nextItems]
  currentIndex.value += itemsPerPage
  hasMore.value = currentIndex.value < allMeals.value.length
}

// Reset search when component unmounts
onUnmounted(() => {
  searchResults.value = null
})
</script>
