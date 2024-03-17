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
import { OrderQuery } from "@/common/models/order-query";
import FilterIcon from "@/components/common/filter-icon.vue";
import InputFieldComponent from "@/components/cart/InputFieldComponent.vue";
import { debounce } from "lodash";

export default defineComponent({
  components: {
    InputFieldComponent,
    FilterIcon,
    OptionsSelector,
    InfoText,
    Spinner,
  },
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
    const showFilter = ref(false);
    const searchString = ref("");
    const orders = reactive<OrderSummary[]>([]) as OrderSummary[];
    const currentFilter = ref(0);
    const debouncedFilter = debounce(() => filterChanged(), 500);

    onMounted(async () => {
      if (!isNaN(clientService.backFilterIndex)) {
        currentFilter.value = clientService.backFilterIndex;
      }

      loadOrders();
    });

    async function loadOrders(): Promise<void> {
      isLoading.value = true;

      if (!userService.isAdmin) {
        await router.push({ name: "Products" });
        return;
      }

      const queryOptions = getQueryOptions();
      queryOptions.searchString = searchString.value;
      const loadedOrders = await clientService.getAllOrdersAsync(queryOptions);
      orders.splice(0, orders.length, ...loadedOrders);
      isLoading.value = false;
    }

    function getQueryOptions(): OrderQuery {
      if (currentFilter.value === 0) {
        return new OrderQuery(false, false);
      }
      if (currentFilter.value === 1) {
        return new OrderQuery(true, false);
      }
      return new OrderQuery(true, true);
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
      clientService.backPath = "AllOrders";
      clientService.backFilterIndex = currentFilter.value;
      await router.push({
        name: "EditableOrder",
      });
    }

    async function onFilterClick(): Promise<void> {
      showFilter.value = !showFilter.value;
      if (!showFilter.value) {
        searchString.value = "";
      }
    }

    async function filterChanged(): Promise<void> {
      await loadOrders();
    }

    watch(() => searchString.value, debouncedFilter);
    watch(() => currentFilter.value, loadOrders);

    return {
      isLoading,
      orders,
      filterOptions,
      currentFilter,
      searchString,
      showFilter,
      getIndicatorColor,
      onOrderClick,
      onFilterClick,
    };
  },
});
</script>

<template>
  <div class="all-orders">
    <div class="all-orders-title">
      <div class="main-title">Alle BESTELLUNGEN</div>
      <FilterIcon v-on:click="onFilterClick" />
    </div>
    <InputFieldComponent
      v-if="showFilter"
      v-bind:has-error="false"
      v-model:input-text="searchString"
      v-bind:label="'Filter nach Vorname, Nachname oder Bestellnnummer'"
      v-bind:autocomplete="''"
    />
    <OptionsSelector
      v-bind:selectorOptions="filterOptions"
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

  .all-orders-title {
    display: flex;

    .filter-icon {
      --size: 20px;
      margin: 5px 10px 5px 0;
      width: var(--size);
      height: var(--size);
    }
  }

  .input-field {
    margin: 5px 10px;
    max-width: calc(100% - 20px);
    height: 55px;
  }

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
