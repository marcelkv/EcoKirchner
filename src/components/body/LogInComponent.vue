<script lang="ts">
import { IClientService } from "@/common/client-service.interface";
import { defineComponent, inject, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import ButtonComponent from "@/components/common/ButtonComponent.vue";
import SpinnerComponent from "@/components/common/SpinnerComponent.vue";

export default defineComponent({
  components: { SpinnerComponent, ButtonComponent },
  setup() {
    const clientService = inject<IClientService>("clientService");
    const router = useRouter();
    let isLoading = ref(true);
    let isSignedIn = ref(false);
    const googleSvg =
      "https://accounts.scdn.co/sso/images/new-google-icon.72fd940a229bc94cf9484a3320b3dccb.svg";

    onMounted(async () => {
      if (clientService.isSignedIn) {
        await router.push({ name: "Home" });
      }

      isSignedIn.value = false;
      isLoading.value = false;
    });

    async function onClickSignInWithGoogle(): Promise<void> {
      isLoading.value = true;
      await clientService.signInWithGoogle();
      if (clientService.isSignedIn) {
        await router.push({ name: "Home" });
      }

      isSignedIn.value = clientService.isSignedIn;
      isLoading.value = false;
    }

    async function onClickSignOut(): Promise<void> {
      await clientService.signOut();
      isSignedIn.value = clientService.isSignedIn;
    }

    return {
      isLoading,
      isSignedIn,
      googleSvg,
      onClickSignInWithGoogle,
      onClickSignOut,
    };
  },
});
</script>

<template>
  <div class="logIn">
    <div v-if="isLoading" class="loading">
      <SpinnerComponent v-bind:spinner-size="'50px'" />
      <div class="isLoadingText">Wird geladen...</div>
    </div>
    <div v-else class="loginWrapper">
      <div class="header">
        <div v-if="isSignedIn" class="headerText">Bei EcoKirchner abmelden</div>
        <div v-else class="headerText">Bei EcoKirchner anmelden</div>
      </div>
      <ButtonComponent
        v-if="isSignedIn"
        v-bind:icon-svg="googleSvg"
        v-bind:button-text="'Abmelden'"
        v-on:click="onClickSignOut"
      />
      <ButtonComponent
        v-else
        v-bind:icon-svg="googleSvg"
        v-bind:button-text="'Weiter mit Google'"
        v-on:click="onClickSignInWithGoogle"
      />
    </div>
  </div>
</template>

<style scoped lang="less">
.logIn {
  height: 100%;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .loading {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .loginWrapper {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    --signInButtonHeight: 50px;

    .header {
      position: absolute;
      display: flex;
      flex-direction: column;
      bottom: calc(100% / 2 + var(--signInButtonHeight) * 1.5);

      .headerText {
        font-weight: bold;
        font-size: 24px;
      }
    }

    @media (max-height: 360px) {
      .header {
        display: none;
      }
    }
  }
}
</style>
