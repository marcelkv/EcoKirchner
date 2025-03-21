<script lang="ts">
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  props: { initialNumber: { type: Number, required: false, default: 1 } },
  emits: ["onDecrementClicked", "onSetValue", "onIncrementClicked"],
  setup(props, context) {
    const updatedNumber = ref(props.initialNumber);

    function onDecrementClicked(): void {
      context.emit("onDecrementClicked");
    }

    function onIncrementClicked(): void {
      context.emit("onIncrementClicked");
    }

    function onSetValue(): void {
      context.emit("onSetValue", updatedNumber.value);
      updatedNumber.value = props.initialNumber;
    }

    function selectAllText(event: Event): void {
      const inputElement = event.target as HTMLInputElement;
      inputElement.select();
    }

    watch(
      () => props.initialNumber,
      () => {
        updatedNumber.value = props.initialNumber;
      },
    );

    return {
      updatedNumber,
      onDecrementClicked,
      onIncrementClicked,
      onSetValue,
      selectAllText,
    };
  },
});
</script>

<template>
  <div class="decrement-increment">
    <div class="decrement-section" v-on:click="onDecrementClicked">
      <div class="line" />
    </div>
    <input
      type="number"
      class="number-section"
      v-model="updatedNumber"
      v-on:keyup="onSetValue"
      v-on:focus="selectAllText"
    />
    <div class="increment-section" v-on:click="onIncrementClicked">
      <div class="line" />
      <div class="line vertical" />
    </div>
  </div>
</template>

<style scoped lang="less">
.decrement-increment {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 2px;
  border: 1px solid var(--lineColor);
  position: relative;
  user-select: none;

  .decrement-section,
  .increment-section {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .line {
    --lineThickness: 1px;
    --lineLength: 55%;
    background-color: dimgray;
    width: var(--lineLength);
    height: var(--lineThickness);

    &.vertical {
      position: absolute;
      width: var(--lineThickness);
      height: var(--lineLength);
    }
  }

  input[type="number"] {
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;
    background: transparent;
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
    font-size: 16px;
    font-family:
      -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Helvetica,
      Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
    text-align: center;
    cursor: pointer;
  }
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
}
</style>
