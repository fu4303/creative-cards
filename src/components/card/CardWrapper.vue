<template>
  <div>
    <!-- reset card button to restore to original -->
    <card-front :card="currentCard[0]"></card-front>
  </div>
</template>

<script>
import { cards } from "../../data";

import CardFront from "./CardFront";
export default {
  components: { cardFront: CardFront },
  data() {
    return {
      currentCard: "",
      cards
    };
  },
  mounted() {
    // set card from url params after setting up router
    return (this.currentCard = cards.filter(card => card.id === 2));
  }
};
</script>

<style></style>
