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
    const productMaxWidth = 400;
    const productMinWidth = 200;
    const productMargin = 20;
    const productPadding = 10;

    const widthSize = computed(() => responsiveService.widthSize.value);
    const productsListStyle = computed(() => {
      return {
        "--maxWidth": productMaxWidth + "px",
        "--minWidth": productMinWidth + "px",
        "--margin": productMargin + "px",
        "--padding": productPadding + "px",
      };
    });

    const isLargerThanProduct = computed(() => {
      const totalProductSize = productMaxWidth + productMargin;
      return (
        totalProductSize < responsiveService.windowWidth.value &&
        responsiveService.widthSize.value !== SizeType.Large
      );
    });

    onMounted(async () => {
      await nextTick();
      const loadedProducts = await clientService.getProductsAsync();
      products.value.splice(0, loadedProducts.length, ...loadedProducts);
      isLoading.value = false;
      await clientService.setProductsImagesAsync(products.value);
    });

    return {
      widthSize,
      productsListStyle,
      isLargerThanProduct,
      products,
      isLoading,
    };
  },
});
</script>

<template>
  <div class="products">
    <Spinner v-if="isLoading" v-bind:withText="true"></Spinner>
    <div
      v-else
      class="productsList"
      v-bind:class="{
        isLargerThanProduct: isLargerThanProduct,
        isLarge: widthSize === SizeType.Large,
      }"
      v-bind:style="productsListStyle"
    >
      <ProductCard
        v-for="product in products"
        v-bind:product="product"
        :key="product.productId"
        class="product"
        v-bind:class="{
          maxWidth: widthSize === SizeType.Large,
        }"
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
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    &.isLargerThanProduct {
      align-items: center;
    }

    &.isLarge {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
}
</style>
