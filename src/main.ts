import { createApp, reactive } from "vue";
import App from "./App.vue";
import router from "./router";
import { ClientService } from "@/common/clientService";
import { IClientService } from "@/common/client-service.interface";
import { MenuService } from "@/common/menu-service";
import { IMenuService } from "@/common/menu-service.interface";
import { IResponsiveService } from "@/common/responsive-service.interface";
import { ResponsiveService } from "@/common/responsive-service";

const app = createApp(App);
const responsiveService: IResponsiveService = new ResponsiveService();
const clientService: IClientService = reactive(new ClientService());
const menuService: IMenuService = reactive(new MenuService());

app.provide<IResponsiveService>("responsiveService", responsiveService);
app.provide<IClientService>("clientService", clientService);
app.provide<IMenuService>("menuService", menuService);
app.use(router);
app.mount("#app");
