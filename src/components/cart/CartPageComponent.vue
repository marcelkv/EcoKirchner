<script lang="ts">
import { computed, defineComponent, inject } from "vue";
import { useRouter } from "vue-router";
import { IClientService } from "@/common/services/client-service.interface";
import { IUserService } from "@/common/services/user-service.interface";
import ButtonDefaultComponent from "@/components/common/ButtonDefaultComponent.vue";
import CartItemComponent from "@/components/cart/CartItemComponent.vue";
import GoogleButtonComponent from "@/components/common/google-button.vue";

export default defineComponent({
  components: {
    CartItem: CartItemComponent,
    ButtonDefault: ButtonDefaultComponent,
    GoogleButton: GoogleButtonComponent,
  },
  setup() {
    const clientService = inject<IClientService>("clientService");
    const userService = inject<IUserService>("userService");
    const router = useRouter();

    const hasCartItems = computed(() => clientService.cartItems.length > 0);
    const cartItems = computed(() => clientService.cartItems);
    const totalCost = computed(() => clientService.totalCostCartAsString);
    const isSignedIn = computed(() => userService.isSignedIn);

    async function onContinueShoppingClicked(): Promise<void> {
      await router.push({ name: "Products" });
    }

    async function onBuyClicked(): Promise<void> {
      await router.push({ name: "CheckoutData" });
    }

    return {
      hasCartItems,
      cartItems,
      totalCost,
      isSignedIn,
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

      <div v-if="hasCartItems && !isSignedIn" class="sign-in-section">
        <div class="sign-in-title">Anmeldung erforderlich</div>
        <div class="sign-in-text">
          Um zu bestellen benötigst du ein Google-Konto. Melde dich jetzt an –
          dein Warenkorb bleibt erhalten.
        </div>
        <GoogleButton class="sign-in-google-button" />
      </div>

      <div class="buttons-section">
        <ButtonDefault
          text="WEITER SHOPEN"
          v-on:onButtonClicked="onContinueShoppingClicked"
        />
        <ButtonDefault
          v-if="hasCartItems && isSignedIn"
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

  .cart-items {
    min-width: 300px;
    max-width: 590px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 30px 5px;
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

  .sign-in-section {
    margin: 10px;
    padding: 20px;
    border: 1px solid var(--lineColor);
    border-radius: 4px;
    max-width: 560px;

    .sign-in-title {
      font-size: 17px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    .sign-in-text {
      margin-bottom: 20px;
      line-height: 1.5;
      color: #444;
    }

    .sign-in-google-button {
      height: 50px;
      max-width: 300px;
      width: 100%;
    }
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
