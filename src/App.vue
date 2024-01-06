<script lang="ts">
import { defineComponent, inject, onBeforeMount, onMounted, watch } from "vue";
import HeaderComponent from "@/components/header/HeaderComponent.vue";
import BodyComponent from "@/components/body/BodyComponent.vue";
import FooterComponent from "@/components/footer/FooterComponent.vue";
import { IResponsiveService } from "@/common/services/responsive-service.interface";
import { IAutoLogoutService } from "@/common/services/auto-logout-service.interface";
import throttle from "lodash/throttle";
import { IUserService } from "@/common/services/user-service.interface";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "App",
  components: {
    Header: HeaderComponent,
    Body: BodyComponent,
    Footer: FooterComponent,
  },
  setup() {
    const responsiveService = inject<IResponsiveService>("responsiveService");
    const userService = inject<IUserService>("userService");
    const autoLogoutService = inject<IAutoLogoutService>("autoLogoutService");
    const router = useRouter();
    const isAliveThrottled = throttle(onIsAlive, 2000);

    onBeforeMount(() => {
      document.title = "Ecokirchner";
    });

    onMounted(() => responsiveService.init());

    function onIsAlive(): void {
      if (!userService.isSignedIn) {
        return;
      }

      autoLogoutService.resetAutoLogout();
    }

    async function onSignedInChanged(): Promise<void> {
      if (userService.isSignedIn) {
        return;
      }

      await router.push({ name: "Products" });
    }

    watch(() => userService.isSignedIn, onSignedInChanged);

    return { isAliveThrottled };
  },
});
</script>

<template>
  <Header />
  <Body v-on:mousemove="isAliveThrottled" v-on:mousedown="isAliveThrottled" />
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
