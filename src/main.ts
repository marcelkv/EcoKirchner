import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { ClientService } from "@/common/clientService";
import { IClientService } from "@/common/client-service.interface";

const app = createApp(App);
const clientService: IClientService = new ClientService();
app.provide<IClientService>("clientService", clientService);
app.use(router);
app.mount("#app");
