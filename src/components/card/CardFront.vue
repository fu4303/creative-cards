<template>
  <div class="section_wrapper">
    <div>
      <text-input @displayTextChanged="textBoxValue1 = $event"></text-input>
      <text-input @displayTextChanged="textBoxValue2 = $event"></text-input>
    </div>
    <div>
      <text-output
        :displayText="textBoxValue1"
        :containerHeight="130"
      ></text-output>
      <text-output
        :displayText="textBoxValue2"
        :containerHeight="130"
      ></text-output>
    </div>
  </div>
</template>

<script>
import TextInput from "./TextInput.vue";
import TextOutput from "./TextOutput.vue";

export default {
  data: function() {
    return {
      textBoxValue1: "",
      textBoxValue2: "",
      textBoxValue3: "",
      imageName: "",
    };
  },
  components: { TextInput, TextOutput },
};
</script>

<style scoped>
.section_wrapper {
  display: flex;
}
</style>
