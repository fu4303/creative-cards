<template>
  <!-- 1. HOME PAGE HAVE ALL CARDS DISPLAY 
    2. When selected, place card into local storage
    3. Generate card from local storage
    4. Update local storage with changes
  -->
  <div class="section_wrapper">
    <div v-for="card in cards" :key="card.id" class="card_wrapper">
      <div>
        <div v-for="(component, key) in card.sections[0].components" :key="key">
          <component :is="component" :key="card.sections[0].components"></component>
        </div>
      </div>
      <div>
        <div v-for="(values, key) in card.sections[0].defaultValues" :key="key">
          <!-- add initial default spacing to be equal, or set on object? -->
          <article>{{ values }}</article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { cards } from "../../data";

import TextInput from "./TextInput.vue";
// import TextOutput from "./TextOutput.vue";
import ImageUpload from "./ImageUpload.vue";
// import ImageOutput from "./ImageOutput.vue";

export default {
  data: function() {
    return {
      cards,
      textBoxValue1: "",
      textBoxValue2: "",
      textBoxValue3: "",
      imageName: ""
    };
  },
  components: { TextInput, ImageUpload }
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

.card_wrapper {
  display: flex;
}
</style>
