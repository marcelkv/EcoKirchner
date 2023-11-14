<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    option1Active: { type: Boolean, required: false, default: false },
  },
  setup() {
    return {};
  },
});
</script>

<template>
  <div class="single-circle-indicator-icon">
    <div class="part"></div>
    <slot class="inner-icon"></slot>
  </div>
</template>

<style lang="less" scoped>
.single-circle-indicator-icon {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
  --iconSize: 50px;
  --borderSize: 6px;

  .part {
    border: var(--borderSize) solid gray;
    border-radius: 50%;
    width: var(--iconSize);
    height: var(--iconSize);
    position: absolute;
  }

  .inner-icon {
    width: 20px;
    height: 20px;
    position: relative;
  }
}
</style>
