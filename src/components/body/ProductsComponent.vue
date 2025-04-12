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

    const noProductsAvailable = computed(() => {
      const r = products.value.find((p) => p.quantity > 0);
      return r === undefined;
    });

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
      noProductsAvailable,
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
    <div class="warning-msg" v-if="noProductsAvailable">
      {{
        "Diese Lieferung war sehr schnell ausverkauft. Sollten bis zum 23.04. noch weitere Anfragen eingehen und sich eine Mindestbestellmenge ergeben, werde ich eine Nachlieferung veranlassen. Derzeit haben wir nur noch einige 5-Liter-Kanister (aus Plastik) und 0,75-Liter-Flaschen auf Lager. Bei Interesse schreiben Sie uns gerne eine E-Mail oder eine WhatsApp-Nachricht."
      }}
    </div>
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

  .warning-msg {
    padding: 20px;
    display: flex;
    color: red;
  }

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
