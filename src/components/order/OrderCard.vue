<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import { Order } from "@/common/models/order";

export default defineComponent({
  props: {
    order: {
      type: Object as PropType<Order>,
      required: true,
    },
  },
  setup(props) {
    const allPayed = computed(() =>
      props.order.products.every((p) => p.isPayed),
    );
    const allDelivered = computed(() =>
      props.order.products.every((p) => p.isDelivered),
    );

    const statusLabel = computed(() => {
      if (allDelivered.value) return "Abgeholt";
      if (allPayed.value) return "Wird vorbereitet";
      return "Überweisung ausstehend";
    });

    const statusClass = computed(() => {
      if (allDelivered.value) return "status-done";
      if (allPayed.value) return "status-progress";
      return "status-pending";
    });

    return { statusLabel, statusClass };
  },
});
</script>

<template>
  <div class="order-card">
    <div class="order-main">
      <div class="order-left">
        <div class="order-date">{{ $props.order.createdAtAsString }}</div>
        <div class="order-total">{{ $props.order.totalCostString }}</div>
        <div class="status-badge" v-bind:class="statusClass">
          {{ statusLabel }}
        </div>
      </div>
      <div class="order-chevron">›</div>
    </div>
    <div class="order-hint">Tippen für Details &amp; Bankverbindung</div>
  </div>
</template>

<style scoped lang="less">
.order-card {
  border: 1px solid var(--lineColor);
  border-radius: 6px;
  margin: 8px 12px;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  transition: background-color 0.12s;

  &:active {
    background-color: #f0f0f0;
  }

  @media (hover: hover) {
    &:hover {
      background-color: #f5f5f5;
    }
  }

  .order-main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 12px 10px 14px;
    gap: 12px;

    .order-left {
      display: flex;
      flex-direction: column;
      gap: 5px;
      min-width: 0;

      .order-date {
        font-size: 15px;
        font-weight: bold;
      }

      .order-total {
        font-size: 14px;
        color: #555;
      }
    }

    .order-chevron {
      font-size: 28px;
      color: #bbb;
      line-height: 1;
      flex-shrink: 0;
    }
  }

  .order-hint {
    padding: 0 14px 12px 14px;
    font-size: 12px;
    color: #aaa;
  }

  .status-badge {
    display: inline-block;
    font-size: 12px;
    padding: 3px 8px;
    border-radius: 20px;
    font-weight: 600;

    &.status-pending {
      background-color: #fff3cd;
      color: #856404;
    }

    &.status-progress {
      background-color: #cce5ff;
      color: #004085;
    }

    &.status-done {
      background-color: #d4edda;
      color: #155724;
    }
  }
}
</style>
