<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeaderComponent",
  props: {
    msg: String,
  },
});
</script>

<template>
  <div class="header">
    <div class="logoSmall">
      <img
        class="logo"
        src="@/assets/logo_ecoKirchner.png"
        alt="Ecokirchner logo"
      />
    </div>
  </div>
</template>

<style scoped lang="less">
.header {
  min-height: var(--headerHeight);
  max-height: var(--headerHeight);
  background-color: var(--headerColor);
  display: flex;
  flex-direction: row;

  .logoSmall {
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
}
</style>
