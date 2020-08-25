<template>
  <div class="section_wrapper">
    <div>
      <slot name="section1"></slot>
    </div>
    <div>
      <slot name="section2"></slot>
    </div>
    <div>
      <slot name="section3"></slot>
    </div>
  </div>
</template>

<style scoped>
.section_wrapper {
  height: 600px;
}

.section_wrapper > div {
  height: 200px;
}
</style>
