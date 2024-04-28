<script setup lang="ts">
import type { Category } from '@models/index'
import { RouterLink } from 'vue-router'

defineProps<{
  categories: Category[]
}>()
</script>

<template>
  <div class="wrapper">
    <section class="container category">
      <h3 class="title">Experience Flavours</h3>
      <ul class="category__list">
        <li v-for="category in categories" :key="category.id">
          <RouterLink class="category__item" :to="`/cakes?categories=${category.slug}`">
            <img class="category__item-image" :src="category.image" :alt="category.alt" />
            <h6 class="category__item-name">{{ category.name }}</h6>
            <p class="category__item-description">{{ category.description }}</p>
          </RouterLink>
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped lang="scss">
@import url('@assets/scss/home.scss');
</style>
