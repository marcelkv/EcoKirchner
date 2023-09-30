<template>
  <div class="spinner">
    <div class="spinner-inner" :style="{ '--spinnerSize': spinnerSize }"></div>
  </div>
</template>

<script>
export default {
  props: {
    spinnerSize: {
      type: String,
      default: "30px",
    },
  },
};
</script>

<style lang="less" scoped>
.spinner {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;

  .spinner-inner {
    border: 4px solid rgba(255, 255, 255, 0.3);
    border-top: 4px solid #028700;
    border-radius: 50%;
    width: var(--spinnerSize);
    height: var(--spinnerSize);
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
