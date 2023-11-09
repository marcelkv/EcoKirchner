<script lang="ts">
import { IUserService } from "@/common/services/user-service.interface";
import { defineComponent, inject, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import SpinnerComponent from "@/components/common/SpinnerComponent.vue";
import GoogleButtonComponent from "@/components/common/GoogleButtonComponent.vue";

export default defineComponent({
  components: {
    GoogleButton: GoogleButtonComponent,
    SpinnerComponent,
  },
  setup() {
    const userService = inject<IUserService>("userService");
    const router = useRouter();
    let isLoading = ref(true);
    let isSignedIn = ref(false);

    onMounted(async () => {
      if (userService.isSignedIn) {
        await router.push({ name: "Products" });
      }

      isSignedIn.value = false;
      isLoading.value = false;
    });

    async function onClickSignInWithGoogle(): Promise<void> {
      isLoading.value = true;
      if (userService.isSignedIn) {
        await router.push({ name: "Products" });
      }

      isSignedIn.value = userService.isSignedIn;
      isLoading.value = false;
    }

    async function onClickSignOut(): Promise<void> {
      await userService.signOut();
      isSignedIn.value = userService.isSignedIn;
    }

    return {
      isLoading,
      isSignedIn,
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
        <div class="headerText">Bei EcoKirchner anmelden</div>
      </div>
      <GoogleButton v-on:onButtonClicked="onClickSignInWithGoogle" />
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
    --signInButtonHeight: 55px;

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

    .google-button {
      height: var(--signInButtonHeight);
      max-width: 340px;
      width: 100%;
    }

    @media (max-height: 360px) {
      .header {
        display: none;
      }
    }
  }
}
</style>
