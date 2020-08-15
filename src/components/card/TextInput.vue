<template>
  <div>
    <div @mouseover="state.showOptions = true" @mouseout="state.showOptions = false">
      <h4>Edit Text:</h4>
      <textarea rows="4" cols="50" v-model="state.currentSection.userInput" @keyup="textChanged"></textarea>
      <div class="menu" v-show="state.showOptions">
        <label for="selectBox">Font size:</label>
        <!-- the color picker popup is separate so acts as our mouse leaving the menu, so we keep it open -->
        <input type="color" @mouseleave="keepOpen" v-model="state.currentSection.color" />
        <select id="selectBox" v-model="state.currentSection.fontSize">
          <option value="42px">42px</option>
          <option value="48px">48px</option>
          <option value="56px">56px</option>
          <option value="64px">64px</option>
        </select>

        <label>
          <input type="checkbox" v-model="state.currentSection.isBold" />
          Bold
        </label>
        <label>
          <input type="checkbox" v-model="state.currentSection.isItalic" />
          Italic
        </label>
        <label>
          <input type="radio" v-model="state.currentSection.justifyContent" value="flex-start" />
          Left
        </label>
        <label>
          <input type="radio" v-model="state.currentSection.justifyContent" value="center" />
          Center
        </label>
        <label>
          <input type="radio" v-model="state.currentSection.justifyContent" value="flex-end" />
          Right
        </label>
        <label>
          <input type="radio" v-model="state.currentSection.alignItems" value="flex-start" />
          Top
        </label>
        <label>
          <input type="radio" v-model="state.currentSection.alignItems" value="center" />
          Middle
        </label>
        <label>
          <input type="radio" v-model="state.currentSection.alignItems" value="flex-end" />
          Bottom
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, watchEffect, onMounted } from "vue";
export default {
  props: ["section"],
  emits: ["section"],
  setup(props, context) {
    onMounted(() => {
      context.emit("section", state.currentSection);
    });

    let state = reactive({
      currentSection: {},

      showOptions: false,
    });

    watchEffect(() => {
      // update when new page is selected
      state.currentSection = props.section || {};
    });

    function textChanged() {
      this.$emit("data", state.textBoxInput);
    }

    function keepOpen() {
      state.showOptions = true;
    }
    return { state, keepOpen, textChanged };
  },
};
</script>

<style scoped>
.menu {
  position: absolute;
  background: turquoise;
  border-bottom: 1px dotted grey;
  margin-top: 10px;
  margin-left: 5px;
  padding-bottom: 5px;
}
</style>
