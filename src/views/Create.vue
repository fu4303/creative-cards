<template>
  <header>
    <button>Reset Card</button>
    <button>Save / Order / Download</button>
  </header>
  <div>
    <router-link to="front">Front</router-link>
    <router-link to="inside-left">Inside Left </router-link>
  </div>
  <!-- <card-front :card="state.currentCard"></card-front> -->
  <router-view :card="state.currentCard"></router-view>
  <!-- output card sections with dynamic slot? https://vuejs.org/v2/guide/components-slots.html#Dynamic-Slot-Names -->
</template>

<script>
import { reactive, onMounted } from "vue";
import { useRoute } from "vue-router";
import { cards } from "../data";

export default {
  setup() {
    onMounted(() => {
      const route = useRoute();
      const card = state.cards.filter(
        (card) => card.id === Number(route.params.id)
      );
      // destructure to remove item from array
      [state.currentCard] = card;
    });

    // router guard if card not saved

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
