<script lang="ts">
import { defineComponent } from "vue";
import ButtonDefaultComponent from "@/components/common/ButtonDefaultComponent.vue";

export default defineComponent({
  components: { ButtonDefault: ButtonDefaultComponent },
  emits: ["onButtonClicked"],
  props: {
    isLoading: { type: Boolean, required: false, default: false },
  },
  setup(props, context) {
    function onButtonClicked(): void {
      context.emit("onButtonClicked");
    }
    return {
      onButtonClicked,
    };
  },
});
</script>

<template>
  <div class="google-button">
    <ButtonDefault
      text="Weiter mit Google"
      v-bind:isLoading="isLoading"
      v-on:onButtonClicked="onButtonClicked"
    >
      <template v-slot:icon>
        <div class="google-icon" />
      </template>
    </ButtonDefault>
  </div>
</template>

<style scoped lang="less">
.google-button {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .google-icon {
    background: url(https://accounts.scdn.co/sso/images/new-google-icon.72fd940a229bc94cf9484a3320b3dccb.svg)
      center center no-repeat;
    width: 50px;
    height: 100%;
  }
}
</style>
