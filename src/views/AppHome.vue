<template>
  <div>
    <ul v-for="category in categories" :key="category">
      <li @click="this.categoryFilter = category">{{ category }}</li>
    </ul>
    <hr />
    <ul v-for="card in filteredCards" :key="card.id">
      <li style="border: 1px solid;">
        <router-link :to="`/create/${card.id}/front`">
          <p>{{ card.name }}</p>
          <img :src="card.pages[0].background" />
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { cards, categories } from "../data";

export default {
  data() {
    return {
      cards,
      categories,
      categoryFilter: "all",
    };
  },
  computed: {
    filteredCards() {
      // first page load shows all cards, and "all" button:
      if (this.categoryFilter === "all") return this.cards;
      // else apply filter when button pressed
      return this.cards.filter((card) =>
        card.categories.includes(this.categoryFilter)
      );
    },
  },
};
</script>

<style scoped>
li {
  width: 30%;
}

img {
  width: 100%;
}
</style>
