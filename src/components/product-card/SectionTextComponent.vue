<script lang="ts">
import { Product } from "@/common/models/product";
import { defineComponent } from "vue";

export default defineComponent({
  props: { product: { type: Product, required: true } },
  setup() {
    return {};
  },
});
</script>

<template>
  <div class="sectionText">
    <div class="productName">{{ product.name }}</div>
    <div class="productCost">{{ product.costAsString }}</div>
  </div>
</template>

<style scoped lang="less">
.sectionText {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.4em;

  .productName {
    margin: 10px;
  }

  .productCost {
    font-weight: bold;
  }
}
</style>
