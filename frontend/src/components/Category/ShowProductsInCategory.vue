<template>
  
    <div v-if="products">         
      <ShowAllProductsCategory :allProducts="products" />
      <div v-if="!products.dataProvider.length" class="mt-10">
        <h2 class="h-10 text-2xl font-bold text-center">
          No products to display
        </h2>
      </div>
    </div>
 
</template>

<script setup>
import ShowAllProductsCategory from "../../components/Products/ShowAllProductsCategory.vue";

defineProps(["products"]);
</script>
