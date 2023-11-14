<script lang="ts">
import { defineComponent, inject, onBeforeMount, ref } from "vue";
import CartNavigationComponent from "@/components/cart/CheckoutNavigationComponent.vue";
import ButtonDefaultComponent from "@/components/common/ButtonDefaultComponent.vue";
import RadioItem from "@/components/common/RadioItem.vue";
import { useRouter } from "vue-router";
import { IClientService } from "@/common/services/client-service.interface";
import { IUserService } from "@/common/services/user-service.interface";

export default defineComponent({
  components: {
    RadioItem,
    ButtonDefault: ButtonDefaultComponent,
    CartNavigation: CartNavigationComponent,
  },
  setup() {
    const clientService = inject<IClientService>("clientService");
    const userService = inject<IUserService>("userService");
    const isChecked = ref(false);
    const router = useRouter();

    onBeforeMount(async () => {
      if (clientService.cartItems.length === 0 || !userService.isSignedIn) {
        await router.push({ name: "Products" });
      }
    });

    async function onContinue(): Promise<void> {
      if (!isChecked.value) {
        return;
      }

      await router.push({ name: "CheckoutSummary" });
    }

    return {
      isChecked,
      onContinue,
    };
  },
});
</script>

<template>
  <div class="checkout-payment">
    <CartNavigation v-bind:activeIndex="1" />
    <RadioItem v-model:isChecked="isChecked" />
    <ButtonDefault text="WEITER" v-on:click="onContinue" />
  </div>
</template>

<style scoped lang="less">
.checkout-payment {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  width: 100%;
  height: 100%;
  --maxWidth: 600px;
  --minWidth: 240px;

  .radio-item {
    width: 80%;
    max-width: var(--maxWidth);
    min-width: var(--minWidth);
    margin: 5px;
    margin-top: 50px;
    padding: 5px;
  }

  .button-default {
    width: 80%;
    max-width: var(--maxWidth);
    min-width: var(--minWidth);
    margin: 5px;
    margin-top: 50px;
  }
}
</style>
