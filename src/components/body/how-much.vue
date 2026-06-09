<script lang="ts">
import {
  computed,
  defineComponent,
  inject,
  onMounted,
  reactive,
  ref,
} from "vue";
import { IClientService } from "@/common/services/client-service.interface";
import { IUserService } from "@/common/services/user-service.interface";
import Spinner from "@/components/common/SpinnerComponent.vue";
import { useRouter } from "vue-router";
import { ProductCost } from "@/common/models/product-cost";
import { RangeOrderedProduct } from "@/common/models/range-ordered-product";
import { costAsString } from "@/common/currency-helper";

interface ProductRow {
  productId: string;
  productName: string;
  quantity: number;
  umsatzBrutto: number;
  rohkosten: number;
  behaelter: number;
  verpackung: number;
  mwst: number;
  mwstBetrag: number;
  kostenTotal: number;
  netto: number;
  gewinn: number;
}

function toInputDate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function startOfDay(date: Date): Date {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}

function endOfDay(date: Date): Date {
  const d = new Date(date);
  d.setHours(23, 59, 59, 999);
  return d;
}

export default defineComponent({
  components: { Spinner },
  setup() {
    const clientService = inject<IClientService>("clientService");
    const userService = inject<IUserService>("userService");
    const router = useRouter();

    const isLoading = ref(true);
    const isLoadingRange = ref(false);
    const isEditing = ref(false);
    const isSaving = ref(false);

    const fromDate = ref<string>("");
    const toDate = ref<string>("");

    const rangeProducts = ref<RangeOrderedProduct[]>([]);
    const costMap = reactive<Record<string, ProductCost>>({});
    const editCostMap = reactive<Record<string, ProductCost>>({});
    const shipmentCost = ref<number>(0);
    const editShipmentCost = ref<number>(0);
    const expanded = reactive<Record<string, boolean>>({});

    function toggleExpanded(productId: string): void {
      expanded[productId] = !expanded[productId];
    }

    function isExpanded(productId: string): boolean {
      return isEditing.value || !!expanded[productId];
    }

    onMounted(async () => {
      if (!userService.isAdmin && !userService.isEmployee) {
        await router.push({ name: "Products" });
        return;
      }

      const prefs = await clientService.getDashboardPreferences(
        userService.uid,
      );
      if (prefs) {
        fromDate.value = toInputDate(prefs.fromDate);
        toDate.value = toInputDate(prefs.toDate);
      } else {
        const today = new Date();
        const past = new Date();
        past.setDate(today.getDate() - 30);
        fromDate.value = toInputDate(past);
        toDate.value = toInputDate(today);
      }

      const [costs, shipping] = await Promise.all([
        clientService.getProductCosts(),
        clientService.getShipmentCost(),
      ]);
      costs.forEach((c) => {
        costMap[c.productId] = c;
      });
      shipmentCost.value = shipping;

      await loadRange();
      isLoading.value = false;
    });

    async function loadRange(): Promise<void> {
      if (!fromDate.value || !toDate.value) {
        return;
      }
      isLoadingRange.value = true;
      const from = startOfDay(new Date(fromDate.value));
      const to = endOfDay(new Date(toDate.value));
      rangeProducts.value = await clientService.getOrderedProductsInRange(
        from,
        to,
      );
      isLoadingRange.value = false;
    }

    async function onDateChanged(): Promise<void> {
      if (!fromDate.value || !toDate.value) {
        return;
      }
      const from = startOfDay(new Date(fromDate.value));
      const to = endOfDay(new Date(toDate.value));
      await clientService.saveDashboardPreferences(userService.uid, from, to);
      await loadRange();
    }

    function getCost(productId: string): ProductCost {
      return costMap[productId] ?? new ProductCost(productId, 0, 0, 0, 0);
    }

    const productRows = computed<ProductRow[]>(() => {
      const grouped: Record<
        string,
        { name: string; qty: number; brutto: number }
      > = {};
      rangeProducts.value.forEach((p) => {
        if (!grouped[p.productId]) {
          grouped[p.productId] = {
            name: p.productName,
            qty: 0,
            brutto: 0,
          };
        }
        grouped[p.productId].qty += p.quantity;
        grouped[p.productId].brutto += p.totalCost;
      });

      const rows: ProductRow[] = [];
      Object.keys(grouped).forEach((productId) => {
        const g = grouped[productId];
        const c = getCost(productId);
        const mwstRate = c.mwst || 0;
        const netto = g.brutto / (1 + mwstRate / 100);
        const mwstBetrag = g.brutto - netto;
        const kostenTotal = g.qty * (c.rohkosten + c.behaelter + c.verpackung);
        const gewinn = netto - kostenTotal;
        rows.push({
          productId,
          productName: g.name,
          quantity: g.qty,
          umsatzBrutto: g.brutto,
          rohkosten: c.rohkosten,
          behaelter: c.behaelter,
          verpackung: c.verpackung,
          mwst: mwstRate,
          mwstBetrag,
          kostenTotal,
          netto,
          gewinn,
        });
      });
      rows.sort((a, b) => a.productName.localeCompare(b.productName));
      return rows;
    });

    const totalBezahlt = computed<number>(() =>
      rangeProducts.value.reduce(
        (sum, p) => (p.isPayed ? sum + p.totalCost : sum),
        0,
      ),
    );
    const totalOffen = computed<number>(() =>
      rangeProducts.value.reduce(
        (sum, p) => (!p.isPayed ? sum + p.totalCost : sum),
        0,
      ),
    );
    const totalUmsatz = computed<number>(
      () => totalBezahlt.value + totalOffen.value,
    );
    const totalGewinn = computed<number>(() => {
      const sum = productRows.value.reduce((s, r) => s + r.gewinn, 0);
      return sum - shipmentCost.value;
    });

    function startEdit(): void {
      Object.keys(costMap).forEach((id) => {
        const c = costMap[id];
        editCostMap[id] = new ProductCost(
          c.productId,
          c.rohkosten,
          c.behaelter,
          c.verpackung,
          c.mwst,
        );
      });
      productRows.value.forEach((r) => {
        if (!editCostMap[r.productId]) {
          editCostMap[r.productId] = new ProductCost(r.productId, 0, 0, 0, 0);
        }
      });
      editShipmentCost.value = shipmentCost.value;
      isEditing.value = true;
    }

    function cancelEdit(): void {
      Object.keys(editCostMap).forEach((id) => delete editCostMap[id]);
      isEditing.value = false;
    }

    async function saveEdit(): Promise<void> {
      isSaving.value = true;
      const writes: Promise<void>[] = [];
      Object.values(editCostMap).forEach((c) => {
        c.rohkosten = Number(c.rohkosten) || 0;
        c.behaelter = Number(c.behaelter) || 0;
        c.verpackung = Number(c.verpackung) || 0;
        c.mwst = Number(c.mwst) || 0;
        writes.push(clientService.saveProductCost(c));
      });
      writes.push(
        clientService.saveShipmentCost(Number(editShipmentCost.value) || 0),
      );
      await Promise.all(writes);

      Object.values(editCostMap).forEach((c) => {
        costMap[c.productId] = new ProductCost(
          c.productId,
          c.rohkosten,
          c.behaelter,
          c.verpackung,
          c.mwst,
        );
      });
      shipmentCost.value = Number(editShipmentCost.value) || 0;
      isSaving.value = false;
      isEditing.value = false;
    }

    function formatMoney(value: number): string {
      return costAsString(parseFloat((value || 0).toFixed(2)));
    }

    return {
      isLoading,
      isLoadingRange,
      isEditing,
      isSaving,
      fromDate,
      toDate,
      productRows,
      totalBezahlt,
      totalOffen,
      totalUmsatz,
      totalGewinn,
      shipmentCost,
      editShipmentCost,
      editCostMap,
      onDateChanged,
      startEdit,
      cancelEdit,
      saveEdit,
      formatMoney,
      toggleExpanded,
      isExpanded,
    };
  },
});
</script>

<template>
  <div class="how-much">
    <Spinner v-if="isLoading" v-bind:withText="true" />
    <div v-else class="content">
      <div class="date-range">
        <div class="date-field">
          <label>Von</label>
          <input
            type="date"
            v-model="fromDate"
            v-on:change="onDateChanged"
            v-bind:disabled="isEditing"
          />
        </div>
        <div class="date-field">
          <label>Bis</label>
          <input
            type="date"
            v-model="toDate"
            v-on:change="onDateChanged"
            v-bind:disabled="isEditing"
          />
        </div>
      </div>

      <div class="totals-card">
        <div class="totals-row">
          <span>Bezahlt</span>
          <strong>{{ formatMoney(totalBezahlt) }}</strong>
        </div>
        <div class="totals-row">
          <span>Offen</span>
          <strong>{{ formatMoney(totalOffen) }}</strong>
        </div>
        <div class="totals-row totals-row-strong">
          <span>Umsatz</span>
          <strong>{{ formatMoney(totalUmsatz) }}</strong>
        </div>
        <div class="totals-row totals-row-strong">
          <span>Gewinn</span>
          <strong>{{ formatMoney(totalGewinn) }}</strong>
        </div>
      </div>

      <div class="edit-bar">
        <button v-if="!isEditing" class="btn" v-on:click="startEdit">
          Bearbeiten
        </button>
        <template v-else>
          <button
            class="btn btn-secondary"
            v-on:click="cancelEdit"
            v-bind:disabled="isSaving"
          >
            Abbrechen
          </button>
          <button
            class="btn btn-primary"
            v-on:click="saveEdit"
            v-bind:disabled="isSaving"
          >
            {{ isSaving ? "Speichert…" : "Speichern" }}
          </button>
        </template>
      </div>

      <div v-if="isEditing" class="shipment-card">
        <label>Versandkosten gesamt (für den Zeitraum)</label>
        <input
          type="number"
          step="0.01"
          min="0"
          v-model.number="editShipmentCost"
        />
      </div>
      <div v-else class="shipment-card readonly">
        <span>Versandkosten gesamt</span>
        <strong>{{ formatMoney(shipmentCost) }}</strong>
      </div>

      <Spinner v-if="isLoadingRange" v-bind:withText="false" />

      <div v-else-if="productRows.length === 0" class="empty">
        Keine Bestellungen im Zeitraum.
      </div>

      <div v-else class="products">
        <div
          v-for="row in productRows"
          v-bind:key="row.productId"
          class="product-card"
          v-bind:class="{ expanded: isExpanded(row.productId) }"
        >
          <div
            class="product-header"
            v-on:click="toggleExpanded(row.productId)"
          >
            <div
              class="chevron"
              v-bind:class="{ open: isExpanded(row.productId) }"
            >
              ›
            </div>
            <div class="product-name">{{ row.productName }}</div>
            <div class="product-qty">× {{ row.quantity }}</div>
          </div>

          <div
            class="card-body"
            v-bind:class="{ open: isExpanded(row.productId) }"
          >
            <div class="card-body-inner">
              <div class="cost-grid">
                <div class="cost-label">Rohkosten</div>
                <div class="cost-value">
                  <template v-if="isEditing">
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      v-model.number="editCostMap[row.productId].rohkosten"
                    />
                    <span class="unit">€/Stk</span>
                  </template>
                  <template v-else>
                    {{ formatMoney(row.rohkosten) }}
                    <span class="unit">/Stk</span>
                  </template>
                </div>

                <div class="cost-label">Behälter</div>
                <div class="cost-value">
                  <template v-if="isEditing">
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      v-model.number="editCostMap[row.productId].behaelter"
                    />
                    <span class="unit">€/Stk</span>
                  </template>
                  <template v-else>
                    {{ formatMoney(row.behaelter) }}
                    <span class="unit">/Stk</span>
                  </template>
                </div>

                <div class="cost-label">Verpackung</div>
                <div class="cost-value">
                  <template v-if="isEditing">
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      v-model.number="editCostMap[row.productId].verpackung"
                    />
                    <span class="unit">€/Stk</span>
                  </template>
                  <template v-else>
                    {{ formatMoney(row.verpackung) }}
                    <span class="unit">/Stk</span>
                  </template>
                </div>

                <div class="cost-label">MwSt</div>
                <div class="cost-value">
                  <template v-if="isEditing">
                    <input
                      type="number"
                      step="0.1"
                      min="0"
                      v-model.number="editCostMap[row.productId].mwst"
                    />
                    <span class="unit">%</span>
                  </template>
                  <template v-else>
                    {{ row.mwst }} %
                    <span class="unit"
                      >({{ formatMoney(row.mwstBetrag) }})</span
                    >
                  </template>
                </div>
              </div>

              <div class="row-summary">
                <div class="row-summary-line">
                  <span>Umsatz (brutto)</span>
                  <strong>{{ formatMoney(row.umsatzBrutto) }}</strong>
                </div>
                <div class="row-summary-line">
                  <span>Kosten gesamt</span>
                  <strong>{{ formatMoney(row.kostenTotal) }}</strong>
                </div>
                <div class="row-summary-line row-summary-strong">
                  <span>Gewinn</span>
                  <strong>{{ formatMoney(row.gewinn) }}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.how-much {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: auto;

  .content {
    padding: 12px 16px 32px 16px;
    max-width: 720px;
    width: 100%;
    align-self: center;
    box-sizing: border-box;
  }

  .date-range {
    display: flex;
    gap: 12px;
    margin-bottom: 16px;

    .date-field {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 4px;

      label {
        font-size: 11px;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: #999;
        font-weight: 600;
      }

      input {
        padding: 8px 10px;
        font-size: 15px;
        border: 1px solid #ccc;
        border-radius: 6px;
        background: white;
        min-height: 36px;
      }
    }
  }

  .totals-card {
    border: 1px solid var(--lineColor, #e0e0e0);
    border-radius: 8px;
    padding: 12px 14px;
    margin-bottom: 12px;

    .totals-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 6px 0;
      font-size: 15px;

      &.totals-row-strong {
        font-size: 17px;
        border-top: 1px solid #f0f0f0;
        margin-top: 4px;
        padding-top: 10px;
      }
    }
  }

  .edit-bar {
    display: flex;
    gap: 8px;
    margin-bottom: 12px;
    justify-content: flex-end;

    .btn {
      padding: 8px 14px;
      font-size: 14px;
      border-radius: 6px;
      border: 1px solid #ccc;
      background: white;
      cursor: pointer;
      min-height: 36px;

      &.btn-primary {
        background: #34c759;
        border-color: #34c759;
        color: white;
      }

      &.btn-secondary {
        background: white;
        color: #555;
      }

      &[disabled] {
        opacity: 0.6;
        cursor: not-allowed;
      }
    }
  }

  .shipment-card {
    border: 1px solid var(--lineColor, #e0e0e0);
    border-radius: 8px;
    padding: 12px 14px;
    margin-bottom: 16px;
    display: flex;
    flex-direction: column;
    gap: 6px;

    label {
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: #999;
      font-weight: 600;
    }

    input {
      padding: 8px 10px;
      font-size: 15px;
      border: 1px solid #ccc;
      border-radius: 6px;
      min-height: 36px;
    }

    &.readonly {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }

  .empty {
    text-align: center;
    color: #888;
    padding: 24px 0;
    font-size: 14px;
  }

  .products {
    display: flex;
    flex-direction: column;
    gap: 12px;

    .product-card {
      border: 1px solid var(--lineColor, #e0e0e0);
      border-radius: 8px;
      padding: 12px 14px;

      .product-header {
        display: flex;
        align-items: center;
        gap: 12px;
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
        user-select: none;
        padding: 2px 0;

        .chevron {
          flex: 0 0 14px;
          font-size: 18px;
          line-height: 1;
          color: #888;
          transition: transform 0.15s ease;
          transform: rotate(0deg);

          &.open {
            transform: rotate(90deg);
          }
        }

        .product-name {
          flex: 1 1 auto;
          font-size: 16px;
          font-weight: 600;
        }

        .product-qty {
          font-size: 14px;
          color: #666;
          white-space: nowrap;
        }
      }

      .card-body {
        display: grid;
        grid-template-rows: 0fr;
        transition: grid-template-rows 0.22s ease;

        &.open {
          grid-template-rows: 1fr;
        }

        .card-body-inner {
          overflow: hidden;
          min-height: 0;
        }
      }

      .cost-grid {
        display: grid;
        grid-template-columns: minmax(110px, auto) 1fr;
        row-gap: 6px;
        column-gap: 12px;
        align-items: center;
        padding: 8px 0;
        border-top: 1px solid #f0f0f0;
        border-bottom: 1px solid #f0f0f0;

        .cost-label {
          font-size: 13px;
          color: #666;
        }

        .cost-value {
          font-size: 14px;
          display: flex;
          align-items: center;
          gap: 6px;

          input {
            width: 90px;
            padding: 4px 6px;
            font-size: 14px;
            border: 1px solid #ccc;
            border-radius: 4px;
            min-height: 30px;
          }

          .unit {
            font-size: 12px;
            color: #888;
          }
        }
      }

      .row-summary {
        padding-top: 8px;

        .row-summary-line {
          display: flex;
          justify-content: space-between;
          padding: 3px 0;
          font-size: 14px;

          &.row-summary-strong {
            font-size: 15px;
            margin-top: 4px;
            padding-top: 6px;
            border-top: 1px solid #f0f0f0;
          }
        }
      }
    }
  }
}
</style>
