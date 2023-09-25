<script lang="ts">
import HeaderComponent from "@/components/HeaderComponent.vue";
import { defineComponent, onBeforeMount, ref } from "vue";
import FooterComponent from "@/components/FooterComponent.vue";
import BodyComponent from "@/components/BodyComponent.vue";

export default defineComponent({
  name: "App",
  components: {
    BodyComponent,
    FooterComponent,
    HeaderComponent,
  },
  setup() {
    const isMenuOpen = ref(false); // Define isOpen as a ref with an initial value of false

    onBeforeMount(() => {
      document.title = "Ecokirchner";
    });

    function onHamburgerChanged(isOpen: boolean): void {
      isMenuOpen.value = isOpen;
    }

    return { isMenuOpen, onHamburgerChanged };
  },
});
</script>

<template>
  <HeaderComponent v-on:hamburger-changed="onHamburgerChanged" />
  <BodyComponent v-bind:isOpen="isMenuOpen" />
  <FooterComponent />
</template>

<style lang="less">
html,
body {
  overscroll-behavior: none;
  margin: 0;
  padding: 0;
  border: 0;
}

#app {
  margin: 0;
  left: 0;
  top: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  --headerColor: white;
  --footerColor: white;
  --headerHeight: 70px;
  --footerHeight: 70px;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI",
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol";
  font-weight: 400;
}
</style>
