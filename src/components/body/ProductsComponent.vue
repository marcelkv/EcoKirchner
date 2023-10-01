<script lang="ts">
import { IClientService } from "@/common/services/client-service.interface";
import {
  computed,
  defineComponent,
  inject,
  nextTick,
  onMounted,
  ref,
} from "vue";
import { Product } from "@/common/models/product";
import { IResponsiveService } from "@/common/services/responsive-service.interface";
import { SizeType } from "@/common/services/size-type";
import ProductCardComponent from "@/components/body/ProductCardComponent.vue";
import SpinnerComponent from "@/components/common/SpinnerComponent.vue";

export default defineComponent({
  components: { Spinner: SpinnerComponent, ProductCard: ProductCardComponent },
  computed: {
    SizeType() {
      return SizeType;
    },
  },
  setup() {
    const responsiveService = inject<IResponsiveService>("responsiveService");
    const clientService = inject<IClientService>("clientService");
    const isLoading = ref(true);
    const products = ref<Product[]>([]);

    const isLarge = computed(() => responsiveService.widthSize.value);

    onMounted(async () => {
      await nextTick();
      const loadedProducts = await clientService.getProductsAsync();
      products.value.splice(0, loadedProducts.length, ...loadedProducts);
      isLoading.value = false;
      await clientService.setProductsImagesAsync(products.value);
    });

    function onBuyRequested(productId: string, amount: number): void {
      console.log("Buy product: " + productId + " " + amount + " times.");
    }

    return {
      isLarge,
      products,
      isLoading,
      onBuyRequested,
    };
  },
});
</script>

<template>
  <div
    class="products"
    v-bind:class="{
      isLarge: isLarge === SizeType.Large,
    }"
  >
    <Spinner v-if="isLoading" v-bind:withText="true"></Spinner>
    <div v-else class="productsList">
      <ProductCard
        v-for="product in products"
        v-bind:product="product"
        :key="product.productId"
        class="product"
        v-on:onBuyRequested="onBuyRequested"
      ></ProductCard>
    </div>
  </div>
</template>

<style scoped lang="less">
.products {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;

  .productsList {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.products.isLarge {
  .productsList {
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    --productWidth: 400px;

    .product {
      margin-left: 20px;
      margin-right: 20px;
      min-width: var(--productWidth);
    }
  }
}
</style>
