<script lang="ts">
import { defineComponent } from "vue";
import { Product } from "@/common/models/product";
import SectionSeparatorComponent from "@/components/product-card/SectionSeparatorComponent.vue";

export default defineComponent({
  components: { SectionSeparator: SectionSeparatorComponent },
  props: { product: { type: Product, required: true } },
  emits: ["onBuyRequested"],
  setup() {
    return {};
  },
});
</script>

<template>
  <div class="product">
    <div class="sectionImageWrapper"></div>
    <div class="sectionSeparatorWrapper">
      <SectionSeparator />
    </div>
    <div class="sectionTextWrapper"></div>
    <div class="sectionBuyWrapper"></div>
  </div>
</template>

<style scoped lang="less">
.product {
  max-width: var(--maxWidth);
  min-width: var(--minWidth);
  margin: var(--margin);
  width: calc(100% - 2 * var(--margin));
  padding: var(--padding);
  display: flex;
  flex-direction: column;
  border: 1px solid var(--lineColor);
  border-radius: 2px;
  box-sizing: border-box;

  &.maxWidth {
    width: var(--maxWidth);
  }

  .sectionImageWrapper {
    min-height: 274px;
    max-height: 274px;
    width: 100%;
  }

  .sectionSeparatorWrapper {
    width: 100%;
    height: 1px;
  }

  .sectionTextWrapper {
    width: 100%;
    height: 80px;
  }

  .sectionBuyWrapper {
    width: 100%;
    height: 70px;
  }
}
</style>
