<script lang="ts">
import { defineComponent, inject } from "vue";
import HamburgerComponent from "@/components/HamburgerComponent.vue";
import { IMenuService } from "@/common/menu-service.interface";

export default defineComponent({
  name: "HeaderComponent",
  components: { Hamburger: HamburgerComponent },

  setup() {
    const menuService = inject<IMenuService>("menuService");

    return { menuService };
  },
});
</script>

<template>
  <div class="header">
    <div class="logoSmall">
      <img
        class="logo"
        src="@/assets/logo_ecoKirchner.png"
        alt="Ecokirchner logo"
      />
    </div>
    <div class="hamburgerWrapper" v-if="menuService.isHamburger">
      <Hamburger />
    </div>
  </div>
</template>

<style scoped lang="less">
.header {
  position: relative;
  min-height: var(--headerHeight);
  max-height: var(--headerHeight);
  background-color: var(--headerColor);
  display: flex;
  flex-direction: row-reverse;

  .logoSmall {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2px 15px;

    .logo {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
  }

  .hamburgerWrapper {
    --padding: 7px;
    --hamburgerSize: calc(var(--headerHeight) - 2 * var(--padding));
    position: absolute;
    width: var(--hamburgerSize);
    height: var(--hamburgerSize);
    padding: var(--padding);
  }
}
</style>
