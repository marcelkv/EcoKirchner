<script lang="ts">
import { defineComponent, inject, onMounted, reactive, ref } from "vue";
import { IClientService } from "@/common/services/client-service.interface";
import { IUserService } from "@/common/services/user-service.interface";
import Spinner from "@/components/common/SpinnerComponent.vue";
import { useRouter } from "vue-router";

export default defineComponent({
  components: { Spinner },
  props: {},
  setup(props, component) {
    const clientService = inject<IClientService>("clientService");
    const userService = inject<IUserService>("userService");
    const router = useRouter();
    const isLoading = ref(true);
    const orderedProducts = reactive<string[]>([]);
    onMounted(async () => {
      if (!userService.isAdmin) {
        await router.push({ name: "Products" });
        return;
      }

      const result = await clientService.getTotalOrderedProducts();
      orderedProducts.splice(0, orderedProducts.length, ...result);
      isLoading.value = false;
    });

    return {
      isLoading,
      orderedProducts,
    };
  },
});
</script>

<template>
  <div class="how-much">
    <Spinner v-if="isLoading" v-bind:withText="true" />
    <div
      class="how-much-text"
      v-else
      v-for="d in orderedProducts"
      v-bind:key="d"
    >
      {{ d }}
    </div>
  </div>
</template>

<style scoped lang="less">
.how-much {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  .how-much-text {
    padding-left: 30px;
    padding-top: 5px;
  }
}
</style>
