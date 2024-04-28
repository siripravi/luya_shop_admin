<template>
  <!--write to the imported store using `.set`-->
  <button @click="isCartOpen.set(!$isCartOpen)">Cart</button>
</template>

<script setup>
import { isCartOpen } from "../../stores/cartStore";
import { useStore } from "@nanostores/vue";

// read the store value with the `useStore` hook
const $isCartOpen = useStore(isCartOpen);
</script>
