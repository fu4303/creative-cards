<template>
  <div>
    <ul v-for="category in categories" :key="category">
      <li @click="this.selectedCategory = category">{{ category }}</li>
    </ul>
    <hr />

    <ul v-for="card in filteredCards" :key="card.id">
      <card-preview :card="card" class="preview_grid_wrapper"></card-preview>
    </ul>
  </div>
</template>

<script>
import { cards, categories } from "../data";
import CardPreview from "../components/CardPreview";

export default {
  components: {
    CardPreview,
  },
  data() {
    return {
      cards,
      categories,
      selectedCategory: "all",
    };
  },
  computed: {
    filteredCards() {
      // first page load shows all cards, and "all" button:
      if (this.selectedCategory === "all") return this.cards;
      // else apply filter when button pressed
      return this.cards.filter((card) =>
        card.categories.includes(this.selectedCategory)
      );
    },
  },
};
</script>

<style scoped>
.preview_grid_wrapper {
}
</style>
