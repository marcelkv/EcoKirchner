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
    const orderId = ref<string | null>(null);
    const isLoading = ref(true);
    const copied = ref<"recipient" | "iban" | "bic" | "ref" | null>(null);

    onBeforeMount(async () => {
      orderId.value = clientService.currentOrderId;
      bankingData.value = await clientService.getBankingData();
      isLoading.value = false;
    });

    function formatIban(iban: string): string {
      return iban
        .replace(/\s/g, "")
        .replace(/(.{4})/g, "$1 ")
        .trim();
    }

    function formatRecipient(name: string): string {
      return name.replace(/ /g, " ");
    }

    function copyField(field: "recipient" | "iban" | "bic" | "ref"): void {
      if (!bankingData.value) return;
      const value =
        field === "recipient"
          ? bankingData.value.recipientName
          : field === "iban"
            ? bankingData.value.iban
            : field === "bic"
              ? bankingData.value.bic
              : (orderId.value ?? "");
      navigator.clipboard.writeText(value);
      copied.value = field;
      setTimeout(() => {
        copied.value = null;
      }, 2000);
    }

    async function onMyOrders(): Promise<void> {
      await router.push({ name: "MyOrders" });
    }

    async function onContinueShopping(): Promise<void> {
      await router.push({ name: "Products" });
    }

    return {
      bankingData,
      orderId,
      isLoading,
      copied,
      formatIban,
      formatRecipient,
      copyField,
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
              <div class="banking-field">
                <div class="field-header">
                  <span class="banking-label">Empfänger</span>
                  <button
                    class="copy-btn"
                    v-on:click="copyField('recipient')"
                    v-bind:class="{ copied: copied === 'recipient' }"
                  >
                    {{ copied === "recipient" ? "Kopiert ✓" : "Kopieren" }}
                  </button>
                </div>
                <div class="field-value">
                  {{ formatRecipient(bankingData.recipientName) }}
                </div>
              </div>
              <div class="banking-field">
                <div class="field-header">
                  <span class="banking-label">IBAN</span>
                  <button
                    class="copy-btn"
                    v-on:click="copyField('iban')"
                    v-bind:class="{ copied: copied === 'iban' }"
                  >
                    {{ copied === "iban" ? "Kopiert ✓" : "Kopieren" }}
                  </button>
                </div>
                <div class="field-value mono">
                  {{ formatIban(bankingData.iban) }}
                </div>
              </div>
              <div class="banking-field">
                <div class="field-header">
                  <span class="banking-label">BIC</span>
                  <button
                    class="copy-btn"
                    v-on:click="copyField('bic')"
                    v-bind:class="{ copied: copied === 'bic' }"
                  >
                    {{ copied === "bic" ? "Kopiert ✓" : "Kopieren" }}
                  </button>
                </div>
                <div class="field-value mono">{{ bankingData.bic }}</div>
              </div>
              <div class="banking-field" v-if="orderId">
                <div class="field-header">
                  <span class="banking-label">Verwendungszweck</span>
                  <button
                    class="copy-btn"
                    v-on:click="copyField('ref')"
                    v-bind:class="{ copied: copied === 'ref' }"
                  >
                    {{ copied === "ref" ? "Kopiert ✓" : "Kopieren" }}
                  </button>
                </div>
                <div class="field-value mono">{{ orderId }}</div>
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
      border-radius: 8px;
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      overflow: hidden;

      .banking-field {
        padding: 12px 14px;
        border-bottom: 1px solid var(--lineColor);

        &:last-child {
          border-bottom: none;
        }

        .field-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          margin-bottom: 4px;
        }

        .banking-label {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #999;
          font-weight: 600;
        }

        .field-value {
          font-size: 16px;
          line-height: 1.4;
          word-break: break-word;

          &.mono {
            font-family: monospace;
            letter-spacing: 0.04em;
            word-break: break-all;
          }
        }
      }

      .copy-btn {
        background: none;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 2px 8px;
        font-size: 12px;
        color: #555;
        cursor: pointer;
        white-space: nowrap;
        flex-shrink: 0;
        min-height: 28px;

        &.copied {
          border-color: #34c759;
          color: #34c759;
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
