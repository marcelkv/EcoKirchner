import { createApp, reactive } from "vue";
import App from "./App.vue";
import router from "./router";
import { UserService } from "@/common/services/user-service";
import { IUserService } from "@/common/services/user-service.interface";
import { MenuService } from "@/common/services/menu-service";
import { IMenuService } from "@/common/services/menu-service.interface";
import { IResponsiveService } from "@/common/services/responsive-service.interface";
import { ResponsiveService } from "@/common/services/responsive-service";
import { IClientService } from "@/common/services/client-service.interface";
import { ClientService } from "@/common/services/client-service";
import { AuthService } from "@/common/services/auth-service";
import { UserData } from "@/common/models/user-data";
import { IAuthService } from "@/common/services/auth-service.interface";
import { AutoLogoutService } from "@/common/services/auto-logout-service";
import { IAutoLogoutService } from "@/common/services/auto-logout-service.interface";

const AUTO_LOGOUT_TIME_MS = 1000 * 60 * 10;

const app = createApp(App);
const responsiveService: IResponsiveService = new ResponsiveService();
const userService: IUserService = reactive(new UserService());
const menuService: IMenuService = reactive(new MenuService());
const clientService: IClientService = reactive(new ClientService());
const authService = new AuthService(onAuthStateChanged);
const autoLogoutService = new AutoLogoutService(onLogout, AUTO_LOGOUT_TIME_MS);

app.provide<IResponsiveService>("responsiveService", responsiveService);
app.provide<IUserService>("userService", userService);
app.provide<IAuthService>("authService", authService);
app.provide<IAutoLogoutService>("autoLogoutService", autoLogoutService);
app.provide<IMenuService>("menuService", menuService);
app.provide<IClientService>("clientService", clientService);
app.use(router);
app.mount("#app");

function onAuthStateChanged(userData: UserData): void {
  userService.saveUser(userData);
  autoLogoutService.resetAutoLogout();
}

async function onLogout(): Promise<void> {
  await authService.signOut();
}
