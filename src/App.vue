<template>
  <div>
    <app-header></app-header>
    <CardWrapper></CardWrapper>
  </div>
</template>

<script>
import Header from "./components/Header";
import CardWrapper from "./components/card/CardWrapper";

export default {
  components: { appHeader: Header, CardWrapper },
  data() {
    return {};
  },
};
</script>
