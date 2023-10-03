<script lang="ts">
import { IClientService } from "@/common/services/client-service.interface";
import {
  computed,
  defineComponent,
  inject,
  onBeforeMount,
  ref,
  watch,
} from "vue";
import { Product } from "@/common/models/product";
import { IResponsiveService } from "@/common/services/responsive-service.interface";
import { SizeType } from "@/common/services/size-type";
import ProductCardComponent from "@/components/product-card/ProductCardComponent.vue";
import SpinnerComponent from "@/components/common/SpinnerComponent.vue";

export default defineComponent({
  components: { Spinner: SpinnerComponent, ProductCard: ProductCardComponent },
  computed: {
    SizeType() {
      return SizeType;
    },
  },
  setup() {
    const ref_products = ref(null);
    const isOneColumn = ref(true);
    const isMoreThanOneColumn = ref(false);
    const responsiveService = inject<IResponsiveService>("responsiveService");
    const clientService = inject<IClientService>("clientService");
    const isLoading = ref(true);
    const products = ref<Product[]>([]);

    onBeforeMount(async () => {
      const loadedProducts = await clientService.getProductsAsync();
      products.value.splice(0, loadedProducts.length, ...loadedProducts);
      isLoading.value = false;
      setTimeout(() => onWidthChanged(), 0);
    });

    const widthSize = computed(() => responsiveService.widthSize.value);

    function onWidthChanged(): void {
      const { listWidth, productWidth } = getWidths();

      if (listWidth > productWidth * 2 + 2) {
        isOneColumn.value = false;
        isMoreThanOneColumn.value = true;
      } else if (responsiveService.widthSize.value !== SizeType.ExtraSmall) {
        isOneColumn.value = true;
        isMoreThanOneColumn.value = false;
      } else {
        isOneColumn.value = false;
        isMoreThanOneColumn.value = false;
      }
    }

    function getWidths(): { listWidth: number; productWidth: number } {
      const listElement = ref_products.value as HTMLDivElement | null;
      const defaultWidths = { listWidth: 0, productWidth: 0 };

      if (!listElement) {
        return defaultWidths;
      }

      const elements = listElement.getElementsByClassName("product");

      if (!elements || elements.length < 1) {
        return defaultWidths;
      }

      const firstElement = elements[0];
      const computedStyles = window.getComputedStyle(firstElement);
      const marginLeft = parseFloat(computedStyles.marginLeft);
      const marginRight = parseFloat(computedStyles.marginRight);
      const border = parseFloat(computedStyles.borderWidth);
      const listWidth = listElement.clientWidth;
      const productWidth =
        firstElement.clientWidth + marginLeft + marginRight + border * 2;
      return { listWidth, productWidth };
    }

    watch(() => responsiveService.windowWidth.value, onWidthChanged);

    return {
      ref_products,
      widthSize,
      isOneColumn,
      isMoreThanOneColumn,
      products,
      isLoading,
    };
  },
});
</script>

<template>
  <div class="products" ref="ref_products">
    <Spinner v-if="isLoading" v-bind:withText="true"></Spinner>
    <div
      v-else
      class="productsList"
      v-bind:class="{
        isOneColumn: isOneColumn,
        isMoreThanOneColumn: isMoreThanOneColumn,
      }"
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
    --maxWidth: 400px;
    --minWidth: 270px;
    --margin: 20px;
    --padding: 10px;

    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    &.isOneColumn {
      align-items: center;
    }

    &.isMoreThanOneColumn {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
}
</style>
