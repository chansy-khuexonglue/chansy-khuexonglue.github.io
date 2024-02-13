<template>
  <div>
    <div class="flex h-screen w-full flex-col">
      <NavBar />
      <main>
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
