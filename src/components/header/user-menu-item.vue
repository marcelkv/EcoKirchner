<script lang="ts">
import { computed, defineComponent, inject, ref } from "vue";
import { useRouter } from "vue-router";
import { fitStringIntoElement } from "@/common/string-helper";
import { IUserService } from "@/common/services/user-service.interface";
import { IMenuService } from "@/common/services/menu-service.interface";
import { IAuthService } from "@/common/services/auth-service.interface";

export default defineComponent({
  setup() {
    const ref_email = ref(null);
    const router = useRouter();
    const authService = inject<IAuthService>("authService");
    const userService = inject<IUserService>("userService");
    const menuService = inject<IMenuService>("menuService");

    const email = computed(() => {
      if (!menuService.isHamburgerOpen || !userService.isSignedIn) {
        return "";
      }

      const emailElement = ref_email.value as HTMLDivElement;
      return fitStringIntoElement(userService.userEmail, emailElement, 10);
    });

    async function onClickSignIn(): Promise<void> {
      await goToLogInPage();
    }

    async function onClickSignOut(): Promise<void> {
      await authService.signOut();
      await goToLogInPage();
    }

    async function goToLogInPage(): Promise<void> {
      await router.push({ name: "LogIn" });
    }

    return {
      ref_email,
      email,
      userService,
      onClickSignOut,
      onClickSignIn,
    };
  },
});
</script>

<template>
  <div class="userMenuItem">
    <div class="userItem item" v-if="userService.isSignedIn">
      <div ref="ref_email" class="email item">{{ email }}</div>
      <div class="signOut item" v-on:click="onClickSignOut">Abmelden</div>
    </div>
    <div class="userItem item" v-else v-on:click="onClickSignIn">
      <div class="email item">Anmelden</div>
    </div>
  </div>
</template>

<style scoped lang="less">
.userMenuItem {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  width: 100%;
  cursor: pointer;

  .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 70px;
  }

  .userItem.item {
    .email {
      font-size: 26px;
    }

    .signOut {
      min-height: 60px;
      color: blue;
      font-size: 20px;
      cursor: pointer;
    }
  }
}
</style>
