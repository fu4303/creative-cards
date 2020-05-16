<template>
  <div class="row">
    <div class="col-sm-12">
      <p>
        Completed:
        <span id="counter">0</span>/4:
      </p>
      <progress value="0" max="100" id>0%</progress>
    </div>
  </div>
</template>

<script>
// import { EventBus } from "../../main.js";

export default {
  created: function() {}
};
</script>

<style scoped>
progress {
  width: 100%;
}
</style>
