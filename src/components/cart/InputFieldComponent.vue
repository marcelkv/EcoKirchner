<script lang="ts">
import { computed, defineComponent, nextTick, ref, watch } from "vue";

export default defineComponent({
  props: {
    autocomplete: { type: String, required: true },
    label: { type: String, required: true },
    inputText: { type: String, required: true },
    hasError: { type: Boolean, required: true },
    errorMsg: { type: String, required: false, default: "" },
  },
  emits: ["update:inputText"],
  setup(props, context) {
    const ref_inputBox = ref(null);
    const workingText = ref(props.inputText);
    const workingError = ref(props.hasError);
    const isFocused = ref(false);

    const textExists = computed(
      () => workingText.value && workingText.value.length > 0
    );

    const hasErrorMsg = computed(
      () => props.errorMsg && props.errorMsg.length > 0
    );

    function onTextChanged(): void {
      if (workingText.value.length > 0) {
        workingError.value = false;
      }

      context.emit("update:inputText", workingText.value);
    }

    function onLostFocus(): void {
      isFocused.value = false;
    }

    function onFocus(): void {
      if (isFocused.value) {
        return;
      }

      isFocused.value = true;
      const inputElement = ref_inputBox.value as HTMLDivElement;

      if (!inputElement) {
        return;
      }

      nextTick(() => {
        inputElement.focus();

        if (!workingText.value || workingText.value.length === 0) {
          nextTick(() => {
            workingText.value = " ";
            setTimeout(() => (workingText.value = ""), 10);
          });
        }
      });
    }

    function setError(): void {
      workingError.value = props.hasError;
    }

    watch(() => props.hasError, setError);

    return {
      ref_inputBox,
      workingText,
      workingError,
      hasErrorMsg,
      textExists,
      isFocused,
      onFocus,
      onLostFocus,
      onTextChanged,
    };
  },
});
</script>

<template>
  <div
    class="input-field"
    v-bind:class="{
      'is-focused': isFocused,
      'has-text': textExists,
      'has-error': workingError,
    }"
    v-on:touchend="onFocus"
    v-on:click="onFocus"
    v-on:focus="onFocus"
  >
    <div class="label-text">
      {{ $props.label }}
    </div>
    <input
      tabindex="0"
      ref="ref_inputBox"
      class="input-box"
      v-model="workingText"
      v-on:input="onTextChanged"
      v-on:focus="onFocus"
      v-on:focusout="onLostFocus"
      v-bind:autocomplete="$props.autocomplete"
    />
    <div class="popup-info" v-if="hasErrorMsg && workingError">
      <div>{{ $props.errorMsg }}</div>
    </div>
  </div>
</template>

<style scoped lang="less">
.input-field {
  --fontSizeLarge: 1.3em;
  --fontSizeSmall: 0.6em;
  --inputBoxHeight: 75%;
  --padding: 6px;
  --borderWidth: 1px;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: var(--borderWidth) solid black;
  padding: var(--padding);

  &:focus {
    outline: none;
  }

  .label-text {
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0;
    padding-top: 1px;
    font-size: var(--fontSizeLarge);
  }

  input {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background: transparent;
    border: none;
    outline: none;
    display: block;
  }

  .input-box {
    padding: 0;
    height: 1px;
    font-size: var(--fontSizeLarge);
  }

  &.is-focused,
  &.has-text {
    .label-text {
      padding: 0;
      height: calc(100% - var(--inputBoxHeight));
      font-size: var(--fontSizeSmall);
    }

    .input-box {
      padding-top: var(--padding);
      height: var(--inputBoxHeight);
    }
  }

  &.has-error {
    border: var(--borderWidth) solid red;
  }

  .popup-info {
    position: absolute;
    z-index: 2;
    --paddingPopUp: 8px;
    --borderRadius: 2px;
    left: 0;
    top: calc(100% + var(--borderWidth));
    border-bottom-left-radius: var(--borderRadius);
    border-bottom-right-radius: var(--borderRadius);
    padding: var(--paddingPopUp);
    width: calc(100% - 2 * var(--paddingPopUp));
    background-color: lightcoral;
  }
}
</style>
