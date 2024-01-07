<script lang="ts">
import { computed, defineComponent, PropType, ref } from "vue";
import { SelectorOption } from "@/common/selector-option";
import InfoText from "@/common/info-text.vue";

export default defineComponent({
  components: { InfoText },
  emits: ["update:currentSelection"],
  props: {
    selectorOptions: {
      type: Array as PropType<SelectorOption[]>,
      required: true,
    },
    currentSelection: { type: Number, required: true },
  },
  setup(props, context) {
    const index = ref(props.currentSelection);

    const currentItem = computed<SelectorOption>(
      () => props.selectorOptions[index.value]
    );
    function onClick(): void {
      index.value =
        index.value + 1 === props.selectorOptions.length ? 0 : index.value + 1;
      context.emit("update:currentSelection", index.value);
    }

    return { currentItem, onClick };
  },
});
</script>

<template>
  <div class="options-selector" v-on:click="onClick">
    <InfoText
      v-bind:indicatorColor="currentItem.indicatorColor"
      v-bind:text="currentItem.text"
    />
  </div>
</template>

<style scoped lang="less">
.options-selector {
}
</style>
