<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  props: {
    iconSvg: { required: false, type: String },
    buttonText: { required: true, type: String },
  },

  setup(props) {
    const showIcon = !!props.iconSvg;

    const buttonStyle = computed(() => {
      return {
        "--iconSvg": `url(${props.iconSvg}) center center no-repeat`,
      };
    });

    return {
      props,
      showIcon,
      buttonStyle,
    };
  },
});
</script>

<template>
  <div class="button" v-bind:style="buttonStyle">
    <div v-if="props.iconSvg" class="buttonIcon"></div>
    <div class="buttonText">{{ buttonText }}</div>
  </div>
</template>

<style scoped lang="less">
.button {
  --iconSize: 40px;
  --horizontalMargin: 30px;
  --iconSvg: white;
  flex-grow: 1;
  max-width: 340px;
  min-width: 340px;
  height: var(--signInButtonHeight);
  background-color: white;
  border-radius: var(--horizontalMargin);
  border: 1px solid black;
  display: flex;
  align-items: center;
  cursor: pointer;

  .buttonIcon {
    margin-left: var(--horizontalMargin);
    background: var(--iconSvg);
    width: var(--iconSize);
    height: var(--iconSize);
  }

  .buttonText {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    margin-right: var(--horizontalMargin);
  }

  .buttonText &:not(.buttonIcon) {
    margin-left: var(--horizontalMargin);
  }
}
</style>
