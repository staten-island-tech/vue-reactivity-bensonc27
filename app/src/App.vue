<script setup>
import { products } from './components/products.js'
</script>

<template>
  <h1>Ice Cream Shop</h1>
  <div id="store">
    <icecream-item
      v-for="product in products"
      :icecream-name="product.name"
      :icecream-price="product.cost"
    />
  </div>
</template>

<style></style>
