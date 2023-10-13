<script lang="ts">
import { computed, defineComponent, inject, ref } from "vue";
import { useRouter } from "vue-router";
import { IClientService } from "@/common/services/client-service.interface";
import { IUserService } from "@/common/services/user-service.interface";
import ButtonDefaultComponent from "@/components/common/ButtonDefaultComponent.vue";
import GoogleButtonComponent from "@/components/common/GoogleButtonComponent.vue";
import CartItemComponent from "@/components/cart/CartItemComponent.vue";

export default defineComponent({
  components: {
    CartItem: CartItemComponent,
    GoogleButton: GoogleButtonComponent,
    ButtonDefault: ButtonDefaultComponent,
  },
  setup() {
    const clientService = inject<IClientService>("clientService");
    const userService = inject<IUserService>("userService");
    const router = useRouter();
    let isLoggingIn = ref(false);

    const hasCartItems = computed(() => clientService.cartItems.length > 0);
    const cartItems = computed(() => clientService.cartItems);
    const isSignedIn = computed(() => userService.isSignedIn);

    async function onContinueShoppingClicked(): Promise<void> {
      await router.push({ name: "Products" });
    }

    async function onClickSignInWithGoogle(): Promise<void> {
      isLoggingIn.value = true;
      await userService.signInWithGoogle();
      isLoggingIn.value = false;
    }

    return {
      isLoggingIn,
      isSignedIn,
      hasCartItems,
      cartItems,
      onContinueShoppingClicked,
      onClickSignInWithGoogle,
    };
  },
});
</script>

<template>
  <div class="cart-page">
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
    <div class="continue-shopping">
      <ButtonDefault
        text="WEITER SHOPEN"
        v-on:onButtonClicked="onContinueShoppingClicked"
      />
    </div>
    <div v-if="hasCartItems" class="login-continue">
      <div v-if="!isSignedIn" class="info-text">
        Melde dich an um mit dem Einkauf fortzufahren.
      </div>
      <ButtonDefault v-if="isSignedIn" text="EINKAUF FORTSETZEN" />
      <GoogleButton
        v-else
        v-bind:isLoading="isLoggingIn"
        v-on:onButtonClicked="onClickSignInWithGoogle"
      />
    </div>
  </div>
</template>

<style scoped lang="less">
.cart-page {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;

  .cart-title {
    font-size: 24px;
    padding: 10px;
    margin-left: 30px;
    margin-top: 50px;
  }

  .no-cartItems {
    margin: 60px 50px;
    font-size: 18px;
    padding: 10px;
  }

  .cart-items {
    height: 100%;
    width: calc(100% - 60px);
    min-width: 300px;
    max-width: 590px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 30px;
  }

  .continue-shopping {
    margin: 10px 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    .button-default {
      height: 40px;
      width: 180px;
      margin: 10px;
    }
  }

  .login-continue {
    margin: 10px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .button-default {
      height: 40px;
      width: 180px;
      margin: 10px;
    }

    .info-text {
      margin: 50px 10px 30px 10px;
    }

    .google-button {
      height: 55px;
      width: 100%;
      max-width: 250px;
    }
  }
}
</style>
