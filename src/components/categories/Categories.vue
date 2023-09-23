<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

import CategoryCard from "@/components/CategoriesCard.vue";

const categories = ref([]);

async function getCategoriesData() {
  try {
    const response = await axios.get(
      "https://zullkit-backend.demo.belajarkoding.com/api/categories?show_product=1"
    );
    categories.value = response.data.data.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
}

onMounted(() => {
  getCategoriesData();
});
</script>

<template>
  <div class="container px-4 mx-auto my-16 md:px-12" id="categories">
    <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">All Categories</h2>
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <CategoryCard
        v-for="categori in categories"
        :key="categori.id"
        :id="categori.id"
        :title="categori.name"
        :count="categori.products_count"
        :image="categori.thumbnails"
      />
    </div>
  </div>
</template>