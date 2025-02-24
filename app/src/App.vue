<script setup>
import { ref } from 'vue'
import Card from './components/Items.vue'
import Cart from './components/Cart.vue'
const products = ref([
  {
    name: 'Berry Cone',
    src: '/berrycone.png',
    cost: 4.0,
    cart: false,
  },
  {
    name: 'Chocolate Bar',
    src: '/chocolatebar.png',
    cost: 3.5,
    cart: false,
  },
  {
    name: 'ChocoChip Sandwich',
    src: '/chocolatechipsandwich.png',
    cost: 2.5,
    cart: false,
  },
  {
    name: 'Chocolate Cone',
    src: '/chocolatecone.png',
    cost: 2.5,
    cart: false,
  },
  {
    name: 'Cookie',
    src: '/cookie.png',
    cost: 2.0,
    cart: false,
  },
  {
    name: 'Mint Chocolate Cone',
    src: '/mintchoco.png',
    cost: 4.0,
    cart: false,
  },
  {
    name: 'Mixed Cone',
    src: '/mixcone.png',
    cost: 4.5,
    cart: false,
  },
  {
    name: 'Quadruple Scoop',
    src: '/quadruplescoop.png',
    cost: 5.0,
    cart: false,
  },
  {
    name: 'Strawberry Cone',
    src: '/strawberrycone.png',
    cost: 3.5,
    cart: false,
  },
  {
    name: 'Twix Bar',
    src: '/twixbar.png',
    cost: 2.5,
    cart: false,
  },
  {
    name: 'Vanilla Cone',
    src: '/vanillacone.png',
    cost: 3.5,
    cart: false,
  },
  {
    name: 'Waffle',
    src: '/waffle.png',
    cost: 4.5,
    cart: false,
  },
])

const cartItems = ref([])

const addToCart = (product) => {
  product.cart = true
  const multipleProduct = cartItems.value.find((item) => item.name === product.name)
  if (multipleProduct) {
    multipleProduct.quantity += 1
  } else {
    const newProduct = {
      name: product.name,
      src: product.src,
      cost: product.cost,
      quantity: 1,
    }
    cartItems.value.push(newProduct)
  }
  totalCost.value += product.cost
}

const removeCard = (product) => {
  product.cart = false
  const multipleProduct = cartItems.value.find((item) => item.name === product.name)
  if (multipleProduct.quantity > 1) {
    multipleProduct.quantity -= 1
    totalCost.value -= product.cost
  } else {
    cartItems.value = cartItems.value.filter((item) => item.name !== product.name)
    totalCost.value -= product.cost
  }
}

let totalCost = ref(0)
</script>

<template>
  <h1 class="text-center text-4xl font-bold text-[#1E3A5F]">Icecream Store</h1>
  <div class="flex justify-center p-4">
    <div class="w-1/5 bg-[#F5F5DC] rounded-lg shadow-lg p-6">
      <h2 class="text-center text-2xl font-semibold text-[#4F4F4F] text-xl mb-4">Shopping Cart</h2>
      <p class="text-center text-m">Total: ${{ totalCost }}</p>
      <Cart class="m-auto w-[50%] h-[40%]" :cartItems="cartItems" :removeCard="removeCard" />
    </div>
    <div class="w-4/5 flex flex-wrap">
      <Card
        class="bg-[#FFFAF1] rounded-lg text-xl p-4 m-8 h-[20%] w-[25%] border-2 shadow-md"
        v-for="product in products"
        :key="product.name"
        :product="product"
        :addToCart="addToCart"
      />
    </div>
  </div>
</template>

<style></style>
