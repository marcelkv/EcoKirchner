<script lang="ts">
import { Product } from "@/common/models/product";
import { computed, defineComponent, inject, onBeforeMount, ref } from "vue";
import DropDownComponent from "@/components/common/DropDownComponent.vue";
import { IClientService } from "@/common/services/client-service.interface";

export default defineComponent({
  components: { DropDown: DropDownComponent },
  props: { product: { type: Product, required: true } },

  setup(props) {
    const NUM_AVAILABLE = 10;
    const selectedQuantity = ref(1);
    const dropDownItems = ref<number[]>([]);
    const clientService = inject<IClientService>("clientService");

    onBeforeMount(() => {
      let quantity = 20;
      if (props.product.quantity < 20) {
        quantity = props.product.quantity;
      }
      dropDownItems.value = Array.from({ length: quantity }, (_, i) => i + 1);
    });

    const infoText = computed(() => {
      const quantity = props.product.quantity;

      if (quantity >= NUM_AVAILABLE) {
        return "AUF LAGER";
      }
      if (quantity < NUM_AVAILABLE && quantity > 0) {
        return "NUR NOCH " + quantity + " AUF LAGER";
      }

      return "NICHT VERFÜGBAR";
    });

    function onDropDownChanged(value: number): void {
      selectedQuantity.value = value;
    }

    async function onBuyClicked(): Promise<void> {
      await clientService.addProductToCart(
        props.product,
        selectedQuantity.value
      );
    }

    return { infoText, dropDownItems, onDropDownChanged, onBuyClicked };
  },
});
</script>

<template>
  <div class="sectionBuy">
    <div
      class="infoText"
      v-bind:class="{
        notAvailable: product.quantity === 0,
      }"
    >
      {{ infoText }}
    </div>
    <div v-if="product.quantity > 0" class="addToCart">
      <DropDown
        v-bind:items="dropDownItems"
        v-on:dropDownChanged="onDropDownChanged"
      />
      <label for="buttonBuy"></label>
      <div
        id="buttonBuy"
        class="button"
        tabindex="0"
        v-on:keydown.enter="onBuyClicked"
        v-on:click="onBuyClicked"
      >
        KAUFEN
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.sectionBuy {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .infoText {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: green;

    &.notAvailable {
      color: red;
    }
  }

  .addToCart {
    width: 150px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .dropDown {
      width: 80px;
      height: 100%;
      margin-right: 10px;
    }

    .button {
      height: 100%;
      width: 90px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid lightgray;
      cursor: pointer;
      user-select: none;
      box-sizing: border-box;
    }
  }
}
</style>
