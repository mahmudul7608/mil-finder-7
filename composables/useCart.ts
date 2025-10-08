export const useCart = () => {
  const cartItems = useState<any[]>('cart', () => [])
  const isCartOpen = useState<boolean>('isCartOpen', () => false)

  const addToCart = (item: any) => {
    const existingItem = cartItems.value.find(i => i.id === item.id)
    
    if (existingItem) {
      existingItem.quantity++
    } else {
      cartItems.value.push({
        ...item,
        quantity: 1
      })
    }
  }

  const removeFromCart = (itemId: string) => {
    const index = cartItems.value.findIndex(i => i.id === itemId)
    if (index > -1) {
      cartItems.value.splice(index, 1)
    }
  }

  const updateQuantity = (itemId: string, quantity: number) => {
    const item = cartItems.value.find(i => i.id === itemId)
    if (item) {
      if (quantity <= 0) {
        removeFromCart(itemId)
      } else {
        item.quantity = quantity
      }
    }
  }

  const clearCart = () => {
    cartItems.value = []
  }

  const subtotal = computed(() => {
    return cartItems.value.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  })

  const deliveryFee = computed(() => {
    return cartItems.value.length > 0 ? 9 : 0
  })

  const total = computed(() => {
    return subtotal.value + deliveryFee.value
  })

  const itemCount = computed(() => {
    return cartItems.value.reduce((sum, item) => sum + item.quantity, 0)
  })

  const toggleCart = () => {
    isCartOpen.value = !isCartOpen.value
  }

  return {
    cartItems,
    isCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    subtotal,
    deliveryFee,
    total,
    itemCount,
    toggleCart
  }
}
