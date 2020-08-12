<template>
  <!-- change to model with teleport -->
  <div @mouseover="showOptions = true" @mouseleave="showOptions = false" class="wrapper">
    <form v-show="showOptions">
      <label for="selectBox">Font size:</label>
      <select id="selectBox" v-model="setFontSize">
        <option value="42">42px</option>
        <option value="48">48px</option>
        <option value="56">56px</option>
        <option value="64">64px</option>
      </select>
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
        <input type="checkbox" v-model="setBold" />
        Bold
      </label>
      <label>
        <input type="checkbox" v-model="setItalic" />
        Italic
      </label>
      <div>
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
    </form>
    {{setVerticalAlign}}
    <!-- :class - bold and em classes trigger when setBold & setItalic are true
    (binded to checkbox which returns true/false)-->
    <p :style="styleObject" :class="{ bold: setBold, italic: setItalic }">{{ section.userInput }}</p>
  </div>
</template>

<script>
export default {
  props: {
    section: [String, Number],
    containerHeight: {
      type: Number,
      default: 200,
    },
  },
  data() {
    return {
      showOptions: false,
      setTextAlign: "",
      setFontSize: "",
      setBold: false,
      setItalic: false,
      setVerticalAlign: "",
    };
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
      };
    },
  },
};
</script>


<style scoped>
p {
  font-family: "Tangerine", cursive;
  font-size: 42px;
  line-height: 42px;
  text-shadow: 2px 2px 2px #aaa;
  color: #4d4d4d;
  margin: 5px 0;
  border: 1px dotted grey;
  white-space: pre-line;
  overflow: hidden;
}

form {
  position: absolute;
  border-bottom: 1px dotted grey;
  margin-top: 10px;
  margin-left: 5px;
  padding-bottom: 5px;
}

select {
  height: 40%;
}

.bold {
  font-weight: bold;
}

.italic {
  font-style: italic;
}
</style>