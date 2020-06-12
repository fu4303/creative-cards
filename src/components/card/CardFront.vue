<template>
  <!-- 1. HOME PAGE HAVE ALL CARDS DISPLAY 
    2. When selected, place card into local storage (take copy)
    3. Generate card from local storage- composition api to get local storage via function
    4. Update local storage with changes
  -->
  <div class="section_wrapper">
    <div class="card_wrapper">
      <!-- left -->
      <!-- {{cardFromStorage}} -->
      <div v-for="component in cardFromStorage.sections[0].components" :key="component.id">
        <component :is="component" :key="card"></component>
      </div>
      <hr />
    </div>
    <!-- right -->
    <div :style="`border: 1px solid; background: url(${card.sections[0].background})`">
      <div v-for="(values, key) in card.sections[0].defaultValues" :key="key">
        <!-- add initial default spacing to be equal, or set on object? -->
        <article>{{ values }}</article>
      </div>
    </div>
  </div>
</template>

<script>
import TextInput from "./TextInput.vue";
// import TextOutput from "./TextOutput.vue";
import ImageUpload from "./ImageUpload.vue";
// import ImageOutput from "./ImageOutput.vue";

export default {
  props: ["card"],
  beforeMount() {
    this.cardFromStorage = JSON.parse(localStorage.getItem("card"));
  },
  data() {
    return {
      textBoxValue1: "",
      textBoxValue2: "",
      textBoxValue3: "",
      imageName: "",
      cardFromStorage: ""
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

.section_wrapper div {
  background: white;
  flex: 1;
  margin: 0 1rem;
}

.card_wrapper {
  display: flex;
}
</style>
