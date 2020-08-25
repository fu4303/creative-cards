<template>
  <header>
    <button>Reset Card</button>
    <button>Download</button>
  </header>
  <div>
    <router-link to="front">Front</router-link>
    <router-link to="inside-left">Inside Left</router-link>
    <router-link to="inside-right">Inside Right</router-link>
    <router-link to="back">Back</router-link>
  </div>
  <card-page :page="state.currentCard.pages[getPageIndex()]"> </card-page>
  <button @click="apiCall">api call</button>
  <!-- output card sections with dynamic slot? https://vuejs.org/v2/guide/components-slots.html#Dynamic-Slot-Names -->
</template>

<script>
import { reactive, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { cards } from "../data";
import CardPage from "../components/card/CardPage";

// import axios from "axios";

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

    async function apiCall() {
      // const url = "/functions/card-create";
      // axios
      //   .get(url)
      //   .then(function(response) {
      //     console.log(response);
      //   })
      //   .catch(function(error) {
      //     console.log(error);
      //   });

      // const response = await fetch(url);
      // const data = await response.json();
      // console.log({ data });
      // return data;
      fetch("/.netlify/functions/hello-world")
        .then((response) => response.json())
        .then((json) => {
          console.log(json.msg);
        });
    }

    return {
      state,
      getPageIndex,
      apiCall,
    };
  },
  components: {
    CardPage,
  },
};
</script>

<style></style>
