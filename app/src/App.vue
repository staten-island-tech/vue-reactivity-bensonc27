<script setup>
import { ref } from 'vue'
import Card from './components/Items.vue'
const products = ref([
  {
    name: 'Berry Cone',
    src: '/berrycone.png',
    cost: 4.0,
  },
  {
    name: 'Chocolate Bar',
    src: '/chocolatebar.png',
    cost: 3.5,
  },
  {
    name: 'ChocoChip Sandwich',
    src: '/chocolatechipsandwich.png',
    cost: 2.5,
  },
  {
    name: 'Chocolate Cone',
    src: '/chocolatecone.png',
    cost: 2.5,
  },
  {
    name: 'Cookie',
    src: '/cookie.png',
    cost: 2.0,
  },
  {
    name: 'Mint Chocolate Cone',
    src: '/mintchoco.png',
    cost: 4.0,
  },
  {
    name: 'Mixed Cone',
    src: '/mixcone.png',
    cost: 4.5,
  },
  {
    name: 'Quadruple Scoop',
    src: '/quadruplescoop.png',
    cost: 5.0,
  },
  {
    name: 'Strawberry Cone',
    src: '/strawberrycone.png',
    cost: 3.5,
  },
  {
    name: 'Twix Bar',
    src: '/twixbar.png',
    cost: 2.5,
  },
  {
    name: 'Vanilla Cone',
    src: '/vanillacone.png',
    cost: 3.5,
  },
  {
    name: 'Waffle',
    src: '/waffle.png',
    cost: 4.5,
  },
])
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
      <button @click="console.log(products)">Add to Cart</button>
    </div>
  </div>

  <Cart :cart="carts"></Cart>
</template>

<style>
.product-image {
  width: 20%;
  height: auto;
}
</style>
