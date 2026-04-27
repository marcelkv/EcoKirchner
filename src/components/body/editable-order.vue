<script lang="ts">
import { Order } from "@/common/models/order";
import {
  computed,
  CSSProperties,
  defineComponent,
  inject,
  onBeforeMount,
  ref,
} from "vue";
import { useRouter } from "vue-router";
import { IClientService } from "@/common/services/client-service.interface";
import SpinnerComponent from "@/components/common/SpinnerComponent.vue";
import SectionSeparator from "@/components/product-card/SectionSeparatorComponent.vue";
import { CartOrderItem } from "@/common/models/cart-order-item";
import { Product } from "@/common/models/product";
import CartItemComponent from "@/components/cart/CartItemComponent.vue";
import { IUserService } from "@/common/services/user-service.interface";
import { BankingData } from "@/common/models/banking-data";

export default defineComponent({
  components: { CartItemComponent, SectionSeparator, SpinnerComponent },
  setup() {
    const userService = inject<IUserService>("userService");
    const clientService = inject<IClientService>("clientService");
    const isLoading = ref(true);
    const order = ref<Order>(null);
    const hovers = ref<boolean[]>([]);
    const router = useRouter();
    const bankingData = ref<BankingData>(null);
    const copied = ref<"iban" | "bic" | "ref" | null>(null);

    onBeforeMount(async () => {
      if (!clientService.currentOrderId) {
        goBack();
      }

      isLoading.value = true;
      const result = await clientService.getOrdersAsync(
        userService.isAdmin ? null : userService.uid,
        clientService.currentOrderId,
      );

      if (!result || result.length !== 1) {
        goBack();
      }

      order.value = result[0];
      bankingData.value = await clientService.getBankingData();
      clearHovers();
      isLoading.value = false;
    });

    const isAdmin = computed<boolean>(() => userService?.isAdmin);

    const cartItems = computed<CartOrderItem[]>(() => {
      return order.value.products.map((product) => {
        const simpleProduct = new Product(
          product.productId,
          product.productName,
          product.cost,
          1,
          product.imageReference,
        );
        return new CartOrderItem(simpleProduct, product.quantity);
      });
    });

    const isPayed = computed<boolean>(() =>
      order.value.products.every((p) => p.isPayed),
    );

    const isDelivered = computed<boolean>(() =>
      order.value.products.every((p) => p.isDelivered),
    );

    const payedAt = computed<string>(() =>
      isPayed.value ? order.value.products[0].payedAtAsString : "nicht bezahlt",
    );

    const deliveredAt = computed<string>(() =>
      isDelivered.value
        ? order.value.products[0].deliveredAtAsString
        : "nicht geliefert",
    );

    const paymentStatusLabel = computed(() =>
      isPayed.value ? "Zahlung empfangen" : "Überweisung ausstehend",
    );

    const pickupStatusLabel = computed(() => {
      if (isDelivered.value) return "Abgeholt";
      if (isPayed.value) return "Wird vorbereitet";
      return "Warten auf Zahlungseingang";
    });

    function formatIban(iban: string): string {
      return iban
        .replace(/\s/g, "")
        .replace(/(.{4})/g, "$1 ")
        .trim();
    }

    function copyField(field: "iban" | "bic" | "ref"): void {
      if (!bankingData.value) return;
      const value =
        field === "iban"
          ? bankingData.value.iban
          : field === "bic"
            ? bankingData.value.bic
            : order.value.orderId;
      navigator.clipboard.writeText(value);
      copied.value = field;
      setTimeout(() => {
        copied.value = null;
      }, 2000);
    }

    async function onClickPayed(): Promise<void> {
      if (!userService.isAdmin) return;
      if (isPayed.value) {
        alert("Wert kann nicht geändert werden.");
        return;
      }
      const result = confirm(
        order.value.contact.fullName +
          " hat " +
          order.value.totalCostString +
          " bezahlt?",
      );
      if (!result) return;
      order.value.products.map((product) => product.setPayed());
      await clientService.updateOrder(order.value as Order);
    }

    async function onClickDelivered(): Promise<void> {
      if (!userService.isAdmin) return;
      if (isDelivered.value) {
        alert("Wert kann nicht geändert werden.");
        return;
      }
      const result = confirm(
        "Die gesamte Ware wurde an " +
          order.value.contact.fullName +
          " geliefert?",
      );
      if (!result) return;
      order.value.products.map((product) => product.setDelivered());
      await clientService.updateOrder(order.value as Order);
    }

    function getCartItemStyle(index: number): CSSProperties {
      return {
        backgroundColor: hovers.value[index] ? "lightgrey" : "unset",
      };
    }

    function clearHovers(): void {
      if (!userService.isAdmin) return;
      hovers.value = order.value.products.map(() => false);
    }

    function setHover(index: number): void {
      if (!userService.isAdmin) return;
      hovers.value[index] = !hovers.value[index];
    }

    async function goBack(): Promise<void> {
      if (clientService.backPath) {
        router.push({ name: clientService.backPath });
      } else {
        router.push({ name: "MyOrders" });
      }
    }

    return {
      isLoading,
      isAdmin,
      order,
      cartItems,
      payedAt,
      deliveredAt,
      paymentStatusLabel,
      pickupStatusLabel,
      isPayed,
      isDelivered,
      bankingData,
      copied,
      formatIban,
      copyField,
      onClickPayed,
      onClickDelivered,
      getCartItemStyle,
      setHover,
      clearHovers,
      goBack,
    };
  },
});
</script>

<template>
  <div class="order">
    <SpinnerComponent v-bind:spinnerSize="'40px'" v-if="isLoading" />
    <div class="order-content" v-else>
      <!-- Back + order date header -->
      <div class="page-header">
        <div class="back-btn" v-on:click="goBack">‹ Zurück</div>
        <div class="order-meta">Bestellt am {{ order.createdAtAsString }}</div>
      </div>

      <!-- ── CUSTOMER VIEW ── -->
      <template v-if="!isAdmin">
        <!-- Payment block -->
        <template v-if="bankingData">
          <div class="section-title">Bankverbindung</div>
          <SectionSeparator v-bind:withGradient="false" />

          <div class="amount-display">{{ order.totalCostString }}</div>

          <div class="banking-block">
            <div class="banking-field">
              <div class="field-header">
                <span class="field-label">IBAN</span>
                <button
                  class="copy-link"
                  v-on:click="copyField('iban')"
                  v-bind:class="{ done: copied === 'iban' }"
                >
                  {{ copied === "iban" ? "Kopiert ✓" : "Kopieren" }}
                </button>
              </div>
              <div class="field-value mono">
                {{ formatIban(bankingData.iban) }}
              </div>
            </div>

            <div class="banking-field">
              <div class="field-header">
                <span class="field-label">BIC</span>
                <button
                  class="copy-link"
                  v-on:click="copyField('bic')"
                  v-bind:class="{ done: copied === 'bic' }"
                >
                  {{ copied === "bic" ? "Kopiert ✓" : "Kopieren" }}
                </button>
              </div>
              <div class="field-value mono">{{ bankingData.bic }}</div>
            </div>

            <div class="banking-field">
              <div class="field-header">
                <span class="field-label">Verwendungszweck</span>
                <button
                  class="copy-link"
                  v-on:click="copyField('ref')"
                  v-bind:class="{ done: copied === 'ref' }"
                >
                  {{ copied === "ref" ? "Kopiert ✓" : "Kopieren" }}
                </button>
              </div>
              <div class="field-value mono small">{{ order.orderId }}</div>
            </div>
          </div>
        </template>

        <!-- Status block -->
        <div class="section-title">Status</div>
        <SectionSeparator v-bind:withGradient="false" />
        <div class="status-block">
          <div class="status-row" v-bind:class="{ done: isPayed }">
            <div class="status-dot" v-bind:class="{ filled: isPayed }"></div>
            <div class="status-body">
              <div class="status-name">Zahlung</div>
              <div class="status-label">{{ paymentStatusLabel }}</div>
            </div>
          </div>
          <div class="status-connector"></div>
          <div class="status-row" v-bind:class="{ done: isDelivered }">
            <div
              class="status-dot"
              v-bind:class="{ filled: isDelivered }"
            ></div>
            <div class="status-body">
              <div class="status-name">Abholung</div>
              <div class="status-label">{{ pickupStatusLabel }}</div>
            </div>
          </div>
        </div>

        <!-- Products -->
        <div class="section-title">Produkte</div>
        <SectionSeparator v-bind:withGradient="false" />
        <div class="products-section">
          <CartItemComponent
            v-for="(cartItem, index) in cartItems"
            v-bind:key="index"
            v-bind:cartItem="cartItem"
            v-bind:isEditable="false"
          />
        </div>

        <!-- Billing address -->
        <div class="section-title">Rechnungsadresse</div>
        <SectionSeparator v-bind:withGradient="false" />
        <div class="address-section">
          <div class="row-address">
            {{ order.contact.firstName }} {{ order.contact.lastName }}
          </div>
          <div class="row-address">{{ order.contact.street }}</div>
          <div class="row-address">
            {{ order.contact.zipCode }} {{ order.contact.city }}
          </div>
          <div class="row-address">Deutschland</div>
          <div class="row-address">{{ order.contact.phoneNumber }}</div>
        </div>
      </template>

      <!-- ── ADMIN VIEW ── -->
      <template v-if="isAdmin">
        <div class="section-title">Bestellübersicht</div>
        <SectionSeparator v-bind:withGradient="false" />
        <div class="summary-section">
          <div>Kunde:</div>
          <strong>{{ order.contact.fullName }}</strong>
        </div>
        <div class="summary-section">
          <div>Warenwert:</div>
          <strong>{{ order.totalCostString }}</strong>
        </div>
        <div class="summary-section clickable" v-on:click="onClickPayed">
          <div>Bezahlt am:</div>
          <strong>{{ payedAt }}</strong>
        </div>
        <div class="summary-section clickable" v-on:click="onClickDelivered">
          <div>Geliefert am:</div>
          <strong>{{ deliveredAt }}</strong>
        </div>

        <div class="section-title" v-on:click="clearHovers">Produkte</div>
        <SectionSeparator v-bind:withGradient="false" />
        <div class="products-section">
          <CartItemComponent
            v-for="(cartItem, index) in cartItems"
            v-bind:style="getCartItemStyle(index)"
            v-bind:key="index"
            v-bind:cartItem="cartItem"
            v-bind:isEditable="false"
            v-on:click="setHover(index)"
          />
        </div>

        <template v-if="bankingData">
          <div class="section-title">Zahlung</div>
          <SectionSeparator v-bind:withGradient="false" />
          <div class="summary-section">
            <div>IBAN:</div>
            <div class="value-with-copy">
              <strong class="mono-value">{{
                formatIban(bankingData.iban)
              }}</strong>
              <button
                class="copy-link"
                v-on:click="copyField('iban')"
                v-bind:class="{ done: copied === 'iban' }"
              >
                {{ copied === "iban" ? "Kopiert ✓" : "Kopieren" }}
              </button>
            </div>
          </div>
          <div class="summary-section">
            <div>BIC:</div>
            <div class="value-with-copy">
              <strong>{{ bankingData.bic }}</strong>
              <button
                class="copy-link"
                v-on:click="copyField('bic')"
                v-bind:class="{ done: copied === 'bic' }"
              >
                {{ copied === "bic" ? "Kopiert ✓" : "Kopieren" }}
              </button>
            </div>
          </div>
          <div class="summary-section">
            <div>Verwendungszweck:</div>
            <div class="value-with-copy">
              <strong class="mono-value">{{ order.orderId }}</strong>
              <button
                class="copy-link"
                v-on:click="copyField('ref')"
                v-bind:class="{ done: copied === 'ref' }"
              >
                {{ copied === "ref" ? "Kopiert ✓" : "Kopieren" }}
              </button>
            </div>
          </div>
          <div class="summary-section">
            <div>E-Mail:</div>
            <strong>{{ bankingData.email }}</strong>
          </div>
          <div class="summary-section">
            <div>Telefon:</div>
            <strong>{{ bankingData.phone }}</strong>
          </div>
        </template>
      </template>
    </div>
  </div>
</template>

<style scoped lang="less">
.order {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: auto;

  .order-content {
    padding: 0 16px 32px 16px;
    max-width: 600px;

    .page-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 0 16px 0;
      gap: 12px;

      .back-btn {
        font-size: 15px;
        color: #555;
        cursor: pointer;
        white-space: nowrap;
        -webkit-tap-highlight-color: transparent;
        padding: 4px 0;

        &:active {
          color: #000;
        }
      }

      .order-meta {
        font-size: 13px;
        color: #888;
        text-align: right;
      }
    }

    .section-title {
      font-weight: bold;
      font-size: 17px;
      margin-top: 28px;
      margin-bottom: 8px;
    }

    .sectionSeparator {
      width: 100%;
      height: 1px;
      margin-bottom: 12px;
    }

    /* Amount prominently displayed */
    .amount-display {
      font-size: 32px;
      font-weight: bold;
      margin: 4px 0 16px 0;
    }

    /* Banking fields with inline copy links */
    .banking-block {
      display: flex;
      flex-direction: column;
      gap: 0;
      border: 1px solid var(--lineColor);
      border-radius: 8px;
      overflow: hidden;

      .banking-field {
        padding: 12px 14px;
        border-bottom: 1px solid var(--lineColor);

        &:last-child {
          border-bottom: none;
        }

        .field-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 4px;

          .field-label {
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.06em;
            color: #999;
            font-weight: 600;
          }

          .copy-link {
            background: none;
            border: 1px solid #ccc;
            border-radius: 4px;
            padding: 2px 8px;
            font-size: 12px;
            color: #555;
            cursor: pointer;
            -webkit-tap-highlight-color: transparent;
            min-height: 28px;
            white-space: nowrap;

            &.done {
              border-color: #34c759;
              color: #34c759;
            }
          }
        }

        .field-value {
          font-size: 16px;
          word-break: break-all;
          line-height: 1.4;

          &.mono {
            font-family: monospace;
            letter-spacing: 0.04em;
          }

          &.small {
            font-size: 14px;
          }
        }
      }
    }

    /* Status timeline */
    .status-block {
      padding: 8px 0;

      .status-row {
        display: flex;
        align-items: center;
        gap: 14px;
        padding: 8px 0;

        .status-dot {
          width: 20px;
          height: 20px;
          min-width: 20px;
          border-radius: 50%;
          border: 2px solid var(--lineColor);
          background-color: white;
          transition:
            background-color 0.2s,
            border-color 0.2s;

          &.filled {
            background-color: #34c759;
            border-color: #34c759;
          }
        }

        .status-body {
          .status-name {
            font-size: 15px;
            font-weight: 600;
          }

          .status-label {
            font-size: 13px;
            color: #888;
            margin-top: 1px;
          }
        }

        &.done .status-body .status-label {
          color: #34c759;
        }
      }

      .status-connector {
        width: 2px;
        height: 16px;
        background-color: var(--lineColor);
        margin-left: 9px;
      }
    }

    /* Products */
    .products-section {
      margin-bottom: 8px;
    }

    /* Billing address */
    .address-section {
      .row-address {
        padding: 4px 0;
        font-size: 15px;
        color: #333;
      }
    }

    /* Admin summary rows */
    .summary-section {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 0;
      border-bottom: 1px solid #f0f0f0;
      gap: 12px;

      &.clickable {
        cursor: pointer;

        &:active {
          background-color: #f5f5f5;
        }
      }

      .value-with-copy {
        display: flex;
        align-items: center;
        gap: 10px;
        min-width: 0;

        .mono-value {
          font-family: monospace;
          font-size: 14px;
          word-break: break-all;
        }
      }

      .copy-link {
        background: none;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 2px 8px;
        font-size: 12px;
        color: #555;
        cursor: pointer;
        white-space: nowrap;
        flex-shrink: 0;
        -webkit-tap-highlight-color: transparent;
        min-height: 28px;

        &.done {
          border-color: #34c759;
          color: #34c759;
        }
      }
    }
  }
}
</style>
