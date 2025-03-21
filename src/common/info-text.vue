<script lang="ts">
import { computed, CSSProperties, defineComponent } from "vue";

export default defineComponent({
  components: {},
  props: {
    indicatorColor: { type: String, require: true },
    text: { type: String, required: true },
  },
  setup(props) {
    const indicatorStyle = computed<CSSProperties>(() => {
      return { backgroundColor: props.indicatorColor };
    });

    return { indicatorStyle };
  },
});
</script>

<template>
  <div class="info-text">
    <div class="indicator-wrapper">
      <div class="indicator" v-bind:style="indicatorStyle"></div>
    </div>
    <div class="text">{{ $props.text }}</div>
  </div>
</template>

<style scoped lang="less">
.info-text {
  display: flex;
  align-items: center;
  --indicatorSize: 16px;
  padding-top: 6px;
  padding-bottom: 6px;

  .indicator-wrapper {
    display: flex;
    justify-content: center;
    flex: 0 0 calc(var(--indicatorSize) + 20px);
    cursor: pointer;

    .indicator {
      height: var(--indicatorSize);
      width: var(--indicatorSize);
      border-radius: var(--indicatorSize);
    }
  }

  .text {
    flex-grow: 1;
    flex-shrink: 1;
    min-width: 100px;
  }
}
</style>
