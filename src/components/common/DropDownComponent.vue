<script lang="ts">
import { defineComponent, onMounted, PropType, ref, watch } from "vue";

export default defineComponent({
  props: {
    selectedIndex: { type: Number, required: false },
    items: { type: Array as PropType<(string | number)[]>, required: true },
  },
  emits: ["dropDownChanged"],
  setup(props, { emit }) {
    const ref_dropDown = ref(null);
    const selected = ref(null);

    onMounted(() => {
      if (props.items.length === 0) {
        return;
      }

      let index = 0;
      if (props.selectedIndex > 0 && props.selectedIndex < props.items.length) {
        index = props.selectedIndex;
      }

      selected.value = props.items[index];
    });

    function onArrowDropDownClick(): void {
      const dropDownElement = ref_dropDown.value as HTMLSelectElement;
      dropDownElement.focus();
      dropDownElement.click();
    }

    watch(selected, (newValue) => {
      emit("dropDownChanged", newValue);
    });

    return {
      ref_dropDown,
      selected,
      onArrowDropDownClick,
    };
  },
});
</script>

<template>
  <div class="dropDown">
    <label for="customDropDown"></label>
    <div
      ref="ref_customDropDown"
      class="customDropDown"
      id="customDropDown"
      tabindex="0"
      v-on:keydown.enter="onArrowDropDownClick"
      v-on:keydown.space="onArrowDropDownClick"
    >
      <select
        ref="ref_dropDown"
        class="dropDown"
        tabindex="-1"
        v-model="selected"
      >
        <option v-for="item in items" :key="item" :value="item">
          {{ item }}
        </option>
      </select>
      <div class="arrow" v-on:click="onArrowDropDownClick"></div>
    </div>
  </div>
</template>

<style scoped lang="less">
.dropDown {
  display: flex;

  select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
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
    cursor: pointer;
  }

  .customDropDown {
    position: relative;
    width: 100%;
    border: 1px solid lightgray;
    border-radius: 2px;

    .dropDown {
      padding-left: 10px;
    }

    .arrow {
      position: absolute;
      top: 0;
      right: 0;
      width: 22px;
      height: 100%;
      border-left: 1px solid lightgray;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      z-index: -1;
    }

    .arrow::after {
      content: "\25BE";
      font-size: 32px;
      color: dimgray;
    }
  }
}
</style>
