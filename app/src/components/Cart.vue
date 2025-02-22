<template>
  <div>
    <h2>Shopping Cart</h2>
    <h2 class="text-center text-xl">
      {{ item.name }}
    </h2>
    <img class="w-[75%] h-[85%] object-cover m-auto" :src="item.src" />
    <p class="text-center text-m">${{ item.cost }}</p>
  </div>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
  },
})
</script>

<style lang="scss"></style>
