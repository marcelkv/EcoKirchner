<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Order } from "@/common/models/order";
import OrderProduct from "@/common/models/order-product";
import SectionSeparatorComponent from "@/components/product-card/SectionSeparatorComponent.vue";
import SectionImageComponent from "@/components/product-card/SectionImageComponent.vue";
import SuccessIconComponent from "@/components/common/SuccessIconComponent.vue";
import CircleIndicatorIcon from "@/components/common/CircleIndicator.vue";

export default defineComponent({
  components: {
    SuccessIconComponent,
    CircleIndicatorIcon,
    SectionImage: SectionImageComponent,
    SectionSeparator: SectionSeparatorComponent,
  },
  props: {
    order: {
      type: Object as PropType<Order>,
      required: true,
    },
    orderProduct: {
      type: Object as PropType<OrderProduct>,
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
    <SectionSeparator v-bind:withGradient="false" />
    <div
      class="product"
      v-for="(product, index) in $props.order.products"
      v-bind:key="product.productId"
    >
      <div class="product-title">{{ product.productName }}abc</div>
      <div class="row1">
        <SectionImage v-bind:product="product.product" />
        <CircleIndicatorIcon
          v-bind:option1-active="true"
          v-bind:option2-active="product.isPayed"
          v-bind:option3-active="product.isDelivered"
        >
          <SuccessIconComponent />
        </CircleIndicatorIcon>
      </div>
      <SectionSeparator v-if="index < $props.order.products.length" />
    </div>
  </div>
</template>

<style scoped lang="less">
.order-card {
  width: 90%;
  margin: 5px;
  border-radius: 2px;
  border: 1px solid var(--lineColor);
  display: flex;
  flex-direction: column;

  .order-title {
    font-weight: Bold;
    font-size: 20px;
    padding: 16px;
    padding-bottom: 8px;
  }

  .sectionSeparator {
    height: 1px;
  }

  .product {
    display: flex;
    flex-direction: column;

    .product-title {
      min-width: 150px;
      width: 200px;
      margin: 10px;
      margin-bottom: 0;
    }

    .row1 {
      display: flex;
      align-items: center;
      --colSize: 170px;
      background-color: deepskyblue;

      .section-image {
        height: var(--colSize);
        width: var(--colSize);
        margin: 10px;
        flex-grow: 1;
      }

      .circle-indicator-icon {
        width: var(--colSize);
      }
    }

    .sectionSeparator {
      height: 1px;
      width: 100%;
    }
  }
}
</style>
