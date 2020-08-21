<template>
  <div>
    <app-header></app-header>
    <hr />
    <router-view />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";

export default {
  components: {
    AppHeader,
  },
  data() {
    return {};
  },
};
</script>


<style>
/* global styles */
li {
  list-style: none;
  cursor: pointer;
}

.grid_wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
}
</style>
