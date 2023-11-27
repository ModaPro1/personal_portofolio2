<script setup>
import { ref, onMounted, defineEmits, inject } from 'vue';
import BaseHeader from '../components/BaseHeader.vue'
import LightParticles from '@/components/LightParticles.vue';
import DarkParticles from '@/components/DarkParticles.vue';

let placeholder = ref("");
let words = ref(["Web Developer.", "Front-end Developer.", "Web Designer.", "Back-end Developer.", "Fullstack Developer."]);
let index = ref(0);
const emit = defineEmits(['change-mode'])
const mode = inject('mode')

//Start the whole animation.
function type(word) {
  let i = 0;
  let writing = setInterval(() => {
    placeholder.value += word.charAt(i);
    i++;
    //If the i index reaches the end of the current word, the writing animation interval stops and the deleting animation beggins after a defined time.
    if (i >= word.length) {
      clearInterval(writing);
      setTimeout(erase, 1000);
    }
  }, 75)
}

function erase() {
  let deleting = setInterval(() => {
    placeholder.value = placeholder.value.slice(0, -1);
    //If no one single letter remains, the deleting animation interval stops.
    if (placeholder.value.length <= 0) {
      clearInterval(deleting);
      //The index var increases by 1, the writing animation is about to start with the next sentence.
      index.value++;
      //If the index var reaches the end of the sentences array, set his value at 0 to looping from the first sentence of the array.
      if (index.value >= words.value.length) {
        index.value = 0;
      }
      type(words.value[index.value])
    }
  }, 25);
}

onMounted(() => {
  type(words.value[index.value]);
})
</script>

<template>
  <div class="landing section" id="landing" :class="{'dark': mode == 'dark'}">
    <BaseHeader @change-mode="(val) => emit('change-mode', val)" :mode="mode" />
    <DarkParticles v-if="mode == 'light'" />
    <LightParticles v-else />
    <div class="intro">
      <div class="container">
        <div class="content d-flex flex-column flex-lg-row">
          <div class="info" data-aos="fade-right" data-aos-duration="500">
            <h1>Hi, I'm <br> Mahmoud Ahmed</h1>
            <p class="mt-1">I'm a <span>{{ placeholder }}</span></p>
            <div class="icons mt-2">
              <a href="https://www.facebook.com/mahmoud.farghly.353" target="_blank" class="icon" aria-label="Facebook">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
              <a href="mailto:mahmoudfarghly519@gmail.com" target="_blank" class="icon" aria-label="Gmail">
                <i class="fa-brands fa-google"></i>
              </a>
              <a href="https://wa.me/+201020069196" target="_blank" class="icon" aria-label="WhatsApp">
                <i class="fa-brands fa-whatsapp"></i>
              </a>
              <a href="#" class="icon" aria-label="Linkedin">
                <i class="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
            <a class="mt-2 d-block about" href="#about">
              <span class="text-white">About</span>
              <i class="fa-solid fa-circle-down ms-1"></i></a>
          </div>
          <div class="img" data-aos="fade-left" data-aos-delay="300" data-aos-duration="500">
            <img src="../assets/man.svg" width="400" height="400" alt="Image">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.landing {
  height: 100vh;
  max-height: 100vh;
  background-color: #F9F9F9;
}
.landing.dark {
  background-color: #272727;
  color: #fff;
}

.intro {
  position: relative;
  z-index: 1000;
}

.info {
  padding-top: 200px;
  flex: 1;
}

h1 {
  font-weight: bold;
  color: #320032;
  font-size: 45px;
}
.dark h1 {
  color: var(--blue-color);
}

p {
  font-size: 26px;
  font-weight: 600;
}

@keyframes typing {
  from {
    width: 0
  }

  to {
    width: 100%
  }
}

/* The typewriter cursor effect */
@keyframes blink-caret {

  from,
  to {
    border-color: transparent
  }

  50% {
    border-color: orange;
  }
}

p span {
  color: var(--orange-color);
  border-right: 2px solid;
  white-space: nowrap;
  padding-right: 5px;
  animation:
    typing 3.5s steps(40, end),
    blink-caret .75s step-end infinite;
}

.icons {
  display: flex;
  gap: 10px;
}

.icons .icon {
  color: #fff;
  background: linear-gradient(45deg, #2196F3, #78c3ff);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 19px;
  transition: .3s;
}

.icons .icon:hover {
  transform: scale(1.1);
}

.img {
  flex: 1;
  margin-top: 170px;
  text-align: center;
}

@keyframes image {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}

.img img {
  animation: image 1.5s infinite;
  max-width: 400px;
}

.about {
  text-decoration: none;
  padding: 10px;
  background-color: var(--orange-color);
  width: fit-content;
  border-radius: 6px;
  color: #fff;
  font-weight: 600;
  transition: .3s;
}

.about i {
  transition: .3s;
}

.about:hover i {
  transform: translateY(4px);
}
@media (max-width: 991px) {
  .info {
    padding-top: 150px;
  }
  .img {
    margin-top: 50px;
  }
}
@media (max-width: 767px) {
  h1 {
    font-size: 35px;
  }
  p {
    font-size: 23px
  }
  .img {
    display: none;
  }
}
</style>