<template>
  <div>
    <ul v-for="category in categories" :key="category">
      <li>{{category}}</li>
    </ul>
    <hr />
    <ul v-for="card in cards" :key="card.id">
      <li style="border: 1px solid;">
        {{card.name}}
        <img :src="card.sections[0].background" />
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
      categories
    };
  }
  // computed: {
  //   categories() {
  //     return categories;
  //   }
  // }
};
</script>
