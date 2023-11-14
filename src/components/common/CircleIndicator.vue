<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    option1Active: { type: Boolean, required: false, default: false },
    option2Active: { type: Boolean, required: false, default: false },
    option3Active: { type: Boolean, required: false, default: false },
  },
  setup() {
    return {};
  },
});
</script>

<template>
  <div class="circle-indicator-icon">
    <div
      class="part"
      v-bind:class="{ 'is-1-active': $props.option1Active }"
    ></div>
    <div
      class="part"
      v-bind:class="{ 'is-1-active': $props.option1Active }"
    ></div>
    <div
      class="part"
      v-bind:class="{ 'is-2-active': $props.option2Active }"
    ></div>
    <div
      class="part"
      v-bind:class="{ 'is-2-active': $props.option2Active }"
    ></div>
    <div
      class="part"
      v-bind:class="{ 'is-3-active': $props.option3Active }"
    ></div>
    <div
      class="part"
      v-bind:class="{ 'is-3-active': $props.option3Active }"
    ></div>
    <slot class="inner-icon"></slot>
  </div>
</template>

<style lang="less" scoped>
.circle-indicator-icon {
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
    cursor: pointer;
    border: var(--borderSize) solid rgba(255, 255, 255, 0);
    border-radius: 50%;
    width: var(--iconSize);
    height: var(--iconSize);
    position: absolute;
    --color1: lightgray;
    --color2: lightgray;
    --color3: lightgray;

    &.is-1-active {
      --color1: green;
    }

    &.is-2-active {
      --color2: green;
    }

    &.is-3-active {
      --color3: green;
    }

    &:nth-child(1) {
      rotate: 45deg;
      border-top: var(--borderSize) solid var(--color1);
    }

    &:nth-child(2) {
      rotate: 60deg;
      border-top: var(--borderSize) solid var(--color1);
    }

    &:nth-child(3) {
      rotate: 165deg;
      border-top: var(--borderSize) solid var(--color2);
    }

    &:nth-child(4) {
      rotate: 180deg;
      border-top: var(--borderSize) solid var(--color2);
    }

    &:nth-child(5) {
      rotate: 285deg;
      border-top: var(--borderSize) solid var(--color3);
    }

    &:nth-child(6) {
      rotate: 300deg;
      border-top: var(--borderSize) solid var(--color3);
    }
  }

  .inner-icon {
    width: 20px;
    height: 20px;
    position: relative;
  }
}
</style>
