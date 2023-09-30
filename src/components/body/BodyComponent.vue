<script lang="ts">
import { defineComponent, inject } from "vue";
import DropDownMenuComponent from "@/components/header/DropDownMenuComponent.vue";
import { IMenuService } from "@/common/services/menu-service.interface";

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
  max-height: calc(100% - var(--headerHeight) - var(--footerHeight));

  .dropDownMenu {
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
    top: -100%;
    transition: top 0.4s ease-in-out;

    &.isOpen {
      top: 0;
    }
  }
}
</style>
