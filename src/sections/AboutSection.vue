<script setup>
import { inject } from 'vue';
import MainTitle from '../components/MainTitle.vue'

const mode = inject('mode')
</script>

<template>
  <div id="about" :data-bs-theme="mode == 'dark' && 'dark'" class="about section pt-4 pb-5 position-relative" :class="{'dark': mode == 'dark'}">
    <div class="container">
      <MainTitle title="About Me" icon="fa fa-user" class="mb-4" :style="mode == 'dark' && {color: 'rgb(255 255 255 / 85%)'}" />
      <div class="box rounded-3 p-3 d-flex gap-5 align-items-start border shadow">
        <img src="../assets/me2.png" width="300" height="300" alt="About Image" class="rounded-3">
        <div class="info mt-1">
          <div class="mb-0 fw-bold name h4" data-aos="fade-down">Mahmoud Ahmed</div>
          <p class="mt-0 stack" data-aos-delay="100" data-aos="fade-down">Full-stack Web Developer</p>
          <div class="desc mt-3" data-aos-delay="200" data-aos="fade-down">
            Welcome to my personal portfolio! I am a full-stack web developer with over 3 years of experience in the industry. Throughout my career, I have had the opportunity to work on a variety of projects, ranging from small-scale websites to large-scale enterprise applications.
          </div>
          <span class="mt-2 d-block" data-aos-delay="300" data-aos="zoom-in" data-aos-offset="-100">
            <span class="fw-bold blue"><i class="fa-solid fa-envelope"></i></span> mahmoudfarghly519@gmail.com
          </span>
          <span class="mt-2 d-block" data-aos-delay="400" data-aos="zoom-in" data-aos-offset="-100">
            <span class="fw-bold blue"><i class="fa-solid fa-phone"></i></span> 01020069196
          </span>
          <span class="mt-2 d-block" data-aos-delay="500" data-aos="zoom-in" data-aos-offset="-100">
            <span class="fw-bold blue"><i class="fa-solid fa-location-dot"></i></span> Egypt
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  background-color: #fff;
}
.about.dark {
  background-color: #212529;
  color: #fff;
}
.about .name {
  color: #320032;
}
.about.dark .name {
  color: var(--blue-color);
}
.about .stack {
  color: var(--bs-secondary-color);
}
.about.dark .stack {
  color: rgba(255, 255, 255, .5);
}
.about .box .stack {
  font-size: 14px;
  font-weight: 500;
}
.about .blue {
  color: var(--blue-color);
}
@media (max-width: 767px) {
  .box {
    flex-direction: column;
  }
  .box img {
    margin: auto;
  }
}
</style>