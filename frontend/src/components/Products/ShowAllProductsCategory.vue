<!--
<div class="row product_item_inner">
  <div class="col-lg-4 col-md-4 col-6">
    <div class="cake_feature_item">
  <div class="cake_img">
    <img src="img/cake-feature/c-feature-1.jpg" alt="">
  </div>
  <div class="cake_text">
    <h4>$29</h4>
    <h3>Strawberry Cupcakes</h3>
    <a class="pest_btn" href="#">Add to cart</a>
  </div>
</div>
  </div>
 
</div>
-->
<template>
  <section class="banner_area">
    <div class="container">
      <div class="banner_text">
        <h3>Shop</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/shop">Shop</a></li>
        </ul>
      </div>
    </div>
  </section>
  <section class="product_area p_100">
    <div class="container">
      <div class="row product_inner_row">
        <div class="col-lg-9">
          <div class="row m0 product_task_bar">
            <div class="product_task_inner">
              <div class="float-left">
                <a class="active" href="#"
                  ><i class="fa fa-th-large" aria-hidden="true"></i
                ></a>
                <a href="#"><i class="fa fa-th-list" aria-hidden="true"></i></a>
                <span>Showing 1 - 10 of 55 results</span>
              </div>
              <div class="float-right">
                <h4>Sort by :</h4>
                <select class="short" style="display: none">
                  <option data-display="Default">Default</option>
                  <option value="1">Default</option>
                  <option value="2">Default</option>
                  <option value="4">Default</option>
                </select>
                <div class="nice-select short" tabindex="0">
                  <span class="current">Default</span>
                  <ul class="list">
                    <li
                      data-value="Default"
                      data-display="Default"
                      class="option selected"
                    >
                      Default
                    </li>
                    <li data-value="1" class="option">Default</li>
                    <li data-value="2" class="option">Default</li>
                    <li data-value="4" class="option">Default</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="row product_item_inner">
            <div
              v-for="product in allProducts.dataProvider"
              :key="product.id"
              class="col-lg-4 col-md-4 col-6"
            >
              <div class="cake_feature_item">
                <div class="cake_img">
                  <img v-bind:src="product.imageSrc.source" class="" />
                </div>
                <div class="cake_text">
                  <a :href="'/products/' + product.slug + '/' + product.id">{{
                    product.name
                  }}</a>
                </div>
                <h4>
                  {{ FormatToVND(product.price_from) }}
                </h4>

                <ButtonComponent variant="secondary"
                  >Add to cart +</ButtonComponent
                >
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
       <!--  <Sidebar/>  -->
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { filteredVariantPrice } from "../../utils/functions";
import ButtonComponent from "../UI/ButtonComponent.vue";
import { FormatToVND } from "../../utils/Formatter";

defineProps(["allProducts"]);

const productImage = (product) =>
  product.cover_image_id
    ? product.images.sourceUrl
    : process.env.placeholderSmallImage;
</script>
