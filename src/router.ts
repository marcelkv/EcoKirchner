import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import LogInComponent from "@/components/body/LogInComponent.vue";
import HomeComponent from "@/components/body/HomeComponent.vue";
import ProductsComponent from "@/components/body/ProductsComponent.vue";
import AboutComponent from "@/components/body/AboutComponent.vue";
import ContactComponent from "@/components/body/ContactComponent.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomeComponent,
  },
  {
    path: "/products",
    name: "Products",
    component: ProductsComponent,
  },
  {
    path: "/about",
    name: "About",
    component: AboutComponent,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactComponent,
  },
  {
    path: "/login",
    name: "LogIn",
    component: LogInComponent,
  },
  { path: "/:catchAll(.*)", redirect: "/products" },
];

const router = createRouter({
  history: createWebHashHistory("/eco-kirchner"),
  routes,
});

export default router;
