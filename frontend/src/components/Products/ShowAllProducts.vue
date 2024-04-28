<template>
  <div class="row service_main_item_inner">
    <template v-for="singleProduct in allProducts">
      <template v-for="product in singleProduct">
        <div
          v-if="product.slug"
          :key="product.databaseId"
          class="col-lg-4 col-sm-6"
        >
          <div class="service_m_item">
            <div class="service_img_inner">
              <a :href="`/products/${product.slug}/${product.databaseId}`">
                <div class="service_img">
                  <img
                    id="product-image"
                    class="container mx-auto transition duration-700 ease-in-out transform cursor-pointer lg:w-64 xl:w-64 sm:p-4 hover:scale-95"
                    :alt="product.name"
                    :src="productImage(product)"
                  />
                </div>

                <div class="service_text">
                  <a href="#"><h4>Valentines Day Cakes</h4></a>
                </div>
              </a>
            </div>
            <div class="flex justify-center pt-3">
              <p class="text-xl font-bold text-center cursor-pointer">
                {{ product.name }}
              </p>
            </div>
            <div v-if="product.onSale" class="flex justify-center mt-2">
              <div class="text-lg text-gray-900 line-through">
                <span v-if="product.variations">
                  {{ filteredVariantPrice(product.price, "right") }}</span
                >
                <span v-else>{{ product.regularPrice }}</span>
              </div>
              <div class="ml-4 text-xl text-gray-900">
                <span v-if="product.variations">{{
                  filteredVariantPrice(product.price)
                }}</span>
                <span v-else>{{ product.salePrice }}</span>
              </div>
            </div>
            <div v-else>
              <p class="mt-2 text-xl text-center text-gray-900">
                {{ product.price }}
              </p>
            </div>
          </div>
        </div>
      </template>
    </template>
  </div>
</template>

<script setup>
import { filteredVariantPrice } from "../../utils/functions";

defineProps(["allProducts", "categoryProduct"]);

const productImage = (product) =>
  product.image ? product.image.sourceUrl : process.env.placeholderSmallImage;
</script>
