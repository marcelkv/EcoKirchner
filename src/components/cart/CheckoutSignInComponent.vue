<script lang="ts">
import { defineComponent } from "vue";
import GoogleButton from "@/components/common/google-button.vue";

export default defineComponent({
  components: { GoogleButton },
  setup() {
    return {};
  },
});
</script>

<template>
  <div class="checkout-sign-in">
    <div class="sign-in-card">
      <div class="sign-in-title">Anmeldung erforderlich</div>
      <div class="sign-in-text">
        Damit wir deine Bestellung speichern und du den Status verfolgen kannst,
        benötigst du ein Google-Konto. Dein Warenkorb bleibt dabei erhalten.
      </div>
      <GoogleButton class="google-button" />
      <div class="no-account-hint">
        Kein Google-Konto? Schreib uns einfach per E-Mail oder WhatsApp.
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.checkout-sign-in {
  display: flex;
  justify-content: center;
  padding: 30px 20px;

  .sign-in-card {
    width: 100%;
    max-width: 420px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .sign-in-title {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 14px;
    }

    .sign-in-text {
      margin-bottom: 24px;
      line-height: 1.6;
      color: #444;
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
