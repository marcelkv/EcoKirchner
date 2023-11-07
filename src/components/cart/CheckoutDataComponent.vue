<script lang="ts">
import { computed, defineComponent, inject, onBeforeUnmount } from "vue";
import CartNavigationComponent from "@/components/cart/CheckoutNavigationComponent.vue";
import { IUserService } from "@/common/services/user-service.interface";
import CheckoutSignInComponent from "@/components/cart/CheckoutSignInComponent.vue";
import CartContactDataComponent from "@/components/cart/CheckoutContactFormComponent.vue";
import { IClientService } from "@/common/services/client-service.interface";
import { useRouter } from "vue-router";

export default defineComponent({
  components: {
    CartContactData: CartContactDataComponent,
    CheckoutSignIn: CheckoutSignInComponent,
    CartNavigation: CartNavigationComponent,
  },
  setup() {
    const userService = inject<IUserService>("userService");
    const clientService = inject<IClientService>("clientService");
    const router = useRouter();

    const isSignedIn = computed(() => userService.isSignedIn);

    onBeforeUnmount(async () => {
      if (clientService.cartItems.length === 0 || !userService.isSignedIn) {
        await router.push({ name: "Products" });
      }
    });

    return { isSignedIn };
  },
});
</script>

<template>
  <div class="checkout-data">
    <CartNavigation v-bind:activeIndex="0" />
    <CartContactData v-if="isSignedIn" />
    <CheckoutSignIn v-else />
  </div>
</template>

<style scoped lang="less">
.checkout-data {
  display: flex;
  flex-direction: column;
  overflow: auto;
  width: 100%;
  height: 100%;
  > div {
    min-width: 370px;
  }
}
</style>
