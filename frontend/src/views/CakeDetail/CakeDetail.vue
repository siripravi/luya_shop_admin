<script setup lang="ts">
//import type { Cake } from '@models/index'
import { onMounted, ref } from 'vue'
//import CakeApi from '@apis/CakeApi'
import { useRoute } from 'vue-router'
//import { FormatToVND } from '@utils/Formatter'
//import ButtonComponent from '@components/ButtonComponent.vue'

const route = useRoute()
const id = String(route.params.id)
//let cake = ref<Cake>()

onMounted(async () => {
  route.params.id
 /* const cakeData = await CakeApi.getByIdAsync(id)
  if (cakeData) {
    cakeData.categoryName ??= 'Chocolate'
  }
  cake.value = cakeData
  */
})
</script>

<template>
  <div class="separate"></div>

  <div class="container">
    <h3 class="details__title">
      <RouterLink to="/cakes">Cakes</RouterLink>
      /
      <RouterLink :to="`/cakes${cake?.categoryId}`">{{ cake?.categoryName }}</RouterLink>
    </h3>
  </div>
  <section class="container-fluid details-background">
    <div class="wrapper">
      <section class="container details noselect">
        <div class="details__item">
          <div class="details__item-images">
            <div class="details__item-image">
              <img id="mainImageId" :src="cake?.images[0].imageUrl" :alt="cake?.images[0].alt" />
            </div>
            <div class="details__items-small-images">
              <img
                v-for="(image, index) in cake?.images"
                :key="image.alt + index"
                class="details__items-small-image"
                :src="image.imageUrl"
                :alt="image.alt"
              />
            </div>
          </div>
          <div class="details__item-info">
            <div>
              <h6 class="details__item-info__name">{{ cake?.name }}</h6>
              <p class="details__item-info__category">Category: {{ cake?.categoryName }}</p>
              <p class="details__item-info__description line-clamp-5">{{ cake?.description }}</p>
            </div>
            <div>
              <div class="details__item-info__price">{{ FormatToVND(cake?.price ?? 0) }}</div>
              <div class="details__item-info__original-price">
                {{ FormatToVND(cake?.originalPrice ?? 0) }}
              </div>
            </div>
            <ButtonComponent variant="primary">Add to cart +</ButtonComponent>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import url('@assets/scss/details.scss');
</style>
