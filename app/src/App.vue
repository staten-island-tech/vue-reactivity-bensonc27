<script setup>
import { ref } from 'vue'
import Card from './components/Items.vue'
const products = ref([
  {
    name: 'Berry Cone',
    src: '/berrycone.png',
    cost: 4,
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
  <div>
    <Card v-for="product in products" :key="product.name" :product="product" />
  </div>
</template>

<style>
.product-image {
  width: 30%;
  height: auto;
}
</style>
