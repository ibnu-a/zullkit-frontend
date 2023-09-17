<script setup>
import { RouterLink } from "vue-router";

defineProps({
  title: String,
  desc: String,
  image: String,
});
</script>

<template>
  <div class="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
    <div class="overflow-hidden border border-gray-200 rounded-xl">
      <RouterLink to="/">
        <div class="m-4 overflow-hidden rounded-xl">
          <img
            alt="Placeholder"
            class="block w-full h-auto"
            :src="'/src/assets/img/' + image"
          />
        </div>
      </RouterLink>

      <header class="px-4 mb-4 leading-tight">
        <h1 class="text-lg">
          <RouterLink
            class="font-semibold text-black no-underline hover:underline"
            to="/"
          >
            {{ title }}
          </RouterLink>
        </h1>
        <span class="block text-sm font-light text-gray-500 no-underline">
          {{ desc }}
        </span>
      </header>
    </div>
  </div>
  <!-- <div class="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
    <div class="overflow-hidden border border-gray-200 rounded-xl">
      <a href="details.html">
        <div class="m-4 overflow-hidden rounded-xl">
          <img
            alt="Placeholder"
            class="block w-full h-auto"
            src="@/assets/img/items-2.jpg"
          />
        </div>
      </a>

      <header class="px-4 mb-4 leading-tight">
        <h1 class="text-lg">
          <a
            class="font-semibold text-black no-underline hover:underline"
            href="#"
          >
            Online Doctor Consultation
          </a>
        </h1>
        <span class="block text-sm font-light text-gray-500 no-underline">
          Website UI Kit
        </span>
      </header>
    </div>
  </div>
  <div class="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
    <div class="overflow-hidden border border-gray-200 rounded-xl">
      <a href="details.html">
        <div class="m-4 overflow-hidden rounded-xl">
          <img
            alt="Placeholder"
            class="block w-full h-auto"
            src="@/assets/img/items-3.jpg"
          />
        </div>
      </a>

      <header class="px-4 mb-4 leading-tight">
        <h1 class="text-lg">
          <a
            class="font-semibold text-black no-underline hover:underline"
            href="#"
          >
            Banking Crypto
          </a>
        </h1>
        <span class="block text-sm font-light text-gray-500 no-underline">
          Mobile UI Kit
        </span>
      </header>
    </div>
  </div> -->
</template>