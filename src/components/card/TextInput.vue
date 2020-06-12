<template>
  <div>
    <h4>Edit Text:</h4>
    <textarea
      rows="4"
      cols="50"
      placeholder="Add text here!"
      v-model="textBoxInput"
      @keyup="textChanged"
    ></textarea>
  </div>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {
      textBoxInput: ""
    };
  },
  methods: {
    textChanged() {
      this.$emit("data", this.textBoxInput);
    }
  }
};
</script>
