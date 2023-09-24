<script lang="ts">
import HeaderComponent from "@/components/HeaderComponent.vue";
import { defineComponent } from "vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default defineComponent({
  name: "App",
  components: { FooterComponent, HeaderComponent },
  beforeCreate() {
    document.title = "Ecokirchner";
  },
});
</script>

<template>
  <HeaderComponent />
  <router-view />
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
