<template>
  <div
    class="flex flex-col items-center p-4 border-2 bg-[#FFFAF1] rounded-lg hover:shadow-lg shadow-md transition-transform duration-100 transform hover:scale-105"
  >
    <h2 class="text-center text-xl mb-2 text-2xl font-semibold text-[#1E3A5F]">
      {{ product.name }}
    </h2>
    <img class="w-[60%] h-[55%] object-cover mb-2" :src="product.src" />
    <p class="text-center text-m text-[#4F4F4F]">${{ product.cost }}</p>
    <button
      class="bg-blue-500 transition-transform duration-100 hover:bg-blue-600 transform hover:scale-110 text-white px-4 py-2 rounded mt-2"
      @click="addToCart(product)"
    >
      Add to Cart
    </button>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
  },
  addToCart: {
    type: Function,
  },
})
</script>

<style lang="scss"></style>
