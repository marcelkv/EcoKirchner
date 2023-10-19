<script lang="ts">
import { defineComponent } from "vue";
import SuccessIconComponent from "@/components/common/SuccessIconComponent.vue";

export default defineComponent({
  props: {
    text: { type: String, required: true },
    isChecked: { type: Boolean, required: false, default: false },
    isActive: { type: Boolean, required: false, default: false },
  },
  components: { SuccessIcon: SuccessIconComponent },
  setup() {
    return {};
  },
});
</script>

<template>
  <div class="navigation-item" v-bind:class="{ 'is-active': isActive }">
    <SuccessIcon v-if="isChecked" v-bind:withCircle="false" />
    <div class="navigation-text">{{ text }}</div>
  </div>
</template>

<style scoped lang="less">
.navigation-item {
  width: 100%;
  display: flex;
  padding: 10px 6px;
  align-items: center;
  justify-content: center;
  background-color: var(--lineColor);
  white-space: nowrap;

  &.is-active {
    background-color: green;
  }
}
</style>
