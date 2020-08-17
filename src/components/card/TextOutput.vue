<template>
  <div>
    <p
      :style="cssObject"
      :class="{ bold: section.isBold, italic: section.isItalic }"
    >{{ section.userInput }}</p>
  </div>
</template>

<script>
export default {
  props: {
    section: Object,
  },
  computed: {
    cssObject() {
      return {
        display: "flex",
        fontSize: this.section.fontSize,
        height: this.section.height + "px",
        justifyContent: this.section.justifyContent,
        alignItems: this.section.alignItems,
        color: this.section.color,
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

.bold {
  font-weight: bold;
}

.italic {
  font-style: italic;
}
</style>