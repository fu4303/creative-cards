<template>
  <li
    class="preview_wrapper"
    :style="{
      backgroundImage: `url(${card.pages[0].background})`,
      backgroundSize: 'cover',
    }"
  >
    <router-link :to="`/create/${card.id}/front`">
      <p>{{ card.name }}</p>
      <!-- <img :src="card.pages[0].background" /> -->
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
    },
  },
};
</script>

<style scoped>
.preview_wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>
