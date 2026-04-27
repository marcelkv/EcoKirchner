<script lang="ts">
import { defineComponent, inject, onMounted } from "vue";
import { IUserService } from "@/common/services/user-service.interface";
import { useRouter } from "vue-router";
import SpinnerComponent from "@/components/common/SpinnerComponent.vue";
import GoogleButtonComponent from "@/components/common/google-button.vue";
import { ref } from "vue";

export default defineComponent({
  components: {
    GoogleButton: GoogleButtonComponent,
    SpinnerComponent,
  },
  setup() {
    const userService = inject<IUserService>("userService");
    const router = useRouter();
    const isLoading = ref(true);

    onMounted(async () => {
      if (userService.isSignedIn) {
        await router.push({ name: "Products" });
      }
      isLoading.value = false;
    });

    return { isLoading };
  },
});
</script>

<template>
  <div class="logIn">
    <div v-if="isLoading" class="loading">
      <SpinnerComponent v-bind:spinner-size="'50px'" />
    </div>
    <div v-else class="login-card">
      <div class="login-title">Bei EcoKirchner anmelden</div>
      <div class="login-text">
        Melde dich mit deinem Google-Konto an, um Produkte zu bestellen und
        deine Bestellungen zu verfolgen.
      </div>
      <GoogleButton v-bind:redirectTo="'Products'" class="google-button" />
      <div class="no-account-hint">
        Kein Google-Konto? Schreib uns per E-Mail oder WhatsApp.
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.logIn {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;

  .loading {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .login-card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    max-width: 380px;
    padding: 0 24px;

    .login-title {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 12px;
    }

    .login-text {
      line-height: 1.6;
      color: #444;
      margin-bottom: 28px;
    }

    .google-button {
      height: 50px;
      width: 100%;
      max-width: 300px;
      margin-bottom: 20px;
    }

    .no-account-hint {
      font-size: 13px;
      color: #888;
    }
  }
}
</style>
