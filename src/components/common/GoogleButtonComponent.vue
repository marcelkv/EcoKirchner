<script lang="ts">
import { defineComponent, inject, ref } from "vue";
import ButtonDefaultComponent from "@/components/common/ButtonDefaultComponent.vue";
import { IUserService } from "@/common/services/user-service.interface";

export default defineComponent({
  components: { ButtonDefault: ButtonDefaultComponent },

  setup() {
    let isLoading = ref(false);
    const userService = inject<IUserService>("userService");

    async function onButtonClicked(): Promise<void> {
      isLoading.value = true;
      await userService.signInWithGoogle();
      isLoading.value = false;
    }

    return {
      isLoading,
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
