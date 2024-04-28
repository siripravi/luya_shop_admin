<template>
  <aside v-if="$isCartOpen">
    <ul v-if="Object.values($cartItems).length">
      <li v-for="cartItem in Object.values($cartItems)" v-bind:key="cartItem.name">
        <img :src=cartItem.imageSrc :alt=cartItem.name />
        <h3>{{cartItem.name}}</h3>
        <p>Quantity: {{cartItem.quantity}}</p>
      </li>
    </ul>
    <p v-else>Your cart is empty!</p>
  </aside>
</template>

<script setup>
  import { cartItems, isCartOpen } from '../../stores/cartStore';
  import { useStore } from '@nanostores/vue';

  const $isCartOpen = useStore(isCartOpen);
  const $cartItems = useStore(cartItems);
</script>