<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: { withCircle: { type: Boolean, required: false, default: true } },
});
</script>

<template>
  <div class="success-icon">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="green"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <circle v-if="withCircle" cx="12" cy="12" r="10" />
      <path d="M16 8 10 14 8 12" />
    </svg>
  </div>
</template>
<style scoped>
.success-icon {
  --iconSize: 24px;
  min-width: var(--iconSize);
  min-height: var(--iconSize);
  max-width: var(--iconSize);
  max-height: var(--iconSize);
}
</style>
