<script lang="ts">
import { defineComponent, inject, onBeforeMount, onMounted } from "vue";
import HeaderComponent from "@/components/header/HeaderComponent.vue";
import BodyComponent from "@/components/body/BodyComponent.vue";
import FooterComponent from "@/components/footer/FooterComponent.vue";
import { IResponsiveService } from "@/common/services/responsive-service.interface";

export default defineComponent({
  name: "App",
  components: {
    Header: HeaderComponent,
    Body: BodyComponent,
    Footer: FooterComponent,
  },
  setup() {
    const responsiveService = inject<IResponsiveService>("responsiveService");

    onBeforeMount(() => {
      document.title = "Ecokirchner";
    });

    onMounted(() => responsiveService.init());

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

* {
  box-sizing: border-box;
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

  --lineColor: lightgray;

  .header,
  .footer {
    z-index: 1;
  }

  .body {
    z-index: 0;
  }
}
</style>
