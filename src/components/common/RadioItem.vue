<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    isChecked: { type: Boolean, required: true },
  },
  emits: ["update:isChecked"],
  setup(props, context) {
    const isRadioChecked = ref(props.isChecked);

    function toggleRadio(): void {
      isRadioChecked.value = !isRadioChecked.value;

      context.emit("update:isChecked", isRadioChecked.value);
    }

    return { isRadioChecked, toggleRadio };
  },
});
</script>

<template>
  <div class="radio-item" v-on:click="toggleRadio">
    <div class="radio" v-bind:class="{ 'is-checked': isRadioChecked }"></div>
    <div class="radio-text">VORKASSE</div>
  </div>
</template>

<style scoped lang="less">
.radio-item {
  width: 100%;
  display: flex;
  align-items: center;
  user-select: none;
  border: 1px solid var(--lineColor);
  border-radius: 2px;

  .radio {
    --radioSize: 14px;
    width: var(--radioSize);
    height: var(--radioSize);
    border-radius: 300px;
    border: 2px solid var(--lineColor);
    cursor: pointer;

    &.is-checked {
      background-color: black;
    }
  }

  .radio-text {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 5px;
  }
}
</style>
