<template>
  <div>
    <h2 class="text-center text-xl">
      {{ product.name }}
    </h2>
    <img class="w-[75%] h-[85%] object-cover m-auto" :src="product.src" />
    <p class="text-center text-m">${{ product.cost }}</p>
    <button @click="!cart == cart">Add to Cart</button>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
  },
})
</script>

<style lang="scss"></style>
