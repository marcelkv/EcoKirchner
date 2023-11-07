<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<template>
  <div class="cart-success">
    <div class="row1">Vielen Dank für Ihre Bestellung</div>
    <div class="row2">In Kürze erhalten Sie eine Bestätigungsemail.</div>
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
  }
}
</style>
