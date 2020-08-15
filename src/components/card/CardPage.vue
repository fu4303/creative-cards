<template>
  <div class="section_wrapper">
    <div class="card_wrapper">
      <!-- left -->
      <section :style="{
          backgroundImage: `url(${page.background})`,
        }">
        <div v-for="section in state.page.sections" :key="section.uniqueRef">
          <component :is="section.type + 'Output'" :section="section"></component>
        </div>
      </section>
      <!-- right -->
      <section>
        <div>
          <button @click="addSection('Text')">text</button>
          <button @click="addSection('Image')">image</button>
        </div>
        <div v-for="(section, index) in state.page.sections" :key="section.uniqueRef">
          <button @click="removeSection(section)">x</button>
          <component
            :is="section.type + 'Input'"
            :section="section"
            @section="state.page.section[index] = $event"
          ></component>
        </div>
      </section>
    </div>
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
// User set heights of sections

export default {
  props: {
    page: Object,
  },
  emits: ["page"],

  setup(props, context) {
    onMounted(() => {
      // emit page data to parent, this will also be binded for future updates to the page
      context.emit("page", state.page);
    });
    let state = reactive({
      page: {},
      test: {},
    });

    watchEffect(() => {
      // props initially comes in as undefined
      state.page = props.page || {};
    });

    function getOccurrences(componentType) {
      var count = 0;
      if (state.page.sections.length === 0) return 1;
      state.page.sections.forEach((v) => v.type === componentType && count++);
      return count;
    }

    function addSection(type) {
      const newSection = {
        type,
        uniqueRef: `${type}${getOccurrences(type)}`,
        userInput: "",
      };
      state.page.sections.push(newSection);
    }

    function removeSection(section) {
      const indexPos = state.page.sections.findIndex(
        (el) => el.uniqueRef === section.uniqueRef
      );
      state.page.sections.splice(indexPos, 1);
    }

    // function syncWithParent() {
    //   this.$emit("page", state.page);
    // }

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
  height: 600px;
}

.section_wrapper div {
  flex: 1;
  margin: 0 1rem;
}

.card_wrapper {
  display: flex;
}
</style>
