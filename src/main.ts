import { createApp, reactive } from "vue";
import App from "./App.vue";
import router from "./router";
import { UserService } from "@/common/services/userService";
import { IUserService } from "@/common/services/user-service.interface";
import { MenuService } from "@/common/services/menu-service";
import { IMenuService } from "@/common/services/menu-service.interface";
import { IResponsiveService } from "@/common/services/responsive-service.interface";
import { ResponsiveService } from "@/common/services/responsive-service";
import { IClientService } from "@/common/services/client-service.interface";
import { ClientService } from "@/common/services/client-service";

const app = createApp(App);
const responsiveService: IResponsiveService = new ResponsiveService();
const userService: IUserService = reactive(new UserService());
const menuService: IMenuService = reactive(new MenuService());
const clientService: IClientService = reactive(new ClientService());

app.provide<IResponsiveService>("responsiveService", responsiveService);
app.provide<IUserService>("userService", userService);
app.provide<IMenuService>("menuService", menuService);
app.provide<IClientService>("clientService", clientService);
app.use(router);
app.mount("#app");
