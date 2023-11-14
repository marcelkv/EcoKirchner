<script lang="ts">
import { computed, defineComponent, inject, PropType } from "vue";
import { Order } from "@/common/models/order";
import OrderProduct from "@/common/models/order-product";
import SectionImageComponent from "@/components/product-card/SectionImageComponent.vue";
import CircleIndicatorIcon from "@/components/common/CircleIndicator.vue";
import { IResponsiveService } from "@/common/services/responsive-service.interface";
import OrderedIcon from "@/components/common/OrderedIcon.vue";
import DeliveredIcon from "@/components/common/DeliveredIcon.vue";
import PayedIcon from "@/components/common/PayedIcon.vue";
import OrderReturnedIcon from "@/components/common/OrderReturnedIcon.vue";
import SingleCircleIndicator from "@/components/common/SingleCircleIndicator.vue";

export default defineComponent({
  components: {
    SingleCircleIndicator,
    OrderReturnedIcon,
    PayedIcon,
    DeliveredIcon,
    OrderedIcon,
    CircleIndicatorIcon,
    SectionImage: SectionImageComponent,
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
  setup(props) {
    const responsiveService = inject<IResponsiveService>("responsiveService");

    const orderStatusText1 = computed(() => {
      if (props.orderProduct.isReturned) {
        return "Rücksendung";
      }
      if (props.orderProduct.isPayed && props.orderProduct.isDelivered) {
        return "Zugestellt";
      }
      if (props.orderProduct.isPayed && !props.orderProduct.isDelivered) {
        return "Bezahlt";
      }
      return "Bestellt";
    });

    const orderStatusText2 = computed(() => {
      if (props.orderProduct.isReturned) {
        return "abgeschlossen";
      }

      return "";
    });

    return { orderStatusText1, orderStatusText2, responsiveService };
  },
});
</script>

<template>
  <div
    class="ordered-product-card"
    v-bind:class="{
      'is-large': responsiveService.windowWidth.value > 800,
    }"
  >
    <div class="product-title-top">
      {{ $props.orderProduct.productName }}
    </div>
    <div class="product-row">
      <div class="image-wrapper">
        <SectionImage v-bind:product="$props.orderProduct.product" />
      </div>
      <div class="circle-wrapper">
        <SingleCircleIndicator v-if="$props.orderProduct.isReturned">
          <OrderReturnedIcon
        /></SingleCircleIndicator>
        <CircleIndicatorIcon
          v-else
          v-bind:option1-active="true"
          v-bind:option2-active="$props.orderProduct.isPayed"
          v-bind:option3-active="$props.orderProduct.isDelivered"
        >
          <DeliveredIcon
            v-if="
              $props.orderProduct.isPayed && $props.orderProduct.isDelivered
            "
          />
          <PayedIcon
            v-else-if="
              $props.orderProduct.isPayed && !$props.orderProduct.isDelivered
            "
          />
          <OrderedIcon
            v-else-if="
              !$props.orderProduct.isPayed && !$props.orderProduct.isDelivered
            "
          />
        </CircleIndicatorIcon>

        <div class="info-text">
          <div>{{ orderStatusText1 }}</div>
          <div v-if="orderStatusText2 && orderStatusText2.length > 0">
            {{ orderStatusText2 }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.ordered-product-card {
  margin: 5px;
  border-radius: 2px;
  border: 1px solid var(--lineColor);
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .product-title-top {
    font-size: 20px;
    padding: 16px 16px 8px 16px;
  }

  .product-row {
    display: flex;
    height: 170px;
    width: 100%;
    --minWidth: 150px;

    .image-wrapper {
      flex: 1 1 100%;
      min-width: var(--minWidth);
      display: flex;
      align-items: center;
      justify-content: center;
      --imageSize: 120px;
      height: var(--imageSize);

      .section-image {
        cursor: pointer;
        min-width: var(--imageSize);
        max-width: var(--imageSize);
        min-height: var(--imageSize);
        max-height: var(--imageSize);
      }
    }

    .circle-wrapper {
      min-width: var(--minWidth);
      flex: 1 1 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;

      .single-circle-indicator-icon {
        height: 88px;
        --iconSize: 70px;
      }

      .circle-indicator-icon {
        height: 88px;
        --iconSize: 70px;
      }

      .info-text {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;

        :nth-child(2) {
          margin-left: 5px;
        }
      }
    }
  }

  &.is-large {
    max-width: 920px;
    flex-direction: row-reverse;

    .product-title-top {
      width: 100%;
      height: 100%;
      padding: 0 0 0 20px;
      display: flex;
      align-items: center;
    }

    .product-row {
      margin-top: 50px;
    }
  }
}
</style>
