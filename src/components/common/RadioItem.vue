<script lang="ts">
import { defineComponent, ref } from "vue";
import PaymentIcon from "@/components/common/PaymentIcon.vue";
import SectionSeparatorComponent from "@/components/product-card/SectionSeparatorComponent.vue";

export default defineComponent({
  components: { SectionSeparator: SectionSeparatorComponent, PaymentIcon },
  props: {
    isChecked: { type: Boolean, required: true },
  },
  emits: ["update:isChecked"],
  setup(props, context) {
    const isRadioChecked = ref(props.isChecked);

    function toggleRadio(): void {
      isRadioChecked.value = !isRadioChecked.value;

      context.emit("update:isChecked", isRadioChecked.value);
    }

    return { isRadioChecked, toggleRadio };
  },
});
</script>

<template>
  <div class="radio-item" v-on:click="toggleRadio">
    <div class="row1">
      <div class="radio" v-bind:class="{ 'is-checked': isRadioChecked }"></div>
      <div class="radio-text">VORKASSE</div>
      <PaymentIcon />
    </div>
    <SectionSeparator v-if="isChecked" />
    <div class="radio-info" v-if="isChecked">
      Zahle vorab per Überweisung. Nach Zahlungseingang wird Deine Bestellung
      bearbeitet und die kann bei uns abgeholt werden.
    </div>
  </div>
</template>

<style scoped lang="less">
.radio-item {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  user-select: none;
  border: 1px solid var(--lineColor);
  border-radius: 2px;

  .row1 {
    display: flex;
    align-items: center;
    width: 100%;

    .radio {
      --radioSize: 14px;
      min-width: var(--radioSize);
      max-width: var(--radioSize);
      height: var(--radioSize);
      border-radius: 300px;
      border: 2px solid var(--lineColor);
      cursor: pointer;

      &.is-checked {
        background-color: black;
      }
    }

    .radio-text {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin: 5px;
      margin-left: 15px;
      width: 100%;
    }

    .payment-icon {
      width: 40px;
    }
  }

  .sectionSeparator {
    height: 1px;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .radio-info {
    margin: 10px;
  }
}
</style>
