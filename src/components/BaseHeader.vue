<script setup>
import { onMounted, ref, defineEmits, defineProps } from 'vue';
import ModeToggler from './ModeToggler.vue';
// Headroom.js
import Headroom from "headroom.js";

const header = ref(null)
const emit = defineEmits(['change-mode'])
const props = defineProps(['mode'])

function scrollActions() {
  let currentScroll = window.scrollY;
  let sections = document.getElementsByClassName("section");
  let activeLinkId = null;

  for (let i = 0; i < sections.length; i++) {
    let section = document.getElementById(sections[i].id);
    if (currentScroll > section.offsetTop - 300) {
      activeLinkId = `link-${section.id}`;
    }
  }

  let links = document.querySelectorAll('.navbar a');
  links.forEach(link => link.classList.remove('active'));

  if (activeLinkId) {
    document.getElementById(activeLinkId).classList.add('active');
  } else {
    document.querySelector('.navbar #link-landing').classList.add('active');
  }
}

document.addEventListener('scroll', () => {
  scrollActions()
});

onMounted(() => {
  const headroom = new Headroom(header.value);
  headroom.init();
  scrollActions()
})


</script>
<template>
  <nav ref="header" class="navbar navbar-expand-lg shadow-sm" :class="{'bg-dark': props.mode == 'dark', 'navbar-dark': props.mode == 'dark'}">
    <div class="container p-1">
      <a class="navbar-brand brand" href="#">
        &lt; <span>Mahmoud</span> /&gt;
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" id="link-landing" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="link-about" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="link-skills" href="#skills">Skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="link-projects" href="#projects">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="link-contact" href="#contact">Contact</a>
          </li>
          <li class="nav-item">
            <ModeToggler @change-mode="(val) => emit('change-mode', val)" />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  width: 100%;
  z-index: 1000000;
  background-color: #fff;
  will-change: transform;
  transition: 200ms linear;
}

.headroom--pinned {
  transform: translateY(0%);
}

.headroom--unpinned {
  transform: translateY(-100%);
}

.brand {
  transform: skew(-15deg, 0deg);
  color: #686262;
  transition: .3s;
}

.navbar .brand span {
  color: #0974c8;
}
.navbar-dark .brand span {
  color: var(--blue-color);
}

.brand:hover {
  transform: skew(15deg, 0deg);
}

.nav-item {
  position: relative;
}

.nav-link {
  font-weight: 600;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 6px;
  height: 3px;
  width: 0;
  transition: .3s;
  background-color: #2196F3;
  border-radius: 1px;
}

.nav-link:hover:after,
.nav-link.active::after {
  width: 80%;
}

@media (max-width:991px) {
  .nav-item {
    width: fit-content;
    margin: auto;
  }

  .nav-link::after {
    left: 0;
    bottom: 5px;
  }

  .nav-link:hover:after,
  .nav-link.active::after {
    width: 100%;
  }
}
</style>