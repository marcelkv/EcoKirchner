<script lang="ts">
import { inject, onBeforeMount } from "vue";
import { IClientService } from "@/common/client-service.interface";
import { useRouter } from "vue-router";

export default {
  setup() {
    const clientService = inject<IClientService>("clientService");
    const router = useRouter();
    const userName = clientService.userName;
    const userEmail = clientService.userEmail;

    onBeforeMount(async () => {
      if (!clientService.isSignedIn) {
        redirectToSignIn();
      }
    });

    async function onClickSignOut(): Promise<void> {
      await clientService.signOut();
      if (!clientService.isSignedIn) {
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
