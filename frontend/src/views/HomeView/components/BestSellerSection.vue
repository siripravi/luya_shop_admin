<script setup lang="ts">
import type { Cake } from '@models/index'
import { FormatToVND } from '@utils/Formatter'
import { RouterLink } from 'vue-router'
import ButtonComponent from '@components/ButtonComponent.vue'

defineProps<{
  bestSellerCakes: Cake[]
}>()
</script>

<template>
  <section class="container-fluid best-seller-background">
    <div class="wrapper">
      <section class="container best-seller">
        <h3 class="title">Best Seller</h3>
        <div class="slider">
          <div
            v-for="cake in bestSellerCakes"
            :key="cake.id"
            class="best-seller__item slider__item"
          >
            <img
              v-if="cake.images?.length > 0"
              class="best-seller__item-image"
              :src="cake.images[0].imageUrl"
              :alt="cake.images[0].alt"
            />
            <div class="best-seller__item-info">
              <div>
                <h6 class="best-seller__item-info__name">
                  <RouterLink :to="`/cakes/${cake.id}`">{{ cake.name }}</RouterLink>
                </h6>
                <p class="best-seller__item-info__description line-clamp-5">
                  {{ cake.description }}
                </p>
              </div>
              <div>
                <div class="best-seller__item-info__price">{{ FormatToVND(cake.price) }}</div>
                <div class="best-seller__item-info__original-price">
                  {{ FormatToVND(cake.originalPrice) }}
                </div>
              </div>
              <ButtonComponent variant="primary">Add to cart +</ButtonComponent>
            </div>
          </div>
        </div>
        <ul class="paging"></ul>
      </section>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import url('@assets/scss/home.scss');
</style>
