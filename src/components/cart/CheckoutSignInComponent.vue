<script lang="ts">
import { defineComponent, inject, ref, watch } from "vue";
import GoogleButton from "@/components/common/google-button.vue";
import { ResponsiveService } from "@/common/services/responsive-service";

export default defineComponent({
  components: { GoogleButton },
  setup() {
    const ref_cartContactData = ref(null);
    const isSmall = ref(false);
    const responsiveService = inject<ResponsiveService>("responsiveService");

    function onWidthChanged(): void {
      const cartContactData =
        ref_cartContactData.value as HTMLDivElement | null;

      if (!cartContactData) {
        return;
      }

      const googleButton =
        cartContactData.getElementsByClassName("google-button")[0];

      if (!googleButton) {
        return;
      }

      const computedStyles = window.getComputedStyle(googleButton);
      const marginLeft = parseFloat(computedStyles.marginLeft);
      const marginRight = parseFloat(computedStyles.marginRight);
      const totalWidth = googleButton.clientWidth + marginLeft + marginRight;

      isSmall.value = totalWidth >= responsiveService.windowWidth.value;
    }

    watch(() => responsiveService.windowWidth.value, onWidthChanged);

    return {};
  },
});
</script>

<template>
  <div class="checkout-sign-in">
    <div class="signed-in-text">
      Melde dich an um mit dem Einkauf fortzufahren.
    </div>
    <GoogleButton />
  </div>
</template>

<style scoped lang="less">
.checkout-sign-in {
  display: flex;
  flex-direction: column;
  align-items: center;

  &.isSmall {
    align-items: flex-start;

    .signed-in-text {
      text-align: left;
      margin: 40px 10px;
    }
  }

  .signed-in-text {
    margin: 40px 50px;
    text-align: center;
  }

  .google-button {
    --buttonMargin: 10px;
    height: 50px;
    width: calc(100% - var(--buttonMargin) - var(--buttonMargin));
    max-width: 300px;
    min-width: 100px;
    margin: var(--buttonMargin);
  }
}
</style>
