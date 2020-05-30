<template>
  <div class="section_wrapper">
    <div>
      <text-input @displayTextChanged="textBoxValue1 = $event"></text-input>
      <text-input @displayTextChanged="textBoxValue2 = $event"></text-input>
      <image-upload></image-upload>
    </div>
    <div>
      <h3>Front</h3>
      <hr />
      <!-- when adding image also add clipping for circles etc -->
      <text-output
        :displayText="textBoxValue1"
        :containerHeight="130"
      ></text-output>
      <image-output></image-output>
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
import ImageUpload from "./ImageUpload.vue";
import ImageOutput from "./ImageOutput.vue";

export default {
  data: function() {
    return {
      textBoxValue1: "",
      textBoxValue2: "",
      textBoxValue3: "",
      imageName: "",
    };
  },
  components: { TextInput, TextOutput, ImageUpload, ImageOutput },
};
</script>

<style scoped>
.section_wrapper {
  display: flex;
  background: lightblue;
  padding: 1rem 0;
  height: 80vh;
}

.section_wrapper > div {
  background: white;
  flex: 1;
  margin: 0 1rem;
}
</style>
