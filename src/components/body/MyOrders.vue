<script lang="ts">
import { defineComponent, inject, onMounted, ref } from "vue";
import { IClientService } from "@/common/services/client-service.interface";
import { Order } from "@/common/models/order";
import { IUserService } from "@/common/services/user-service.interface";
import SpinnerComponent from "@/components/common/SpinnerComponent.vue";
import { useRouter } from "vue-router";
import OrderCard from "@/components/processed-order/OrderCard.vue";

export default defineComponent({
  computed: {
    Order() {
      return Order;
    },
    ProcessedOrder() {
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
    <div class="main-title">Meine Bestellungen</div>
    <Spinner v-if="isLoading" v-bind:withText="true" />
    <div class="no-orders" v-else-if="orders.length === 0">
      Sie haben noch keine Bestellungen
    </div>
    <div class="orders-list" v-else>
      <OrderCard
        v-for="order in orders"
        v-bind:order="order as Order"
        v-bind:key="order.orderId"
      />
    </div>
  </div>
</template>

<style scoped lang="less">
.my-orders {
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;

  .main-title {
    font-weight: Bold;
    font-size: 24px;
    padding: 24px 16px;
  }

  .no-orders {
    padding-left: 20px;
  }

  .orders-list {
    display: flex;
    flex-direction: column;
  }
}
</style>
