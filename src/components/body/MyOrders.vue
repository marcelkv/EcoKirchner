<script lang="ts">
import { defineComponent, inject, onMounted, ref } from "vue";
import { IClientService } from "@/common/services/client-service.interface";
import { Order } from "@/common/models/order";
import { IUserService } from "@/common/services/user-service.interface";
import SpinnerComponent from "@/components/common/SpinnerComponent.vue";
import { useRouter } from "vue-router";
import OrderCard from "@/components/order/OrderCard.vue";

export default defineComponent({
  computed: {
    Order() {
      return Order;
    },
  },
  components: { OrderCard, Spinner: SpinnerComponent },
  setup() {
    const clientService = inject<IClientService>("clientService");
    const userService = inject<IUserService>("userService");
    const router = useRouter();
    const isLoading = ref(true);
    const orders = ref<Order[]>([]);

    onMounted(async () => {
      if (!userService.isSignedIn) {
        await router.push({ name: "Products" });
        return;
      }

      const loadedOrders = await clientService.getMyOrdersAsync(
        userService.uid
      );
      orders.value.splice(0, loadedOrders.length, ...loadedOrders);
      isLoading.value = false;
    });

    return { isLoading, orders };
  },
});
</script>

<template>
  <div class="my-orders">
    <div class="main-title">MEINE BESTELLUNGEN</div>
    <Spinner v-if="isLoading" v-bind:withText="true" />
    <div class="main-body no-orders" v-else-if="orders.length === 0">
      Sie haben noch keine Bestellungen
    </div>
    <div class="main-body orders-list" v-else>
      <OrderCard
        v-for="order in orders"
        v-bind:order="order as Order"
        v-bind:key="order.orderId"
      />
    </div>
  </div>
</template>

<style scoped lang="less">
@import "@/common/shared-styles.less";
.my-orders {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;

  .no-orders {
    padding-left: 16px;
  }

  .orders-list {
    display: flex;
    flex-direction: column;
    min-width: 322px;
  }
}
</style>
