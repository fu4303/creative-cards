<template>
  <div class="section_wrapper">
    <div class="card_wrapper">
      <!-- left -->
      <section :style="{
          backgroundImage: `url(${page.background})`,
        }">
        <div v-for="section in state.sections" :key="section.uniqueRef">
          <component :is="section.type + 'Output'" :data="section.userInput"></component>
        </div>
      </section>
      <!-- right -->
      {{state.sections}}
      <section>
        <div>
          <button @click="addSection('Text')">text</button>
          <button @click="addSection('Image')">image</button>
        </div>
        <div v-for="section in state.sections" :key="section.uniqueRef">
          <button @click="removeSection(section)">x</button>
          <component
            :is="section.type + 'Input'"
            :defaultValue="section.userInput"
            @data="section.userInput = $event"
          ></component>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { reactive, watchEffect } from "vue";

import TextInput from "./TextInput.vue";
import TextOutput from "./TextOutput.vue";
import ImageInput from "./ImageUpload.vue";
import ImageOutput from "./ImageOutput.vue";

// TODO / Ideas
// Animate in sections when adding
// Remove section button
// User set heights of sections
// Home page set up templates
// Reset button
// Download / save button
// Save image to show in output

export default {
  props: {
    page: Object,
  },

  setup(props) {
    let state = reactive({
      sections: [],
    });

    watchEffect(() => {
      // props initially comes in as undefined
      state.sections = props.page.sections || [];
      // console.log(state.sections);
    });

    function getOccurrences(componentType) {
      var count = 0;
      if (state.sections.length === 0) return 1;
      state.sections.forEach((v) => v.type === componentType && count++);
      return count;
    }

    function addSection(type) {
      const newSection = {
        type,
        uniqueRef: `${type}${getOccurrences(type)}`,
        userInput: "",
      };
      state.sections.push(newSection);
    }

    function removeSection(section) {
      const indexPos = state.sections.findIndex(
        (el) => el.uniqueRef === section.uniqueRef
      );
      state.sections.splice(indexPos, 1);
    }

    return { state, addSection, removeSection };
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
  flex: 1;
  margin: 0 1rem;
}

.card_wrapper {
  display: flex;
}
</style>
