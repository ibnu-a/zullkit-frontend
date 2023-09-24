<script setup>
import Gallery from "../components/detail/Gallery.vue";

import axios from "axios";
import { RouterLink, useRoute } from "vue-router";
import { ref, onMounted, computed } from "vue";

const route = useRoute();
const product = ref(false);

const features = computed(() => {
  return product.value.features.split(',').map(feature => feature.trim());
})

const description = computed(() => {
  return product.value.description.split('\r\n\r\nSuitable for :').map(feature => feature.trim());
})

const Suitable = computed(() => {
  let data = product.value.description.split('\r\n\r\nSuitable for :').map(feature => feature.trim());
  let appsText = data[1]
  return appsText.split('\n');
})

onMounted(() => {
  window.scrollTo(0, 0);
  getProduct();
});

async function getProduct() {
  try {
    const response = await axios.get(
      "https://zullkit-backend.demo.belajarkoding.com/api/products?id=" +
        route.params.id +
        "&show_product=1"
    );
    console.log(response.data.data);
    product.value = response.data.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
}
</script>

<template>
  <main v-if="product">
    <div class="container p-2 mx-auto my-10 max-w-7xl">
      <div class="flex flex-row flex-wrap py-4">
        <main role="main" class="w-full px-4 pt-1 sm:w-2/3 md:w-2/3">
          <h1
            class="mb-2 text-3xl font-bold leading-normal tracking-tight text-gray-900 sm:text-4xl md:text-4xl"
          >
            {{ product.name }}
          </h1>
          <p class="text-gray-500">{{ product.subtitle }}</p>
          <Gallery :defaultImage="product.thumbnails" :galleries="product.galleries"/>
          <section class="" id="orders">
            <h1 class="mt-8 mb-3 text-lg font-semibold">About</h1>
            <div class="text-gray-500">
              <p class="pb-4">
                {{ description[0] }}
              </p>
              Suitable for : <br />
              <p class="pb-0" v-for="data in Suitable">
                {{ data }} <br />
              </p>
            </div>
          </section>
        </main>
        <aside class="w-full px-4 sm:w-1/3 md:w-1/3">
          <div class="sticky top-0 w-full pt-4 md:mt-24">
            <div class="p-6 border rounded-2xl">
              <div class="mb-4" v-if="product.is_figma == 1">
                <div class="flex mb-2">
                  <div>
                    <img
                      src="@/assets/img/icon-figma.png"
                      alt=""
                      class="w-16"
                    />
                  </div>
                  <div class="block mt-1 ml-4">
                    <h3 class="font-semibold text-md">Figma</h3>
                    <p class="text-gray-400 text-md">Project Included</p>
                  </div>
                </div>
              </div>
              <div class="mb-4" v-if="product.is_sketch == 1">
                <div class="flex mb-2">
                  <div>
                    <img
                      src="@/assets/img/icon-sketch.png"
                      alt=""
                      class="w-16"
                    />
                  </div>
                  <div class="block mt-1 ml-4">
                    <h3 class="font-semibold text-md">Sketch</h3>
                    <p class="text-gray-400 text-md">Project Included</p>
                  </div>
                </div>
              </div>
              <div>
                <h1 class="mt-5 mb-3 font-semibold text-md">Great Features</h1>
                <ul class="mb-6 text-gray-500" v-if="product">
                  <li class="mb-2" v-for="feature in features">
                    {{ feature }}
                    <img
                      src="@/assets/img/icon-check.png"
                      class="float-right w-5 mt-1"
                      alt=""
                    />
                  </li>
                </ul>
              </div>
              <RouterLink
                to="/pricing"
                class="inline-flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-full hover:bg-indigo-700 md:py-2 md:text-md md:px-10 hover:shadow"
              >
                Download Now
              </RouterLink>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </main>
</template>