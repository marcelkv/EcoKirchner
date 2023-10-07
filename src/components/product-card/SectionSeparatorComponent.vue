<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<template>
  <div class="sectionSeparator">
    <div class="gradient"></div>
  </div>
</template>

<style scoped lang="less">
.sectionSeparator {
  display: flex;
  flex-direction: column;
  align-items: center;

  .gradient {
    background: linear-gradient(to right, transparent, lightgray, transparent);
    width: 95%;
    height: 100%;
  }
}
</style>
