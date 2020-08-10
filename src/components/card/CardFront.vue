<template>
  <div class="section_wrapper">
    <div class="card_wrapper">
      <!-- left -->
      card front
      <section>
        <div>
          <button @click="addSection('Text')">text</button>
          <button @click="addSection('Image')">image</button>
        </div>
        <div v-for="section in state.sections" :key="section.uniqueRef">
          <component
            :is="section.type + 'Input'"
            :defaultValue="section.userInput"
            @data="section.userInput = $event"
          ></component>
        </div>
      </section>
      <!-- right -->
      <section>
        <div v-for="section in state.sections" :key="section.uniqueRef">
          <component
            :is="section.type + 'Output'"
            :data="section.userInput"
          ></component>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from "vue";

import TextInput from "./TextInput.vue";
import TextOutput from "./TextOutput.vue";
import ImageInput from "./ImageUpload.vue";
import ImageOutput from "./ImageOutput.vue";

// TODO / Ideas
// Set order of components and allow to be rearranged (drag or up down arrows)
// Animate in sections when adding
// Remove section button
// User set heights of sections
// Home page set up templates
// Reset button
// Download / save button
// Save image to show in output

export default {
  props: ["card"],
  setup(props) {
    let state = reactive({
      // optional chaining for if no card template is supplied
      sections: computed(() => props.card?.sections),
    });

    function getOccurrences(componentType) {
      var count = 0;
      state.sections.forEach((v) => v.type === componentType && count++);
      return count;
    }

    function addSection(type) {
      state.sections.push({
        type,
        uniqueRef: `${type}${getOccurrences(type)}`,
        userInput: "",
      });
    }

    return { state, addSection };
  },

  components: { TextInput, ImageInput, TextOutput, ImageOutput },
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
