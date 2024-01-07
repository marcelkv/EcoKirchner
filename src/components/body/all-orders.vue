<script lang="ts">
import { defineComponent, inject, onMounted, reactive, ref, watch } from "vue";
import Spinner from "@/components/common/SpinnerComponent.vue";
import { IClientService } from "@/common/services/client-service.interface";
import { IUserService } from "@/common/services/user-service.interface";
import { useRouter } from "vue-router";
import { OrderSummary } from "@/common/models/order-summary";
import InfoText from "@/common/info-text.vue";
import { SelectorOption } from "@/common/selector-option";
import OptionsSelector from "@/common/options-selector.vue";
import { OrderSummaryQuery } from "@/common/models/order-summary-query";

export default defineComponent({
  components: { OptionsSelector, InfoText, Spinner },
  props: {},
  setup() {
    const filterOptions = [
      new SelectorOption("red", "Nicht Bezahlt und Nicht Geliefert"),
      new SelectorOption("orange", "Bezahlt aber Nicht Geliefert"),
      new SelectorOption("green", "Bezahlt und Geliefert"),
    ];
    const clientService = inject<IClientService>("clientService");
    const userService = inject<IUserService>("userService");
    const router = useRouter();
    const isLoading = ref(true);
    const orders = reactive<OrderSummary[]>([]) as OrderSummary[];
    const currentFilter = ref(0);

    onMounted(async () => {
      loadOrders();
    });

    async function loadOrders(): Promise<void> {
      isLoading.value = true;

      if (!userService.isAdmin) {
        await router.push({ name: "Products" });
        return;
      }
      const queryOptions = getQueryOptions();
      const loadedOrders = await clientService.getAllOrdersAsync(queryOptions);
      orders.splice(0, orders.length, ...loadedOrders);
      isLoading.value = false;
    }

    function getQueryOptions(): OrderSummaryQuery {
      if (currentFilter.value === 0) {
        return new OrderSummaryQuery(false, false);
      }
      if (currentFilter.value === 1) {
        return new OrderSummaryQuery(true, false);
      }
      return new OrderSummaryQuery(true, true);
    }

    function getIndicatorColor(order: OrderSummary): string {
      if (order.payed && order.delivered) {
        return "green";
      }
      if (order.payed && !order.delivered) {
        return "orange";
      }
      if (!order.payed && !order.delivered) {
        return "red";
      }
    }

    async function onOrderClick(orderSummary: OrderSummary): Promise<void> {
      clientService.currentOrderId = orderSummary.orderId;
      await router.push({
        name: "EditableOrder",
      });
    }

    watch(() => currentFilter.value, loadOrders);

    return {
      isLoading,
      orders,
      filterOptions,
      currentFilter,
      getIndicatorColor,
      onOrderClick,
    };
  },
});
</script>

<template>
  <div class="all-orders">
    <div class="main-title">Alle BESTELLUNGEN</div>
    <OptionsSelector
      v-bind:selector-options="filterOptions"
      v-model:currentSelection="currentFilter"
    />
    <Spinner v-if="isLoading" v-bind:withText="true" />
    <div class="main-body no-orders" v-else-if="orders.length === 0">
      Es gibt noch keine Bestellungen
    </div>
    <div class="main-body orders-list" v-else>
      <InfoText
        v-for="order in orders"
        v-bind:key="order.orderId"
        v-bind:indicatorColor="getIndicatorColor(order)"
        v-bind:text="
          order.orderContact.fullName + ' - ' + order.createdAtAsString
        "
        v-on:click="onOrderClick(order)"
      />
    </div>
  </div>
</template>

<style scoped lang="less">
@import "@/common/shared-styles.less";
.all-orders {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;

  .options-selector {
    border-bottom: 2px solid black;
    margin-bottom: 4px;
  }

  .main-body {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    min-width: 322px;

    .no-orders {
      padding-left: 16px;
    }
  }
}
</style>
