<template>
  <div>
    <header>
      <button>Reset Card</button>
      <button>Save / Order / Download</button>
    </header>
    <card-front :card="currentCard"></card-front>
    <!-- output card sections with dynamic slot? https://vuejs.org/v2/guide/components-slots.html#Dynamic-Slot-Names -->
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
    const card = cards.filter(card => card.id === 2);
    // destructure to remove item from array
    [this.currentCard] = card;
    localStorage.setItem("card", JSON.stringify(this.currentCard));
  }
};
</script>

<style></style>
