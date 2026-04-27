<script lang="ts">
import { defineComponent, inject, onBeforeMount, ref } from "vue";
import CartNavigationComponent from "@/components/cart/CheckoutNavigationComponent.vue";
import ButtonDefaultComponent from "@/components/common/ButtonDefaultComponent.vue";
import SpinnerComponent from "@/components/common/SpinnerComponent.vue";
import { useRouter } from "vue-router";
import { IClientService } from "@/common/services/client-service.interface";
import { IUserService } from "@/common/services/user-service.interface";
import { BankingData } from "@/common/models/banking-data";

export default defineComponent({
  components: {
    ButtonDefault: ButtonDefaultComponent,
    CartNavigation: CartNavigationComponent,
    SpinnerComponent,
  },
  setup() {
    const clientService = inject<IClientService>("clientService");
    const userService = inject<IUserService>("userService");
    const isConfirmed = ref(false);
    const isLoading = ref(true);
    const ibanCopied = ref(false);
    const bankingData = ref<BankingData | null>(null);
    const router = useRouter();

    onBeforeMount(async () => {
      if (clientService.cartItems.length === 0 || !userService.isSignedIn) {
        await router.push({ name: "Products" });
        return;
      }
      bankingData.value = await clientService.getBankingData();
      isLoading.value = false;
    });

    function formatIban(iban: string): string {
      return iban
        .replace(/\s/g, "")
        .replace(/(.{4})/g, "$1 ")
        .trim();
    }

    function copyIban(): void {
      if (!bankingData.value) return;
      navigator.clipboard.writeText(bankingData.value.iban);
      ibanCopied.value = true;
      setTimeout(() => (ibanCopied.value = false), 2000);
    }

    async function onContinue(): Promise<void> {
      if (!isConfirmed.value) return;
      await router.push({ name: "CheckoutSummary" });
    }

    return {
      isConfirmed,
      isLoading,
      ibanCopied,
      bankingData,
      formatIban,
      copyIban,
      onContinue,
    };
  },
});
</script>

<template>
  <div class="checkout-payment">
    <CartNavigation v-bind:activeIndex="1" />

    <SpinnerComponent v-if="isLoading" v-bind:spinnerSize="'40px'" />

    <div v-else class="payment-content">
      <div class="section-heading">Zahlungsart</div>

      <div class="method-card">
        <div class="method-name">Vorkasse per Überweisung</div>
        <div class="method-description">
          Du überweist den Bestellbetrag auf unser Bankkonto. Nach
          Zahlungseingang bereiten wir deine Bestellung zur Abholung vor.
        </div>
      </div>

      <div class="section-heading">Bankverbindung</div>

      <div class="banking-card" v-if="bankingData">
        <div class="banking-row">
          <span class="banking-label">IBAN</span>
          <span class="banking-value iban">{{
            formatIban(bankingData.iban)
          }}</span>
          <button
            class="copy-btn"
            v-on:click="copyIban"
            v-bind:class="{ copied: ibanCopied }"
          >
            {{ ibanCopied ? "Kopiert ✓" : "Kopieren" }}
          </button>
        </div>
        <div class="banking-row">
          <span class="banking-label">BIC</span>
          <span class="banking-value">{{ bankingData.bic }}</span>
        </div>
        <div class="banking-row usage-hint">
          <span class="banking-label">Verwendungszweck</span>
          <span class="banking-value"
            >Deine Bestellnummer (steht nach der Bestellung unter „Meine
            Bestellungen")</span
          >
        </div>
      </div>

      <div class="section-heading">So läuft es ab</div>

      <ol class="steps-list">
        <li>Schließe deine Bestellung im nächsten Schritt ab.</li>
        <li>Überweise den Betrag auf das oben angegebene Konto.</li>
        <li>
          Sobald die Zahlung eingegangen ist, bereiten wir deine Bestellung vor.
        </li>
        <li>Du wirst zur Abholung benachrichtigt.</li>
      </ol>

      <label class="confirm-label">
        <input type="checkbox" v-model="isConfirmed" class="confirm-checkbox" />
        <span
          >Ich habe die Bankverbindung notiert und werde nach der Bestellung
          überweisen.</span
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

  .banking-card {
    border: 1px solid var(--lineColor);
    border-radius: 4px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;

    .banking-row {
      display: flex;
      align-items: baseline;
      flex-wrap: wrap;
      gap: 8px;

      &.usage-hint {
        align-items: flex-start;

        .banking-value {
          color: #555;
          font-size: 14px;
        }
      }
    }

    .banking-label {
      font-weight: bold;
      min-width: 80px;
      flex-shrink: 0;
      font-size: 13px;
      color: #666;
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }

    .banking-value {
      flex: 1;

      &.iban {
        font-family: monospace;
        font-size: 15px;
        letter-spacing: 0.05em;
        word-break: break-all;
      }
    }

    .copy-btn {
      background: none;
      border: 1px solid var(--lineColor);
      border-radius: 3px;
      padding: 2px 10px;
      font-size: 12px;
      cursor: pointer;
      white-space: nowrap;
      flex-shrink: 0;

      &.copied {
        border-color: green;
        color: green;
      }
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
