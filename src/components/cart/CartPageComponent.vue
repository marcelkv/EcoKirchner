<script lang="ts">
import { computed, defineComponent, inject } from "vue";
import { useRouter } from "vue-router";
import { IClientService } from "@/common/services/client-service.interface";

import ButtonDefaultComponent from "@/components/common/ButtonDefaultComponent.vue";
import CartItemComponent from "@/components/cart/CartItemComponent.vue";
import { IResponsiveService } from "@/common/services/responsive-service.interface";
import { SizeType } from "@/common/services/size-type";

export default defineComponent({
  components: {
    CartItem: CartItemComponent,
    ButtonDefault: ButtonDefaultComponent,
  },
  setup() {
    const clientService = inject<IClientService>("clientService");
    const responsiveService = inject<IResponsiveService>("responsiveService");
    const router = useRouter();

    const hasCartItems = computed(() => clientService.cartItems.length > 0);
    const cartItems = computed(() => clientService.cartItems);
    const isSmallSize = computed(() => {
      return (
        responsiveService.windowWidth.value <
          responsiveService.windowHeight.value &&
        (responsiveService.widthSize.value === SizeType.Small ||
          responsiveService.widthSize.value === SizeType.ExtraSmall)
      );
    });

    async function onContinueShoppingClicked(): Promise<void> {
      await router.push({ name: "Products" });
    }

    async function onBuyClicked(): Promise<void> {
      return;
    }

    return {
      isSmallSize,
      hasCartItems,
      cartItems,
      onContinueShoppingClicked,
      onBuyClicked,
    };
  },
});
</script>

<template>
  <div class="cart-page" v-bind:class="{ isSmallSize: isSmallSize }">
    <div class="cart-title">DEIN EINKAUFSWAGEN</div>
    <div v-if="hasCartItems" class="cart-items">
      <CartItem
        v-for="(cartItem, index) in cartItems"
        v-bind:key="index"
        v-bind:cartItem="cartItem"
      />
    </div>
    <div v-else class="no-cartItems">
      Es befinden sich noch keine Artikel im Einkaufswagen.
    </div>
    <div class="buttons-section">
      <ButtonDefault
        text="WEITER SHOPEN"
        v-on:onButtonClicked="onContinueShoppingClicked"
      />
      <ButtonDefault
        v-if="hasCartItems"
        text="EINKAUF FORTSETZEN"
        v-on:onButtonClicked="onBuyClicked"
      />
    </div>
  </div>
</template>

<style scoped lang="less">
.cart-page {
  --marginTop: 30px;
  --marginBottom: 30px;
  --marginLeft: 60px;
  --marginRight: 60px;
  height: calc(100% - var(--marginTop) - var(--marginBottom));
  width: calc(100% - var(--marginLeft) - var(--marginRight));
  display: flex;
  flex-direction: column;
  overflow: auto;
  margin: var(--marginTop) var(--marginRight) var(--marginBottom)
    var(--marginLeft);

  &.isSmallSize {
    --marginLeft: 5px;
    --marginRight: 5px;
  }

  .cart-title {
    font-size: 24px;
    padding: 10px;
  }

  .no-cartItems {
    margin: 60px 20px;
    font-size: 18px;
    padding: 10px;
  }

  .cart-items {
    min-width: 300px;
    max-width: 590px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 30px 5px;
  }

  .buttons-section {
    height: 55px;
    min-width: 300px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: flex-start;
    margin: 20px;

    .button-default {
      max-width: 350px;
      height: 30px;
      margin: 20px 5px;
    }
  }
}
</style>
