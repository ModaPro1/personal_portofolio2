<script setup>
import { defineProps } from 'vue';

const props = defineProps(['skill'])
</script>

<template>
  <div class="box">
    <img v-if="skill.image" :src="require(`@/assets/${skill.image}`)" alt="Image" class="d-block m-auto" width="45" height="45">
    <i v-else :style="{ color: props.skill.color }" :class="props.skill.icon"></i>
    <span>{{ props.skill.name }}</span>
  </div>
</template>

<style scoped>

.box {
  text-align: center;
}

.box i {
  font-size: 45px;
  display: block;
}
.box img, .box i {
  transition: .6s;
}
.box:hover img,
.box:hover i {
  transform: rotate3d(0, 1, 0, 360deg);
}
</style>