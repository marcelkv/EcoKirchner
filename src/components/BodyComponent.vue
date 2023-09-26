<script lang="ts">
import { defineComponent, inject } from "vue";
import DropDownMenuComponent from "@/components/DropDownMenuComponent.vue";
import { IMenuService } from "@/common/menu-service.interface";

export default defineComponent({
  components: { DropDownMenu: DropDownMenuComponent },
  setup() {
    const menuService = inject<IMenuService>("menuService");

    return {
      menuService,
    };
  },
});
</script>

<template>
  <div class="body">
    <DropDownMenu v-bind:class="{ isOpen: menuService.isHamburgerOpen }" />
    <router-view />
  </div>
</template>

<style scoped lang="less">
.body {
  position: relative;
  width: 100%;
  height: 100%;

  .dropDownMenu {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 0;
    transition: height 0.3s ease-in-out;

    &.isOpen {
      height: 100%;
    }
  }
}
</style>
