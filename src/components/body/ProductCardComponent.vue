<script lang="ts">
import { computed, defineComponent, onBeforeMount, ref } from "vue";
import { Product } from "@/common/models/product";
import SpinnerComponent from "@/components/common/SpinnerComponent.vue";

export default defineComponent({
  components: { Spinner: SpinnerComponent },
  props: { product: { type: Product, required: true } },
  setup(props) {
    const selectedQuantity = ref(1);
    const quantities = ref<number[]>([]);
    const NUM_AVAILABLE = 10;

    onBeforeMount(() => {
      let quantity = 20;
      if (props.product.quantity < 20) {
        quantity = props.product.quantity;
      }
      quantities.value = Array.from({ length: quantity }, (_, i) => i + 1);
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

    return {
      NUM_AVAILABLE,
      infoText,
      selectedQuantity,
      quantities,
    };
  },
});
</script>

<template>
  <div class="product">
    <div class="imageSection">
      <img
        v-if="product.imageUrl"
        class="productImage"
        :src="product.imageUrl"
        :alt="product.name"
      />
      <div v-else class="spinnerWrapper">
        <Spinner v-bind:withText="true" />
      </div>
    </div>
    <div class="separator"></div>
    <div class="footerSection1">
      <div class="productName">{{ product.name }}</div>
      <div class="productCost">{{ product.costAsString }}</div>
    </div>
    <div class="footerSection2">
      <div
        class="infoMessage"
        v-bind:class="{
          notAvailable: product.quantity === 0,
        }"
      >
        {{ infoText }}
      </div>
      <div class="addToCart" v-if="product.quantity > 0">
        <label for="numberDropdown"></label>
        <select class="numItems" v-model="selectedQuantity" id="numberDropdown">
          <option v-for="number in quantities" :key="number" :value="number">
            {{ number }}
          </option>
        </select>
        <label for="buttonBuy"></label>
        <div id="buttonBuy" class="button" tabindex="0">KAUFEN</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.product {
  max-width: 400px;
  min-width: 200px;
  width: calc(100% - 30px);
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid lightgray;
  border-radius: 2px;
  margin-top: 20px;
  margin-bottom: 20px;
  box-sizing: border-box;

  .imageSection {
    min-height: 274px;
    max-height: 274px;
    width: auto;
    display: flex;

    &.spinnerWrapper {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .productImage {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
  }

  .separator {
    height: 1px;
    background: linear-gradient(to right, transparent, lightgray, transparent);
    width: calc(100% - 45px);
  }

  .footerSection1 {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    font-size: 1.4em;

    .productName {
      margin: 10px;
    }

    .productCost {
      font-weight: bold;
    }
  }

  .footerSection2 {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
    margin-top: 20px;

    .infoMessage {
      padding: 8px 10px;
      color: green;
      display: flex;
      border: 1px solid transparent;

      &.notAvailable {
        color: red;
      }
    }

    .addToCart {
      display: flex;
      margin-right: 15px;

      .numItems {
        margin-right: 10px;
        padding: 8px 10px;
        border: 1px solid lightgray;
        -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;
      }

      .button {
        padding: 8px 10px;
        border: 1px solid lightgray;
      }
    }
  }
}
</style>
