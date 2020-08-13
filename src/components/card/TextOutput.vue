<template>
  <!-- change to model with teleport -->
  <div @mouseover="showOptions = true" @mouseout="showOptions = false">
    <div class="menu" v-show="showOptions">
      <label for="selectBox">Font size:</label>
      <!-- the color picker popup is separate so acts as our mouse leaving the menu, so we keep it open -->
      <input type="color" @mouseleave="keepOpen" v-model="setColor" />
      <select id="selectBox" v-model="setFontSize">
        <option value="42">42px</option>
        <option value="48">48px</option>
        <option value="56">56px</option>
        <option value="64">64px</option>
      </select>

      <label>
        <input type="checkbox" v-model="setBold" />
        Bold
      </label>
      <label>
        <input type="checkbox" v-model="setItalic" />
        Italic
      </label>
      <label>
        <input type="radio" v-model="setTextAlign" value="left" />
        Left
      </label>
      <label>
        <input type="radio" v-model="setTextAlign" value="center" />
        Center
      </label>
      <label>
        <input type="radio" v-model="setTextAlign" value="right" />
        Right
      </label>
      <label>
        <input type="radio" v-model="setVerticalAlign" value="flex-start" />
        Top
      </label>
      <label>
        <input type="radio" v-model="setVerticalAlign" value="center" />
        Middle
      </label>
      <label>
        <input type="radio" v-model="setVerticalAlign" value="flex-end" />
        Bottom
      </label>
    </div>
    <!-- :class - bold and em classes trigger when setBold & setItalic are true
    (binded to checkbox which returns true/false)-->
    <p :style="styleObject" :class="{ bold: setBold, italic: setItalic }">{{ section.userInput }}</p>
  </div>
</template>

<script>
export default {
  props: {
    section: Object,
  },
  data() {
    return {
      showOptions: false,
      setTextAlign: "",
      setFontSize: "",
      setBold: false,
      setItalic: false,
      setVerticalAlign: "",
      setColor: this.section.color,
    };
  },
  methods: {
    keepOpen() {
      this.showOptions = true;
    },
  },
  computed: {
    styleObject() {
      return {
        textAlign: this.setTextAlign,
        fontSize: this.setFontSize + "px",
        height: this.section.height + "px",
        verticalAlign: this.setVerticalAlign,
        display: "flex",
        alignItems: this.setVerticalAlign,
        color: this.setColor,
      };
    },
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