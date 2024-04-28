<template>
    
    <swiper
      :modules="modules"
      :slides-per-view="1.5"
      :space-between="15"
      @activeIndexChange="onSlideChange"
      @swiper="onSwiper"
    >
      <swiper-slide><img src="/images/cakebanner1.jpg" /></swiper-slide>
      <swiper-slide><img src="/images/cakebanner2.jpg" /></swiper-slide>
      <swiper-slide><img src="/images/cakebanner3.jpg" /></swiper-slide>
    </swiper>
  
  </template>
  
<script >
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from 'swiper/modules';
import { store } from '../../lib/store.js';
import 'swiper/css';
import 'swiper/css/autoplay';
// Import Swiper styles
import "swiper/css";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      onSlideChange: () => {},
      modules: [Autoplay],
    };
  },
  methods: {
    onSwiper(swiper) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            swiper.autoplay.start();
            observer.disconnect();
          }
        },
        { threshold: 0 }
      );
      observer.observe(swiper.el);
    },
  },
};
/*
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Autoplay],
    };
  },
};*/
</script>
