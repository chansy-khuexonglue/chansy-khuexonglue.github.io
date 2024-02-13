<template>
  <div>
    <nav
      class="container mx-auto flex h-20 w-full items-center justify-between px-4"
    >
      <span class="text-2xl font-bold">Chansy</span>
      <div class="flex gap-4">
        <ul v-for="(item, index) in menu" :key="index">
          <li>
            <button
              class="hover:bg-primary-50 hover:text-primary-800 rounded-full px-4 py-1 text-sm"
              >{{ item.name }}</button
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
const { menu } = useMenu();
</script>
