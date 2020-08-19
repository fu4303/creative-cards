<template>
  <router-link to="/">Home</router-link>
  <router-link :to="`/create/${id}/front`">Create</router-link>
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
