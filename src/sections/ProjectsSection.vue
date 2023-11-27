<script setup>
import { ref, onMounted, inject } from 'vue';
import MainTitle from '@/components/MainTitle.vue';
import ProjectBox from '@/components/ProjectBox.vue';
import projectsData from '@/projects';

const projects = ref(projectsData)
const btnLoading = ref(false)
const showBtnLess = ref(false)
let outputProjects = ref(projects.value.slice(0, 6))
const projectsSection = ref(null)
const mode = inject('mode')

function more() {
  btnLoading.value = true
  setTimeout(() => {
    outputProjects.value = projects.value.slice(0, 12)
    btnLoading.value = false

    // check
    if (projects.value.length == outputProjects.value.length) {
      showBtnLess.value = true
    }
  }, 500)
}

function less() {
  outputProjects.value = projects.value.slice(0, 6)
  showBtnLess.value = false
}

// Mouse Parallax
onMounted(() => {
  projectsSection.value.addEventListener("mousemove", function parallax(event) {
    document.querySelectorAll(".parallax").forEach((shift) => {
      const position = shift.getAttribute("value");
      const x = (window.innerWidth - event.pageX * position) / 90;
      const y = (window.innerHeight - event.pageY * position) / 90;

      shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  });
})

</script>

<template>
  <div class="projects section pb-4 pt-3 mt-3 position-relative" :class="{'dark': mode == 'dark'}" id="projects" ref="projectsSection">
    <div class="parallax-container">
      <img src="../assets/laptop.svg" alt="Image" width="80" class="laptop parallax" value="1">
      <img src="../assets/folder.svg" alt="Image" width="80" class="folder parallax" value="-1">
    </div>
    <div class="container">
      <MainTitle :mode="mode" title="Latest Projects" icon="fa fa-folder" />
      <div class="boxes row g-3" :class="{'dark': mode == 'dark'}">
        <ProjectBox v-for="project in outputProjects" :key="project.id" :project="project" />
      </div>
      <button class="mt-5 d-block mx-auto more" v-if="!showBtnLess" :disabled="btnLoading" @click="more">
        <span v-if="btnLoading" class="spinner-border spinner-border-sm me-1" aria-hidden="true"></span>
        Show More
      </button>
      <button class="mt-5 d-block mx-auto more" v-if="showBtnLess" @click="less">
        Show Less
      </button>
    </div>
  </div>
</template>

<style scoped>
.projects {
  background-color: #fafafa;
  z-index: 1;
}
.projects.dark {
  background-color: #272727;
}

.parallax-container {
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
}
.laptop {
  position: absolute;
  right: 50px;
  top: 50px;
  rotate: 20deg;
  z-index: -1;
  transition: .3s;
}

.folder {
  position: absolute;
  left: 50px;
  bottom: 50px;
  rotate: 325deg;
  z-index: -1;
  transition: .3s;
}

@media (max-width: 767px) {

  .laptop,
  .folder {
    display: none;
  }
}

.more {
  padding: 10px;
  background-color: var(--orange-color);
  border-radius: 6px;
  color: #fff;
  font-weight: 600;
  transition: .3s;
  border: 2px solid var(--orange-color);
}

.more:hover {
  background-color: transparent;
  color: var(--orange-color);
}

.more:disabled {
  opacity: .6;
}
</style>