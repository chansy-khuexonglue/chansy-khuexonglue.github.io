<template>
  <div>
    <div class="flex w-full bg-gray-100">
      <div class="flex w-full flex-col items-center gap-6 py-20">
        <section>
          <span class="text-3xl font-bold">Works</span>
        </section>
        <section class="flex justify-center">
          <button
            class="rounded-xl px-6 py-1.5 text-sm text-black transition-all hover:scale-105 hover:bg-white hover:text-black hover:drop-shadow-lg"
          >
            <span>All</span>
          </button>
          <button
            class="rounded-xl px-6 py-1.5 text-sm text-black transition-all hover:scale-105 hover:bg-white hover:text-black hover:drop-shadow-lg"
          >
            <span>Web Development</span>
          </button>
          <button
            class="rounded-xl px-6 py-1.5 text-sm text-black transition-all hover:scale-105 hover:bg-white hover:text-black hover:drop-shadow-lg"
          >
            <span>Mobile App</span>
          </button>
          <button
            class="rounded-xl px-6 py-1.5 text-sm text-black transition-all hover:scale-105 hover:bg-white hover:text-black hover:drop-shadow-lg"
          >
            <span>Backend</span>
          </button>
        </section>
        <section class="flex w-full flex-col overflow-auto">
          <div class="flex w-full gap-4 overflow-auto p-4">
            <ul v-for="(item, index) in 8" :key="index">
              <li>
                <article
                  class="flex w-72 flex-col overflow-hidden rounded-xl bg-white"
                >
                  <img
                    src="https://i.pinimg.com/564x/1c/b9/fd/1cb9fd96f41c2cc9436865a2b59c2d30.jpg"
                    alt="Programming"
                    class="rounded-lx h-60 w-full object-cover"
                  />
                  <div class="flex flex-col gap-2 p-4">
                    <span class="text-2xl font-bold">Lorem</span>
                    <span class="font-light text-gray-500">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Nulla mollitia rem assumenda, ea illum ex ad veniam
                      deserunt, quam, quis quo magni eligendi inventore dolor
                      deleniti expedita est optio impedit!
                    </span>
                  </div>
                </article>
              </li>
            </ul>
          </div>
        </section>
        <section>
          <button
            class="rounded-xl bg-white px-6 py-1.5 text-sm text-black transition-all hover:scale-105 hover:drop-shadow-lg"
          >
            <span>View All</span>
          </button>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
