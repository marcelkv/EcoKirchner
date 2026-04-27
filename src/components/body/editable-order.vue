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
    const ibanCopied = ref(false);

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

    const paymentStatusLabel = computed(() => {
      if (isPayed.value) return "Zahlung empfangen";
      return "Überweisung ausstehend";
    });

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

    function copyIban(): void {
      if (!bankingData.value) return;
      navigator.clipboard.writeText(bankingData.value.iban);
      ibanCopied.value = true;
      setTimeout(() => (ibanCopied.value = false), 2000);
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
      ibanCopied,
      formatIban,
      copyIban,
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
      <div class="back-btn" v-on:click="goBack">‹ Zurück</div>

      <!-- Customer view: payment block first -->
      <template v-if="!isAdmin && bankingData">
        <div class="section-title">Bankverbindung</div>
        <SectionSeparator v-bind:withGradient="false" />
        <div class="banking-block">
          <div class="banking-row">
            <span class="banking-label">Betrag</span>
            <span class="banking-value amount">{{
              order.totalCostString
            }}</span>
          </div>
          <div class="banking-row">
            <span class="banking-label">IBAN</span>
            <span class="banking-value iban">{{
              formatIban(bankingData.iban)
            }}</span>
          </div>
          <div class="banking-row">
            <span class="banking-label">BIC</span>
            <span class="banking-value">{{ bankingData.bic }}</span>
          </div>
          <div class="banking-row">
            <span class="banking-label">Verwendungszweck</span>
            <span class="banking-value ref">{{ order.orderId }}</span>
          </div>
          <div class="copy-row">
            <button
              class="copy-btn"
              v-on:click="copyIban"
              v-bind:class="{ copied: ibanCopied }"
            >
              {{ ibanCopied ? "IBAN kopiert ✓" : "IBAN kopieren" }}
            </button>
          </div>
        </div>

        <div class="section-title">Status</div>
        <SectionSeparator v-bind:withGradient="false" />
        <div class="status-block">
          <div class="status-row">
            <span class="status-icon">{{ isPayed ? "✓" : "○" }}</span>
            <div class="status-text">
              <div class="status-label">Zahlung</div>
              <div
                class="status-value"
                v-bind:class="{ 'is-done': isPayed, 'is-pending': !isPayed }"
              >
                {{ paymentStatusLabel }}
              </div>
            </div>
          </div>
          <div class="status-row">
            <span class="status-icon">{{ isDelivered ? "✓" : "○" }}</span>
            <div class="status-text">
              <div class="status-label">Abholung</div>
              <div
                class="status-value"
                v-bind:class="{
                  'is-done': isDelivered,
                  'is-pending': !isDelivered,
                }"
              >
                {{ pickupStatusLabel }}
              </div>
            </div>
          </div>
        </div>
      </template>

      <!-- Order summary (admin sees this at top, customer below payment) -->
      <div class="section-title">Bestellübersicht</div>
      <SectionSeparator v-bind:withGradient="false" />
      <div class="summary-section">
        <div>Bestellt am:</div>
        <strong>{{ order.createdAtAsString }}</strong>
      </div>
      <div class="summary-section">
        <div>Warenwert:</div>
        <strong>{{ order.totalCostString }}</strong>
      </div>
      <template v-if="isAdmin">
        <div class="summary-section">
          <div>Kunde:</div>
          <strong>{{ order.contact.fullName }}</strong>
        </div>
        <div class="summary-section clickable" v-on:click="onClickPayed">
          <div>Bezahlt am:</div>
          <strong>{{ payedAt }}</strong>
        </div>
        <div class="summary-section clickable" v-on:click="onClickDelivered">
          <div>Geliefert am:</div>
          <strong>{{ deliveredAt }}</strong>
        </div>
      </template>

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

      <!-- Admin: payment details at bottom -->
      <template v-if="isAdmin && bankingData">
        <div class="section-title">Zahlung</div>
        <SectionSeparator v-bind:withGradient="false" />
        <div class="summary-section">
          <div>IBAN:</div>
          <strong>{{ formatIban(bankingData.iban) }}</strong>
        </div>
        <div class="summary-section">
          <div>BIC:</div>
          <strong>{{ bankingData.bic }}</strong>
        </div>
        <div class="summary-section">
          <div>Verwendungszweck:</div>
          <strong>{{ order.orderId }}</strong>
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

      <template v-if="!isAdmin">
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
    </div>
  </div>
</template>

<style scoped lang="less">
.order {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .order-content {
    padding: 12px 16px;
    overflow: auto;
    max-width: 600px;

    .back-btn {
      font-size: 17px;
      color: #007aff;
      cursor: pointer;
      padding: 6px 0 18px 0;
      display: inline-block;
    }

    .section-title {
      font-weight: bold;
      font-size: 17px;
      margin-top: 24px;
      margin-bottom: 6px;

      &:first-of-type {
        margin-top: 0;
      }
    }

    .sectionSeparator {
      width: 100%;
      height: 1px;
      margin-bottom: 10px;
    }

    .summary-section {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      padding: 10px 0;
      border-bottom: 1px solid #f0f0f0;

      &.clickable {
        cursor: pointer;

        &:active {
          background-color: #f5f5f5;
        }
      }
    }

    /* Customer: banking block */
    .banking-block {
      border: 1px solid var(--lineColor);
      border-radius: 6px;
      padding: 14px;
      margin-bottom: 8px;
      display: flex;
      flex-direction: column;
      gap: 12px;

      .banking-row {
        display: flex;
        flex-wrap: wrap;
        align-items: baseline;
        gap: 8px;
      }

      .banking-label {
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        color: #888;
        font-weight: 600;
        min-width: 130px;
        flex-shrink: 0;
      }

      .banking-value {
        font-size: 15px;
        word-break: break-all;

        &.iban {
          font-family: monospace;
          letter-spacing: 0.06em;
        }

        &.amount {
          font-weight: bold;
          font-size: 18px;
        }

        &.ref {
          font-family: monospace;
          font-size: 13px;
          color: #333;
        }
      }

      .copy-row {
        margin-top: 4px;
      }

      .copy-btn {
        width: 100%;
        height: 44px;
        background: none;
        border: 1px solid var(--lineColor);
        border-radius: 6px;
        font-size: 15px;
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;

        &:active {
          background-color: #f0f0f0;
        }

        &.copied {
          border-color: green;
          color: green;
        }
      }
    }

    /* Customer: status block */
    .status-block {
      margin-bottom: 8px;
      display: flex;
      flex-direction: column;
      gap: 14px;
      padding: 14px 0;

      .status-row {
        display: flex;
        align-items: center;
        gap: 14px;

        .status-icon {
          font-size: 20px;
          width: 24px;
          text-align: center;
          flex-shrink: 0;
          color: #bbb;
        }

        .status-text {
          .status-label {
            font-size: 13px;
            color: #888;
            margin-bottom: 2px;
          }

          .status-value {
            font-size: 15px;
            font-weight: 600;

            &.is-pending {
              color: #856404;
            }

            &.is-done {
              color: #155724;
            }
          }
        }
      }
    }

    .address-section {
      .row-address {
        padding: 5px 0;
        font-size: 15px;
      }
    }

    .products-section {
      margin-bottom: 8px;
    }
  }
}
</style>
