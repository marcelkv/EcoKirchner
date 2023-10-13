<script lang="ts">
import { defineComponent, inject, onBeforeMount, ref } from "vue";
import { CartItem } from "@/common/models/cart-item";
import SectionImageComponent from "@/components/product-card/SectionImageComponent.vue";
import TrashIconComponent from "@/components/common/TrashIconComponent.vue";
import SectionSeparatorComponent from "@/components/product-card/SectionSeparatorComponent.vue";
import DropDownComponent from "@/components/common/DropDownComponent.vue";
import { IClientService } from "@/common/services/client-service.interface";

export default defineComponent({
  components: {
    DropDown: DropDownComponent,
    SectionSeparator: SectionSeparatorComponent,
    SectionImage: SectionImageComponent,
    TrashIcon: TrashIconComponent,
  },
  props: {
    cartItem: { type: CartItem, required: true },
  },
  setup(props) {
    const clientService = inject<IClientService>("clientService");
    const dropDownItems = ref<number[]>([]);

    onBeforeMount(() => {
      let quantity = 20;
      if (props.cartItem.product.quantity < 20) {
        quantity = props.cartItem.product.quantity;
      }
      dropDownItems.value = Array.from({ length: quantity }, (_, i) => i + 1);
    });

    function onDelete(): void {
      clientService.deleteProductFromCart(props.cartItem.product);
    }

    function onNumItemsChanged(numItems: number): void {
      clientService.updateProductFromCart(props.cartItem.product, numItems);
    }

    return { dropDownItems, onDelete, onNumItemsChanged };
  },
});
</script>

<template>
  <div class="cart-item">
    <div class="row-1">
      <SectionImage v-bind:product="cartItem.product" />
      <div class="section-title">
        {{ cartItem.product.name }}
      </div>
      <TrashIcon v-on:click="onDelete" />
    </div>
    <div class="row-2">
      <DropDown
        v-bind:items="dropDownItems"
        v-bind:selectedIndex="cartItem.numItems - 1"
        v-on:dropDownChanged="onNumItemsChanged"
      />
      <div class="section-price">{{ cartItem.product.costAsString }}</div>
      <div class="section-total-price">{{ cartItem.costAsString }}</div>
    </div>
    <SectionSeparator />
  </div>
</template>

<style scoped lang="less">
.cart-item {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 15px;

  .row-1 {
    display: flex;
    align-items: center;
    justify-content: center;
    --imageSize: 80px;
    height: var(--imageSize);

    .section-image {
      min-height: var(--imageSize);
      min-width: var(--imageSize);
      max-height: var(--imageSize);
      max-width: var(--imageSize);
    }

    .section-title {
      font-size: 22px;
      flex-grow: 1;
    }

    .trash-icon {
      --iconSize: 20px;
      min-width: var(--iconSize);
      min-height: var(--iconeSize);
      max-width: var(--iconSize);
      max-height: var(--iconeSize);
    }
  }

  .row-2 {
    margin: 5px 10px 10px 10px;
    display: flex;
    justify-content: space-between;

    .dropDown {
      width: 60px;
      height: 30px;
    }
  }

  .sectionSeparator {
    width: 100%;
    height: 1px;
  }
}
</style>
