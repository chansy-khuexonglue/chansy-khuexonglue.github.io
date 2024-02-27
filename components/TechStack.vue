<template>
  <div>
    <div class="container mx-auto flex flex-col items-center gap-10 px-4 py-20">
      <span class="text-3xl font-bold">Tech Stack</span>
      <section class="flex flex-col">
        <div class="grid grid-cols-6 gap-4">
          <ul v-for="(item, index) in 12" :key="index">
            <li>
              <article class="flex gap-4 bg-gray-100 p-10">
                <img
                  src="https://www.svgrepo.com/show/376318/flutter.svg"
                  alt="Programming"
                  class="rounded-lx h-32 w-32 object-cover"
                />
                <div class="flex flex-col gap-2"></div>
              </article>
            </li>
          </ul>
        </div>
      </section>
      <section class="grid grid-cols-2 gap-10">
        <article class="flex flex-col gap-6">
          <div class="flex flex-col">
            <span class="font-bold text-primary-500">SKILLS</span>
            <span class="text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
              animi nostrum saepe hic soluta deserunt enim libero ut possimus,
              laborum dolores eveniet illum qui, ipsum perferendis ullam est.
              Ex, animi.
            </span>
          </div>
          <span class="text-sm font-light text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
            animi nostrum saepe hic soluta deserunt enim libero ut possimus,
            laborum dolores eveniet illum qui, ipsum perferendis ullam est. Ex,
            animi.
          </span>
        </article>
        <article class="flex flex-col gap-10">
          <ul v-for="(item, index) in 3" :key="index">
            <li>
              <div class="flex flex-col">
                <span>Web Development</span>
                <div class="flex items-center justify-between gap-2">
                  <div class="h-2 w-full rounded-full bg-primary-500"></div>
                  <span class="text-sm text-primary-500">90%</span>
                </div>
              </div>
            </li>
          </ul>
        </article>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
