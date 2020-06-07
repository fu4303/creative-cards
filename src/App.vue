<template>
  <div>
    <app-header></app-header>
    <app-home></app-home>
    <CardWrapper></CardWrapper>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
import AppHome from "./pages/AppHome";
import CardWrapper from "./components/card/CardWrapper";

export default {
  components: { AppHeader, CardWrapper, AppHome },
  data() {
    return {};
  }
};
</script>
