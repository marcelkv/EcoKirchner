<script lang="ts">
import { defineComponent, inject, ref } from "vue";
import ButtonDefaultComponent from "@/components/common/ButtonDefaultComponent.vue";
import { IAuthService } from "@/common/services/auth-service.interface";
import { useRouter } from "vue-router";

export default defineComponent({
  components: { ButtonDefault: ButtonDefaultComponent },
  emits: ["onButtonClicked"],
  props: { redirectTo: { type: String, default: null } },
  setup(props) {
    const authService = inject<IAuthService>("authService");
    const router = useRouter();
    let isLoading = ref(false);

    async function onButtonClicked(): Promise<void> {
      isLoading.value = true;
      await authService.signInWithGoogle();
      isLoading.value = false;
      if (props.redirectTo) {
        await router.push({ name: props.redirectTo });
      }
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
