<script lang="ts">
import { defineComponent } from "vue";
import CartNavigationComponent from "@/components/cart/CheckoutNavigationComponent.vue";

export default defineComponent({
  components: {
    CartNavigation: CartNavigationComponent,
  },
  setup() {
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
