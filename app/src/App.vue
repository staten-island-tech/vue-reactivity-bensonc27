<script setup>
import { ref, reactive } from 'vue'
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

console.log(products.value)
const cart = reactive([])
</script>

<template>
  <div class="flex">
    <div class="flex justify-evenly flex-wrap gap-4 mx-auto">
      <Card
        class="mt-2 w-1/5 p-2 border-4 shadow-md"
        v-for="product in products"
        :key="product.name"
        :product="product"
      />
    </div>
  </div>

  <div v-for="product in products">
    <Card
      v-if="product.cart == true"
      class="mt-2 w-1/5 p-2 border-4 shadow-md"
      :product="product"
      :key="product.name"
    ></Card>
  </div>
</template>

<style></style>
