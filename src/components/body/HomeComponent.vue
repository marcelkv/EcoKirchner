<script lang="ts">
import { inject, onBeforeMount } from "vue";
import { IUserService } from "@/common/services/user-service.interface";
import { useRouter } from "vue-router";

export default {
  setup() {
    const userService = inject<IUserService>("userService");
    const router = useRouter();
    const userName = userService.userName;
    const userEmail = userService.userEmail;

    onBeforeMount(async () => {
      await router.push({ name: "Products" });
    });

    async function onClickSignOut(): Promise<void> {
      await userService.signOut();
      if (!userService.isSignedIn) {
        redirectToSignIn();
      }
    }

    function redirectToSignIn(): void {
      router.push({ name: "LogIn" });
    }

    return {
      userName,
      userEmail,
      onClickSignOut,
    };
  },
};
</script>

<template>
  <div class="home">
    <div class="title">Hallo {{ userName }}</div>
    <div class="email">{{ userEmail }}</div>
    <div class="signOut" v-on:click="onClickSignOut">Abmelden</div>
  </div>
</template>

<style scoped lang="less">
.home {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    font-size: 18px;
    font-weight: bold;
    margin: 10px;
  }

  .email {
    font-size: 12px;
  }

  .signOut {
    margin: 40px;
    color: blue;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  @media (max-height: 320px) {
    .signOut {
      display: none;
    }
  }
}
</style>
