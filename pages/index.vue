<template>
  <div>
    <div class="name">
      <span>Hello</span>
    </div>
    <div class="flex flex-col">
      <About id="about" />
      <TechStack id="tech-stack" />
      <Work id="work" />
      <Contact id="contact" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.name {
  font-size: 60px;
  font-weight: bold;
  color: red;
}
</style>
