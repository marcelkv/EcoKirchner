<script lang="ts">
import { defineComponent, inject } from "vue";
import { IMenuService } from "@/common/services/menu-service.interface";

export default defineComponent({
  setup() {
    const menuService = inject<IMenuService>("menuService");

    function onClick(): void {
      menuService.togglesHamburger();
    }

    return {
      menuService,
      onClick,
    };
  },
});
</script>

<template>
  <div
    class="hamburger"
    v-bind:class="{ isOpen: menuService.isHamburgerOpen }"
    v-on:click="onClick"
  >
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
    height: 3px;
    width: calc(100% - 4px);
    border-radius: 4px;
    background-color: black;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
    transform-origin: right center;
  }

  &.isOpen > .line:nth-child(1) {
    transform: rotate(-45deg);
  }

  &.isOpen > .line:nth-child(2) {
    width: 0;
    opacity: 0;
  }

  &.isOpen > .line:nth-child(3) {
    transform: rotate(45deg);
  }
}
</style>
