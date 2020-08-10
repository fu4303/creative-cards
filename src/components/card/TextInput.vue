<template>
  <div>
    <h4>Edit Text:</h4>
    <textarea
      rows="4"
      cols="50"
      :placeholder="defaultValue"
      v-model="state.textBoxInput"
      @keyup="textChanged"
    ></textarea>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  props: ["defaultValue"],
  emits: ["data"],
  setup(props) {
    let state = reactive({
      textBoxInput: props.defaultValue,
    });

    function textChanged() {
      this.$emit("data", state.textBoxInput);
    }

    return { state, textChanged };
  },
};
</script>
