<template>
  <div class="card_wrapper">
    <!-- left -->
    <section
      class="card_display"
      :style="{
        backgroundImage: `url(${page.background})`,
      }"
    >
      <!-- <div v-for="section in state.sortedSections" :key="section.uniqueRef">
        <component :is="section.type + 'Output'" :section="section"></component>
      </div> -->

      <section-grid>
        <template #section1>
          <component
            :is="state.sortedSections[0]?.type + 'Output'"
            :section="state.sortedSections[0]"
          ></component>
        </template>
        <template #section2>
          <component
            :is="state.sortedSections[1]?.type + 'Output'"
            :section="state.sortedSections[1]"
          ></component>
        </template>
        <template #section3>
          <component
            :is="state.sortedSections[2]?.type + 'Output'"
            :section="state.sortedSections[2]"
          ></component>
        </template>
      </section-grid>
    </section>
    <!-- right -->
    <section>
      <p v-if="state.message">{{ state.message }}</p>

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
import { reactive, watchEffect } from "vue";

import TextInput from "./TextInput.vue";
import TextOutput from "./TextOutput.vue";
import ImageInput from "./ImageUpload.vue";
import ImageOutput from "./ImageOutput.vue";
import SectionGrid from "./SectionGrid.vue";

// TODO / Ideas
// Animate in sections when adding

export default {
  props: {
    page: Object,
  },

  setup(props) {
    let state = reactive({
      page: {},
      sortedSections: [],
      message: "",
    });

    watchEffect(() => {
      // props initially comes in as undefined
      state.page = props.page || {};

      // watches for section re positioning and updates
      state.sortedSections = [...state.page.sections].sort((a, b) =>
        a.position > b.position ? 1 : -1
      );
    });

    function getOccurrences(componentType) {
      var count = 1;
      state.page.sections.forEach(
        (section) => section.type === componentType && count++
      );
      return count;
    }

    function addSection(type) {
      if (state.sortedSections.length >= 3) {
        state.message = "Only 3 sections allowed per page";
        return;
      }
      const newSection = {
        type,
        uniqueRef: `${type}${getOccurrences(type)}`,
        userInput: type === "Text" ? "Enter your text here" : "",
      };
      // reset any previous message
      state.message = "";
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

  components: { TextInput, ImageInput, TextOutput, ImageOutput, SectionGrid },
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
