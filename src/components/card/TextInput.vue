<template>
  <div>
    <h4>Edit Text:</h4>
    <textarea
      rows="4"
      cols="50"
      v-model="state.textBoxInput"
      @keyup="textChanged"
    ></textarea>
  </div>
</template>

<script>
import { reactive, watchEffect } from "vue";
export default {
  props: ["defaultValue"],
  emits: ["data"],
  setup(props) {
    let state = reactive({});

    watchEffect(() => {
      // update when new page is selected
      state.textBoxInput = props.defaultValue;
    });

    function textChanged() {
      this.$emit("data", state.textBoxInput);
    }

    return { state, textChanged };
  },
};
</script>
