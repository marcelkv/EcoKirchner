<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Order } from "@/common/models/order";
import OrderedProductCard from "@/components/processed-order/OrderedProductCard.vue";

export default defineComponent({
  components: {
    OrderedProductCard,
  },
  props: {
    order: {
      type: Object as PropType<Order>,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>

<template>
  <div class="order-card">
    <div class="order-title">
      Bestellt am {{ $props.order.createdAtAsString }}
    </div>
    <OrderedProductCard
      v-for="product in $props.order.products"
      v-bind:key="product.productId"
      v-bind:order="$props.order"
      v-bind:orderProduct="product"
    />
  </div>
</template>

<style scoped lang="less">
.order-card {
  margin: 5px;
  display: flex;
  flex-direction: column;

  .order-title {
    font-weight: Bold;
    font-size: 20px;
    padding: 16px 16px 8px 16px;
  }

  .ordered-product-card {
    margin-top: 10px;
    margin-bottom: 10px;
  }
}
</style>
