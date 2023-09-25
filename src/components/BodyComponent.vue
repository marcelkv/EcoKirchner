<script lang="ts">
import { defineComponent } from "vue";
import DropDownMenuComponent from "@/components/DropDownMenuComponent.vue";

export default defineComponent({
  components: { DropDownMenu: DropDownMenuComponent },
  props: { isOpen: { Type: String, required: true } },
  setup(props) {
    return {
      props,
    };
  },
});
</script>

<template>
  <div class="body">
    <DropDownMenu v-bind:class="{ isOpen: isOpen }" />
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
