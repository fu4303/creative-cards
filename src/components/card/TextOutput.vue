<template>
  <div @mouseover="showOptions = true" @mouseleave="showOptions = false">
    <form v-show="showOptions">
      <label for="selectBox">Font size: </label>
      <select id="selectBox" v-model="setFontSize">
        <option value="42">42px</option>
        <option value="48">48px</option>
        <option value="56">56px</option>
        <option value="64">64px</option>
      </select>
      <div>
        <label>
          <input type="radio" v-model="setTextAlign" value="left" />
          Left
        </label>
      </div>
      <div>
        <label>
          <input type="radio" v-model="setTextAlign" value="center" />
          Center
        </label>
      </div>
      <div>
        <label>
          <input type="radio" v-model="setTextAlign" value="right" />
          Right
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" v-model="setBold" />
          Bold
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" v-model="setItalic" />
          Italic
        </label>
      </div>
    </form>

    <!-- :class - bold and em classes trigger when setBold & setItalic are true
      (binded to checkbox which returns true/false) -->
    <p :style="styleObject" :class="{ bold: setBold, italic: setItalic }">
      {{ displayText }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    displayText: [String, Number],
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
    };
  },
  computed: {
    styleObject() {
      return {
        textAlign: this.setTextAlign,
        fontSize: this.setFontSize + "px",
        height: this.containerHeight + "px",
      };
    },
  },
};
</script>
