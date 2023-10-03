<script lang="ts">
import { defineComponent, inject, onBeforeMount, ref } from "vue";
import { Product } from "@/common/models/product";
import { IClientService } from "@/common/services/client-service.interface";
import SpinnerComponent from "@/components/common/SpinnerComponent.vue";

export default defineComponent({
  components: { Spinner: SpinnerComponent },
  props: { product: { type: Product, required: true } },
  setup(props) {
    const isLoadingImage = ref(true);
    const clientService = inject<IClientService>("clientService");

    onBeforeMount(async () => {
      if (!props.product.imageUrl) {
        await clientService.setProductImageAsync(props.product);
      }

      loadImage();
    });

    function loadImage(): void {
      const image = new Image();
      image.src = props.product.imageUrl;
      image.onload = () => {
        isLoadingImage.value = false;
      };
    }

    return {
      isLoadingImage,
    };
  },
});
</script>

<template>
  <div class="sectionImage">
    <Spinner v-if="isLoadingImage" v-bind:with-text="true" />
    <img
      v-else
      class="productImage"
      :src="product.imageUrl"
      :alt="product.name"
    />
  </div>
</template>

<style scoped lang="less">
.sectionImage {
  display: flex;
  justify-content: center;

  .spinner {
    height: auto;
  }

  .productImage {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
}
</style>
