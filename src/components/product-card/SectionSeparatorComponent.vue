<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    withGradient: { type: Boolean, required: false, default: true },
  },
});
</script>

<template>
  <div class="sectionSeparator">
    <div class="gradient" v-if="$props.withGradient"></div>
    <div class="no-gradient" v-else></div>
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

  .no-gradient {
    background-color: lightgray;
    width: 100%;
    height: 100%;
  }
}
</style>
