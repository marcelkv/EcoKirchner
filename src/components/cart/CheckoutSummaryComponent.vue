<script lang="ts">
import { defineComponent, inject, onBeforeMount } from "vue";
import CartNavigationComponent from "@/components/cart/CheckoutNavigationComponent.vue";
import { IClientService } from "@/common/services/client-service.interface";
import { useRouter } from "vue-router";
import { IUserService } from "@/common/services/user-service.interface";

export default defineComponent({
  components: {
    CartNavigation: CartNavigationComponent,
  },
  setup() {
    const clientService = inject<IClientService>("clientService");
    const userService = inject<IUserService>("userService");
    const router = useRouter();

    onBeforeMount(async () => {
      if (clientService.cartItems.length === 0 || !userService.isSignedIn) {
        await router.push({ name: "Products" });
      }
    });

    return {};
  },
});
</script>

<template>
  <div class="checkout-summary">
    <CartNavigation v-bind:activeIndex="2" />
  </div>
</template>

<style scoped lang="less">
.checkout-summary {
  display: flex;
  flex-direction: column;
  overflow: auto;
  width: 100%;
  height: 100%;
}
</style>
