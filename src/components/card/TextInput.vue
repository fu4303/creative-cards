<template>
  <div>
    {{state.currentSection}}
    <div @mouseover="state.showOptions = true" @mouseout="state.showOptions = false">
      <h4>Edit Text:</h4>
      <div @change="updateParent">
        <textarea rows="4" cols="50" v-model="state.currentSection.userInput"></textarea>
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
          </label>
          <label>
            <input type="checkbox" v-model="state.currentSection.isItalic" />
          </label>
          <div>
            <label>
              <input
                type="radio"
                v-model="state.currentSection.justifyContent"
                value="flex-start"
                name="horizontal"
              />
              <img src="@/assets/icons/left.svg" alt="left" />
            </label>
            <label>
              <input
                type="radio"
                v-model="state.currentSection.justifyContent"
                value="center"
                name="horizontal"
              />
              <img src="@/assets/icons/center.svg" alt="center" />
            </label>
            <label>
              <input
                type="radio"
                v-model="state.currentSection.justifyContent"
                value="flex-end"
                name="horizontal"
              />
              <img src="@/assets/icons/right.svg" alt="right" />
            </label>
            <label>
              <input
                type="radio"
                v-model="state.currentSection.alignItems"
                value="flex-start"
                name="vertical"
              />
              <img src="@/assets/icons/top.svg" alt="top" />
            </label>
            <label>
              <input
                type="radio"
                v-model="state.currentSection.alignItems"
                value="center"
                name="vertical"
              />
              <img src="@/assets/icons/middle.svg" alt="middle" />
            </label>
            <label>
              <input
                type="radio"
                v-model="state.currentSection.alignItems"
                value="flex-end"
                name="vertical"
              />
              <img src="@/assets/icons/bottom.svg" alt="bottom" />
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, watchEffect } from "vue";
export default {
  props: ["section"],
  emits: ["section"],
  setup(props) {
    let state = reactive({
      currentSection: {},
      showOptions: false,
    });

    watchEffect(() => {
      // update when new page is selected
      state.currentSection = props.section || {};
    });

    function updateParent() {
      this.$emit("section", state.currentSection);
    }

    function keepOpen() {
      state.showOptions = true;
    }
    return { state, keepOpen, updateParent };
  },
};
</script>

<style scoped>
.menu {
  position: absolute;
  background: turquoise;
  padding: 5px;
}

/* HIDE RADIO */
input[type="radio"] {
  opacity: 0;
  width: 0;
  height: 0;
}

/* IMAGE STYLES */
input[type="radio"] + img {
  max-width: 40px;
  cursor: pointer;
}

/* CHECKED STYLES */
input[type="radio"]:checked + img,
/* For accessibility tabbing- tab selects group, navigate with left/right keys */
input[type="radio"]:focus + img {
  outline: 2px solid rgb(78, 70, 70);
}
</style>
