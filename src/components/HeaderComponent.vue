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
    <Hamburger v-if="menuService.isHamburger" />
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

  .hamburger {
    position: absolute;
    padding: 4px;
    width: var(--headerHeight);
  }
}
</style>
