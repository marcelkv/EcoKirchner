<script lang="ts">
import { defineComponent, inject, onBeforeMount, ref } from "vue";
import CartNavigationComponent from "@/components/cart/CheckoutNavigationComponent.vue";
import ButtonDefaultComponent from "@/components/common/ButtonDefaultComponent.vue";
import { useRouter } from "vue-router";
import { IClientService } from "@/common/services/client-service.interface";
import { IUserService } from "@/common/services/user-service.interface";

export default defineComponent({
  components: {
    ButtonDefault: ButtonDefaultComponent,
    CartNavigation: CartNavigationComponent,
  },
  setup() {
    const clientService = inject<IClientService>("clientService");
    const userService = inject<IUserService>("userService");
    const isConfirmed = ref(false);
    const router = useRouter();

    onBeforeMount(async () => {
      if (clientService.cartItems.length === 0 || !userService.isSignedIn) {
        await router.push({ name: "Products" });
      }
    });

    async function onContinue(): Promise<void> {
      if (!isConfirmed.value) return;
      await router.push({ name: "CheckoutSummary" });
    }

    return {
      isConfirmed,
      onContinue,
    };
  },
});
</script>

<template>
  <div class="checkout-payment">
    <CartNavigation v-bind:activeIndex="1" />

    <div class="payment-content">
      <div class="section-heading">Zahlungsart</div>

      <div class="method-card">
        <div class="method-name">Vorkasse per Überweisung</div>
        <div class="method-description">
          Du überweist den Bestellbetrag auf unser Bankkonto. Nach
          Zahlungseingang bereiten wir deine Bestellung zur Abholung vor.
        </div>
      </div>

      <div class="section-heading">So läuft es ab</div>

      <ol class="steps-list">
        <li>Schließe deine Bestellung im nächsten Schritt ab.</li>
        <li>
          Du erhältst die Bankverbindung per E-Mail und unter „Meine
          Bestellungen".
        </li>
        <li>Überweise den Betrag auf das angegebene Konto.</li>
        <li>
          Sobald die Zahlung eingegangen ist, bereiten wir deine Bestellung vor.
        </li>
        <li>Du wirst zur Abholung benachrichtigt.</li>
      </ol>

      <label class="confirm-label">
        <input type="checkbox" v-model="isConfirmed" class="confirm-checkbox" />
        <span
          >Mir ist bewusst, dass ich den Betrag nach der Bestellung per
          Überweisung bezahle.</span
        >
      </label>

      <ButtonDefault
        text="WEITER"
        v-bind:class="{ disabled: !isConfirmed }"
        v-on:onButtonClicked="onContinue"
      />
    </div>
  </div>
</template>

<style scoped lang="less">
.checkout-payment {
  display: flex;
  flex-direction: column;
  overflow: auto;
  width: 100%;
  height: 100%;

  .payment-content {
    display: flex;
    flex-direction: column;
    padding: 20px;
    max-width: 580px;
    width: 100%;
    box-sizing: border-box;
  }

  .section-heading {
    font-weight: bold;
    font-size: 16px;
    margin-top: 28px;
    margin-bottom: 12px;

    &:first-child {
      margin-top: 0;
    }
  }

  .method-card {
    border: 1px solid var(--lineColor);
    border-radius: 4px;
    padding: 16px;

    .method-name {
      font-weight: bold;
      margin-bottom: 8px;
    }

    .method-description {
      line-height: 1.5;
      color: #444;
    }
  }

  .steps-list {
    margin: 0;
    padding-left: 22px;
    line-height: 1.8;
    color: #333;
  }

  .confirm-label {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    margin-top: 28px;
    margin-bottom: 24px;
    cursor: pointer;
    line-height: 1.5;

    .confirm-checkbox {
      margin-top: 3px;
      width: 18px;
      height: 18px;
      flex-shrink: 0;
      cursor: pointer;
    }
  }

  .button-default {
    max-width: 340px;
    width: 100%;

    &.disabled {
      opacity: 0.4;
      cursor: not-allowed;
      pointer-events: none;
    }
  }
}
</style>
