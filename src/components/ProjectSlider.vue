<script setup>
import { defineEmits, defineProps, ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const emit = defineEmits(['close'])
const props = defineProps(['sliderData'])
const activeIndex = ref(0)

function slideChange(swiper) {
  activeIndex.value = swiper.activeIndex
}
</script>

<template>
  <div class="slider-container">
    <div class="overlay" @click="emit('close')"></div>
    <div class="slider">
      <div class="close" @click="emit('close')">
        <i class="fa-solid fa-x"></i>
      </div>
      <swiper class="swiper" :onActiveIndexChange="slideChange" :spaceBetween="30" :pagination="{ clickable: true }"
        :navigation="true" :modules="[Pagination, Navigation]">
        <swiper-slide v-for="slider in props.sliderData" :key="slider.id">
          <img :src="require(`../assets/${slider.image}`)" alt="Image">
        </swiper-slide>
      </swiper>
      <div class="info text-white" v-html="props.sliderData[activeIndex].text"></div>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgb(0 0 0 / 70%);
  top: 0;
  left: 0;
  z-index: 1000000;
}

.slider {
  position: fixed;
  height: 400px;
  left: 50%;
  top: 50%;
  z-index: 10000001;
  transform: translate(-50%, -50%);
  width: 600px;
  user-select: none;
}

@media (max-width:767px) {
  .slider {
    width: 90%;
  }
}

.slider-enter-active,
.slider-leave-active {
  transition: .3s;
  position: relative;
  z-index: 10000001;
}

.slider-enter-from,
.slider-leave-to {
  opacity: 0;
  position: relative;
}

.slider-enter-to,
.slider-leave-from {
  position: relative;
  z-index: 10000001;
}

.close {
  position: absolute;
  z-index: 1000;
  right: -15px;
  top: -15px;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: var(--blue-color);
  cursor: pointer;
  color: #fff;
}

.swiper {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #f9f9f9;
  border-radius: 9px 9px 0 0;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
}

.info {
  z-index: 10000;
  position: relative;
  background: var(--blue-color);
  padding: 10px 15px;
  bottom: -100%;
  border-radius: 0px 0px 9px 9px;
}
</style>