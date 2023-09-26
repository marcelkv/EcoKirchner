<script lang="ts">
import { defineComponent, onBeforeMount } from "vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import BodyComponent from "@/components/BodyComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default defineComponent({
  name: "App",
  components: {
    Header: HeaderComponent,
    Body: BodyComponent,
    Footer: FooterComponent,
  },
  setup() {
    onBeforeMount(() => {
      document.title = "Ecokirchner";
    });

    return {};
  },
});
</script>

<template>
  <Header />
  <Body />
  <Footer />
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
