<template>
  <!-- change to model with teleport -->
  <div @mouseover="state.showOptions = true" @mouseout="state.showOptions = false">
    <div class="menu" v-show="state.showOptions">
      <label for="selectBox">Font size:</label>
      <!-- the color picker popup is separate so acts as our mouse leaving the menu, so we keep it open -->
      <input type="color" @mouseleave="keepOpen" v-model="state.options.color" />
      <select id="selectBox" v-model="state.options.fontSize">
        <option value="42px">42px</option>
        <option value="48px">48px</option>
        <option value="56px">56px</option>
        <option value="64px">64px</option>
      </select>

      <label>
        <input type="checkbox" v-model="state.isBold" />
        Bold
      </label>
      <label>
        <input type="checkbox" v-model="state.isItalic" />
        Italic
      </label>
      <label>
        <input type="radio" v-model="state.options.justifyContent" value="flex-start" />
        Left
      </label>
      <label>
        <input type="radio" v-model="state.options.justifyContent" value="center" />
        Center
      </label>
      <label>
        <input type="radio" v-model="state.options.justifyContent" value="flex-end" />
        Right
      </label>
      <label>
        <input type="radio" v-model="state.options.alignItems" value="flex-start" />
        Top
      </label>
      <label>
        <input type="radio" v-model="state.options.alignItems" value="center" />
        Middle
      </label>
      <label>
        <input type="radio" v-model="state.options.alignItems" value="flex-end" />
        Bottom
      </label>
    </div>
    <!-- :class - bold and em classes trigger when setBold & setItalic are true
    (binded to checkbox which returns true/false)-->
    <p
      :style="state.options"
      :class="{ bold: state.isBold, italic: state.isItalic }"
    >{{ section.userInput }}</p>
    {{state.options}}
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  props: {
    section: Object,
  },
  setup(props) {
    let state = reactive({
      section: {},

      showOptions: false,
      isBold: false,
      isItalic: false,

      options: {
        fontSize: "",
        height: props.section.height + "px",
        display: "flex",
        alignItems: "",
        justifyContent: "center",
        color: props.section.color,
      },
    });

    function keepOpen() {
      state.showOptions = true;
    }

    return { state, keepOpen };
  },
};
</script>


<style scoped>
p {
  font-size: 42px;
  margin: 5px 0;
  border: 1px dotted grey;
  white-space: pre-line;
  overflow: hidden;
}

.menu {
  position: absolute;
  background: turquoise;
  border-bottom: 1px dotted grey;
  margin-top: 10px;
  margin-left: 5px;
  padding-bottom: 5px;
}

.bold {
  font-weight: bold;
}

.italic {
  font-style: italic;
}
</style>