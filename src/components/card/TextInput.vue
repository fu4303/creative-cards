<template>
  <div>
    <h4>Edit Text:</h4>
    <textarea
      rows="4"
      cols="50"
      placeholder="Add text here!"
      v-model="state.textBoxInput"
      @keyup="textChanged"
    ></textarea>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  emits: ["data"],
  setup() {
    let state = reactive({
      textBoxInput: "",
    });

    function textChanged() {
      this.$emit("data", state.textBoxInput);
    }

    return { state, textChanged };
  },
};
</script>
