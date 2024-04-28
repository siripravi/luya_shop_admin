<template>
  <div v-if="isLoaded">
    <h3>Data Loaded Successfully</h3>
    <component
      v-for="item in contentPlaceholder"
      :key="item.id"
      :is="item.block_name"
      :block="item"
    />
  </div>
</template>

<script>
import HtmlBlock from "./LuyaCmsFrontendBlocksHtmlBlock.vue";
import ImageBlock from "./LuyaBootstrap4BlocksImageBlock.vue";
import CarouselBlock from "./LuyaBootstrap4BlocksCarouselBlock.vue";
import CategoryBlock from "./SiripraviEcommerceFrontendBlocksCategoryBlock.vue";

import axios from "axios";
const baseURL = "http://localhost:3030/api";
const axiosClient = axios.create({
  baseURL: "http://localhost:3030/api",
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default {
  components: { HtmlBlock, ImageBlock, CarouselBlock, CategoryBlock },

  data: () => ({
    isLoaded: false,
    response: null,
  }),
  computed: {
    contentPlaceholder() {
      return this.isLoaded ? this.response.placeholders.content : [];
    },
  },
  async mounted() {
    const url = "http://localhost:3030/api/page?id=1";
    //const { data } = await this.$axios('page?id=' + this.$route.params.slug)
    const { data } = await axios(url);
    // axios.get(url).then((response) => {
    this.response = data;
    this.isLoaded = true;
    console.log("rsp:", this.response);
    //});
  },

  // this.response = data
};
</script>
