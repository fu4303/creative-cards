<template>
  <header>
    <button>Reset Card</button>
    <button>Save / Order / Download</button>
  </header>
  <div>
    <router-link to="front">Front</router-link>
    <router-link to="inside-left">Inside Left </router-link>
    <router-link to="inside-right">Inside Right </router-link>
    <router-link to="back">Back </router-link>
  </div>
  <card-page
    :templateSections="state.currentCard?.pages[getPageIndex()].sections"
  ></card-page>
  <!-- output card sections with dynamic slot? https://vuejs.org/v2/guide/components-slots.html#Dynamic-Slot-Names -->
</template>

<script>
import { reactive, onMounted } from "vue";
import { useRoute } from "vue-router";
import { cards } from "../data";
import CardPage from "../components/card/CardPage";

export default {
  setup() {
    const route = useRoute();
    onMounted(() => {
      const card = state.cards.filter(
        (card) => card.id === Number(route.params.id)
      );
      // destructure to remove item from array
      [state.currentCard] = card;
    });

    // router guard if card not saved

    let state = reactive({
      currentCard: {},
      cards,
    });

    function getPageIndex() {
      const pages = ["front", "inside-left", "inside-right", "back"];
      return pages.indexOf(route.params.path);
    }

    return {
      state,
      getPageIndex,
    };
  },
  components: {
    CardPage,
  },
};
</script>

<style></style>
