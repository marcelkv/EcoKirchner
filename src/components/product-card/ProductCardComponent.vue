<script lang="ts">
import { defineComponent } from "vue";
import { Product } from "@/common/models/product";
import SectionImageComponent from "@/components/product-card/SectionImageComponent.vue";
import SectionSeparatorComponent from "@/components/product-card/SectionSeparatorComponent.vue";
import SectionTextComponent from "@/components/product-card/SectionTextComponent.vue";
import SectionBuyComponent from "@/components/product-card/SectionBuyComponent.vue";

export default defineComponent({
  components: {
    SectionBuy: SectionBuyComponent,
    SectionText: SectionTextComponent,
    SectionImage: SectionImageComponent,
    SectionSeparator: SectionSeparatorComponent,
  },
  props: { product: { type: Product, required: true } },
  emits: ["onBuyRequested"],
  setup() {
    return {};
  },
});
</script>

<template>
  <div class="product">
    <SectionImage v-bind:product="product" />
    <SectionSeparator />
    <SectionText v-bind:product="product" />
    <div class="sectionEmpty" />
    <SectionBuy v-bind:product="product" />
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

  .section-image {
    min-height: 274px;
    max-height: 274px;
    width: 100%;
  }

  .sectionSeparator {
    width: 100%;
    height: 1px;
  }

  .sectionText {
    width: 100%;
    height: 80px;
  }

  .sectionEmpty {
    height: 30px;
  }

  .sectionBuy {
    width: 100%;
    height: 40px;
  }
}
</style>
