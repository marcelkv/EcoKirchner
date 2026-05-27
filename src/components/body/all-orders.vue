<script lang="ts">
import {
  computed,
  defineComponent,
  inject,
  onMounted,
  reactive,
  ref,
  watch,
} from "vue";
import Spinner from "@/components/common/SpinnerComponent.vue";
import { IClientService } from "@/common/services/client-service.interface";
import { IUserService } from "@/common/services/user-service.interface";
import { useRouter } from "vue-router";
import { OrderSummary } from "@/common/models/order-summary";
import { SelectorOption } from "@/common/selector-option";
import OptionsSelector from "@/common/options-selector.vue";
import { OrderQuery } from "@/common/models/order-query";
import FilterIcon from "@/components/common/filter-icon.vue";
import TrashIcon from "@/components/common/TrashIconComponent.vue";
import InputFieldComponent from "@/components/cart/InputFieldComponent.vue";
import { debounce } from "lodash";

export default defineComponent({
  components: {
    InputFieldComponent,
    FilterIcon,
    TrashIcon,
    OptionsSelector,
    Spinner,
  },
  props: {},
  setup() {
    const filterOptions = [
      new SelectorOption("red", "Nicht Bezahlt und Nicht Geliefert"),
      new SelectorOption("orange", "Bezahlt aber Nicht Geliefert"),
      new SelectorOption("yellow", "Nicht Bezahlt aber geliefert"),
      new SelectorOption("green", "Bezahlt und Geliefert"),
    ];
    const clientService = inject<IClientService>("clientService");
    const userService = inject<IUserService>("userService");
    const router = useRouter();
    const isLoading = ref(true);
    const isDeleting = ref(false);
    const showFilter = ref(false);
    const searchString = ref("");
    const orders = reactive<OrderSummary[]>([]) as OrderSummary[];
    const currentFilter = ref(0);
    const debouncedFilter = debounce(() => filterChanged(), 500);
    const selectedIds = ref<Set<string>>(new Set());
    const askConfirm = ref(false);
    const deleteError = ref<string | null>(null);
    const deleteMode = ref(false);

    const selectedCount = computed(() => selectedIds.value.size);
    const isAdmin = computed(() => userService.isAdmin);

    onMounted(async () => {
      if (!isNaN(clientService.backFilterIndex)) {
        currentFilter.value = clientService.backFilterIndex;
      }

      loadOrders();
    });

    async function loadOrders(): Promise<void> {
      isLoading.value = true;
      selectedIds.value = new Set();
      askConfirm.value = false;
      deleteError.value = null;
      deleteMode.value = false;

      if (!userService.isAdmin && !userService.isEmployee) {
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
      if (currentFilter.value === 2) {
        return new OrderQuery(false, true);
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
      return "yellow";
    }

    function formatAddress(order: OrderSummary): string {
      const c = order.orderContact;
      const parts = [c.street, c.zipCode, c.city].filter((p) => p && p.trim());
      return parts.join(", ");
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

    function toggleDeleteMode(): void {
      if (!isAdmin.value) return;
      deleteMode.value = !deleteMode.value;
      if (!deleteMode.value) {
        selectedIds.value = new Set();
        askConfirm.value = false;
        deleteError.value = null;
      }
    }

    function toggleSelected(orderId: string): void {
      const next = new Set(selectedIds.value);
      if (next.has(orderId)) next.delete(orderId);
      else next.add(orderId);
      selectedIds.value = next;
      if (next.size === 0) askConfirm.value = false;
    }

    function isSelected(orderId: string): boolean {
      return selectedIds.value.has(orderId);
    }

    function requestDelete(): void {
      if (selectedCount.value === 0) return;
      deleteError.value = null;
      askConfirm.value = true;
    }

    function cancelDelete(): void {
      askConfirm.value = false;
    }

    async function confirmDelete(): Promise<void> {
      if (!isAdmin.value) return;
      if (selectedCount.value === 0) return;
      isDeleting.value = true;
      deleteError.value = null;
      try {
        const ids = Array.from(selectedIds.value);
        await Promise.all(ids.map((id) => clientService.deleteOrderAsync(id)));
        await loadOrders();
      } catch {
        deleteError.value = "Löschen fehlgeschlagen.";
      } finally {
        isDeleting.value = false;
      }
    }

    watch(() => searchString.value, debouncedFilter);
    watch(() => currentFilter.value, loadOrders);

    return {
      isLoading,
      isDeleting,
      orders,
      filterOptions,
      currentFilter,
      searchString,
      showFilter,
      selectedCount,
      askConfirm,
      deleteError,
      deleteMode,
      isAdmin,
      getIndicatorColor,
      formatAddress,
      onOrderClick,
      onFilterClick,
      toggleDeleteMode,
      toggleSelected,
      isSelected,
      requestDelete,
      cancelDelete,
      confirmDelete,
    };
  },
});
</script>

<template>
  <div class="all-orders">
    <div class="all-orders-title">
      <div class="main-title">Alle BESTELLUNGEN</div>
      <FilterIcon v-on:click="onFilterClick" />
      <TrashIcon
        v-if="isAdmin && !deleteMode"
        class="header-trash"
        v-on:click="toggleDeleteMode"
      />
      <button
        v-if="isAdmin && deleteMode"
        class="header-btn"
        v-on:click="toggleDeleteMode"
      >
        Abbrechen
      </button>
      <button
        v-if="isAdmin && deleteMode"
        class="header-btn danger"
        v-bind:disabled="selectedCount === 0"
        v-on:click="requestDelete"
      >
        Löschen ({{ selectedCount }})
      </button>
    </div>
    <InputFieldComponent
      v-if="showFilter"
      v-bind:name="'orderSearch'"
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
      <div v-for="order in orders" v-bind:key="order.orderId" class="order-row">
        <label
          v-if="deleteMode"
          class="checkbox-wrap"
          v-on:click.stop="toggleSelected(order.orderId)"
        >
          <input
            type="checkbox"
            v-bind:checked="isSelected(order.orderId)"
            v-on:click.stop
            v-on:change="toggleSelected(order.orderId)"
          />
        </label>
        <div
          class="indicator"
          v-bind:style="{ backgroundColor: getIndicatorColor(order) }"
        ></div>
        <div class="order-info" v-on:click="onOrderClick(order)">
          <div class="line name">{{ order.orderContact.fullName }}</div>
          <div class="line sub">{{ formatAddress(order) }}</div>
          <div class="line sub">
            {{ order.orderContact.phoneNumber }} ·
            {{ order.createdAtAsString }}
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal-backdrop"
      v-if="askConfirm"
      v-on:click.self="cancelDelete"
    >
      <div class="modal-dialog" role="dialog" aria-modal="true">
        <div class="modal-title">Bist du wirklich sicher?</div>
        <div class="modal-body">
          Du bist dabei,
          <strong>{{ selectedCount }} Bestellung(en)</strong> endgültig zu
          löschen. Diese Aktion kann <strong>nicht rückgängig</strong> gemacht
          werden. <br /><br />
          Die Bestellungen und alle dazugehörigen bestellten Produkte werden
          gelöscht.
        </div>
        <div class="modal-error" v-if="deleteError">{{ deleteError }}</div>
        <div class="modal-actions">
          <button
            class="modal-btn"
            v-on:click="cancelDelete"
            v-bind:disabled="isDeleting"
          >
            Abbrechen
          </button>
          <button
            class="modal-btn danger"
            v-on:click="confirmDelete"
            v-bind:disabled="isDeleting"
          >
            {{ isDeleting ? "Wird gelöscht…" : "Ja, endgültig löschen" }}
          </button>
        </div>
      </div>
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
    align-items: center;

    .filter-icon {
      --size: 20px;
      margin: 5px 10px 5px 0;
      width: var(--size);
      height: var(--size);
    }

    .header-trash {
      --size: 22px;
      margin: 5px 12px 5px 0;
      width: var(--size);
      height: var(--size);
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;

      :deep(svg) {
        width: 100%;
        height: 100%;
        display: block;
      }

      :deep(svg path) {
        fill: #c00;
      }
    }

    .header-btn {
      background: none;
      border: 1px solid #ccc;
      border-radius: 6px;
      padding: 6px 12px;
      font-size: 13px;
      cursor: pointer;
      margin: 5px 8px 5px 0;
      -webkit-tap-highlight-color: transparent;

      &.danger {
        background-color: #c00;
        border-color: #c00;
        color: #fff;
      }

      &:disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }
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

    &.no-orders {
      padding-left: 16px;
    }
  }

  .order-row {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 12px;
    border-bottom: 1px solid var(--lineColor);

    .checkbox-wrap {
      flex: 0 0 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      padding: 4px;
      -webkit-tap-highlight-color: transparent;

      input[type="checkbox"] {
        width: 20px;
        height: 20px;
        cursor: pointer;
      }
    }

    .indicator {
      flex: 0 0 16px;
      width: 16px;
      height: 16px;
      border-radius: 16px;
    }

    .order-info {
      flex: 1;
      min-width: 0;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      gap: 2px;
      -webkit-tap-highlight-color: transparent;

      .line {
        word-break: break-word;
      }

      .name {
        font-size: 15px;
        font-weight: 600;
      }

      .sub {
        font-size: 13px;
        color: #666;
      }
    }
  }

  .modal-backdrop {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.55);
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    box-sizing: border-box;
  }

  .modal-dialog {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
    width: 100%;
    max-width: 400px;
    padding: 20px 20px 16px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .modal-title {
    font-size: 18px;
    font-weight: 700;
    color: #c00;
  }

  .modal-body {
    font-size: 14px;
    color: #333;
    line-height: 1.45;

    strong {
      font-weight: 700;
    }
  }

  .modal-error {
    font-size: 13px;
    color: #c00;
    font-weight: 600;
  }

  .modal-actions {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    flex-wrap: wrap;

    .modal-btn {
      background: none;
      border: 1px solid #ccc;
      color: #333;
      border-radius: 6px;
      padding: 10px 16px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;

      &.danger {
        background-color: #c00;
        border-color: #c00;
        color: #fff;
      }

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
  }
}
</style>
