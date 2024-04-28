<script setup lang="ts">
import type { Category, Cake } from '@models/index'
import { onMounted, ref } from 'vue'
import CategoryList from './components/CategoryList.vue'
import BestSellerSection from './components/BestSellerSection.vue'
import SweetiesSection from './components/SweetiesSection.vue'
import CategoryApi from '@apis/CategoryApi'
import CakeApi from '@apis/CakeApi'

let categories = ref<Category[]>([])
let cakes = ref<Cake[]>([])
let bestSellerCakes = ref<Cake[]>(cakes.value)

onMounted(async () => {
  const categoriesData = await CategoryApi.getAllAsync()
  const cakesData = await CakeApi.getAllAsync()
  categories.value = categoriesData
  cakes.value = cakesData?.data ?? []
  bestSellerCakes.value = cakes.value.slice(0, 4)
})
</script>

<template>
  <div class="container-fluid banner">
    <img src="@assets/images/banner.png" alt="Banner" />
  </div>
  <CategoryList :categories="categories" />
  <BestSellerSection :bestSellerCakes="bestSellerCakes" />
  <SweetiesSection :cakes="cakes" />
</template>

<style scoped lang="scss">
@import url('@assets/scss/home.scss');
</style>
