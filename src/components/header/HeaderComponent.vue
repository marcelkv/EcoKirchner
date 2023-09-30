<script lang="ts">
import { computed, defineComponent, inject } from "vue";
import HamburgerComponent from "@/components/header/HamburgerComponent.vue";
import { IResponsiveService } from "@/common/services/responsive-service.interface";
import { SizeType } from "@/common/services/size-type";

export default defineComponent({
  name: "HeaderComponent",
  computed: {
    DeviceType() {
      return SizeType;
    },
  },
  components: { Hamburger: HamburgerComponent },

  setup() {
    const responsiveService = inject<IResponsiveService>("responsiveService");
    const deviceType = computed(() => responsiveService.widthSize.value);

    return { deviceType };
  },
});
</script>

<template>
  <div class="header">
    <div
      class="logoWrapper"
      v-bind:class="{
        wrapperXs: deviceType === DeviceType.ExtraSmall,
        wrapperS: deviceType === DeviceType.Small,
        wrapperM: deviceType === DeviceType.Medium,
        wrapperL: deviceType === DeviceType.Large,
      }"
    >
      <img
        v-if="deviceType === DeviceType.ExtraSmall"
        class="logo"
        src="../../assets/logo_ecoKirchner_xs.png"
        alt="Ecokirchner logo"
      />
      <img
        v-else-if="deviceType === DeviceType.Small"
        class="logo"
        src="../../assets/logo_ecoKirchner.png"
        alt="Ecokirchner logo"
      />
      <img
        v-else
        class="logo"
        src="../../assets/logo_ecoKirchner-aulivera2-1024x154.png"
        alt="Ecokirchner logo"
      />
    </div>
    <div class="hamburgerWrapper">
      <Hamburger />
    </div>
  </div>
</template>

<style scoped lang="less">
.header {
  position: relative;
  min-height: var(--headerHeight);
  max-height: var(--headerHeight);
  background-color: var(--headerColor);
  display: flex;
  flex-direction: row-reverse;

  .logoWrapper {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2px 15px;

    .logo {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
  }

  .wrapperXs,
  .wrapperL {
    justify-content: flex-start;
  }

  .hamburgerWrapper {
    --padding: 7px;
    --hamburgerSize: calc(var(--headerHeight) - 2 * var(--padding));
    position: absolute;
    width: var(--hamburgerSize);
    height: var(--hamburgerSize);
    padding: var(--padding);
  }
}
</style>
