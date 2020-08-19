<template>
  <header>
    <button>Reset Card</button>
    <button>Download</button>
  </header>
  <div v-for="page in state.currentCard.pages" :key="page">
    <ul>
      <li>
        {{page.name}}
        <ul v-for="section in page.sections" :key="section">
          <li>{{section}}</li>
        </ul>
      </li>
    </ul>
  </div>
  <div>
    <router-link to="front">Front</router-link>
    <router-link to="inside-left">Inside Left</router-link>
    <router-link to="inside-right">Inside Right</router-link>
    <router-link to="back">Back</router-link>
  </div>
  <card-page :page="state.currentCard.pages[getPageIndex()]"></card-page>

  <!-- output card sections with dynamic slot? https://vuejs.org/v2/guide/components-slots.html#Dynamic-Slot-Names -->
</template>

<script>
import { reactive, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { cards } from "../data";
import CardPage from "../components/card/CardPage";

export default {
  setup() {
    const route = useRoute();

    // router guard if card not saved

    let state = reactive({
      currentCard: [],
      cards,
    });

    watchEffect(() => {
      const card = state.cards.filter(
        (card) => card.id === Number(route.params.id)
      );
      // destructure to remove item from array
      [state.currentCard] = card;
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
