<script lang="ts">
import { defineComponent, inject, onBeforeMount, ref } from "vue";
import { useRouter } from "vue-router";
import { IClientService } from "@/common/services/client-service.interface";
import { BankingData } from "@/common/models/banking-data";
import ButtonDefaultComponent from "@/components/common/ButtonDefaultComponent.vue";
import SpinnerComponent from "@/components/common/SpinnerComponent.vue";

export default defineComponent({
  components: {
    ButtonDefault: ButtonDefaultComponent,
    SpinnerComponent,
  },
  setup() {
    const clientService = inject<IClientService>("clientService");
    const router = useRouter();
    const bankingData = ref<BankingData | null>(null);
    const isLoading = ref(true);
    const ibanCopied = ref(false);

    onBeforeMount(async () => {
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

    async function onMyOrders(): Promise<void> {
      await router.push({ name: "MyOrders" });
    }

    async function onContinueShopping(): Promise<void> {
      await router.push({ name: "Products" });
    }

    return {
      bankingData,
      isLoading,
      ibanCopied,
      formatIban,
      copyIban,
      onMyOrders,
      onContinueShopping,
    };
  },
});
</script>

<template>
  <div class="cart-success">
    <SpinnerComponent v-if="isLoading" v-bind:spinnerSize="'40px'" />

    <div v-else class="success-content">
      <div class="success-heading">Bestellung aufgegeben!</div>
      <div class="success-subtext">
        Vielen Dank für deine Bestellung. Bitte überweise jetzt den Betrag auf
        unser Konto – wir bearbeiten deine Bestellung nach Zahlungseingang.
      </div>

      <div class="next-steps">
        <div class="next-steps-title">Was jetzt?</div>

        <div class="step">
          <div class="step-number">1</div>
          <div class="step-body">
            <div class="step-title">Betrag überweisen</div>
            <div class="step-text">
              Überweise den Bestellbetrag (siehst du unter „Meine Bestellungen")
              auf folgendes Konto:
            </div>

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
              <div class="banking-row">
                <span class="banking-label">Verwendungszweck</span>
                <span class="banking-value hint"
                  >Deine Bestellnummer (unter „Meine Bestellungen")</span
                >
              </div>
            </div>
          </div>
        </div>

        <div class="step">
          <div class="step-number">2</div>
          <div class="step-body">
            <div class="step-title">Wir bereiten deine Bestellung vor</div>
            <div class="step-text">
              Sobald die Zahlung eingegangen ist, bereiten wir deine Bestellung
              zur Abholung vor.
            </div>
          </div>
        </div>

        <div class="step">
          <div class="step-number">3</div>
          <div class="step-body">
            <div class="step-title">Abholung</div>
            <div class="step-text">
              Du wirst per E-Mail oder Telefon kontaktiert, sobald deine
              Bestellung abholbereit ist.
            </div>
          </div>
        </div>
      </div>

      <div class="actions">
        <ButtonDefault
          text="MEINE BESTELLUNGEN"
          v-on:onButtonClicked="onMyOrders"
        />
        <ButtonDefault
          text="WEITER EINKAUFEN"
          v-on:onButtonClicked="onContinueShopping"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.cart-success {
  height: 100%;
  overflow: auto;

  .success-content {
    padding: 24px 20px;
    max-width: 560px;

    .success-heading {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 12px;
    }

    .success-subtext {
      line-height: 1.6;
      color: #444;
      margin-bottom: 32px;
    }

    .next-steps {
      .next-steps-title {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 20px;
      }

      .step {
        display: flex;
        gap: 16px;
        margin-bottom: 24px;

        .step-number {
          width: 28px;
          height: 28px;
          min-width: 28px;
          border-radius: 50%;
          background-color: #333;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: bold;
          margin-top: 2px;
        }

        .step-body {
          flex: 1;

          .step-title {
            font-weight: bold;
            margin-bottom: 6px;
          }

          .step-text {
            line-height: 1.5;
            color: #444;
            margin-bottom: 12px;
          }
        }
      }
    }

    .banking-card {
      border: 1px solid var(--lineColor);
      border-radius: 4px;
      padding: 14px;
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      gap: 10px;

      .banking-row {
        display: flex;
        align-items: baseline;
        flex-wrap: wrap;
        gap: 8px;
      }

      .banking-label {
        font-weight: bold;
        min-width: 120px;
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

        &.hint {
          color: #555;
          font-size: 14px;
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

    .actions {
      margin-top: 32px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      max-width: 300px;
    }
  }
}
</style>
