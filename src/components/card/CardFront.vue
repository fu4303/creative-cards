<template>
  <div class="section_wrapper">
    <div class="card_wrapper">
      <!-- left -->
      <section>
        <div>
          <button @click="addSection('TextInput')">text</button>
          <button @click="addSection('ImageUpload')">image</button>
        </div>
        <div v-for="component in state.sections" :key="component.uniqueRef">
          <component :is="component.name" @data="component.userInput = $event"></component>
        </div>
      </section>
      <!-- right -->
      <section>
        <div v-for="item in state.sections" :key="item">{{item}}</div>
      </section>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";

import TextInput from "./TextInput.vue";
import TextOutput from "./TextOutput.vue";
import ImageUpload from "./ImageUpload.vue";
// import ImageOutput from "./ImageOutput.vue";

export default {
  props: ["card"],
  mounted() {},

  setup() {
    let state = reactive({
      sections: [],
    });

    function getOccurrences(componentName) {
      var count = 0;
      state.sections.forEach((v) => v.name === componentName && count++);
      return count;
    }

    function addSection(name) {
      state.sections.push({
        name,
        uniqueRef: `${name}${getOccurrences(name)}`,
        userInput: "",
      });
    }

    return { state, addSection };
  },

  components: { TextInput, ImageUpload, TextOutput },
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
