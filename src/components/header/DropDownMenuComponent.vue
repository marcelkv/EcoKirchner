<script lang="ts">
import { computed, defineComponent, inject, watch } from "vue";
import { IMenuService } from "@/common/services/menu-service.interface";
import UserMenuItemComponent from "@/components/header/user-menu-item.vue";
import { ResponsiveService } from "@/common/services/responsive-service";
import { SizeType } from "@/common/services/size-type";
import { useRouter } from "vue-router";
import { IUserService } from "@/common/services/user-service.interface";

export default defineComponent({
  computed: {
    SizeType() {
      return SizeType;
    },
  },
  components: { UserMenuItem: UserMenuItemComponent },
  setup() {
    const responsiveService = inject<ResponsiveService>("responsiveService");
    const menuService = inject<IMenuService>("menuService");
    const userService = inject<IUserService>("userService");
    const router = useRouter();
    const heightSize = computed(() => responsiveService.heightSize.value);

    const isSignedIn = computed(() => userService.isSignedIn);

    async function onClickProducts(): Promise<void> {
      await router.push({ name: "Products" });
    }

    async function onClickMyOrders(): Promise<void> {
      await router.push({ name: "MyOrders" });
    }

    async function onClickAbout(): Promise<void> {
      await router.push({ name: "About" });
    }

    async function onClickContact(): Promise<void> {
      await router.push({ name: "Contact" });
    }

    async function onClickShoppingCart(): Promise<void> {
      await router.push({ name: "CartPage" });
    }

    function onClickCloseMenu(): void {
      menuService.isHamburgerOpen = false;
    }

    function onWindowResized(): void {
      menuService.isHamburgerOpen = false;
    }

    watch(
      [
        () => responsiveService.windowHeight.value,
        () => responsiveService.windowWidth.value,
      ],
      () => onWindowResized()
    );

    return {
      isSignedIn,
      heightSize,
      onClickProducts,
      onClickAbout,
      onClickContact,
      onClickMyOrders,
      onClickShoppingCart,
      onClickCloseMenu,
    };
  },
});
</script>

<template>
  <div class="dropDownMenu" v-on:click="onClickCloseMenu">
    <div class="menuItems item">
      <div class="menu-item item" v-on:click="onClickProducts">Produkte</div>
      <div class="menu-item item" v-on:click="onClickShoppingCart">
        Warenkorb
      </div>
      <div
        class="menu-item item"
        v-if="isSignedIn"
        v-on:click="onClickMyOrders"
      >
        Meine Bestellungen
      </div>
      <UserMenuItem
        v-if="
          heightSize === SizeType.ExtraSmall || heightSize === SizeType.Small
        "
      />
    </div>
    <UserMenuItem
      v-if="heightSize === SizeType.Medium || heightSize === SizeType.Large"
    />
  </div>
</template>

<style scoped lang="less">
.dropDownMenu {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background-color: lightgray;
  user-select: none;

  .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 70px;
    font-size: 30px;
  }

  .menuItems.item {
    flex-grow: 1;
    justify-content: flex-start;
    overflow-y: auto;

    .menu-item {
      cursor: pointer;
    }
  }
}
</style>
