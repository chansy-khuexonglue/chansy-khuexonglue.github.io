<template>
  <div>
    <nav
      class="container relative mx-auto flex h-20 w-full items-center justify-end px-4"
    >
      <div class="flex">
        <input
          type="checkbox"
          id="drawer-toggle"
          class="peer sr-only relative"
          checked
        />
        <label
          for="drawer-toggle"
          class="group absolute right-40 top-4 flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-primary-500 transition-all duration-500 hover:text-white peer-checked:right-0 peer-checked:rotate-180"
        >
          <Icon
            name="fluent:list-rtl-16-filled"
            size="20"
            class="transition-all group-hover:scale-125 peer-checked:hidden"
          />
        </label>
        <div
          class="fixed -right-64 top-0 z-20 h-full w-64 -translate-x-full transform bg-black/30 py-4 bg-blend-darken backdrop-blur-sm transition-all duration-500 peer-checked:translate-x-0"
        >
          <div class="flex flex-col">
            <ul v-for="(item, index) in menu" :key="index">
              <li>
                <button
                  class="flex w-full px-4 py-2 text-lg transition-all hover:scale-105 hover:font-bold hover:underline hover:underline-offset-4"
                  >{{ item.name }}</button
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
const { menu } = useMenu();
</script>
