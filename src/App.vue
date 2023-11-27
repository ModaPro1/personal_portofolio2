<script setup>
import { onMounted } from 'vue'
import 'aos/dist/aos.css'
// Components
import BaseIntro from './sections/BaseIntro.vue'
import AboutSection from './sections/AboutSection.vue'
import SkillsSection from './sections/SkillsSection.vue'
import ProjectsSection from './sections/ProjectsSection.vue'
import ContactSection from './sections/ContactSection.vue'
import BaseFooter from './sections/BaseFooter.vue'
import { provide, ref } from 'vue'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
// Font Awesome
import '@fortawesome/fontawesome-free/css/fontawesome.css'
import '@fortawesome/fontawesome-free/css/solid.css'
import '@fortawesome/fontawesome-free/css/brands.css'
// AOS
import AOS from 'aos';
AOS.init()

const mode = ref('light')

function changeMode(val) {
  mode.value = val
  localStorage.setItem('mode', mode.value)
}

onMounted(() => {
  if(localStorage.getItem('mode')) {
    if(localStorage.getItem('mode') == 'dark') {
      mode.value = 'dark'
      document.body.classList.add('dark')
    } else if(localStorage.getItem('mode') == 'light') {
      mode.value = 'light'
      document.body.classList.remove('dark')
    }
  }
})

provide('mode', mode)

</script>

<template>
  <BaseIntro @change-mode="changeMode" />
  <AboutSection />
  <SkillsSection />
  <ProjectsSection />
  <ContactSection />
  <BaseFooter />
</template>

<style>
:root {
  --blue-color: #2196F3;
  --orange-color: #FF9800;
}
</style>