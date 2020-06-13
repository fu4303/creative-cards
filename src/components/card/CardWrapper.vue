<template>
  <div>
    <header>
      <button>Reset Card</button>
      <button>Save / Order / Download</button>
    </header>
    <card-front :card="state.currentCard"></card-front>
    <!-- output card sections with dynamic slot? https://vuejs.org/v2/guide/components-slots.html#Dynamic-Slot-Names -->
  </div>
</template>

<script>
import { reactive, onMounted } from "vue";
import { cards } from "../../data";

import CardFront from "./CardFront";

export default {
  components: { cardFront: CardFront },
  setup() {
    onMounted(() => {
      // set card from url params after setting up router
      const card = state.cards.filter((card) => card.id === 2);
      // destructure to remove item from array
      [state.currentCard] = card;
    });

    let state = reactive({
      currentCard: "",
      cards,
    });

    return {
      state,
    };
  },
};
</script>

<style></style>
