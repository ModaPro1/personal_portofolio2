<template>
  <vue-particles color="#000" :particleOpacity="0.7" :particlesNumber="100" shapeType="circle" :particleSize="4"
    linesColor="#000" :linesWidth="1" :lineLinked="true" :lineOpacity="0.4" :linesDistance="150" :moveSpeed="5"
    :hoverEffect="true" hoverMode="repulse" :clickEffect="true" clickMode="push">
  </vue-particles>
</template>

<style scoped>
#particles-js {
  position: absolute;
  top: 64px;
  height: calc(100vh - 72px);
  width: 100%;
}
</style>