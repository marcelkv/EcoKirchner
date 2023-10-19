<script lang="ts">
import { defineComponent } from "vue";
import NavigationItemComponent from "@/components/cart/NavigationItemComponent.vue";
import { useRouter } from "vue-router";

export default defineComponent({
  components: { NavigationItem: NavigationItemComponent },
  props: {
    activeIndex: { type: Number, required: true },
  },
  setup(props) {
    const router = useRouter();

    async function onClickData(): Promise<void> {
      if (props.activeIndex === 0) {
        return;
      }

      await router.push({ name: "CheckoutData" });
    }

    async function onClickPayment(): Promise<void> {
      if (props.activeIndex < 2) {
        return;
      }

      await router.push({ name: "CheckoutPayment" });
    }

    return {
      onClickData,
      onClickPayment,
    };
  },
});
</script>

<template>
  <div class="cart-navigation">
    <NavigationItem
      v-bind:text="'1.MEINE DATEN'"
      v-bind:isChecked="activeIndex > 0"
      v-bind:isActive="activeIndex === 0"
      v-bind:class="{ 'is-clickable': activeIndex > 0 }"
      v-on:click="onClickData"
    />
    <NavigationItem
      v-bind:text="'2.BEZAHLUNG'"
      v-bind:isChecked="activeIndex > 1"
      v-bind:isActive="activeIndex === 1"
      v-bind:class="{ 'is-clickable': activeIndex > 1 }"
      v-on:click="onClickPayment"
    />
    <NavigationItem
      v-bind:text="'3.BESTÄTIGUNG'"
      v-bind:isActive="activeIndex === 2"
    />
  </div>
</template>

<style scoped lang="less">
.cart-navigation {
  display: flex;
  width: 100%;
  --marginNavItem: 2px;
  --marginOutNavItem: calc(2 * var(--marginNavItem));

  .navigation-item {
    margin: var(--marginNavItem);
  }

  .navigation-item:first-child {
    margin-left: var(--marginOutNavItem);
  }

  .navigation-item:last-child {
    margin-right: var(--marginOutNavItem);
  }

  .is-clickable {
    cursor: pointer;
  }
}
</style>
