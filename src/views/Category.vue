<template>
  {{$route.params.category}}
  <ul class="grid_wrapper">
    <li class="category_item" v-for="card in filteredCards" :key="card.id">
      <card-preview :card="card"></card-preview>
    </li>
  </ul>
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
    };
  },
  computed: {
    filteredCards() {
      const filter = this.$route.params.category;
      if (filter === "all") return this.cards;
      return this.cards.filter((card) => card.categories.includes(filter));
    },
  },
};
</script>