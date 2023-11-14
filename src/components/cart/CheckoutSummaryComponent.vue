<script lang="ts">
import { computed, defineComponent, inject, onBeforeMount, ref } from "vue";
import CartNavigationComponent from "@/components/cart/CheckoutNavigationComponent.vue";
import { IClientService } from "@/common/services/client-service.interface";
import { useRouter } from "vue-router";
import { IUserService } from "@/common/services/user-service.interface";
import SectionSeparatorComponent from "@/components/product-card/SectionSeparatorComponent.vue";
import PaymentIcon from "@/components/common/PaymentIcon.vue";
import CartOrderItem from "@/components/cart/CartItemComponent.vue";
import ButtonDefaultComponent from "@/components/common/ButtonDefaultComponent.vue";
import SpinnerComponent from "@/components/common/SpinnerComponent.vue";

export default defineComponent({
  components: {
    SpinnerComponent,
    ButtonDefault: ButtonDefaultComponent,
    CartOrderItem,
    PaymentIcon,
    SectionSeparator: SectionSeparatorComponent,
    CartNavigation: CartNavigationComponent,
  },
  setup() {
    const clientService = inject<IClientService>("clientService");
    const userService = inject<IUserService>("userService");
    const router = useRouter();
    const isLoading = ref(false);

    onBeforeMount(async () => {
      if (clientService.cartItems.length === 0 || !userService.isSignedIn) {
        await router.push({ name: "Products" });
      }
    });

    const email = computed(() => userService.userEmail);
    const contact = computed(() => clientService.contact);
    const cartItems = computed(() => clientService.cartItems);
    const totalCost = computed(() => clientService.totalCostCartAsString);

    async function onBuyNowClicked(): Promise<void> {
      isLoading.value = true;
      const success = await clientService.buyAsync(userService.uid);
      if (success) {
        await router.push({ name: "CheckoutSuccess" });
      } else {
        const { deleted, modified } = clientService.getChangedProducts();

        if (deleted.length > 0) {
          const deletedProductNames = deleted
            .map((product) => product.name)
            .join(", ");
          alert(
            `Oops... Folgende Produkte haben wir nicht mehr: ${deletedProductNames}. Bitte überprüfen Sie Ihren Warenkorb.`
          );
        }

        if (modified.length > 0) {
          const modifiedProductNames = modified
            .map((product) => product.name)
            .join(", ");

          alert(
            `Oops... Folgende Produkte wurden verändert: ${modifiedProductNames}. Bitte überprüfen Sie Ihren Warenkorb.`
          );
        }

        await router.push({ name: "CartPage" });
      }
    }

    return { isLoading, email, contact, cartItems, totalCost, onBuyNowClicked };
  },
});
</script>

<template>
  <div class="checkout-summary">
    <CartNavigation v-bind:activeIndex="2" />
    <SpinnerComponent v-bind:spinnerSize="'40px'" v-if="isLoading" />
    <div class="checkout-content" v-else>
      <div class="main-title-section">Prüfen Sie Ihre Bestellung</div>
      <div class="sub-title-section">
        Bitte überpfüfen Sie Ihre Daten sorgfältig.
      </div>
      <div class="title-section address-title-section">RECHNUNGSADRESSE</div>
      <SectionSeparator v-bind:withGradient="false" />
      <div class="address-section">
        <div class="row-address">{{ email }}</div>
        <div class="row-address">
          {{ contact.firstName }} {{ contact.lastName }}
        </div>
        <div class="row-address">{{ contact.street }}</div>
        <div class="row-address">{{ contact.zipCode }} {{ contact.city }}</div>
        <div class="row-address">{{ contact.phoneNumber }}</div>
        <div class="row-address">Deutschland</div>
      </div>
      <div class="title-section payment-title-section">ZAHLUNGSART</div>
      <SectionSeparator v-bind:withGradient="false" />
      <div class="payment-section">
        <div class="payment-row1">
          <div class="payment-text">Vorkasse</div>
          <PaymentIcon />
        </div>
        <div class="payment-row2">
          Die Kontodaten für eine Überweisung übermitteln wir Ihnen per E-Mail.
        </div>
      </div>
      <div class="title-section products-title-section">WARENKORB</div>
      <SectionSeparator v-bind:withGradient="false" />
      <div class="products-section">
        <CartOrderItem
          v-for="(cartItem, index) in cartItems"
          v-bind:key="index"
          v-bind:cartItem="cartItem"
          v-bind:isEditable="false"
        />
      </div>
      <div class="title-section summary-title-section">BESTELLÜBERSICHT</div>
      <SectionSeparator v-bind:withGradient="false" />
      <div class="summary-section">
        <div>Warenwert:</div>
        <strong>{{ totalCost }}</strong>
      </div>
      <div class="apply-section">
        <ButtonDefault
          v-bind:text="'JETZT KAUFEN'"
          v-on:click="onBuyNowClicked"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.checkout-summary {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .checkout-content {
    margin: 10px;
    padding: 10px;
    overflow: auto;

    .main-title-section {
      font-weight: bold;
      font-size: 22px;
      margin-bottom: 20px;
    }

    .title-section {
      font-weight: bold;
      font-size: 18px;
      margin-top: 30px;
      margin-bottom: 4px;
    }

    .sectionSeparator {
      width: 100%;
      height: 1px;
      margin-bottom: 10px;
    }

    .address-section {
      .row-address {
        margin-top: 6px;
        margin-bottom: 6px;
      }
    }

    .payment-section {
      .payment-row1 {
        height: 40px;
        width: 100%;
        display: flex;
        align-items: center;

        .payment-text {
          margin-right: 20px;
        }

        .payment-icon {
          height: 30px;
          width: 30px;
        }
      }
    }

    .summary-section {
      display: flex;
      justify-content: space-between;
    }

    .apply-section {
      width: 100%;
      margin-top: 50px;
      margin-bottom: 50px;
      display: flex;
      justify-content: center;
      .button-default {
        height: 40px;
        width: 60%;
      }
    }
  }
}
</style>
