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
