<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {},
  setup(props, context) {
    let isOpen = ref(false);

    function onClick(): void {
      isOpen.value = !isOpen.value;
      context.emit("hamburger-changed", isOpen.value);
    }
    return {
      isOpen,
      onClick,
    };
  },
});
</script>

<template>
  <div class="hamburger" v-bind:class="{ isOpen: isOpen }" v-on:click="onClick">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </div>
</template>

<style scoped lang="less">
.hamburger {
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  .line {
    height: 5px;
    width: calc(100% - 4px);
    border-radius: 4px;
    background-color: black;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
    transform-origin: left center;
  }

  &.isOpen > .line:nth-child(1) {
    transform: rotate(45deg);
  }

  &.isOpen > .line:nth-child(2) {
    width: 0;
    opacity: 0;
  }

  &.isOpen > .line:nth-child(3) {
    transform: rotate(-45deg);
  }
}
</style>
