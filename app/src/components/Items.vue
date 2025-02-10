<template>
  <div>
    <h2>
      {{ product.name }}
    </h2>
    <p>${{ product.cost }}</p>
    <img :src="product.src" class="product-image" />
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
  },
})
</script>

<style lang="scss" scoped></style>
