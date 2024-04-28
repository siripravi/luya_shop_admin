<script setup lang="ts">
import type { Cake } from '@models/index'
import { RouterLink } from 'vue-router'
import { FormatToVND } from '@utils/Formatter'
import ButtonComponent from '@components/ButtonComponent.vue'

defineProps<{
  cakes: Cake[]
}>()
</script>

<template>
  <div class="wrapper">
    <section class="container sweeties">
      <h3 class="title">Sweeties</h3>
      <div class="sweeties__items">
        <div class="sweeties__item" v-for="cake in cakes" :key="cake.id">
          <div class="sweeties__item__img">
            <img
              v-if="cake.images?.length > 0"
              class="sweeties__item-image"
              :src="cake.images[0].imageUrl"
              :alt="cake.images[0].alt"
            />
          </div>
          <div class="sweeties__item__name line-clamp-2">
            <RouterLink :to="`/cakes/${cake.id}`">{{ cake.name }}</RouterLink>
          </div>
          <div class="sweeties__item__prices">
            <div class="sweeties__item__price">{{ FormatToVND(cake.price) }}</div>
            <div class="sweeties__item__original-price">{{ FormatToVND(cake.originalPrice) }}</div>
          </div>
          <ButtonComponent variant="secondary">Add to cart +</ButtonComponent>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
@import url('@assets/scss/home.scss');
</style>
