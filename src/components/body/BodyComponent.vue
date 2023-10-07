<script lang="ts">
import { defineComponent, inject, onMounted, ref } from "vue";
import DropDownMenuComponent from "@/components/header/DropDownMenuComponent.vue";
import { IMenuService } from "@/common/services/menu-service.interface";
import InfoPopUpComponent from "@/components/common/InfoPopUpComponent.vue";
import { InfoPopUpVm } from "../common/InfoPopUpVm";
import { IClientService } from "@/common/services/client-service.interface";

export default defineComponent({
  components: {
    InfoPopUp: InfoPopUpComponent,
    DropDownMenu: DropDownMenuComponent,
  },
  setup() {
    const menuService = inject<IMenuService>("menuService");
    const clientService = inject<IClientService>("clientService");
    const infoPopUpVm = ref<InfoPopUpVm>(null);

    onMounted(() => {
      clientService.onProductsAddedToCart.on(onProductsAddedToCart);
    });

    function onInfoPopUpDone(): void {
      infoPopUpVm.value = null;
    }

    function onProductsAddedToCart(): void {
      infoPopUpVm.value = new InfoPopUpVm(
        "Artikel wurde zum Einkaufswagen hinzugefügt.",
        "WEITER SHOPEN",
        "ZUM WARENKORB",
        null,
        "LogIn"
      );
    }

    return {
      infoPopUpVm,
      menuService,
      onInfoPopUpDone,
    };
  },
});
</script>

<template>
  <div class="body">
    <DropDownMenu v-bind:class="{ isOpen: menuService.isHamburgerOpen }" />
    <InfoPopUp
      v-if="infoPopUpVm"
      v-bind:infoPopUpVm="infoPopUpVm"
      v-on:onDone="onInfoPopUpDone"
    />
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
