<script setup>
import { defineProps, ref } from 'vue';
import ProjectSlider from './ProjectSlider.vue'

const props = defineProps(['project'])
const noLink = ref(false)
const viewSlider = ref(null)

function linkClick(e, link) {
  e.preventDefault();
  if (link == '#') {
    noLink.value = true
    setTimeout(() => {
      noLink.value = false
    }, 3000)
  } else {
    // open the link
    window.open(link, '_blank');
  }
}

function showSlider(sliderData) {
  viewSlider.value = sliderData
}

</script>

<template>
  <div class="col-xl-4 col-lg-6 col-md-6 box">
    <div data-aos="fade-left" data-aos-offset="-50" :data-aos-delay="props.project.id < 6 && props.project.id * 100"
      class="content shadow p-3 rounded-3 bg-white position-relative h-100 d-flex flex-column justify-content-between"
      >
      <div>
        <div v-if="props.project.hasGallary" class="position-relative image-preview">
          <i @click="showSlider(props.project.slides)" class="fa-solid fa-image"></i>
          <img :src="require(`@/assets/projects/${props.project.image}`)" alt="Project Image"
            class="w-100 rounded-3 shadow-sm border" height="210" width="330">
        </div>
        <img v-else :src="require(`@/assets/projects/${props.project.image}`)" alt="Project Image" height="210"
          width="330" class="w-100 rounded-3 shadow-sm border">
        <div class="info mt-3 pt-3 border-top">
          <div style="font-weight: 600;" class="h5">{{ props.project.name }}</div>
          <p class="text-muted">{{ props.project.desc }}</p>
        </div>
        <Transition name="error">
          <div class="error text-danger" v-if="noLink">
            This project does not have live preview
          </div>
        </Transition>
      </div>
      <a class="icon" :href="props.project.link" target="_blank" aria-label="Project Link"
        @click="(e) => linkClick(e, props.project.link)">
        <i class="fa-solid fa-arrow-up-right-from-square"></i>
      </a>
    </div>
  </div>
  <Teleport to="#app">
    <Transition name="slider">
      <ProjectSlider v-if="viewSlider" @close="viewSlider = false" :sliderData="viewSlider" />
    </Transition>
  </Teleport>
</template>

<style scoped>

.icon {
  display: block;
  text-align: right;
  cursor: pointer;
  font-size: 20px;
}

.error {
  position: absolute;
  left: 16px;
  bottom: 16px;
  width: 85%;
}

.error-enter-active,
.error-leave-active {
  transition: opacity 0.3s;
}

.error-enter-from,
.error-leave-to {
  opacity: 0;
}

.image-preview i {
  transition: .3s;
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
  font-size: 20px;
  background-color: var(--blue-color);
  color: #fff;
  padding: 10px;
  border-radius: 50%;
}
</style>