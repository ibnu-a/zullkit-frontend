<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import CategoryCard from "@/components/CategoriesCard.vue";

const categories = ref([
  { id: 1, title: "Mobile UI Kit", count: 371, image: "categories-1.jpg" },
  { id: 2, title: "Fonts", count: 324, image: "categories-2.jpg" },
  { id: 3, title: "Icon Set", count: 81563, image: "categories-3.jpg" },
  { id: 4, title: "Website UI Kit", count: 4500, image: "categories-4.jpg" },
]);
</script>

<template>
  <div class="container px-4 mx-auto my-16 md:px-12" id="categories">
    <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">Top Categories</h2>
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <CategoryCard
        v-for="categori in categories"
        :key="categori.id"
        :title="categori.title"
        :count="categori.count"
        :image="categori.image"
      />
    </div>
  </div>
</template>