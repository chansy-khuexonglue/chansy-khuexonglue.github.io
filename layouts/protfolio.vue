<template>
  <div>
    <div class="relative flex h-screen w-full flex-col bg-black text-white">
      <div class="absolute w-full">
        <NavBar />
      </div>
      <main>
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
