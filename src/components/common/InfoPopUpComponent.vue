<script lang="ts">
import {
  computed,
  defineComponent,
  inject,
  onBeforeMount,
  onMounted,
  ref,
} from "vue";
import { useRouter } from "vue-router";
import { InfoPopUpVm } from "./InfoPopUpVm";
import { IResponsiveService } from "@/common/services/responsive-service.interface";
import { SizeType } from "@/common/services/size-type";
import SuccessIconComponent from "./SuccessIconComponent.vue";
import ButtonDefaultComponent from "@/components/common/ButtonDefaultComponent.vue";

export default defineComponent({
  components: {
    ButtonDefault: ButtonDefaultComponent,
    SuccessIcon: SuccessIconComponent,
  },
  props: {
    infoPopUpVm: { type: InfoPopUpVm, required: true },
  },
  emits: ["onDone"],
  setup(props, context) {
    const isOpen = ref(false);
    const success = ref(false);
    const router = useRouter();
    const responsiveService = inject<IResponsiveService>("responsiveService");

    onBeforeMount(() => {
      isOpen.value = false;
    });

    onMounted(() => {
      setTimeout(() => (isOpen.value = true), 100);
    });

    const isLarge = computed(
      () => responsiveService.widthSize.value === SizeType.Large
    );

    async function onClickOutside(event: MouseEvent): Promise<void> {
      const popUpElement = event.target as HTMLDivElement;

      if (!popUpElement) {
        return;
      }

      const isClickOutside = popUpElement.classList.contains("infoPopUp");

      if (!isClickOutside) {
        return;
      }

      context.emit("onDone");
      await router.push({ name: props.infoPopUpVm.redirectCancel });
    }

    function onCancelClicked(): void {
      success.value = false;
      isOpen.value = false;
    }

    function onOkClicked(): void {
      success.value = true;
      isOpen.value = false;
    }

    async function onTransitionEnd(): Promise<void> {
      if (isOpen.value) {
        return;
      }

      context.emit("onDone");
      const redirectName = success.value
        ? props.infoPopUpVm.redirectOk
        : props.infoPopUpVm.redirectCancel;

      if (!redirectName) {
        return;
      }

      await router.push({ name: redirectName });
    }
    return {
      isOpen,
      isLarge,
      responsiveService,
      onClickOutside,
      onCancelClicked,
      onOkClicked,
      onTransitionEnd,
    };
  },
});
</script>

<template>
  <div
    class="infoPopUp"
    v-on:click="onClickOutside"
    v-bind:class="{
      isOpen: isOpen,
    }"
  >
    <div
      class="infoWrapper"
      v-bind:class="{
        isOpen: isOpen,
        isLarge: isLarge,
      }"
      v-on:transitionend="onTransitionEnd"
    >
      <div class="msgSection">
        <SuccessIcon />
        <div class="msg">{{ infoPopUpVm.textMain }}</div>
      </div>
      <div
        class="buttons"
        v-bind:class="{
          isLarge: isLarge,
        }"
      >
        <ButtonDefault
          v-bind:text="infoPopUpVm.textCancel"
          v-on:onButtonClicked="onCancelClicked"
        ></ButtonDefault>
        <ButtonDefault
          v-bind:text="infoPopUpVm.textOk"
          v-on:onButtonClicked="onOkClicked"
        ></ButtonDefault>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.infoPopUp {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0);
  transition: background-color 0.4s ease-in-out;
  overflow: auto;

  &.isOpen {
    background-color: rgba(211, 211, 211, 0.7);
  }

  .infoWrapper {
    position: relative;
    z-index: 999;
    top: -100%;
    width: 100%;
    transition: top 0.4s ease-in-out;
    max-width: 500px;
    border: 1px solid var(--lineColor);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    padding: 10px;
    background-color: white;
    user-select: none;

    &.isOpen {
      top: 0;
    }

    .msgSection {
      display: flex;
      align-items: center;
      margin: 10px;

      .successIcon {
        --iconSize: 50px;
      }

      .msg {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 21px;
        padding: 10px;
      }
    }

    .buttons {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      align-items: center;
      width: 100%;

      &.isLarge {
        flex-wrap: nowrap;
      }

      .button-default {
        margin: 10px;
      }
    }
  }
}
</style>
