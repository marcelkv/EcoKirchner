import { createApp, reactive } from "vue";
import App from "./App.vue";
import router from "./router";
import { ClientService } from "@/common/clientService";
import { IClientService } from "@/common/client-service.interface";
import { MenuService } from "@/common/menu-service";
import { IMenuService } from "@/common/menu-service.interface";

const app = createApp(App);
const clientService: IClientService = new ClientService();
const menuService: IMenuService = reactive(new MenuService());
app.provide<IClientService>("clientService", clientService);
app.provide<IMenuService>("menuService", menuService);
app.use(router);
app.mount("#app");
