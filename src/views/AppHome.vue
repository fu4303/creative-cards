<template>
  <div>
    <ul class="grid_wrapper">
      <li class="category_item" v-for="category in categories" :key="category.id">
        <router-link :to="{ name: 'category', params: { category: category } }">{{ category }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { cards, categories } from "../data";

export default {
  mounted() {
    // create a set to only return unique values
    const uniqueCategories = new Set();
    uniqueCategories.add("all");
    this.cards.map((card) => {
      card.categories.map((category) => {
        uniqueCategories.add(category);
      });
    });
    this.categories = uniqueCategories;
  },
  data() {
    return {
      cards,
      categories,
    };
  },
};
</script>

<style scoped>
.category_item {
  border: 1px solid lightblue;
  padding: 100px 0;
  text-align: center;
}
</style>
