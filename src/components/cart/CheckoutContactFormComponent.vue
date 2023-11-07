<script lang="ts">
import { computed, defineComponent, inject, onBeforeMount, ref } from "vue";
import ButtonDefaultComponent from "@/components/common/ButtonDefaultComponent.vue";
import InputFieldComponent from "@/components/cart/InputFieldComponent.vue";
import { ResponsiveService } from "@/common/services/responsive-service";
import { SizeType } from "@/common/services/size-type";
import { useRouter } from "vue-router";
import { IClientService } from "@/common/services/client-service.interface";
import { Contact } from "@/common/models/Contact";

export default defineComponent({
  components: {
    InputFieldComponent,
    ButtonDefaultComponent,
  },
  setup() {
    const responsiveService = inject<ResponsiveService>("responsiveService");
    const clientService = inject<IClientService>("clientService");
    const router = useRouter();

    const isSmallOrLess = computed(
      () =>
        responsiveService.widthSize.value === SizeType.Small ||
        responsiveService.widthSize.value === SizeType.ExtraSmall
    );

    const formData = ref({
      firstName: "",
      lastName: "",
      street: "",
      zipCode: "",
      city: "",
      phoneNumber: "",
    });

    const errors = ref({
      firstName: false,
      lastName: false,
      street: false,
      zipCode: false,
      city: false,
      phoneNumber: false,
    });

    const minLengths = ref({
      firstName: 1,
      lastName: 1,
      street: 2,
      zipCode: 2,
      city: 2,
      phoneNumber: 5,
    });

    onBeforeMount(async () => {
      if (clientService.cartItems.length === 0) {
        await router.push({ name: "Products" });
      }

      const contact = clientService.contact;
      if (!contact) {
        return;
      }

      formData.value.firstName = contact.firstName;
      formData.value.lastName = contact.lastName;
      formData.value.street = contact.street;
      formData.value.zipCode = contact.zipCode;
      formData.value.city = contact.city;
      formData.value.phoneNumber = contact.phoneNumber;
    });

    function trim(): void {
      formData.value.firstName = formData.value.firstName.trim();
      formData.value.lastName = formData.value.lastName.trim();
      formData.value.street = formData.value.street.trim();
      formData.value.zipCode = formData.value.zipCode.trim();
      formData.value.city = formData.value.city.trim();
      formData.value.phoneNumber = formData.value.phoneNumber.trim();
    }
    function validate(): void {
      errors.value.firstName = !isFirstNameValid();
      errors.value.lastName = !isLastNameValid();
      errors.value.street = !isStreetValid();
      errors.value.zipCode = !isZipCodeValid();
      errors.value.city = !isCityValid();
      errors.value.phoneNumber = !isPhoneNumberValid();
    }

    function hasErrors(): boolean {
      return (
        errors.value.firstName ||
        errors.value.lastName ||
        errors.value.street ||
        errors.value.zipCode ||
        errors.value.city ||
        errors.value.phoneNumber
      );
    }

    function isFirstNameValid(): boolean {
      return stringHasLength(
        formData.value.firstName,
        minLengths.value.firstName
      );
    }

    function isLastNameValid(): boolean {
      return stringHasLength(
        formData.value.lastName,
        minLengths.value.lastName
      );
    }

    function isStreetValid(): boolean {
      return stringHasLength(formData.value.street, minLengths.value.street);
    }

    function isZipCodeValid() {
      return stringHasLength(formData.value.zipCode, minLengths.value.zipCode);
    }

    function isCityValid() {
      return stringHasLength(formData.value.city, minLengths.value.city);
    }

    function isPhoneNumberValid() {
      return stringHasLength(
        formData.value.phoneNumber,
        minLengths.value.phoneNumber
      );
    }

    function stringHasLength(theString: string, minLength: number): boolean {
      return theString && theString.length >= minLength;
    }

    async function submitForm(): Promise<void> {
      trim();
      validate();

      if (hasErrors()) {
        return;
      }

      const contact = new Contact(
        formData.value.firstName,
        formData.value.lastName,
        formData.value.street,
        formData.value.zipCode,
        formData.value.city,
        formData.value.phoneNumber
      );
      clientService.addContactToCart(contact);
      await router.push({ name: "CheckoutPayment" });
    }

    function getErrorMsg(minLength: number): string {
      if (minLength === 1) {
        return "Wert ist erforderlich und darf nicht leer sein.";
      }

      return "Die Eingabe ist weniger als " + minLength + " Zeichen lang.";
    }

    return {
      formData,
      minLengths,
      isSmallOrLess,
      errors,
      submitForm,
      getErrorMsg,
    };
  },
});
</script>

<template>
  <div
    class="checkout-contact-form"
    v-bind:class="{ 'is-small-or-less': isSmallOrLess }"
  >
    <form @submit.prevent="submitForm">
      <div class="section section-names">
        <InputFieldComponent
          v-bind:hasError="errors.firstName"
          v-bind:label="'Vorname'"
          v-bind:tabIndex="1"
          v-bind:error-msg="getErrorMsg(minLengths.firstName)"
          v-bind:autocomplete="'given-name'"
          v-model:inputText="formData.firstName"
        />
        <InputFieldComponent
          v-bind:hasError="errors.lastName"
          v-bind:label="'Nachname'"
          v-bind:tabIndex="2"
          v-bind:error-msg="getErrorMsg(minLengths.lastName)"
          v-bind:autocomplete="'family-name'"
          v-model:inputText="formData.lastName"
        />
      </div>
      <div class="section section-street">
        <InputFieldComponent
          v-bind:hasError="errors.street"
          v-bind:label="'Straße und Hausnummer'"
          v-bind:tabIndex="3"
          v-bind:error-msg="getErrorMsg(minLengths.street)"
          v-bind:autocomplete="'street-address'"
          v-model:inputText="formData.street"
        />
      </div>
      <div class="section section-zip-city">
        <InputFieldComponent
          v-bind:hasError="errors.zipCode"
          v-bind:label="'PLZ'"
          v-bind:tabIndex="4"
          v-bind:error-msg="getErrorMsg(minLengths.zipCode)"
          v-bind:autocomplete="'postal-code'"
          v-model:inputText="formData.zipCode"
        />
        <InputFieldComponent
          v-bind:hasError="errors.city"
          v-bind:label="'Stadt'"
          v-bind:tabIndex="5"
          v-bind:error-msg="getErrorMsg(minLengths.city)"
          v-bind:autocomplete="'address-level2'"
          v-model:inputText="formData.city"
        />
      </div>
      <div class="section section-phone">
        <InputFieldComponent
          v-bind:hasError="errors.phoneNumber"
          v-bind:label="'Telefonnummer, z.B. 1665xxxxxx'"
          v-bind:tabIndex="6"
          v-bind:error-msg="getErrorMsg(minLengths.phoneNumber)"
          v-bind:autocomplete="'tel-national'"
          v-model:inputText="formData.phoneNumber"
        />
      </div>
    </form>
    <ButtonDefaultComponent text="WEITER" v-on:click="submitForm" />
  </div>
</template>

<style scoped lang="less">
.checkout-contact-form {
  display: flex;
  flex-direction: column;
  --marginInputField: 5px;
  --widthNameSection: 300px;
  --widthZipSection: 100px;
  --borderWidth: 1px;

  .section {
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    &.section-names {
      .input-field {
        max-width: var(--widthNameSection);
      }
    }

    &.section-street,
    &.section-phone {
      .input-field {
        max-width: calc(
          2 * var(--widthNameSection) + 2 * var(--marginInputField)
        );
      }
    }

    &.section-zip-city {
      .input-field:first-child {
        max-width: var(--widthZipSection);
        min-width: var(--widthZipSection);
      }

      .input-field:last-child {
        max-width: calc(2 * var(--widthNameSection) - var(--widthZipSection));
      }
    }
  }

  .input-field {
    height: 50px;
    margin: var(--marginInputField);
  }

  .button-default {
    margin: 5px;
    margin-top: 50px;
    max-width: calc(2 * var(--widthNameSection));
  }

  &.is-small-or-less {
    .section {
      .input-field {
        max-width: unset;
      }

      &.section-zip-city {
        .input-field:last-child {
          max-width: calc(
            100% - var(--widthZipSection) - 4 * var(--marginInputField)
          );
        }
      }
    }
    .button-default {
      width: calc(100% - 22px);
    }
  }
}
</style>
