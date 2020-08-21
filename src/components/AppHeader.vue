<template>
  <header>
    <router-link to="/">Home</router-link>
  </header>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      id: uuidv4(),
    };
  },
};
</script>

<style scoped>
header {
}
</style>
