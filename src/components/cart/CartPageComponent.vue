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
    const totalCost = computed(() => clientService.totalCostCartAsString);
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
      await router.push({ name: "CheckoutData" });
    }

    return {
      isSmallSize,
      hasCartItems,
      cartItems,
      totalCost,
      onContinueShoppingClicked,
      onBuyClicked,
    };
  },
});
</script>

<template>
  <div class="cart-page">
    <div class="main-title">WARENKORB</div>
    <div class="main-body">
      <div v-if="hasCartItems" class="cart-items">
        <CartItem
          v-for="(cartItem, index) in cartItems"
          v-bind:key="index"
          v-bind:cartItem="cartItem"
        />
      </div>
      <div v-else class="no-cartItems">
        Es befinden sich noch keine Artikel im Warenkorb.
      </div>
      <div v-if="hasCartItems" class="total-cost">
        <div class="total-cost-text">Gesamtsumme:</div>
        <div class="total-cost-cost">{{ totalCost }}</div>
      </div>
      <div class="buttons-section">
        <ButtonDefault
          text="WEITER SHOPEN"
          v-on:onButtonClicked="onContinueShoppingClicked"
        />
        <ButtonDefault
          v-if="hasCartItems"
          text="ZUR KASSE"
          v-on:onButtonClicked="onBuyClicked"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
@import "@/common/shared-styles.less";
.cart-page {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;

  .main-body {
    max-width: 620px;
  }
  .no-cartItems {
    margin: 60px 20px;
    font-size: 18px;
    padding: 10px;
  }

  .total-cost {
    margin: 10px;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .total-cost-text {
      margin-right: 10px;
    }

    .total-cost-cost {
      margin-right: 10px;
      font-weight: bold;
    }
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
    min-height: 55px;
    min-width: 300px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: flex-start;
    margin: 20px;

    .button-default {
      max-width: 350px;
      margin: 20px 5px;
    }
  }
}
</style>
