<script setup>
import { defineEmits, inject } from 'vue';

const mode = inject('mode')
const emit = defineEmits(['change-mode'])
function toggle() {
  if(mode.value == 'light') {
    mode.value = 'dark'
    emit('change-mode', 'dark')
    document.body.classList.add('dark')
  } else {
    mode.value = 'light'
    emit('change-mode', 'light')
    document.body.classList.remove('dark')
  }
}

</script>

<template>
  <div @click="toggle" class="ms-lg-2 ms-0 mt-1 toggler shadow-sm" :class="{dark: mode == 'dark'}">
    <img
      class="ball"
      :src="require(`../assets/${mode == 'light' ? 'sun' : 'moon'}.svg`)"
      :class="{right: mode == 'light', left: mode == 'dark'}"
      alt="Sun">
  </div>
</template>

<style scoped>
.toggler {
  width: 65px;
  height: 33px;
  border-radius: 20px;
  background-color: #1997db;
  position: relative;
  cursor: pointer;
  transition: .2s;
  user-select: none;
}
.toggler img {
  width: 25px;
  position: absolute;
  top: 4px;
}
.toggler img.right {
  right: 5px;
}
.toggler img.left {
  left: 5px;
}
.toggler .ball {
  top: 4px;
  left: 5px;
  width: 25px;
  height: 25px;
  position: relative;
  border-radius: 50%;
  transition: .2s;
}

.toggler.dark {
  background-color: #374872;
}
.toggler.dark .ball {
  left: 35px;
}
</style>