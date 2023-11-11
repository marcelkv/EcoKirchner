<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Order } from "@/common/models/order";
import SectionSeparatorComponent from "@/components/product-card/SectionSeparatorComponent.vue";
import SectionImageComponent from "@/components/product-card/SectionImageComponent.vue";
import CircleIndicatorIcon from "@/components/common/CircleIndicator.vue";
import OrderedIcon from "@/components/common/OrderedIcon.vue";
import DeliveredIcon from "@/components/common/DeliveredIcon.vue";
import PayedIcon from "@/components/common/PayedIcon.vue";
import OrderReturnedIcon from "@/components/common/OrderReturnedIcon.vue";

export default defineComponent({
  components: {
    OrderReturnedIcon,
    PayedIcon,
    DeliveredIcon,
    OrderedIcon,
    CircleIndicatorIcon,
    SectionImage: SectionImageComponent,
    SectionSeparator: SectionSeparatorComponent,
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
    <SectionSeparator v-bind:withGradient="false" />
    <div
      class="product"
      v-for="(product, index) in $props.order.products"
      v-bind:key="product.productId"
    >
      <div class="product-title">{{ product.productName }}</div>
      <div class="row1">
        <SectionImage v-bind:product="product.product" />
        <CircleIndicatorIcon
          v-bind:option1-active="true"
          v-bind:option2-active="product.isPayed"
          v-bind:option3-active="product.isDelivered"
        >
          <OrderedIcon v-if="!product.isPayed && !product.isDelivered" />
          <DeliveredIcon
            v-else-if="
              product.isPayed &&
              product.isDelivered &&
              !product.isPayedBack &&
              !product.isReturned
            "
          />
          <PayedIcon v-else-if="product.isPayed && !product.isDelivered" />
          <OrderReturnedIcon
            v-else-if="product.isReturned || product.isPayedBack"
          />
        </CircleIndicatorIcon>
      </div>
      <div class="row2"></div>
      <SectionSeparator v-if="index < $props.order.products.length - 1" />
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
