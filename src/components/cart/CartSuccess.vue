<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();
    const isHover = ref(false);

    function onMouseOver(): void {
      isHover.value = true;
    }

    function onMouseLeft(): void {
      isHover.value = false;
    }

    async function onClick(): Promise<void> {
      await router.push({ name: "MyOrders" });
    }

    return {
      isHover,
      onMouseOver,
      onMouseLeft,
      onClick,
    };
  },
});
</script>

<template>
  <div class="cart-success">
    <div class="row1">Vielen Dank für Ihre Bestellung</div>
    <div
      class="row2"
      v-on:mouseover="onMouseOver"
      v-on:mouseleave="onMouseLeft"
      v-on:click="onClick"
      v-bind:class="{ 'is-hover': isHover }"
    >
      "Meine Bestellungen"
    </div>
  </div>
</template>

<style scoped lang="less">
.cart-success {
  display: flex;
  flex-direction: column;
  margin: 15px;
  .row1 {
    font-weight: bold;
    font-size: 22px;
  }

  .row2 {
    margin-top: 10px;

    &.is-hover {
      color: blue;
      text-decoration: underline;
    }
  }
}
</style>
