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

export default defineComponent({
  components: { CartItemComponent, SectionSeparator, SpinnerComponent },
  props: {},
  setup() {
    const userService = inject<IUserService>("userService");
    const clientService = inject<IClientService>("clientService");
    const isLoading = ref(true);
    const order = ref<Order>(null);
    const hovers = ref<boolean[]>([]);
    const router = useRouter();

    onBeforeMount(async () => {
      if (!clientService.currentOrderId) {
        goBack();
      }

      isLoading.value = true;
      order.value = await clientService.geOrderAsync(
        clientService.currentOrderId
      );
      if (!order.value) {
        goBack();
      }
      clearHovers();
      isLoading.value = false;
    });

    const cartItems = computed<CartOrderItem[]>(() => {
      return order.value.products.map((product) => {
        const simpleProduct = new Product(
          product.productId,
          product.productName,
          product.cost,
          1,
          product.imageReference
        );
        return new CartOrderItem(simpleProduct, product.quantity);
      });
    });

    const isPayed = computed<boolean>(() => {
      const payedProducts = order.value.products.filter(
        (product) => product.isPayed
      );
      return payedProducts.length === order.value.products.length;
    });

    const isDelivered = computed<boolean>(() => {
      const deliveredProducts = order.value.products.filter(
        (product) => product.isDelivered
      );
      return deliveredProducts.length === order.value.products.length;
    });

    const payedAt = computed<string>(() => {
      return isPayed.value
        ? order.value.products[0].payedAtAsString
        : "nicht bezahlt";
    });

    const deliveredAt = computed<string>(() => {
      return isDelivered.value
        ? order.value.products[0].deliveredAtAsString
        : "nicht geliefert";
    });

    async function onClickPayed(): Promise<void> {
      if (!userService.isAdmin) {
        return;
      }

      if (isPayed.value) {
        alert("Wert kann nicht geändert werden.");
        return;
      }

      const result = prompt(
        order.value.contact.fullName +
          " hat " +
          order.value.totalCostString +
          " bezahlt? (Ja/Nein)"
      );

      if (result === "Ja") {
        order.value.products.map((product) => product.setPayed());
      }
    }

    async function onClickDelivered(): Promise<void> {
      if (!userService.isAdmin) {
        return;
      }

      if (isDelivered.value) {
        alert("Wert kann nicht geändert werden.");
        return;
      }

      if (!isPayed.value) {
        alert("Erst Bezahlen, dann liefern.");
        return;
      }

      const result = prompt(
        "Die gesamte Ware wurde an " +
          order.value.contact.fullName +
          " geliefert? (Ja/Nein)"
      );

      if (result === "Ja") {
        order.value.products.map((product) => product.setDelivered());
      }
    }

    function getCartItemStyle(index: number): CSSProperties {
      return {
        backgroundColor: hovers.value[index] ? "lightgrey" : "unset",
      };
    }

    function clearHovers(): void {
      if (!userService.isAdmin) {
        return;
      }

      hovers.value = order.value.products.map(() => false);
    }

    function setHover(index: number): void {
      if (!userService.isAdmin) {
        return;
      }

      hovers.value[index] = !hovers.value[index];
    }

    async function goBack(): Promise<void> {
      router.push({ name: clientService.backPath });
    }

    return {
      isLoading,
      order,
      cartItems,
      payedAt,
      deliveredAt,
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
      <div class="title-section summary-title-section back" v-on:click="goBack">
        Zurück
      </div>
      <div class="title-section summary-title-section">BESTELLÜBERSICHT</div>
      <SectionSeparator v-bind:withGradient="false" />
      <div class="summary-section">
        <div>Kunde:</div>
        <strong>{{ order.contact.fullName }}</strong>
      </div>
      <div class="summary-section">
        <div>Bestellt Am:</div>
        <strong>{{ order.createdAtAsString }}</strong>
      </div>
      <div class="summary-section">
        <div>Warenwert:</div>
        <strong>{{ order.totalCostString }}</strong>
      </div>
      <div class="summary-section" v-on:click="onClickPayed">
        <div>Bezahlt Am:</div>
        <strong>{{ payedAt }}</strong>
      </div>
      <div class="summary-section" v-on:click="onClickDelivered">
        <div>Geliefert Am:</div>
        <strong>{{ deliveredAt }}</strong>
      </div>
      <div
        class="title-section products-title-section"
        v-on:click="clearHovers"
      >
        PRODUKTE
      </div>
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
      <div class="title-section address-title-section">RECHNUNGSADRESSE</div>
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
    margin: 10px;
    padding: 10px;
    overflow: auto;

    .title-section {
      font-weight: bold;
      font-size: 18px;
      margin-top: 30px;
      margin-bottom: 4px;

      &.back {
        margin-top: 2px;
        cursor: pointer;
      }
    }

    .sectionSeparator {
      width: 100%;
      height: 1px;
      margin-bottom: 10px;
    }

    .address-section {
      .row-address {
        margin-top: 6px;
        margin-bottom: 6px;
      }
    }

    .summary-section {
      display: flex;
      justify-content: space-between;
      margin-top: 15px;
    }
  }
}
</style>
