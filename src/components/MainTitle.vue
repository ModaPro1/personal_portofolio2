<script setup>
import { defineProps } from 'vue';

const props = defineProps(['title', 'icon', 'mode'])
</script>

<template>
  <h2 class="main-title mb-3" :class="{'dark': mode == 'dark'}">
    <i :class="props.icon" class="me-2"></i>
    <span>{{ props.title }}</span>
  </h2>
</template>

<style scoped>
h2 {
  font-weight: 600;
  width: fit-content;
  margin: auto;
}
h2.dark {
  color: #fff;
}
@keyframes icon {
  0%, 100% {
    transform: rotate(0);
  } 50% {
    transform: rotate(-15deg);
  }
}
h2:hover i {
  animation: icon .5s linear;
}
</style>