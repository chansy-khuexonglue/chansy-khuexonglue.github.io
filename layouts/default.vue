<template>
  <div>
    <div class="relative flex h-screen w-full flex-col">
      <div>
        <nav class="container mx-auto flex h-20 px-4">
          <div class="flex w-full items-center justify-between">
            <span class="text-3xl font-bold">Chansy</span>
            <div class="flex gap-4">
              <ul v-for="(item, index) in menu" :key="index">
                <li>
                  <a
                    :href="item.path"
                    class="rounded-xl px-4 py-1.5 hover:bg-gray-50"
                  >
                    {{ item.name }}
                  </a>
                </li>
              </ul>
            </div>
            <button class="rounded-xl bg-gray-50 px-4 py-1.5 text-sm">
              <span>Hire Me</span>
            </button>
          </div>
        </nav>
      </div>
      <main>
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
const { menu } = useMenu();
</script>
