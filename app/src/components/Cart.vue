<template>
  <div class="mt-8 w-64">
    <div class="flex flex-col gap-2">
      <div
        v-for="item in cartItems"
        :key="item.name"
        class="items-center bg-[#F5F5DC] rounded-lg p-2 border-2 shadow-md"
      >
        <h2 class="text-center text-lg">{{ item.name }} (x{{ item.quantity }})</h2>
        <img class="ml-6 w-12 h-12 object-cover mr-2" :src="item.src" />
        <p class="text-center text-md">${{ item.cost }}</p>
        <button
          class="ml-2 bg-[#F07D66] text-white px-4 py-2 rounded transition-transform duration-100 hover:bg-[#E56A54] transform hover:scale-110 mt-2"
          @click="removeCard(item)"
        >
          Remove
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  cartItems: {
    type: Array,
  },
  removeCard: {
    type: Function,
  },
})
</script>

<style lang="scss"></style>
