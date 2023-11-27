<script setup>
import SkillBox from '@/components/SkillBox.vue';
import MainTitle from '../components/MainTitle.vue';
import { onMounted, reactive, ref, inject } from 'vue';
const frontendSkills = reactive([
  {
    id: 1,
    name: 'HTML 5',
    icon: 'fa-brands fa-html5',
    color: '#e34f26'
  },
  {
    id: 2,
    name: 'CSS 3',
    icon: 'fa-brands fa-css3',
    color: '#0091D5'
  },
  {
    id: 3,
    name: 'JS',
    icon: 'fa-brands fa-js',
    color: '#c8b415'
  },
  {
    id: 4,
    name: 'Vue JS',
    icon: 'fa-brands fa-vuejs',
    color: '#42b883'
  },
])
const backendSkills = reactive([
  {
    id: 1,
    name: 'PHP',
    icon: 'fa-brands fa-php',
    color: '#4f5b93'
  },
  {
    id: 2,
    name: 'Laravel',
    icon: 'fa-brands fa-laravel',
    color: '#f55247'
  },
  {
    id: 3,
    name: 'Livewire',
    image: 'livewire.jpg'
  },
  {
    id: 4,
    name: 'Mysql',
    icon: 'fa-solid fa-database',
    color: '#00758f'
  },
])
const techs = reactive([
  {
    id: 1,
    name: 'Jquery',
    icon: 'fa-brands fa-node-js',
    color: '#7acef4'
  },
  {
    id: 2,
    name: 'Bootstrap',
    icon: 'fa-brands fa-bootstrap',
    color: '#7710F1'
  },
  {
    id: 3,
    name: 'NPM',
    icon: 'fa-brands fa-npm',
    color: '#cb3837'
  },
  {
    id: 4,
    name: 'Github',
    icon: 'fa-brands fa-github',
    color: '#333'
  },
  {
    id: 5,
    name: 'Inertia JS',
    image: 'inertia.png'
  },
])
const rocket1 = ref(null)
const rocket2 = ref(null)
const rocket3 = ref(null)
const mode = inject('mode')
onMounted(() => {
  const rockets = [rocket1.value, rocket2.value, rocket3.value]
  setInterval(() => {
    const random = Math.trunc(Math.random() * 3)
    rockets[random].classList.add('animate')
    rockets[random].addEventListener('animationend', (e) => {
      e.target.classList.remove('animate')
    })
  }, 3000)
})
</script>

<template>
  <div class="skills section py-4 position-relative" :class="{ 'dark': mode == 'dark' }" id="skills">
    <div class="container">
      <MainTitle title="My Skills" icon="fa-solid fa-laptop-code" />
      <div class="boxes d-flex flex-wrap gap-4 mt-2">
        <div class="skill p-3 bg-white rounded-3 shadow" data-aos="fade-down">
          <div class="title m-0 pb-2">Front End</div>
          <div class="content d-flex gap-5 mt-3 flex-wrap">
            <SkillBox v-for="skill in frontendSkills" :key="skill.id" :skill="skill" />
          </div>
        </div>
        <div class="skill p-3 bg-white rounded-3 shadow" data-aos="fade-down" data-aos-delay="100">
          <div class="title m-0 pb-2">Back End</div>
          <div class="content d-flex gap-5 mt-3 flex-wrap">
            <SkillBox v-for="skill in backendSkills" :key="skill.id" :skill="skill" />
          </div>
        </div>
        <div class="skill p-3 bg-white rounded-3 shadow" data-aos="fade-down" data-aos-delay="200">
          <div class="title m-0 pb-2">Technologies</div>
          <div class="content d-flex gap-5 mt-3 flex-wrap">
            <SkillBox v-for="skill in techs" :key="skill.id" :skill="skill" />
          </div>
        </div>
      </div>
      <div class="infos mt-4">
        <p class="info" data-aos="fade-right" data-aos-offset="-50">
          <img src="../assets/rocket.svg" width="30" height="30" alt="Image" class="me-1 rocket" ref="rocket1">
          <span class="text">Proficient in full-stack web development with expertise in front-end and back-end
            technologies.</span>
        </p>
        <p class="info" data-aos="fade-right" data-aos-delay="100" data-aos-offset="-50">
          <img src="../assets/rocket.svg" width="30" height="30" alt="Image" class="me-1 rocket" ref="rocket2">
          Skilled in creating fast, responsive, seo-friendly and single-page websites with visually appealing designs.
        </p>
        <p class="info" data-aos="fade-right" data-aos-delay="200" data-aos-offset="-50">
          <img src="../assets/rocket.svg" width="30" height="30" alt="Image" class="me-1 rocket" ref="rocket3">
          Experienced in building web applications using various programming languages and frameworks to meet clients'
          needs.
        </p>
      </div>
    </div>
    <div class="spikes"></div>
  </div>
</template>

<style scoped>
.skills {
  background: linear-gradient(45deg, #dab47c, #ff9800);
}

.skills .boxes {
  max-width: 885px;
  justify-content: center;
  margin: auto;
}

.skill .title {
  font-weight: 600;
  font-size: 20px;
  border-bottom: 1px solid #9e9292;
  text-align: center;
}

.infos .info {
  font-weight: 500;
}


@keyframes rocket {

  0%,
  100% {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(2px, -4px) rotate(-18deg);
  }
}

.infos .info .animate {
  animation: rocket 1s;
}

@media (max-width: 991px) {
  .boxes .skill {
    width: 100%;
  }

  .boxes .skill .content {
    justify-content: center;
  }
}


.spikes {
  position: relative;
}

.spikes::after {
  content: '';
  position: absolute;
  bottom: -52px;
  right: 0;
  width: 100%;
  height: 30px;
  background: linear-gradient(135deg, #E9A94A 25%, transparent 25%), linear-gradient(225deg, #E9A94A 25%, transparent 25%);
  background-size: 30px;
}

.skills.dark .spikes::after {
  content: '';
  position: absolute;
  bottom: -52px;
  right: 0;
  width: 100%;
  height: 30px;
  background: linear-gradient(225deg, #E9A94A 25%, transparent 25%), linear-gradient(132deg, #E9A94A 25%, transparent 25%);
  background-size: 30px;
}</style>