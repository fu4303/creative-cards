<template>
  <div>
    <h4>Edit Text:</h4>
    <textarea
      class="form-control"
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
  data: function() {
    return {
      textBoxInput: "",
    };
  },
  methods: {
    textChanged: function() {
      this.$emit("displayTextChanged", this.textBoxInput);
    },
  },
};
</script>
