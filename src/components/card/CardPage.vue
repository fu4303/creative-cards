<template>
  <div class="card_wrapper">
    <!-- left -->

    <section
      class="card_display"
      :style="{
        backgroundImage: `url(${page.background})`,
      }"
    >
      <div v-for="section in state.sortedSections" :key="section.uniqueRef">
        <component :is="section.type + 'Output'" :section="section"></component>
      </div>
    </section>
    <!-- right -->
    <section>
      <div>
        <button @click="addSection('Text')">text</button>
        <button @click="addSection('Image')">image</button>
      </div>
      <div
        v-for="(section, index) in state.sortedSections"
        :key="section.uniqueRef"
      >
        <button @click="removeSection(section)">x</button>
        <component
          :is="section.type + 'Input'"
          :section="section"
          @section="state.page.section[index] = $event"
        ></component>
      </div>
    </section>
  </div>
</template>

<script>
import { reactive, watchEffect, onMounted } from "vue";

import TextInput from "./TextInput.vue";
import TextOutput from "./TextOutput.vue";
import ImageInput from "./ImageUpload.vue";
import ImageOutput from "./ImageOutput.vue";

// TODO / Ideas
// Animate in sections when adding

export default {
  props: {
    page: Object,
  },

  setup(props) {
    onMounted(() => {
      state.sortedSections = [...state.page.sections].sort((a, b) =>
        a.position > b.position ? 1 : -1
      );
    });

    let state = reactive({
      page: {},
      sortedSections: [],
    });

    watchEffect(() => {
      // props initially comes in as undefined
      state.page = props.page || {};
    });

    function getOccurrences(componentType) {
      var count = 1;
      state.page.sections.forEach(
        (section) => section.type === componentType && count++
      );
      return count;
    }

    function addSection(type) {
      const newSection = {
        type,
        uniqueRef: `${type}${getOccurrences(type)}`,
        userInput: type === "Text" ? "Enter your text here" : "",
      };
      state.page.sections.push(newSection);
    }

    function removeSection(section) {
      const indexPos = state.page.sections.findIndex(
        (el) => el.uniqueRef === section.uniqueRef
      );
      state.page.sections.splice(indexPos, 1);
    }

    return { state, addSection, removeSection };
  },

  components: { TextInput, ImageInput, TextOutput, ImageOutput },
};
</script>

<style scoped>
.card_wrapper {
  display: flex;
  justify-content: space-evenly;
}
.card_wrapper > section {
  margin: 0 1rem;
  width: 100%;
}

.card_display {
  width: 500px;
  height: 700px;
  background-size: cover;
}
</style>
