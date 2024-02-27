<template>
  <div>
    <div class="flex flex-col bg-primary-500">
      <section
        class="container mx-auto flex flex-col items-center gap-10 px-4 py-20"
      >
        <span class="text-3xl font-bold">Contact</span>
        <div class="grid grid-cols-2 gap-10">
          <article class="flex flex-col">
            <div class="grid grid-cols-4 gap-4">
              <ul v-for="(item, index) in 4" :key="index">
                <li>
                  <button class="h-40 rounded-xl bg-white px-6 py-1.5 text-sm">
                    <span>Telegram</span>
                  </button>
                </li>
              </ul>
            </div>
          </article>
          <article class="flex flex-col gap-8 rounded-xl bg-white p-4">
            <span class="text-xl font-bold">Send Email to me here</span>
            <div class="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your email"
                class="rounded-xl bg-gray-50 px-3 py-1.5 text-sm"
              />
              <textarea
                placeholder="Enter your message"
                class="rounded-xl bg-gray-50 px-3 py-1.5 text-sm"
              />
              <button class="rounded-xl bg-primary-400 px-6 py-1.5 text-sm">
                <span>Send</span>
              </button>
            </div>
          </article>
        </div>
      </section>
      <section>
        <div
          class="flex items-center justify-center border-t border-black/10 py-6"
        >
          <span>Copyright © 2016-2024 Nuxt - MIT License</span>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
