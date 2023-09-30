import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import LogInComponent from "@/components/body/LogInComponent.vue";
import HomeComponent from "@/components/body/HomeComponent.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomeComponent,
  },
  {
    path: "/login",
    name: "LogIn",
    component: LogInComponent,
  },
  { path: "/:catchAll(.*)", redirect: "/login" },
];

const router = createRouter({
  history: createWebHashHistory("/eco-kirchner"),
  routes,
});

export default router;
