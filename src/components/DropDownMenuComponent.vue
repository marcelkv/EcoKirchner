<script lang="ts">
import { computed, defineComponent, inject, ref, watch } from "vue";
import { IClientService } from "@/common/client-service.interface";
import { useRouter } from "vue-router";
import { IMenuService } from "@/common/menu-service.interface";

export default defineComponent({
  setup() {
    const ref_userItem = ref(null);
    const clientService = inject<IClientService>("clientService");
    const menuService = inject<IMenuService>("menuService");
    const router = useRouter();
    const isSignedIn = computed(() => clientService.isSignedIn);
    const email = ref("");

    function onClickCloseMenu(): void {
      menuService.isHamburgerOpen = !menuService.isHamburgerOpen;
    }

    async function onClickSignIn(): Promise<void> {
      await goToLogIn();
    }

    async function onClickSignOut(): Promise<void> {
      await clientService.signOut();
      await goToLogIn();
    }

    async function goToLogIn(): Promise<void> {
      await router.push({ name: "LogIn" });
      menuService.isHamburgerOpen = !menuService.isHamburgerOpen;
    }

    function onHamburgerChanged(): void {
      if (menuService.isHamburgerOpen) {
        window.addEventListener("resize", onResized);
        setEmail();
      } else {
        window.removeEventListener("resize", onResized);
      }
    }

    function onResized(): void {
      menuService.isHamburgerOpen = false;
    }

    function setEmail(): void {
      if (!clientService.isSignedIn) {
        return;
      }

      const originalEmail = clientService.userEmail;

      const numCharacters = calculateCharactersThatFit();
      if (numCharacters >= originalEmail.length) {
        email.value = originalEmail;
      } else {
        email.value = originalEmail.substring(0, numCharacters) + "...";
      }
    }

    function calculateCharactersThatFit() {
      const textContainer = ref_userItem.value as HTMLDivElement;
      const containerWidth = textContainer.offsetWidth;
      const font = window
        .getComputedStyle(textContainer, null)
        .getPropertyValue("font");
      const fontSize = parseFloat(font.split(" ")[0]);
      const averageCharacterWidth = fontSize * 0.6;
      return Math.floor(containerWidth / averageCharacterWidth);
    }

    watch(() => menuService.isHamburgerOpen, onHamburgerChanged);

    return {
      ref_userItem,
      isSignedIn,
      email,
      onClickCloseMenu,
      onClickSignIn,
      onClickSignOut,
    };
  },
});
</script>

<template>
  <div class="dropDownMenu">
    <div class="menuItems item">
      <div class="item" v-on:click="onClickCloseMenu">Produkte</div>
      <div class="item" v-on:click="onClickCloseMenu">Über uns</div>
      <div class="item" v-on:click="onClickCloseMenu">Einkaufswagen</div>
      <div class="item" v-on:click="onClickCloseMenu">Kontakt</div>
    </div>
    <div ref="ref_userItem" class="userItem item" v-if="isSignedIn">
      <div class="email item">{{ email }}</div>
      <div class="signOut item" v-on:click="onClickSignOut">Abmelden</div>
    </div>
    <div class="userItem item" v-else v-on:click="onClickSignIn">
      <div class="email item">Anmelden</div>
    </div>
  </div>
</template>

<style scoped lang="less">
.dropDownMenu {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background-color: lightgray;

  .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 70px;
    font-size: 30px;
  }

  .menuItems.item {
    flex-grow: 1;
    justify-content: flex-start;
  }

  .userItem.item {
    height: auto;

    .email {
      font-size: 26px;
    }

    .signOut {
      height: 60px;
      color: blue;
      font-size: 20px;
    }
  }
}
</style>
